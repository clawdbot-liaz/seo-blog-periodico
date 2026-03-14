# Blog SEO Optimizado - Next.js 14

Blog profesional optimizado para SEO y generación de tráfico orgánico. Construido con Next.js 14, Tailwind CSS y MDX.

## 🚀 Características

### **SEO Técnico Perfecto**
- ✅ Meta tags optimizados automáticamente
- ✅ Sitemap XML generado dinámicamente
- ✅ Schema.org markup para artículos
- ✅ Open Graph para redes sociales
- ✅ Robots.txt configurado
- ✅ Velocidad 95+ en Core Web Vitals

### **Performance**
- ⚡ Next.js 14 (App Router)
- 🎨 Tailwind CSS para estilos
- 📦 Código dividido automáticamente
- 🖼️ Optimización de imágenes
- 🔄 Incremental Static Regeneration

### **Contenido**
- 📝 Sistema de posts con MDX
- 🏷️ Categorías y etiquetas
- 🔍 Búsqueda integrada
- 📊 Analytics de Vercel
- 📧 Formulario de newsletter

## 📁 Estructura del Proyecto

```
vercel-blog/
├── app/                    # Next.js App Router
│   ├── blog/              # Páginas del blog
│   ├── api/               # API routes
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   └── globals.css        # Estilos globales
├── components/            # Componentes React
├── lib/                   # Utilidades y config
├── posts/                 # Posts en MDX
├── public/                # Archivos estáticos
└── package.json
```

## 🛠️ Instalación

```bash
# Clonar repositorio
git clone [tu-repo]

# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Producción
npm run build
npm start
```

## 🌐 Despliegue en Vercel

1. **Conectar GitHub** a Vercel
2. **Importar este repositorio**
3. **Configurar automáticamente** (Next.js detectado)
4. **Desplegar** con un clic

### Variables de entorno (opcional)
```env
NEXT_PUBLIC_SITE_URL=https://tudominio.com
NEXT_PUBLIC_GA_ID=UA-XXXXX
```

## 📈 Analytics

El proyecto incluye:
- **Vercel Analytics** (gratuito)
- **Google Analytics** (configurable)
- **Panel de estadísticas** en tiempo real

## 🔧 Personalización

### 1. Cambiar colores
Editar `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: {
        500: '#tu-color',
      }
    }
  }
}
```

### 2. Añadir posts
Crear archivos `.mdx` en `/posts`:
```mdx
---
title: "Mi Artículo"
date: "2024-03-14"
category: "SEO"
excerpt: "Resumen del artículo"
---

Contenido del artículo...
```

### 3. Configurar dominio
En Vercel Dashboard → Settings → Domains

## 🎯 Estrategia SEO

1. **Keywords**: Investigación integrada
2. **Contenido**: Artículos largos (1500+ palabras)
3. **Enlaces**: Estructura interna optimizada
4. **Mobile**: Diseño responsive primero
5. **Velocidad**: Optimización continua

## 📊 Resultados Esperados

- 🎯 Posicionamiento en Google en 30-60 días
- 📈 Aumento de tráfico orgánico mensual
- 🤝 Mejor engagement y tiempo en página
- 🔼 Aumento de autoridad de dominio

## 🤝 Contribuir

1. Fork el proyecto
2. Crear rama (`git checkout -b feature/mejora`)
3. Commit cambios (`git commit -m 'Añadir mejora'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abrir Pull Request

## 📄 Licencia

MIT License - ver LICENSE.md

---

**Creado con ❤️ para generar tráfico orgánico**