#!/bin/bash

###############################################################################
# Script: generate_sas.sh
# Descrição: Gera um SAS Token para um container no Azure Storage
# Uso: ./generate_sas.sh --container NOME --expiry DATA [--permissions PERMS] [--start DATA]
###############################################################################

set -euo pipefail  # Abortar em erro, variáveis não definidas e erros em pipes

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

###############################################################################
# Função: print_error
# Descrição: Imprime mensagem de erro em vermelho
###############################################################################
print_error() {
    echo -e "${RED}[ERRO]${NC} $1" >&2
}

###############################################################################
# Função: print_success
# Descrição: Imprime mensagem de sucesso em verde
###############################################################################
print_success() {
    echo -e "${GREEN}[SUCESSO]${NC} $1"
}

###############################################################################
# Função: print_warning
# Descrição: Imprime mensagem de aviso em amarelo
###############################################################################
print_warning() {
    echo -e "${YELLOW}[AVISO]${NC} $1"
}

###############################################################################
# Função: print_usage
# Descrição: Exibe instruções de uso do script
###############################################################################
print_usage() {
    cat << EOF
Uso: $0 --container NOME --expiry DATA [OPÇÕES]

Gera um SAS Token para um container no Azure Storage.

Parâmetros obrigatórios:
  --container NOME      Nome do container no Azure Storage
  --expiry DATA         Data/hora de expiração (formato ISO 8601 UTC)
                        Exemplo: 2025-12-31T23:59:59Z

Parâmetros opcionais:
  --permissions PERMS   Permissões do SAS token (padrão: racw)
                        r=read, a=add, c=create, w=write, d=delete, l=list
  --start DATA          Data/hora de início (formato ISO 8601 UTC)
                        Se omitido, usa hora atual menos 5 minutos

Variáveis de ambiente necessárias:
  AZURE_STORAGE_ACCOUNT      Nome da conta de storage do Azure
  AZURE_STORAGE_ACCOUNT_KEY  Chave de acesso da conta (opcional se usar --auth-mode login)

Exemplos:
  # SAS token válido por 7 dias com permissões padrão (racw)
  $0 --container meu-container --expiry 2025-11-19T23:59:59Z

  # SAS token com permissões específicas (apenas leitura e listagem)
  $0 --container meu-container --expiry 2025-11-19T23:59:59Z --permissions rl

  # SAS token com data de início específica
  $0 --container meu-container --start 2025-11-12T00:00:00Z --expiry 2025-11-19T23:59:59Z

EOF
}

###############################################################################
# Função: check_azure_cli
# Descrição: Verifica se Azure CLI está instalado e usuário está logado
###############################################################################
check_azure_cli() {
    # Verificar se az está instalado
    if ! command -v az &> /dev/null; then
        print_error "Azure CLI (az) não está instalado."
        echo "Instale em: https://docs.microsoft.com/cli/azure/install-azure-cli"
        exit 1
    fi

    # Verificar se usuário está logado
    if ! az account show &> /dev/null; then
        print_error "Você não está logado no Azure CLI."
        echo "Execute: az login"
        exit 1
    fi

    print_success "Azure CLI verificado com sucesso."
}

###############################################################################
# Função: validate_iso8601
# Descrição: Valida se a data está no formato ISO 8601
###############################################################################
validate_iso8601() {
    local date_string="$1"
    local param_name="$2"
    
    # Validação básica de formato ISO 8601 com UTC (Z no final)
    if [[ ! "$date_string" =~ ^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}Z$ ]]; then
        print_error "Formato de data inválido para $param_name: $date_string"
        echo "Use formato ISO 8601 UTC: YYYY-MM-DDTHH:MM:SSZ"
        echo "Exemplo: 2025-12-31T23:59:59Z"
        exit 1
    fi
    
    # Tentar converter a data para validar se é uma data válida
    if ! date -u -j -f "%Y-%m-%dT%H:%M:%SZ" "$date_string" "+%s" &> /dev/null; then
        print_error "Data inválida para $param_name: $date_string"
        exit 1
    fi
}

###############################################################################
# Função: get_current_time_minus_5min
# Descrição: Retorna a data/hora atual menos 5 minutos em formato ISO 8601 UTC
###############################################################################
get_current_time_minus_5min() {
    # macOS usa date diferente do Linux
    if [[ "$OSTYPE" == "darwin"* ]]; then
        date -u -v-5M "+%Y-%m-%dT%H:%M:%SZ"
    else
        date -u -d "5 minutes ago" "+%Y-%m-%dT%H:%M:%SZ"
    fi
}

###############################################################################
# MAIN - Início do script
###############################################################################

# Variáveis padrão
CONTAINER=""
PERMISSIONS="racw"
START=""
EXPIRY=""

# Parse de argumentos da linha de comando
while [[ $# -gt 0 ]]; do
    case $1 in
        --container)
            CONTAINER="$2"
            shift 2
            ;;
        --permissions)
            PERMISSIONS="$2"
            shift 2
            ;;
        --start)
            START="$2"
            shift 2
            ;;
        --expiry)
            EXPIRY="$2"
            shift 2
            ;;
        -h|--help)
            print_usage
            exit 0
            ;;
        *)
            print_error "Argumento desconhecido: $1"
            print_usage
            exit 1
            ;;
    esac
done

# Validar parâmetros obrigatórios
if [[ -z "$CONTAINER" ]]; then
    print_error "Parâmetro --container é obrigatório."
    print_usage
    exit 1
fi

if [[ -z "$EXPIRY" ]]; then
    print_error "Parâmetro --expiry é obrigatório."
    print_usage
    exit 1
fi

# Verificar Azure CLI
check_azure_cli

# Verificar variáveis de ambiente
if [[ -z "${AZURE_STORAGE_ACCOUNT:-}" ]]; then
    print_error "Variável de ambiente AZURE_STORAGE_ACCOUNT não está definida."
    echo "Defina com: export AZURE_STORAGE_ACCOUNT=nome_da_conta"
    exit 1
fi

print_success "AZURE_STORAGE_ACCOUNT: $AZURE_STORAGE_ACCOUNT"

# Verificar se AZURE_STORAGE_ACCOUNT_KEY está definida
AUTH_MODE="key"
if [[ -z "${AZURE_STORAGE_ACCOUNT_KEY:-}" ]]; then
    print_warning "AZURE_STORAGE_ACCOUNT_KEY não está definida."
    print_warning "Tentando usar --auth-mode login (requer permissões RBAC adequadas)."
    AUTH_MODE="login"
fi

# Validar formato de data de expiração
validate_iso8601 "$EXPIRY" "--expiry"

# Se start não foi fornecido, usar hora atual menos 5 minutos
if [[ -z "$START" ]]; then
    START=$(get_current_time_minus_5min)
    print_warning "Data de início não fornecida. Usando: $START (agora - 5 minutos)"
else
    validate_iso8601 "$START" "--start"
fi

# Validar permissões
if [[ ! "$PERMISSIONS" =~ ^[racwdl]+$ ]]; then
    print_error "Permissões inválidas: $PERMISSIONS"
    echo "Use combinação de: r(read), a(add), c(create), w(write), d(delete), l(list)"
    exit 1
fi

echo ""
echo "==================================================================="
echo "Gerando SAS Token com os seguintes parâmetros:"
echo "==================================================================="
echo "Storage Account: $AZURE_STORAGE_ACCOUNT"
echo "Container:       $CONTAINER"
echo "Permissões:      $PERMISSIONS"
echo "Início:          $START"
echo "Expiração:       $EXPIRY"
echo "Modo de Auth:    $AUTH_MODE"
echo "==================================================================="
echo ""

# Gerar SAS Token
SAS_TOKEN=""

if [[ "$AUTH_MODE" == "key" ]]; then
    # Usar chave de acesso
    SAS_TOKEN=$(az storage container generate-sas \
        --account-name "$AZURE_STORAGE_ACCOUNT" \
        --account-key "$AZURE_STORAGE_ACCOUNT_KEY" \
        --name "$CONTAINER" \
        --permissions "$PERMISSIONS" \
        --start "$START" \
        --expiry "$EXPIRY" \
        --https-only \
        --output tsv 2>&1)
else
    # Usar autenticação baseada em login (RBAC)
    SAS_TOKEN=$(az storage container generate-sas \
        --account-name "$AZURE_STORAGE_ACCOUNT" \
        --auth-mode login \
        --as-user \
        --name "$CONTAINER" \
        --permissions "$PERMISSIONS" \
        --start "$START" \
        --expiry "$EXPIRY" \
        --https-only \
        --output tsv 2>&1)
fi

# Verificar se houve erro na geração
if [[ $? -ne 0 ]]; then
    print_error "Falha ao gerar SAS Token."
    echo "Detalhes do erro:"
    echo "$SAS_TOKEN"
    exit 1
fi

# Remover possíveis quebras de linha ou espaços extras
SAS_TOKEN=$(echo "$SAS_TOKEN" | tr -d '\n' | xargs)

# Validar se o token foi gerado
if [[ -z "$SAS_TOKEN" ]]; then
    print_error "SAS Token vazio. Verifique as permissões e configurações."
    exit 1
fi

# Construir URL completa
BLOB_URL="https://${AZURE_STORAGE_ACCOUNT}.blob.core.windows.net/${CONTAINER}?${SAS_TOKEN}"

# Exibir resultado
echo ""
print_success "SAS Token gerado com sucesso!"
echo ""
echo "==================================================================="
echo "SAS TOKEN:"
echo "==================================================================="
echo "$SAS_TOKEN"
echo ""
echo "==================================================================="
echo "BLOB SAS URL COMPLETA:"
echo "==================================================================="
echo "$BLOB_URL"
echo ""
echo "==================================================================="
echo "Validade: $START até $EXPIRY"
echo "==================================================================="
echo ""

# Instruções de uso
echo "Para usar este SAS token:"
echo "1. Anexe o token às suas URLs de blob:"
echo "   https://${AZURE_STORAGE_ACCOUNT}.blob.core.windows.net/${CONTAINER}/seu-arquivo.jpg?${SAS_TOKEN}"
echo ""
echo "2. Ou use nas bibliotecas do Azure SDK com BlobServiceClient ou ContainerClient"
echo ""

exit 0
