# 🚀 MIGRACIÓN A NUEVA CUENTA GITHUB: clawdbot-liaz

## 📋 PASOS PARA EJECUTAR (desde TU máquina)

### **Paso 1: Clonar repositorio actual**
```bash
git clone https://github.com/IntelligentWorldd/seo-blog-optimizado-.git clawdbot-blog
cd clawdbot-blog
```

### **Paso 2: Cambiar remote a nueva cuenta**
```bash
git remote set-url origin https://github.com/clawdbot-liaz/seo-blog-optimizado-.git
git remote -v  # Verificar cambio
```

### **Paso 3: Crear repositorio en nueva cuenta (si no existe)**
1. **Inicia sesión** en GitHub como `clawdbot-liaz`
2. **Ve a:** https://github.com/new
3. **Crea repositorio:**
   - Owner: `clawdbot-liaz`
   - Repository name: `seo-blog-optimizado-`
   - **NO marques:** "Add a README file"
   - **NO marques:** "Add .gitignore"
   - **NO marques:** "Choose a license"

### **Paso 4: Subir código**
```bash
# Si el repo YA existe:
git push -u origin main

# Si acabas de crear el repo, usa los comandos que GitHub te da:
git remote add origin https://github.com/clawdbot-liaz/seo-blog-optimizado-.git
git branch -M main
git push -u origin main
```

### **Paso 5: Configurar Vercel**
1. **Ve a:** https://vercel.com
2. **Inicia sesión** (con la cuenta que quieras)
3. **"Add New"** → **"Project"**
4. **Importa:** `clawdbot-liaz/seo-blog-optimizado-`
5. **Configuración automática** (Next.js)
6. **"Deploy"**

### **Paso 6: Configurar auto-deploy**
1. En **Vercel** → **Settings** → **Git** → **Deploy Hooks**
2. **Create Hook:**
   - Name: `Auto Deploy`
   - Branch: `main`
3. **Copia la URL** del hook
4. En **GitHub** → **Settings** → **Secrets and variables** → **Actions**
5. **New repository secret:**
   - Name: `DEPLOY_HOOK_URL`
   - Value: (pega la URL del hook)

## 🔧 ARCHIVOS ACTUALIZADOS

### **1. `.github/workflows/auto-deploy.yml`**
- Configurado para usar `DEPLOY_HOOK_URL` secret
- Listo para nueva cuenta GitHub

### **2. `MIGRATE-TO-NEW-ACCOUNT.md`** (este archivo)
- Instrucciones paso a paso

## 🎯 ESTADO DEL CÓDIGO

### **✅ Listo para migrar:**
- Periódico digital completo
- SEO optimizado
- Configuración Vercel + Netlify
- GitHub Actions para auto-deploy
- Sin suscripciones/login (como pediste)

### **📁 Estructura principal:**
```
├── app/                    # Next.js 14 App Router
├── components/            # Componentes React
├── lib/                   # Utilidades y posts
├── .github/workflows/     # Auto-deploy configurado
├── vercel.json           # Config Vercel
├── netlify.toml          # Config Netlify
└── README.md             # Documentación
```

## ⚠️ CONSIDERACIONES

### **Token de seguridad:**
- **NO compartas** el token `github_pat_11CAPHJEA0...`
- **Úsalo solo** para autenticación en tu máquina
- **Puedes revocarlo** después de la migración

### **Dos repositorios:**
- **Original:** `IntelligentWorldd/seo-blog-optimizado-` (se mantiene)
- **Nuevo:** `clawdbot-liaz/seo-blog-optimizado-` (activo)
- Puedes eliminar el original después de verificar que todo funciona

### **Auto-deploy:**
- **Vercel** necesita reconexión manual
- **GitHub Actions** usará el nuevo secret `DEPLOY_HOOK_URL`
- **Primer deploy** puede necesitar trigger manual

## 📞 SOPORTE

### **Si hay problemas:**

#### **Error: "repository not found"**
- Verifica que el repo existe en `clawdbot-liaz`
- Verifica permisos del token

#### **Error: "permission denied"**
- El token necesita permisos `repo`
- Genera nuevo token si es necesario

#### **Error: "deploy hook not working"**
- Verifica que la URL en GitHub Secrets es correcta
- Prueba hacer curl manualmente a la URL

### **Enlaces útiles:**
- **Nuevo repo:** https://github.com/clawdbot-liaz/seo-blog-optimizado-
- **Vercel:** https://vercel.com
- **GitHub Tokens:** https://github.com/settings/tokens

## ✅ RESUMEN

**Sigue estos pasos en orden:**

1. **Ejecuta comandos** de terminal (Paso 1-4)
2. **Configura Vercel** (Paso 5)
3. **Configura auto-deploy** (Paso 6)
4. **Verifica** que todo funciona

**Tiempo estimado:** 10-15 minutos

**Resultado:** Periódico digital funcionando en nueva cuenta con auto-deploy en Vercel. 🌀

---

*Última actualización: $(date)*
*Estado: ✅ Listo para migración*
*Cuenta destino: clawdbot-liaz*