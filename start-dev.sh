#!/bin/bash

echo "🩸 Iniciando Backend DOE VIDA em modo desenvolvimento..."
echo "📍 Porta: 8080"
echo "🔧 Modo: development (rate limiting desabilitado)"
echo ""

# Definir variáveis de ambiente para desenvolvimento
export NODE_ENV=development
export PORT=8080

# Iniciar o servidor
npm run dev