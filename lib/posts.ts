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
  'INFLUENCER/POP': 'Ana López',
  'TECNOLOGÍA': 'Carlos Méndez',
  'DEPORTES': 'David Chen'
}

// Posts gestionados en memoria

export function getPosts(): Post[] {
  // Posts reales para las categorías definidas
  const posts: Post[] = [
    // ÚLTIMA HORA - María Rodríguez
    {
      slug: 'incendio-edificio-madrid',
      title: 'Gran incendio en edificio del centro de Madrid',
      excerpt: 'Los bomberos trabajan para controlar las llamas en un edificio histórico de la calle Gran Vía.',
      date: '2026-03-23',
      category: 'ÚLTIMA HORA',
      readTime: '5 min',
      content: 'Un incendio de grandes proporciones se declaró esta tarde en un edificio histórico de la calle Gran Vía. Los bomberos trabajan intensamente para controlar las llamas mientras se procede a la evacuación de residentes.',
      tags: ['Madrid', 'Incendio', 'Emergencia', 'Bomberos', 'Gran Vía', 'Evacuación'],
      author: 'María Rodríguez',
      isBreaking: true,
      isFeatured: true,
      relevanceScore: 95  // Puntuación de relevancia para artículos relacionados
    },
    {
      slug: 'huelga-transportes',
      title: 'Huelga de transportes paraliza varias ciudades',
      excerpt: 'Protestas por condiciones laborales afectan el transporte público en Madrid, Barcelona y Valencia.',
      date: '2026-03-23',
      category: 'ÚLTIMA HORA',
      readTime: '3 min',
      content: 'Una huelga convocada por los sindicatos del transporte ha paralizado parcialmente varias ciudades españolas. Los usuarios se enfrentan a importantes alteraciones en sus desplazamientos.',
      tags: ['Huelga', 'Transporte', 'Protestas', 'Laboral', 'Madrid'],
      author: 'María Rodríguez',
      relevanceScore: 85
    },
    {
      slug: 'tormenta-fuerte-lluvias',
      title: 'Alerta por fuertes lluvias en la costa mediterránea',
      excerpt: 'La AEMET activa avisos naranja por riesgo de inundaciones en Valencia, Alicante y Murcia.',
      date: '2026-03-22',
      category: 'ÚLTIMA HORA',
      readTime: '2 min',
      content: 'La Agencia Estatal de Meteorología ha activado avisos por lluvias intensas en varias provincias del Mediterráneo. Se recomienda precaución a los ciudadanos.',
      tags: ['Tormenta', 'Lluvias', 'AEMET', 'Alerta', 'Emergencia'],
      author: 'María Rodríguez',
      relevanceScore: 75
    },
    
    // ESPORTS - Javi Espartano
    {
      slug: 'counter-strike-major-berlin',
      title: 'Team Spirit gana el Major de Berlín de Counter-Strike 2',
      excerpt: 'El equipo ruso se corona campeón del Major de Berlín tras una final épica contra FaZe Clan.',
      date: '2026-03-23',
      category: 'ESPORTS',
      readTime: '4 min',
      content: '',
      tags: ['Counter-Strike', 'Major', 'Team Spirit', 'Esports'],
      author: 'Javi Espartano',
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
      author: 'Javi Espartano'
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
      author: 'Javi Espartano'
    },
    
    // INFLUENCER/POP - Ana López
    {
      slug: 'streamer-baneado-twitch',
      title: 'Twitch banea a popular streamer por violación de TOS',
      excerpt: 'La plataforma toma medidas drásticas contra uno de sus creadores más populares tras múltiples advertencias.',
      date: '2026-03-23',
      category: 'INFLUENCER/POP',
      readTime: '3 min',
      content: '',
      tags: ['Twitch', 'Streaming', 'Ban', 'Controversia'],
      author: 'Ana López',
      isBreaking: true
    },
    {
      slug: 'tiktok-trend-viral',
      title: 'Nuevo desafío viral arrasa en TikTok',
      excerpt: 'Millones de usuarios participan en el último trend que domina la plataforma con más de 500M de visualizaciones.',
      date: '2026-03-22',
      category: 'INFLUENCER/POP',
      readTime: '2 min',
      content: '',
      tags: ['TikTok', 'Viral', 'Trend', 'Redes Sociales'],
      author: 'Ana López'
    },
    {
      slug: 'youtuber-colaboracion-mega',
      title: 'Colaboración histórica entre los YouTubers más grandes',
      excerpt: 'Tres de los creadores más importantes se unen para un proyecto especial que se estrenará en abril.',
      date: '2026-03-21',
      category: 'INFLUENCER/POP',
      readTime: '4 min',
      content: '',
      tags: ['YouTube', 'Colaboración', 'Creadores', 'Contenido'],
      author: 'Ana López'
    },
    
    // TECNOLOGÍA - Carlos Méndez
    {
      slug: 'apple-inteligencia-artificial',
      title: 'Apple presenta su nueva plataforma de IA integrada',
      excerpt: 'La compañía revela "Apple Intelligence", su respuesta a ChatGPT y Gemini, integrada en todos sus dispositivos.',
      date: '2026-03-23',
      category: 'TECNOLOGÍA',
      readTime: '6 min',
      content: '',
      tags: ['Apple', 'IA', 'Inteligencia Artificial', 'Tecnología'],
      author: 'Carlos Méndez',
      isFeatured: true
    },
    {
      slug: 'tesla-robotaxi-anuncio',
      title: 'Tesla anuncia fecha de lanzamiento para su Robotaxi',
      excerpt: 'Elon Musk revela que el vehículo autónomo estará disponible en 2027 con capacidad de conducción nivel 5.',
      date: '2026-03-22',
      category: 'TECNOLOGÍA',
      readTime: '5 min',
      content: '',
      tags: ['Tesla', 'Robotaxi', 'Elon Musk', 'Autónomo'],
      author: 'Carlos Méndez'
    },
    {
      slug: 'meta-gafas-realidad-aumentada',
      title: 'Meta presenta sus nuevas gafas de realidad aumentada',
      excerpt: 'El sucesor de Ray-Ban Stories llega con capacidades avanzadas de IA y pantalla holográfica.',
      date: '2026-03-21',
      category: 'TECNOLOGÍA',
      readTime: '4 min',
      content: '',
      tags: ['Meta', 'Realidad Aumentada', 'Gafas', 'IA'],
      author: 'Carlos Méndez'
    },
    
    // DEPORTES - David Chen
    {
      slug: 'real-madrid-champions',
      title: 'Real Madrid se clasifica para semifinales de Champions',
      excerpt: 'El equipo blanco supera al Manchester City en una eliminatoria épica en el Santiago Bernabéu.',
      date: '2026-03-23',
      category: 'DEPORTES',
      readTime: '4 min',
      content: '',
      tags: ['Fútbol', 'Real Madrid', 'Champions League', 'Manchester City'],
      author: 'David Chen',
      isFeatured: true
    },
    {
      slug: 'nba-playoffs',
      title: 'Los Lakers se enfrentan a los Celtics en finales de conferencia',
      excerpt: 'La rivalidad histórica se reaviva en los playoffs de la NBA 2025-2026.',
      date: '2026-03-22',
      category: 'DEPORTES',
      readTime: '3 min',
      content: '',
      tags: ['NBA', 'Lakers', 'Celtics', 'Playoffs'],
      author: 'David Chen'
    },
    {
      slug: 'formula-1-gran-premio',
      title: 'Verstappen domina el Gran Premio de Australia',
      excerpt: 'El piloto de Red Bull consigue su tercera victoria consecutiva de la temporada.',
      date: '2026-03-21',
      category: 'DEPORTES',
      readTime: '3 min',
      content: '',
      tags: ['Fórmula 1', 'Verstappen', 'Red Bull', 'Australia'],
      author: 'David Chen'
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

// Función para obtener artículos relacionados
export function getRelatedPosts(currentSlug: string, limit: number = 3): Post[] {
  const posts = getPosts()
  const currentPost = posts.find(post => post.slug === currentSlug)
  
  if (!currentPost) return []
  
  // Calcular puntuación de relación para cada post
  const postsWithScore = posts
    .filter(post => post.slug !== currentSlug) // Excluir el post actual
    .map(post => {
      let score = 0
      
      // Misma categoría: +40 puntos
      if (post.category === currentPost.category) {
        score += 40
      }
      
      // Etiquetas comunes: +15 puntos por cada etiqueta común
      const commonTags = post.tags.filter(tag => currentPost.tags.includes(tag))
      score += commonTags.length * 15
      
      // Mismo autor: +10 puntos
      if (post.author === currentPost.author) {
        score += 10
      }
      
      // Post destacado: +5 puntos
      if (post.isFeatured) {
        score += 5
      }
      
      // Post de última hora: +5 puntos
      if (post.isBreaking) {
        score += 5
      }
      
      // Relevancia predefinida: añadir puntuación base
      if (post.relevanceScore) {
        score += post.relevanceScore
      }
      
      // Penalización por antigüedad: -1 punto por día de diferencia
      const currentDate = new Date(currentPost.date)
      const postDate = new Date(post.date)
      const dayDiff = Math.abs((currentDate.getTime() - postDate.getTime()) / (1000 * 3600 * 24))
      score -= Math.min(dayDiff, 30) // Máximo 30 puntos de penalización
      
      return { ...post, relationScore: score }
    })
    .sort((a, b) => b.relationScore - a.relationScore) // Ordenar por puntuación descendente
  
  return postsWithScore.slice(0, limit)
}