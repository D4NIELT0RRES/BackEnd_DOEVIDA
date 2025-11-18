# 🚀 Configuração Azure App Service - BackEnd DOEVIDA

## ✅ Alterações Aplicadas no Código

1. ✅ **prisma/schema.prisma**: Binary target corrigido para `debian-openssl-3.0.x`
2. ✅ **package.json**: Scripts `build` e `postinstall` adicionados
3. ✅ **Todos os DAOs**: Imports alterados de `../../prisma/generated/client` para `@prisma/client`
4. ✅ **startup.sh**: Removido (Azure usa processo padrão)
5. ✅ **.gitignore**: Atualizado para ignorar arquivos desnecessários

---

## 🔧 Configurações no Portal Azure

### 1. Configuration > General Settings

```
Stack: Node
Major Version: 20 LTS
Minor Version: 20 LTS
Startup Command: [DEIXE VAZIO - não preencher]
```

### 2. Configuration > Application Settings

Adicione/verifique estas variáveis:

```
NODE_ENV = production
WEBSITE_RUN_FROM_PACKAGE = 0
SCM_DO_BUILD_DURING_DEPLOYMENT = true
DATABASE_URL = [sua connection string MySQL]
PORT = 8080
```

**⚠️ IMPORTANTE**: Adicione TODAS as outras variáveis de ambiente que você usa no projeto (.env local)

### 3. Configuration > Path Mappings

```
Nenhuma configuração necessária - deixe padrão
```

---

## 📦 Deploy via Git

### 1. Commit e Push das Mudanças

```bash
git add .
git commit -m "fix: alinha config Prisma com padrão Azure para deploy correto"
git push origin main
```

### 2. Monitorar Deploy

No Azure Portal:
- Vá em **Deployment Center**
- Aguarde o build finalizar
- Status deve mudar para **Success (Active)**

### 3. Verificar Logs

No Azure Portal:
- Vá em **Log stream**
- Aguarde aparecer:
  ```
  ✔ Generated Prisma Client (vX.X.X) to ./node_modules/@prisma/client
  npm start
  ```

---

## 🧪 Testar Localmente Antes

```bash
# Limpar tudo
rm -rf node_modules .prisma prisma/generated package-lock.json

# Reinstalar
npm install

# Gerar Prisma
npx prisma generate

# Testar aplicação
npm start
```

Se funcionar localmente, funcionará na Azure! ✅

---

## 🆘 Troubleshooting

### Erro: "Cannot find module '@prisma/client'"

**Solução**: No Azure Portal > Configuration > Application Settings, verifique:
```
SCM_DO_BUILD_DURING_DEPLOYMENT = true
```

### Erro: "Query engine library not found"

**Solução**: Confirme que `binaryTargets` está com `debian-openssl-3.0.x` no schema.prisma

### Deploy não está buildando

**Solução**: 
1. Vá em Deployment Center
2. Desconecte e reconecte o repositório GitHub
3. Force um novo deploy manual

---

## ✨ O que mudou em comparação com servidor-facilita?

Seu projeto agora segue o MESMO padrão:
- ✅ Binary target correto para Debian
- ✅ Import padrão `@prisma/client`
- ✅ Script `build` para Azure executar
- ✅ Sem startup.sh customizado
- ✅ Processo de build automático do Oryx

---

## 🎯 Próximos Passos

1. Faça o commit das mudanças
2. Push para o GitHub
3. Aguarde deploy automático na Azure
4. Teste seus endpoints
5. Celebrate! 🎉
