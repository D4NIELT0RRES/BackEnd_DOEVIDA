# 🚀 Guia de Deploy do BackEnd DOEVIDA na Azure

## Opções de Hospedagem

### 1️⃣ Azure App Service (Recomendado)
- ✅ Melhor para Node.js/Express
- ✅ CI/CD integrado com GitHub
- ✅ Escalável automaticamente
- ✅ SSL grátis
- ✅ Logging integrado

### 2️⃣ Azure Container Apps
- Para deploy com Docker
- Mais controle sobre o ambiente

### 3️⃣ Azure Functions
- Serverless (pay-per-use)
- Para APIs leves

---

## 🎯 Deploy com Azure App Service (Método Recomendado)

### Pré-requisitos

1. **Conta Azure**
   - Crie em: https://azure.microsoft.com/free/
   - Ganhe $200 de créditos grátis

2. **Azure CLI instalado**
   ```bash
   # macOS
   brew update && brew install azure-cli
   
   # Verificar instalação
   az --version
   ```

3. **Login no Azure**
   ```bash
   az login
   ```

---

## 📦 Método 1: Deploy via Azure CLI (Rápido)

### Passo 1: Preparar o projeto

Certifique-se que seu `package.json` tem o script de start:

```json
{
  "scripts": {
    "start": "node app.js"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}
```

### Passo 2: Criar Resource Group

```bash
# Criar grupo de recursos
az group create \
  --name rg-doevida \
  --location brazilsouth

# Listar localizações disponíveis
az account list-locations --output table
```

### Passo 3: Criar App Service Plan

```bash
# Plano gratuito (para testes)
az appservice plan create \
  --name plan-doevida \
  --resource-group rg-doevida \
  --sku FREE \
  --is-linux

# Plano básico (para produção)
az appservice plan create \
  --name plan-doevida \
  --resource-group rg-doevida \
  --sku B1 \
  --is-linux
```

### Passo 4: Criar Web App

```bash
az webapp create \
  --resource-group rg-doevida \
  --plan plan-doevida \
  --name doevida-backend \
  --runtime "NODE:18-lts"

# NOTA: O nome 'doevida-backend' deve ser único globalmente
# URL será: https://doevida-backend.azurewebsites.net
```

### Passo 5: Configurar Variáveis de Ambiente

```bash
# Configurar variáveis do .env
az webapp config appsettings set \
  --resource-group rg-doevida \
  --name doevida-backend \
  --settings \
    NODE_ENV=production \
    DB_HOST="seu-host-mysql" \
    DB_USER="seu-usuario" \
    DB_PASSWORD="sua-senha" \
    DB_DATABASE="doevida" \
    DB_PORT=3306 \
    JWT_SECRET="seu-jwt-secret" \
    AZURE_STORAGE_ACCOUNT="sua-conta-storage" \
    AZURE_STORAGE_ACCOUNT_KEY="sua-chave" \
    AZURE_STORAGE_CONTAINER="registro-doacoes"
```

### Passo 6: Deploy do Código

```bash
# Fazer deploy via Git local
az webapp deployment source config-local-git \
  --name doevida-backend \
  --resource-group rg-doevida

# Isso retornará uma URL Git, adicione como remote
git remote add azure <URL-retornada>

# Fazer push
git push azure main
```

### Passo 7: Verificar Logs

```bash
# Ver logs em tempo real
az webapp log tail \
  --name doevida-backend \
  --resource-group rg-doevida

# Habilitar logging
az webapp log config \
  --name doevida-backend \
  --resource-group rg-doevida \
  --application-logging filesystem \
  --level information
```

---

## 🔄 Método 2: Deploy via GitHub Actions (CI/CD Automático)

### Passo 1: Criar Web App (mesmo dos passos anteriores)

### Passo 2: Obter credenciais de publicação

```bash
az webapp deployment list-publishing-credentials \
  --name doevida-backend \
  --resource-group rg-doevida \
  --query "{username:publishingUserName, password:publishingPassword}" \
  --output json
```

### Passo 3: Configurar GitHub Actions

Criar arquivo `.github/workflows/azure-deploy.yml`:

```yaml
name: Deploy to Azure App Service

on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests (se tiver)
      run: npm test --if-present
    
    - name: Deploy to Azure Web App
      uses: azure/webapps-deploy@v2
      with:
        app-name: 'doevida-backend'
        publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}
        package: .

env:
  NODE_ENV: production
```

### Passo 4: Adicionar Secrets no GitHub

1. Obter publish profile:
   ```bash
   az webapp deployment list-publishing-profiles \
     --name doevida-backend \
     --resource-group rg-doevida \
     --xml
   ```

2. No GitHub:
   - Ir em: Settings → Secrets → Actions
   - Criar secret: `AZURE_WEBAPP_PUBLISH_PROFILE`
   - Colar o XML obtido

---

## 🗄️ Configurar Banco de Dados MySQL na Azure

### Opção 1: Azure Database for MySQL

```bash
# Criar servidor MySQL
az mysql flexible-server create \
  --resource-group rg-doevida \
  --name doevida-mysql \
  --location brazilsouth \
  --admin-user adminuser \
  --admin-password 'SuaSenhaForte123!' \
  --sku-name Standard_B1ms \
  --tier Burstable \
  --storage-size 32 \
  --version 8.0.21

# Configurar firewall (permitir Azure Services)
az mysql flexible-server firewall-rule create \
  --resource-group rg-doevida \
  --name doevida-mysql \
  --rule-name AllowAzureServices \
  --start-ip-address 0.0.0.0 \
  --end-ip-address 0.0.0.0

# Criar banco de dados
az mysql flexible-server db create \
  --resource-group rg-doevida \
  --server-name doevida-mysql \
  --database-name doevida
```

### Passo 5: Atualizar variáveis de ambiente

```bash
az webapp config appsettings set \
  --resource-group rg-doevida \
  --name doevida-backend \
  --settings \
    DB_HOST="doevida-mysql.mysql.database.azure.com" \
    DB_USER="adminuser" \
    DB_PASSWORD="SuaSenhaForte123!" \
    DB_DATABASE="doevida" \
    DB_PORT=3306
```

---

## 📦 Azure Storage para Upload de Arquivos

### Criar Storage Account

```bash
# Criar storage account
az storage account create \
  --name doevidastorage \
  --resource-group rg-doevida \
  --location brazilsouth \
  --sku Standard_LRS \
  --kind StorageV2

# Criar container para imagens
az storage container create \
  --name registro-doacoes \
  --account-name doevidastorage \
  --public-access blob

# Obter chave de acesso
az storage account keys list \
  --resource-group rg-doevida \
  --account-name doevidastorage \
  --query "[0].value" \
  --output tsv

# Gerar SAS token (use o script generate_sas.sh)
export AZURE_STORAGE_ACCOUNT="doevidastorage"
export AZURE_STORAGE_ACCOUNT_KEY="<chave-obtida>"
./generate_sas.sh --container registro-doacoes --expiry 2026-12-31T23:59:59Z
```

---

## 🔒 Configurações de Segurança

### CORS

```bash
az webapp cors add \
  --resource-group rg-doevida \
  --name doevida-backend \
  --allowed-origins "https://seu-frontend.com" "http://localhost:3000"
```

### HTTPS Only

```bash
az webapp update \
  --resource-group rg-doevida \
  --name doevida-backend \
  --https-only true
```

### Custom Domain e SSL

```bash
# Adicionar domínio customizado
az webapp config hostname add \
  --webapp-name doevida-backend \
  --resource-group rg-doevida \
  --hostname api.doevida.com.br

# SSL gratuito (Let's Encrypt via Azure)
az webapp config ssl bind \
  --name doevida-backend \
  --resource-group rg-doevida \
  --certificate-thumbprint auto \
  --ssl-type SNI
```

---

## 📊 Monitoramento e Logs

### Application Insights

```bash
# Criar Application Insights
az monitor app-insights component create \
  --app doevida-insights \
  --location brazilsouth \
  --resource-group rg-doevida \
  --application-type Node.JS

# Obter instrumentation key
az monitor app-insights component show \
  --app doevida-insights \
  --resource-group rg-doevida \
  --query instrumentationKey \
  --output tsv

# Adicionar ao Web App
az webapp config appsettings set \
  --resource-group rg-doevida \
  --name doevida-backend \
  --settings APPINSIGHTS_INSTRUMENTATIONKEY="<key>"
```

### Ver Logs

```bash
# Stream de logs
az webapp log tail --name doevida-backend --resource-group rg-doevida

# Download de logs
az webapp log download --name doevida-backend --resource-group rg-doevida
```

---

## 🔄 Escalar a Aplicação

### Escala Vertical (mais recursos)

```bash
az appservice plan update \
  --name plan-doevida \
  --resource-group rg-doevida \
  --sku S1
```

### Escala Horizontal (mais instâncias)

```bash
az appservice plan update \
  --name plan-doevida \
  --resource-group rg-doevida \
  --number-of-workers 3
```

### Auto-scaling

```bash
az monitor autoscale create \
  --resource-group rg-doevida \
  --resource doevida-backend \
  --resource-type Microsoft.Web/sites \
  --name autoscale-doevida \
  --min-count 1 \
  --max-count 5 \
  --count 2

# Regra: aumentar quando CPU > 70%
az monitor autoscale rule create \
  --resource-group rg-doevida \
  --autoscale-name autoscale-doevida \
  --condition "Percentage CPU > 70 avg 5m" \
  --scale out 1
```

---

## 🐳 Método 3: Deploy com Docker (Alternativo)

### Passo 1: Criar Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

### Passo 2: Build e Push para Azure Container Registry

```bash
# Criar Container Registry
az acr create \
  --resource-group rg-doevida \
  --name doevidaacr \
  --sku Basic

# Login
az acr login --name doevidaacr

# Build e push
az acr build \
  --registry doevidaacr \
  --image doevida-backend:latest \
  .
```

### Passo 3: Deploy Container

```bash
az webapp create \
  --resource-group rg-doevida \
  --plan plan-doevida \
  --name doevida-backend \
  --deployment-container-image-name doevidaacr.azurecr.io/doevida-backend:latest
```

---

## 💰 Estimativa de Custos

### Tier Gratuito (F1)
- **Custo**: Grátis
- **Limitações**: 60 min/dia de CPU, 1 GB RAM, 1 GB storage
- **Uso**: Testes e desenvolvimento

### Basic (B1)
- **Custo**: ~R$ 60/mês
- **Recursos**: 1.75 GB RAM, 10 GB storage
- **Uso**: Aplicações pequenas

### Standard (S1)
- **Custo**: ~R$ 350/mês
- **Recursos**: 1.75 GB RAM, 50 GB storage, auto-scaling
- **Uso**: Produção

### MySQL Flexible Server
- **Tier Burstable**: ~R$ 150/mês
- **Tier General Purpose**: ~R$ 500+/mês

### Storage Account
- **LRS**: ~R$ 0.10/GB/mês
- **Transferência**: Primeiros 5GB grátis

---

## ✅ Checklist Final

- [ ] Azure CLI instalado e logado
- [ ] Resource Group criado
- [ ] App Service Plan criado
- [ ] Web App criada e configurada
- [ ] Variáveis de ambiente configuradas
- [ ] Banco de dados MySQL criado e conectado
- [ ] Storage Account criado
- [ ] CORS configurado
- [ ] HTTPS habilitado
- [ ] Logs habilitados
- [ ] Deploy realizado
- [ ] Testes de endpoints funcionando
- [ ] Monitoramento configurado

---

## 🆘 Troubleshooting

### Erro de Deploy

```bash
# Reiniciar app
az webapp restart --name doevida-backend --resource-group rg-doevida

# Ver logs detalhados
az webapp log tail --name doevida-backend --resource-group rg-doevida
```

### Erro de Conexão com MySQL

```bash
# Testar conexão
az mysql flexible-server connect \
  --name doevida-mysql \
  --admin-user adminuser \
  --admin-password 'SuaSenhaForte123!'

# Verificar firewall
az mysql flexible-server firewall-rule list \
  --resource-group rg-doevida \
  --name doevida-mysql
```

### Aplicação não responde

```bash
# Ver status
az webapp show \
  --name doevida-backend \
  --resource-group rg-doevida \
  --query state

# Ver uso de recursos
az monitor metrics list \
  --resource doevida-backend \
  --resource-group rg-doevida \
  --resource-type Microsoft.Web/sites \
  --metric "CpuPercentage"
```

---

## 📚 Recursos Úteis

- [Documentação Azure App Service](https://docs.microsoft.com/azure/app-service/)
- [Preços Azure](https://azure.microsoft.com/pricing/calculator/)
- [Azure CLI Reference](https://docs.microsoft.com/cli/azure/)
- [Node.js no Azure](https://docs.microsoft.com/azure/app-service/quickstart-nodejs)

---

## 🎯 Próximos Passos

1. ✅ Deploy inicial no tier gratuito
2. ✅ Testar todos os endpoints
3. ✅ Configurar CI/CD com GitHub Actions
4. ✅ Migrar para tier pago quando necessário
5. ✅ Configurar domínio customizado
6. ✅ Implementar monitoramento com Application Insights
7. ✅ Configurar backups automáticos

Boa sorte com o deploy! 🚀🩸
