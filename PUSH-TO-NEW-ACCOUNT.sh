#!/bin/bash

# Script para subir código a la nueva cuenta GitHub: clawdbot-liaz
# Ejecutar cuando tengas un token con permisos 'repo'

echo "🚀 SUBIENDO CÓDIGO A NUEVA CUENTA GITHUB"
echo "=========================================="
echo ""
echo "Cuenta destino: clawdbot-liaz"
echo "Repositorio: seo-blog-optimizado-"
echo ""
echo "⚠️  NECESITAS: Token GitHub con permisos 'repo'"
echo ""

# Preguntar por el token
read -p "🔐 Introduce tu NUEVO token GitHub (con permisos repo): " GITHUB_TOKEN

if [ -z "$GITHUB_TOKEN" ]; then
    echo "❌ Error: No se proporcionó token"
    exit 1
fi

echo ""
echo "📦 Preparando push..."
echo ""

# Cambiar remote
git remote set-url origin https://clawdbot-liaz:${GITHUB_TOKEN}@github.com/clawdbot-liaz/seo-blog-optimizado-.git

echo "✅ Remote configurado"
echo ""

# Hacer push
echo "🚀 Subiendo código a GitHub..."
if git push -u origin main; then
    echo ""
    echo "🎉 ¡ÉXITO! Código subido a nueva cuenta"
    echo ""
    echo "📊 Verifica en: https://github.com/clawdbot-liaz/seo-blog-optimizado-"
    echo ""
    echo "🚀 SIGUIENTES PASOS:"
    echo "1. Ve a Vercel: https://vercel.com"
    echo "2. 'Add New' → 'Project'"
    echo "3. Importa: clawdbot-liaz/seo-blog-optimizado-"
    echo "4. Configura y haz 'Deploy'"
    echo ""
    echo "⚙️ Para auto-deploy:"
    echo "1. Vercel → Settings → Git → Deploy Hooks"
    echo "2. Crea hook y copia URL"
    echo "3. GitHub → Settings → Secrets → Actions"
    echo "4. Añade secret: DEPLOY_HOOK_URL"
else
    echo ""
    echo "❌ Error al subir código"
    echo ""
    echo "🔧 Posibles soluciones:"
    echo "1. Verifica que el token tiene permisos 'repo'"
    echo "2. Genera nuevo token en: https://github.com/settings/tokens"
    echo "3. Asegúrate de seleccionar 'repo' scope"
    echo "4. El repositorio debe existir en clawdbot-liaz"
fi

echo ""
echo "📋 Token usado (guárdalo seguro):"
echo "${GITHUB_TOKEN:0:20}..."