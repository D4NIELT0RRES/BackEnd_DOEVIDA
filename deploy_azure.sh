#!/bin/bash

###############################################################################
# Script: deploy_azure.sh
# Descrição: Automatiza o deploy do BackEnd DOEVIDA na Azure
# Uso: ./deploy_azure.sh
###############################################################################

set -euo pipefail

# Cores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

print_error() { echo -e "${RED}[ERRO]${NC} $1" >&2; }
print_success() { echo -e "${GREEN}[✓]${NC} $1"; }
print_warning() { echo -e "${YELLOW}[!]${NC} $1"; }
print_info() { echo -e "${BLUE}[i]${NC} $1"; }

###############################################################################
# Configurações
###############################################################################

RESOURCE_GROUP="rg-doevida"
LOCATION="brazilsouth"
APP_SERVICE_PLAN="plan-doevida"
WEB_APP_NAME="doevida-backend"
MYSQL_SERVER="doevida-mysql"
MYSQL_ADMIN_USER="adminuser"
STORAGE_ACCOUNT="doevidastorage"
STORAGE_CONTAINER="registro-doacoes"

###############################################################################
# Verificações iniciais
###############################################################################

echo ""
echo "======================================================================="
echo "  🩸 Deploy BackEnd DOEVIDA na Azure"
echo "======================================================================="
echo ""

# Verificar Azure CLI
if ! command -v az &> /dev/null; then
    print_error "Azure CLI não está instalado."
    echo "Instale com: brew install azure-cli"
    exit 1
fi
print_success "Azure CLI instalado"

# Verificar login
if ! az account show &> /dev/null; then
    print_error "Você não está logado no Azure."
    echo "Execute: az login"
    exit 1
fi
print_success "Login Azure verificado"

# Mostrar conta atual
ACCOUNT_NAME=$(az account show --query "name" -o tsv)
print_info "Conta Azure: $ACCOUNT_NAME"

###############################################################################
# Menu de opções
###############################################################################

echo ""
echo "Escolha uma opção:"
echo "1) Deploy completo (primeira vez)"
echo "2) Deploy apenas do código (atualização)"
echo "3) Configurar variáveis de ambiente"
echo "4) Ver logs da aplicação"
echo "5) Criar banco de dados MySQL"
echo "6) Criar Storage Account"
echo "7) Deletar recursos (cleanup)"
echo "8) Ver status da aplicação"
echo "0) Sair"
echo ""
read -p "Opção: " option

case $option in

###############################################################################
# 1) Deploy completo
###############################################################################
1)
    echo ""
    print_info "Iniciando deploy completo..."
    
    # Confirmar nome único
    echo ""
    print_warning "O nome do Web App deve ser único globalmente."
    read -p "Nome do Web App [${WEB_APP_NAME}]: " input_name
    WEB_APP_NAME=${input_name:-$WEB_APP_NAME}
    
    # Confirmar SKU
    echo ""
    echo "Escolha o plano de serviço:"
    echo "1) FREE (Grátis - para testes)"
    echo "2) B1 (Basic - ~R$ 60/mês)"
    echo "3) S1 (Standard - ~R$ 350/mês)"
    read -p "Opção [1]: " sku_option
    sku_option=${sku_option:-1}
    
    case $sku_option in
        1) SKU="FREE" ;;
        2) SKU="B1" ;;
        3) SKU="S1" ;;
        *) SKU="FREE" ;;
    esac
    
    echo ""
    print_info "Criando Resource Group..."
    az group create \
        --name "$RESOURCE_GROUP" \
        --location "$LOCATION" \
        --output none
    print_success "Resource Group criado"
    
    echo ""
    print_info "Criando App Service Plan ($SKU)..."
    az appservice plan create \
        --name "$APP_SERVICE_PLAN" \
        --resource-group "$RESOURCE_GROUP" \
        --sku "$SKU" \
        --is-linux \
        --output none
    print_success "App Service Plan criado"
    
    echo ""
    print_info "Criando Web App..."
    az webapp create \
        --resource-group "$RESOURCE_GROUP" \
        --plan "$APP_SERVICE_PLAN" \
        --name "$WEB_APP_NAME" \
        --runtime "NODE:18-lts" \
        --output none
    print_success "Web App criado"
    
    echo ""
    print_info "Configurando HTTPS only..."
    az webapp update \
        --resource-group "$RESOURCE_GROUP" \
        --name "$WEB_APP_NAME" \
        --https-only true \
        --output none
    print_success "HTTPS configurado"
    
    echo ""
    print_info "Habilitando logs..."
    az webapp log config \
        --name "$WEB_APP_NAME" \
        --resource-group "$RESOURCE_GROUP" \
        --application-logging filesystem \
        --level information \
        --output none
    print_success "Logs habilitados"
    
    echo ""
    print_info "Configurando deployment local Git..."
    GIT_URL=$(az webapp deployment source config-local-git \
        --name "$WEB_APP_NAME" \
        --resource-group "$RESOURCE_GROUP" \
        --query url \
        --output tsv)
    
    print_success "Deployment configurado"
    echo ""
    echo "======================================================================="
    echo "Para fazer deploy do código:"
    echo "======================================================================="
    echo "1. Adicione o remote do Azure:"
    echo "   git remote add azure $GIT_URL"
    echo ""
    echo "2. Faça push para o Azure:"
    echo "   git push azure main"
    echo ""
    echo "3. Acesse sua aplicação em:"
    echo "   https://${WEB_APP_NAME}.azurewebsites.net"
    echo "======================================================================="
    ;;

###############################################################################
# 2) Deploy do código
###############################################################################
2)
    echo ""
    print_info "Fazendo deploy do código..."
    
    # Verificar se existe remote azure
    if ! git remote get-url azure &> /dev/null; then
        print_warning "Remote 'azure' não encontrado."
        
        # Obter URL de deployment
        GIT_URL=$(az webapp deployment source config-local-git \
            --name "$WEB_APP_NAME" \
            --resource-group "$RESOURCE_GROUP" \
            --query url \
            --output tsv)
        
        print_info "Adicionando remote azure..."
        git remote add azure "$GIT_URL"
        print_success "Remote adicionado"
    fi
    
    # Verificar branch atual
    CURRENT_BRANCH=$(git branch --show-current)
    print_info "Branch atual: $CURRENT_BRANCH"
    
    echo ""
    read -p "Fazer push de '$CURRENT_BRANCH' para Azure? [S/n]: " confirm
    confirm=${confirm:-S}
    
    if [[ "$confirm" =~ ^[Ss]$ ]]; then
        print_info "Fazendo push para Azure..."
        git push azure "$CURRENT_BRANCH:main"
        print_success "Deploy concluído!"
        
        echo ""
        print_info "Aguarde alguns segundos para a aplicação reiniciar..."
        sleep 10
        
        echo ""
        echo "Acesse: https://${WEB_APP_NAME}.azurewebsites.net"
    else
        print_warning "Deploy cancelado"
    fi
    ;;

###############################################################################
# 3) Configurar variáveis de ambiente
###############################################################################
3)
    echo ""
    print_info "Configurando variáveis de ambiente..."
    echo ""
    
    # Ler .env se existir
    if [[ -f .env ]]; then
        print_info "Arquivo .env encontrado. Deseja usar estes valores? [S/n]"
        read -p "> " use_env
        use_env=${use_env:-S}
        
        if [[ "$use_env" =~ ^[Ss]$ ]]; then
            source .env
        fi
    fi
    
    # Coletar variáveis
    read -p "DB_HOST [${DB_HOST:-localhost}]: " db_host
    DB_HOST=${db_host:-${DB_HOST:-localhost}}
    
    read -p "DB_USER [${DB_USER:-root}]: " db_user
    DB_USER=${db_user:-${DB_USER:-root}}
    
    read -sp "DB_PASSWORD: " db_password
    echo ""
    DB_PASSWORD=${db_password:-${DB_PASSWORD}}
    
    read -p "DB_DATABASE [${DB_DATABASE:-doevida}]: " db_database
    DB_DATABASE=${db_database:-${DB_DATABASE:-doevida}}
    
    read -p "DB_PORT [${DB_PORT:-3306}]: " db_port
    DB_PORT=${db_port:-${DB_PORT:-3306}}
    
    read -sp "JWT_SECRET: " jwt_secret
    echo ""
    JWT_SECRET=${jwt_secret:-${JWT_SECRET}}
    
    read -p "AZURE_STORAGE_ACCOUNT [${AZURE_STORAGE_ACCOUNT:-}]: " storage_account
    AZURE_STORAGE_ACCOUNT=${storage_account:-${AZURE_STORAGE_ACCOUNT:-}}
    
    read -sp "AZURE_STORAGE_ACCOUNT_KEY [pressione Enter se já configurado]: " storage_key
    echo ""
    AZURE_STORAGE_ACCOUNT_KEY=${storage_key:-${AZURE_STORAGE_ACCOUNT_KEY:-}}
    
    read -p "AZURE_STORAGE_CONTAINER [${AZURE_STORAGE_CONTAINER:-registro-doacoes}]: " container
    AZURE_STORAGE_CONTAINER=${container:-${AZURE_STORAGE_CONTAINER:-registro-doacoes}}
    
    echo ""
    print_info "Aplicando configurações..."
    
    az webapp config appsettings set \
        --resource-group "$RESOURCE_GROUP" \
        --name "$WEB_APP_NAME" \
        --settings \
            NODE_ENV=production \
            DB_HOST="$DB_HOST" \
            DB_USER="$DB_USER" \
            DB_PASSWORD="$DB_PASSWORD" \
            DB_DATABASE="$DB_DATABASE" \
            DB_PORT="$DB_PORT" \
            JWT_SECRET="$JWT_SECRET" \
            AZURE_STORAGE_ACCOUNT="$AZURE_STORAGE_ACCOUNT" \
            AZURE_STORAGE_ACCOUNT_KEY="$AZURE_STORAGE_ACCOUNT_KEY" \
            AZURE_STORAGE_CONTAINER="$AZURE_STORAGE_CONTAINER" \
        --output none
    
    print_success "Variáveis de ambiente configuradas!"
    
    echo ""
    print_info "Reiniciando aplicação..."
    az webapp restart \
        --name "$WEB_APP_NAME" \
        --resource-group "$RESOURCE_GROUP" \
        --output none
    print_success "Aplicação reiniciada"
    ;;

###############################################################################
# 4) Ver logs
###############################################################################
4)
    echo ""
    print_info "Exibindo logs em tempo real..."
    print_warning "Pressione Ctrl+C para sair"
    echo ""
    az webapp log tail \
        --name "$WEB_APP_NAME" \
        --resource-group "$RESOURCE_GROUP"
    ;;

###############################################################################
# 5) Criar MySQL
###############################################################################
5)
    echo ""
    print_info "Criando servidor MySQL..."
    
    read -p "Nome do servidor [$MYSQL_SERVER]: " mysql_name
    MYSQL_SERVER=${mysql_name:-$MYSQL_SERVER}
    
    read -p "Usuário admin [$MYSQL_ADMIN_USER]: " mysql_user
    MYSQL_ADMIN_USER=${mysql_user:-$MYSQL_ADMIN_USER}
    
    read -sp "Senha admin (min 8 chars): " mysql_password
    echo ""
    
    print_info "Criando servidor MySQL flexible..."
    az mysql flexible-server create \
        --resource-group "$RESOURCE_GROUP" \
        --name "$MYSQL_SERVER" \
        --location "$LOCATION" \
        --admin-user "$MYSQL_ADMIN_USER" \
        --admin-password "$mysql_password" \
        --sku-name Standard_B1ms \
        --tier Burstable \
        --storage-size 32 \
        --version 8.0.21 \
        --yes
    
    print_success "Servidor MySQL criado"
    
    echo ""
    print_info "Configurando firewall..."
    az mysql flexible-server firewall-rule create \
        --resource-group "$RESOURCE_GROUP" \
        --name "$MYSQL_SERVER" \
        --rule-name AllowAzureServices \
        --start-ip-address 0.0.0.0 \
        --end-ip-address 0.0.0.0
    
    print_success "Firewall configurado"
    
    echo ""
    print_info "Criando banco de dados 'doevida'..."
    az mysql flexible-server db create \
        --resource-group "$RESOURCE_GROUP" \
        --server-name "$MYSQL_SERVER" \
        --database-name doevida
    
    print_success "Banco de dados criado"
    
    echo ""
    echo "======================================================================="
    echo "Configurações do MySQL:"
    echo "======================================================================="
    echo "Host: ${MYSQL_SERVER}.mysql.database.azure.com"
    echo "User: $MYSQL_ADMIN_USER"
    echo "Database: doevida"
    echo "Port: 3306"
    echo "======================================================================="
    echo ""
    print_warning "Configure estas variáveis no Web App (opção 3 do menu)"
    ;;

###############################################################################
# 6) Criar Storage
###############################################################################
6)
    echo ""
    print_info "Criando Storage Account..."
    
    read -p "Nome da storage account [$STORAGE_ACCOUNT]: " storage_name
    STORAGE_ACCOUNT=${storage_name:-$STORAGE_ACCOUNT}
    
    az storage account create \
        --name "$STORAGE_ACCOUNT" \
        --resource-group "$RESOURCE_GROUP" \
        --location "$LOCATION" \
        --sku Standard_LRS \
        --kind StorageV2
    
    print_success "Storage Account criada"
    
    echo ""
    print_info "Criando container '$STORAGE_CONTAINER'..."
    az storage container create \
        --name "$STORAGE_CONTAINER" \
        --account-name "$STORAGE_ACCOUNT" \
        --public-access blob
    
    print_success "Container criado"
    
    echo ""
    print_info "Obtendo chave de acesso..."
    STORAGE_KEY=$(az storage account keys list \
        --resource-group "$RESOURCE_GROUP" \
        --account-name "$STORAGE_ACCOUNT" \
        --query "[0].value" \
        --output tsv)
    
    echo ""
    echo "======================================================================="
    echo "Configurações do Storage:"
    echo "======================================================================="
    echo "Account: $STORAGE_ACCOUNT"
    echo "Container: $STORAGE_CONTAINER"
    echo "Key: $STORAGE_KEY"
    echo "======================================================================="
    echo ""
    print_warning "Configure estas variáveis no Web App (opção 3 do menu)"
    print_warning "Use o script generate_sas.sh para gerar tokens SAS"
    ;;

###############################################################################
# 7) Deletar recursos
###############################################################################
7)
    echo ""
    print_warning "ATENÇÃO: Isso vai deletar TODOS os recursos do Azure!"
    read -p "Tem certeza? Digite 'DELETAR' para confirmar: " confirm
    
    if [[ "$confirm" == "DELETAR" ]]; then
        print_info "Deletando resource group..."
        az group delete \
            --name "$RESOURCE_GROUP" \
            --yes \
            --no-wait
        print_success "Deleção iniciada (processo em background)"
    else
        print_warning "Operação cancelada"
    fi
    ;;

###############################################################################
# 8) Ver status
###############################################################################
8)
    echo ""
    print_info "Status da aplicação:"
    echo ""
    
    STATE=$(az webapp show \
        --name "$WEB_APP_NAME" \
        --resource-group "$RESOURCE_GROUP" \
        --query state \
        --output tsv)
    
    URL=$(az webapp show \
        --name "$WEB_APP_NAME" \
        --resource-group "$RESOURCE_GROUP" \
        --query defaultHostName \
        --output tsv)
    
    echo "Estado: $STATE"
    echo "URL: https://$URL"
    echo ""
    
    print_info "Testando endpoint..."
    if curl -s -o /dev/null -w "%{http_code}" "https://$URL" | grep -q "200\|301\|302"; then
        print_success "Aplicação está respondendo!"
    else
        print_error "Aplicação não está respondendo"
    fi
    ;;

###############################################################################
# 0) Sair
###############################################################################
0)
    echo ""
    print_info "Saindo..."
    exit 0
    ;;

*)
    print_error "Opção inválida"
    exit 1
    ;;

esac

echo ""
print_success "Operação concluída!"
echo ""
