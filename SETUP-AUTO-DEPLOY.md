# 🔧 CONFIGURAR AUTO-DEPLOY EN VERCEL

## 📋 PROBLEMA
Vercel está conectado a GitHub pero **no hace deploy automático** cuando haces push.

## 🎯 SOLUCIÓN

### PASO 1: VERIFICAR CONFIGURACIÓN ACTUAL

En **Vercel Dashboard** → **Tu proyecto** → **Settings** → **Git**:

**DEBERÍAS VER:**
```
✅ Connected: IntelligentWorldd/seo-blog-optimizado-
✅ Automatic Deploys: [TOGGLE ON] ← ESTE ES EL IMPORTANTE
✅ Production Branch: main
✅ deployment_status Events: ON
✅ repository_dispatch Events: ON
```

### PASO 2: ACTIVAR AUTO-DEPLOY

**Si no ves "Automatic Deploys":**

1. **Desconecta y reconecta** el repositorio:
   - **Settings** → **Git**
   - **Disconnect** (al final de la página)
   - **Connect Git Repository** de nuevo
   - Selecciona `IntelligentWorldd/seo-blog-optimizado-`
   - **Asegúrate de activar** "Automatic Deploys" durante la conexión

### PASO 3: CREAR DEPLOY HOOK (BACKUP)

**Para asegurar deploys incluso si falla el auto-deploy:**

1. En **Vercel** → **Settings** → **Git** → **Deploy Hooks**:
   ```
   Name: Auto Deploy on Push
   Branch: main
   ```

2. **Copia la URL** generada (ej: `https://api.vercel.com/v1/...`)

3. En **GitHub** → **Settings** → **Webhooks**:
   - **Add webhook**
   - **Payload URL:** Pega la URL
   - **Content type:** `application/json`
   - **Events:** Solo `push`
   - **Active:** ✅

### PASO 4: VERIFICAR WEBHOOKS EN GITHUB

**Ve a:** `https://github.com/IntelligentWorldd/seo-blog-optimizado-/settings/hooks`

**DEBERÍAS VER 2 WEBHOOKS:**
1. **Vercel Auto** (configurado por Vercel)
2. **Deploy Hook Manual** (que acabas de crear)

### PASO 5: TESTEAR

1. **Haz un cambio pequeño** (ej: modifica README.md)
2. **Haz push** a GitHub
3. **Verifica Vercel** → **Deployments**
4. **Debería iniciar deploy automáticamente**

## 🚨 SI SIGUE SIN FUNCIONAR

### Opción A: Usar GitHub Actions
1. Ve a tu repositorio → **Actions**
2. Ejecuta **"Manual Deploy to Vercel"**
3. Sigue instrucciones en logs

### Opción B: Vercel CLI
```bash
# Instalar
npm install -g vercel

# Login
vercel login

# Deploy manual
vercel --prod
```

### Opción C: Soporte Vercel
1. Ve a: https://vercel.com/contact
2. Explica: "Automatic Deploys not working despite Git connection"
3. Incluye screenshot de Settings → Git

## 🔧 CONFIGURACIÓN IDEAL

### Vercel Settings → Git:
```
✅ Connected Git Repository: IntelligentWorldd/seo-blog-optimizado-
✅ Automatic Deploys: ON
✅ Production Branch: main
✅ Preview Deployments: ON (para PRs)
✅ Ignored Build Step: (vacío)
```

### GitHub Settings → Webhooks:
```
✅ Vercel Webhook: Active, Events: push, pull_request
✅ Deploy Hook: Active, Events: push
✅ Last delivery: Success
```

## 📞 SOPORTE

### Para ayuda inmediata:
1. **Comparte screenshot** de Vercel Settings → Git
2. **Comparte screenshot** de GitHub Settings → Webhooks
3. **Prueba** hacer un push y comparte lo que pasa

### Enlaces directos:
- **Vercel Project:** https://vercel.com/IntelligentWorldd/seo-blog-optimizado-
- **GitHub Repo:** https://github.com/IntelligentWorldd/seo-blog-optimizado-
- **GitHub Webhooks:** https://github.com/IntelligentWorldd/seo-blog-optimizado-/settings/hooks

## ✅ RESUMEN

**Problema:** "Automatic Deploys" toggle está desactivado o no visible.

**Solución:**
1. **Reconectar** repositorio en Vercel
2. **Activar** "Automatic Deploys" durante conexión
3. **Crear** deploy hook de backup
4. **Testear** con push pequeño

**Tiempo estimado:** 5 minutos para configurar, 2 minutos para test.

---

*Configuración necesaria para suscripciones funcionales*
*Build: ✅ Listo | Auto-deploy: ⚠️ Necesita configuración*