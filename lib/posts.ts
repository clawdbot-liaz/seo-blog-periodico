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
  author?: string
  isBreaking?: boolean
  isFeatured?: boolean
  imageUrl?: string
}

const samplePosts: Post[] = [
  {
    slug: 'como-optimizar-seo-technical-2024',
    title: 'Guía Completa: SEO Técnico para 2024',
    excerpt: 'Aprende las técnicas más avanzadas de SEO técnico para posicionar tu web en los primeros resultados de Google.',
    date: '2024-03-10',
    category: 'SEO Técnico',
    readTime: '8 min',
    content: '',
    tags: ['SEO', 'Técnico', 'Google', 'Optimización'],
    seoTitle: 'SEO Técnico 2024: Guía Definitiva para Posicionar',
    seoDescription: 'Domina el SEO técnico con esta guía paso a paso. Aumenta tu tráfico orgánico con técnicas probadas para 2024.'
  },
  {
    slug: 'estrategias-contenido-viral',
    title: '10 Estrategias para Crear Contenido Viral',
    excerpt: 'Descubre las técnicas que usan los mejores creadores de contenido para generar miles de visitas.',
    date: '2024-03-05',
    category: 'Marketing de Contenidos',
    readTime: '6 min',
    content: '',
    tags: ['Contenido', 'Viral', 'Marketing', 'Redes Sociales'],
    seoTitle: 'Contenido Viral: 10 Estrategias Comprobadas',
    seoDescription: 'Aprende a crear contenido que se comparta masivamente. Casos reales y técnicas efectivas.'
  },
  {
    slug: 'keywords-long-tail-alto-trafico',
    title: 'Cómo Encontrar Keywords Long-Tail con Alto Tráfico',
    excerpt: 'Las keywords long-tail son el secreto mejor guardado del SEO. Aprende a identificarlas y aprovecharlas.',
    date: '2024-02-28',
    category: 'Keyword Research',
    readTime: '7 min',
    content: '',
    tags: ['Keywords', 'Investigación', 'Long-Tail', 'Tráfico'],
    seoTitle: 'Keywords Long-Tail: Encuentra Términos con Alto Tráfico',
    seoDescription: 'Guía completa para encontrar keywords long-tail poco competitivas pero con buen volumen de búsqueda.'
  },
  {
    slug: 'velocidad-web-core-web-vitals',
    title: 'Core Web Vitals: Optimiza la Velocidad de tu Web',
    excerpt: 'Google prioriza la experiencia de usuario. Aprende a optimizar Core Web Vitals para mejorar tu SEO.',
    date: '2024-02-20',
    category: 'Performance',
    readTime: '9 min',
    content: '',
    tags: ['Velocidad', 'Core Web Vitals', 'Performance', 'Google'],
    seoTitle: 'Core Web Vitals: Optimización Completa para SEO',
    seoDescription: 'Mejora tu puntuación en Core Web Vitals y aumenta tu posicionamiento en Google con estas técnicas.'
  },
  {
    slug: 'backlinks-calidad-vs-cantidad',
    title: 'Backlinks: Calidad vs Cantidad - Qué Importa Realmente',
    excerpt: 'Descubre por qué 10 backlinks de calidad valen más que 1000 enlaces spam. Casos de estudio reales.',
    date: '2024-02-15',
    category: 'Link Building',
    readTime: '10 min',
    content: '',
    tags: ['Backlinks', 'Link Building', 'SEO Off-Page', 'Autoridad'],
    seoTitle: 'Backlinks de Calidad: Estrategias Efectivas 2024',
    seoDescription: 'Aprende a construir backlinks de alta calidad que realmente mejoren tu autoridad de dominio.'
  },
  {
    slug: 'schema-markup-para-seo',
    title: 'Schema Markup: Cómo Implementarlo Correctamente',
    excerpt: 'El schema markup puede aumentar tu CTR hasta un 30%. Aprende a implementarlo paso a paso.',
    date: '2024-02-10',
    category: 'SEO Avanzado',
    readTime: '5 min',
    content: '',
    tags: ['Schema', 'Rich Snippets', 'SEO Avanzado', 'CTR'],
    seoTitle: 'Schema Markup: Implementación Paso a Paso para SEO',
    seoDescription: 'Guía completa para implementar schema markup y aparecer en rich snippets de Google.'
  }
]

export async function getPosts(): Promise<Post[]> {
  // Ordenar por fecha (más reciente primero)
  return [...samplePosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getPosts()
  return posts.find(post => post.slug === slug) || null
}

export async function getAllSlugs(): Promise<string[]> {
  const posts = await getPosts()
  return posts.map(post => post.slug)
}