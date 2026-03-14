#!/bin/bash

echo "🚀 Configurando despliegue de Blog SEO Optimizado"

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}1. Verificando Git...${NC}"
if [ ! -d ".git" ]; then
    git init
    git config user.email "bot@seoblog.com"
    git config user.name "SEO Blog Bot"
fi

echo -e "${YELLOW}2. Añadiendo archivos...${NC}"
git add .

echo -e "${YELLOW}3. Haciendo commit...${NC}"
git commit -m "Update: $(date '+%Y-%m-%d %H:%M') - SEO optimizations"

echo -e "${YELLOW}4. Configurando remote...${NC}"
read -p "¿URL del repositorio GitHub? (ej: https://github.com/usuario/repo.git): " repo_url
read -p "¿Token de acceso GitHub? (ghp_...): " github_token

# Extraer usuario y repo de la URL
if [[ $repo_url =~ https://github.com/([^/]+)/([^/.]+) ]]; then
    username="${BASH_REMATCH[1]}"
    reponame="${BASH_REMATCH[2]}"
    auth_url="https://${username}:${github_token}@github.com/${username}/${reponame}.git"
    
    git remote remove origin 2>/dev/null
    git remote add origin "$auth_url"
    
    echo -e "${YELLOW}5. Subiendo a GitHub...${NC}"
    git branch -M main
    if git push -u origin main; then
        echo -e "${GREEN}✅ Código subido a GitHub exitosamente${NC}"
        echo -e "\n${YELLOW}📋 Pasos siguientes:${NC}"
        echo "1. Ve a https://vercel.com"
        echo "2. Conecta tu cuenta de GitHub"
        echo "3. Importa el repositorio: ${reponame}"
        echo "4. Configura variables de entorno si es necesario"
        echo "5. ¡Despliega!"
    else
        echo -e "${RED}❌ Error al subir a GitHub${NC}"
        echo "Posibles problemas:"
        echo "- Token expirado o sin permisos"
        echo "- Repositorio no existe"
        echo "- Problemas de red"
    fi
else
    echo -e "${RED}❌ URL de GitHub inválida${NC}"
fi

echo -e "\n${YELLOW}🎯 Para configuración manual:${NC}"
echo "git remote add origin https://USUARIO:TOKEN@github.com/USUARIO/REPO.git"
echo "git branch -M main"
echo "git push -u origin main"