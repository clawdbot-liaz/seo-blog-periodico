# 🔐 GENERAR TOKEN GITHUB CON PERMISOS CORRECTOS

## 📋 PROBLEMA ACTUAL
El token `github_pat_11CAPHJEA0...` **NO tiene permisos de escritura** (`repo` scope).

## 🛠️ SOLUCIÓN: Generar NUEVO token

### **Paso 1: Ve a GitHub Settings**
https://github.com/settings/tokens

### **Paso 2: "Generate new token"**
- **Token type:** "Fine-grained tokens"
- **Token name:** `OpenClaw-Full-Access`
- **Expiration:** "No expiration" (o 90 días)

### **Paso 3: Configurar permisos**

#### **Repository access:**
✅ **All repositories** (o selecciona `seo-blog-optimizado-`)

#### **Permissions (CRÍTICAS):**
```
✅ Contents: Read and write
✅ Metadata: Read-only
✅ Workflows: Read and write
✅ Administration: Read and write (opcional)
✅ Pages: Read and write (opcional)
```

### **Paso 4: Generar y copiar**
- **Haz clic en "Generate token"**
- **COPIA el token inmediatamente** (no lo vuelves a ver)
- **Guárdalo en un gestor de contraseñas**

## 🎯 PERMISOS NECESARIOS MÍNIMOS

### **Para PUSH código:**
```
✅ Contents: Read and write
```

### **Para GitHub Actions:**
```
✅ Workflows: Read and write
```

### **Para auto-deploy:**
```
✅ Contents: Read and write
✅ Workflows: Read and write
```

## 🔧 VERIFICAR TOKEN ACTUAL

### **Comando para ver permisos:**
```bash
curl -s \
  -H "Authorization: token TU_TOKEN_AQUI" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/rate_limit
```

### **Si funciona pero no puede escribir:**
- El token es de solo lectura
- Necesitas regenerarlo con permisos de escritura

## 🚀 USAR NUEVO TOKEN

### **Opción A: Con el script**
```bash
cd /ruta/al/proyecto
bash PUSH-TO-NEW-ACCOUNT.sh
# Introduce el nuevo token cuando te lo pida
```

### **Opción B: Manualmente**
```bash
cd /ruta/al/proyecto
git remote set-url origin https://clawdbot-liaz:NUEVO_TOKEN@github.com/clawdbot-liaz/seo-blog-optimizado-.git
git push -u origin main
```

## ⚠️ SEGURIDAD

### **NO compartas tokens:**
- ❌ Por mensaje
- ❌ En logs públicos
- ❌ En archivos commitados

### **SÍ guarda tokens:**
- ✅ En gestor de contraseñas (Bitwarden, 1Password, etc.)
- ✅ Como secret en GitHub Actions
- ✅ En variables de entorno locales

### **Revocar token viejo:**
1. Ve a: https://github.com/settings/tokens
2. Busca el token viejo
3. Haz clic en "Revoke"

## 📞 PROBLEMAS COMUNES

### **"Permission denied"**
- Token sin permisos `repo`
- Regenera con permisos correctos

### **"Repository not found"**
- El repo no existe en `clawdbot-liaz`
- Crea repo vacío primero

### **"Token expired"**
- Los tokens tienen fecha de expiración
- Genera nuevo token

## ✅ RESUMEN

**Para que YO pueda hacer push necesitas:**

1. **Generar NUEVO token** con permisos `repo`
2. **Compartirlo temporalmente** (solo para esta operación)
3. **Revocarlo después** si quieres

**O tú puedes ejecutar:**
```bash
bash PUSH-TO-NEW-ACCOUNT.sh
```

**El código está 100% listo.** Solo falta el token con permisos correctos. 🌀

---

*Token actual: SOLO LECTURA*
*Token necesario: LECTURA + ESCRITURA*
*Estado: Esperando token con permisos 'repo'*