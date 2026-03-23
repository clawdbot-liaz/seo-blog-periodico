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
  author?: string
  isBreaking?: boolean
  isFeatured?: boolean
  imageUrl?: string
}

// Posts gestionados en memoria

export function getPosts(): Post[] {
  // Posts reales para las categorías definidas
  const posts: Post[] = [
    {
      slug: 'counter-strike-major-berlin',
      title: 'Team Spirit gana el Major de Berlín de Counter-Strike 2',
      excerpt: 'El equipo ruso se corona campeón del Major de Berlín tras una final épica contra FaZe Clan.',
      date: '2026-03-23',
      category: 'ESPORTS',
      readTime: '4 min',
      content: '',
      tags: ['Counter-Strike', 'Major', 'Team Spirit', 'Esports'],
      author: 'Carlos Martínez',
      isBreaking: true,
      isFeatured: true
    },
    {
      slug: 'valorant-champions-tour',
      title: 'Nuevo formato anunciado para el VCT 2026',
      excerpt: 'Riot Games revela cambios importantes en el formato del Valorant Champions Tour para la próxima temporada.',
      date: '2026-03-22',
      category: 'ESPORTS',
      readTime: '3 min',
      content: '',
      tags: ['Valorant', 'VCT', 'Riot Games', 'Competitivo'],
      author: 'Ana López'
    },
    {
      slug: 'league-of-legends-msi',
      title: 'T1 busca su quinto título de MSI en Shanghai',
      excerpt: 'Faker y T1 viajan a China como favoritos para ganar el Mid-Season Invitational 2026.',
      date: '2026-03-21',
      category: 'ESPORTS',
      readTime: '5 min',
      content: '',
      tags: ['League of Legends', 'T1', 'Faker', 'MSI'],
      author: 'David Chen'
    },
    {
      slug: 'streamer-baneado-twitch',
      title: 'Twitch banea a popular streamer por violación de TOS',
      excerpt: 'La plataforma toma medidas drásticas contra uno de sus creadores más populares.',
      date: '2026-03-23',
      category: 'INFLUENCER/POP',
      readTime: '3 min',
      content: '',
      tags: ['Twitch', 'Streaming', 'Ban', 'Controversia'],
      author: 'María Rodríguez',
      isBreaking: true
    },
    {
      slug: 'tiktok-trend-viral',
      title: 'Nuevo desafío viral arrasa en TikTok',
      excerpt: 'Millones de usuarios participan en el último trend que domina la plataforma.',
      date: '2026-03-22',
      category: 'INFLUENCER/POP',
      readTime: '2 min',
      content: '',
      tags: ['TikTok', 'Viral', 'Trend', 'Redes Sociales'],
      author: 'Laura Gómez'
    },
    {
      slug: 'youtuber-colaboracion-mega',
      title: 'Colaboración histórica entre los YouTubers más grandes',
      excerpt: 'Tres de los creadores más importantes se unen para un proyecto especial.',
      date: '2026-03-21',
      category: 'INFLUENCER/POP',
      readTime: '4 min',
      content: '',
      tags: ['YouTube', 'Colaboración', 'Creadores', 'Contenido'],
      author: 'Sofía Torres'
    },
    {
      slug: 'apple-inteligencia-artificial',
      title: 'Apple presenta su nueva plataforma de IA integrada',
      excerpt: 'La compañía revela "Apple Intelligence", su respuesta a ChatGPT y Gemini.',
      date: '2026-03-23',
      category: 'TECNOLOGÍA',
      readTime: '6 min',
      content: '',
      tags: ['Apple', 'IA', 'Inteligencia Artificial', 'Tecnología'],
      author: 'Alex Rivera',
      isFeatured: true
    },
    {
      slug: 'tesla-robotaxi-anuncio',
      title: 'Tesla anuncia fecha de lanzamiento para su Robotaxi',
      excerpt: 'Elon Musk revela que el vehículo autónomo estará disponible en 2027.',
      date: '2026-03-22',
      category: 'TECNOLOGÍA',
      readTime: '5 min',
      content: '',
      tags: ['Tesla', 'Robotaxi', 'Elon Musk', 'Autónomo'],
      author: 'Miguel Ángel'
    },
    {
      slug: 'meta-gafas-realidad-aumentada',
      title: 'Meta presenta sus nuevas gafas de realidad aumentada',
      excerpt: 'El sucesor de Ray-Ban Stories llega con capacidades avanzadas de IA.',
      date: '2026-03-21',
      category: 'TECNOLOGÍA',
      readTime: '4 min',
      content: '',
      tags: ['Meta', 'Realidad Aumentada', 'Gafas', 'IA'],
      author: 'Elena Vargas'
    },
    {
      slug: 'incendio-edificio-madrid',
      title: 'Gran incendio en edificio del centro de Madrid',
      excerpt: 'Los bomberos trabajan para controlar las llamas en un edificio histórico.',
      date: '2026-03-23',
      category: 'ÚLTIMA HORA',
      readTime: '2 min',
      content: '',
      tags: ['Madrid', 'Incendio', 'Emergencia', 'Bomberos'],
      author: 'Redacción',
      isBreaking: true,
      isFeatured: true
    },
    {
      slug: 'huelga-transportes',
      title: 'Huelga de transportes paraliza varias ciudades',
      excerpt: 'Protestas por condiciones laborales afectan el transporte público.',
      date: '2026-03-23',
      category: 'ÚLTIMA HORA',
      readTime: '3 min',
      content: '',
      tags: ['Huelga', 'Transporte', 'Protestas', 'Laboral'],
      author: 'Redacción'
    },
    {
      slug: 'tormenta-fuerte-lluvias',
      title: 'Alerta por fuertes lluvias en la costa mediterránea',
      excerpt: 'La AEMET activa avisos por riesgo de inundaciones.',
      date: '2026-03-22',
      category: 'ÚLTIMA HORA',
      readTime: '2 min',
      content: '',
      tags: ['Tormenta', 'Lluvias', 'AEMET', 'Alerta'],
      author: 'Redacción'
    }
  ]

  // Ordenar por fecha (más reciente primero)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | null {
  const posts = getPosts()
  return posts.find(post => post.slug === slug) || null
}

export function getPostsByCategory(category: string): Post[] {
  const posts = getPosts()
  return posts.filter(post => post.category === category)
}

export function getFeaturedPosts(): Post[] {
  const posts = getPosts()
  return posts.filter(post => post.isFeatured).slice(0, 3)
}

export function getBreakingNews(): Post[] {
  const posts = getPosts()
  return posts.filter(post => post.isBreaking).slice(0, 5)
}