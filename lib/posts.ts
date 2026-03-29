// Sistema de posts en memoria (sin archivos MDX)

export interface Post {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  content: string
  tags: string[]
  seoTitle?: string
  seoDescription?: string
  author: string  // Ahora es obligatorio
  isBreaking?: boolean
  isFeatured?: boolean
  imageUrl?: string
  relevanceScore?: number  // Puntuación de relevancia para artículos relacionados
  relationScore?: number   // Puntuación calculada para relación
}

// Autores fijos por categoría
const AUTHORS_BY_CATEGORY: Record<string, string> = {
  'ÚLTIMA HORA': 'María Rodríguez',
  'ESPORTS': 'Javi Espartano',
  'DEPORTES': 'David Chen',
  'INFLUENCER/POP': 'Ana López',
  'TECNOLOGÍA': 'Carlos Méndez'
}

// Array vacío de posts - todos eliminados
const posts: Post[] = [
  // Artículo temporal para que el build funcione
  {
    slug: 'sitio-en-construccion',
    title: 'Sitio en construcción',
    excerpt: 'El periódico EL INFORMADOR está actualmente en construcción. Próximamente publicaremos noticias actualizadas.',
    date: '2026-03-29',
    category: 'ÚLTIMA HORA',
    readTime: '1 min',
    content: 'El periódico digital EL INFORMADOR está actualmente en fase de construcción y preparación. Todas las secciones están listas y funcionando, pero aún no se han publicado noticias. Este es un artículo temporal para permitir que el sitio se construya correctamente.',
    tags: ['construcción', 'próximamente', 'actualización'],
    author: 'María Rodríguez',
    isBreaking: false,
    isFeatured: true,
    imageUrl: undefined,
    relevanceScore: 0
  }
]

// Función para obtener todos los posts
export function getPosts(): Post[] {
  return posts
}

// Función para obtener posts por categoría
export function getPostsByCategory(category: string): Post[] {
  return posts.filter(post => post.category === category)
}

// Función para obtener un post por slug
export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug)
}

// Función para obtener posts relacionados (basado en categoría, tags, autor)
export function getRelatedPosts(currentPost: Post, limit: number = 3): Post[] {
  if (posts.length === 0) return []
  
  const scoredPosts = posts
    .filter(post => post.slug !== currentPost.slug)
    .map(post => {
      let score = 0
      
      // Misma categoría (máxima relevancia)
      if (post.category === currentPost.category) {
        score += 40
      }
      
      // Etiquetas comunes
      const commonTags = post.tags.filter(tag => 
        currentPost.tags.includes(tag)
      ).length
      score += commonTags * 15
      
      // Mismo autor
      if (post.author === currentPost.author) {
        score += 10
      }
      
      // Contenido destacado o de última hora
      if (post.isFeatured) score += 5
      if (post.isBreaking) score += 5
      
      // Relevancia predefinida (si existe)
      if (post.relevanceScore) {
        score += post.relevanceScore
      }
      
      // Penalización por antigüedad (posts más recientes primero)
      const postDate = new Date(post.date)
      const currentDate = new Date(currentPost.date)
      const daysDiff = Math.floor((currentDate.getTime() - postDate.getTime()) / (1000 * 3600 * 24))
      score -= Math.min(daysDiff, 30) // Máximo 30 puntos de penalización
      
      return { ...post, relationScore: score }
    })
    .sort((a, b) => b.relationScore! - a.relationScore!)
    .slice(0, limit)
  
  return scoredPosts
}

// Función para obtener posts destacados
export function getFeaturedPosts(limit: number = 3): Post[] {
  return posts
    .filter(post => post.isFeatured)
    .slice(0, limit)
}

// Función para obtener posts de última hora
export function getBreakingPosts(limit: number = 3): Post[] {
  return posts
    .filter(post => post.isBreaking)
    .slice(0, limit)
}

// Función para obtener posts más recientes
export function getRecentPosts(limit: number = 6): Post[] {
  return posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}