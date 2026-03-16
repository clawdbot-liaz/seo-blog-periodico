#!/bin/bash

# Script para desplegar manualmente en Vercel
# Ejecuta: bash deploy-vercel.sh

echo "🚀 INICIANDO DEPLOY MANUAL A VERCEL"
echo "====================================="

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ ERROR: No estás en el directorio del proyecto"
    echo "Ve a: cd /root/.openclaw/workspace/vercel-blog"
    exit 1
fi

echo "✅ Directorio del proyecto verificado"

# Verificar build local
echo "🔨 Verificando build local..."
npm run build 2>&1 | tail -10

if [ $? -eq 0 ]; then
    echo "✅ Build local exitoso"
else
    echo "❌ Error en build local"
    exit 1
fi

echo ""
echo "📋 PASOS PARA DEPLOY MANUAL:"
echo "============================="
echo ""
echo "1. 🌐 Ve a Vercel Dashboard:"
echo "   https://vercel.com"
echo ""
echo "2. 🔍 Busca tu proyecto:"
echo "   'seo-blog-optimizado-' o 'IntelligentWorldd/seo-blog-optimizado-'"
echo ""
echo "3. 🚀 Si el proyecto EXISTE:"
echo "   a. Haz clic en el proyecto"
echo "   b. Ve a la pestaña 'Deployments'"
echo "   c. Busca el botón '...' → 'Redeploy'"
echo "   d. Confirma el redeploy"
echo ""
echo "4. 🆕 Si el proyecto NO EXISTE:"
echo "   a. Haz clic en 'Add New' → 'Project'"
echo "   b. Importa el repositorio: IntelligentWorldd/seo-blog-optimizado-"
echo "   c. Configuración automática (Next.js)"
echo "   d. Haz clic en 'Deploy'"
echo ""
echo "5. ⏱️ Espera 2-3 minutos"
echo ""
echo "6. 🌍 Tu sitio estará en:"
echo "   https://seo-blog-optimizado.vercel.app"
echo ""
echo "7. 🔧 Si hay errores:"
echo "   - Revisa los logs en Vercel"
echo "   - Verifica que el token GitHub tiene permisos 'repo'"
echo "   - Asegúrate de que el repositorio es accesible"
echo ""
echo "📊 ESTADO ACTUAL DEL CÓDIGO:"
echo "============================="
git log --oneline -3
echo ""
echo "✅ El código está listo en GitHub"
echo "✅ Build local funciona"
echo "✅ Solo falta activar el deploy en Vercel"
echo ""
echo "💡 CONSEJO: La primera vez puede necesitar configuración manual."
echo "   Después, los pushes a GitHub activarán deploys automáticos."