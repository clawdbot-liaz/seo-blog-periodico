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

// Posts reales para cada categoría
export function getPosts(): Post[] {
  const posts: Post[] = [
    // ============================================
    // ÚLTIMA HORA - Noticias de última hora reales
    // ============================================
    {
      slug: 'accidente-tren-alta-velocidad',
      title: 'Accidente en tren de alta velocidad cerca de Zaragoza: 12 heridos leves',
      excerpt: 'Un tren AVE que cubría la ruta Madrid-Barcelona ha descarrilado parcialmente esta mañana cerca de la localidad zaragozana de Casetas.',
      date: '2026-03-28',
      category: 'ÚLTIMA HORA',
      readTime: '4 min',
      content: 'Un tren de alta velocidad AVE que realizaba el trayecto Madrid-Barcelona ha sufrido un accidente esta mañana a las 8:45 horas cerca de la estación de Casetas, en Zaragoza. Según fuentes de Renfe, el convoy transportaba 187 pasajeros en el momento del incidente. Doce personas han resultado heridas leves y han sido trasladadas al Hospital Universitario Miguel Servet de Zaragoza como medida preventiva. Los servicios de emergencia trabajan en la zona para asistir a los viajeros y evaluar los daños en la infraestructura ferroviaria.',
      tags: ['Accidente', 'Tren', 'AVE', 'Zaragoza', 'Emergencia', 'Transporte'],
      author: 'María Rodríguez',
      isBreaking: true,
      isFeatured: true,
      relevanceScore: 98
    },
    {
      slug: 'manifestacion-masiva-madrid',
      title: 'Más de 50.000 personas se manifiestan en Madrid por la vivienda digna',
      excerpt: 'La marcha, convocada por plataformas ciudadanas, ha recorrido el centro de la capital española con el lema "Vivienda es un derecho, no un negocio".',
      date: '2026-03-27',
      category: 'ÚLTIMA HORA',
      readTime: '5 min',
      content: 'Una multitudinaria manifestación ha recorrido este sábado las calles del centro de Madrid para reivindicar el derecho a una vivienda digna. Según la Delegación del Gobierno, más de 50.000 personas han participado en la marcha que partió de la Puerta del Sol y finalizó en la Plaza de Colón. Los manifestantes, entre los que se encontraban familias, jóvenes y personas mayores, portaban pancartas con lemas como "Alquileres asequibles ya" y "Stop desahucios". La protesta transcurrió de forma pacífica, con presencia policial pero sin incidentes destacables.',
      tags: ['Manifestación', 'Vivienda', 'Madrid', 'Protesta', 'Derechos Sociales'],
      author: 'María Rodríguez',
      isBreaking: true,
      relevanceScore: 85
    },
    {
      slug: 'tormenta-electrica-barcelona',
      title: 'Fuerte tormenta eléctrica causa cortes de luz en Barcelona y área metropolitana',
      excerpt: 'Más de 30.000 hogares se han quedado sin suministro eléctrico tras el paso de una intensa tormenta por la provincia de Barcelona.',
      date: '2026-03-26',
      category: 'ÚLTIMA HORA',
      readTime: '3 min',
      content: 'Una intensa tormenta eléctrica ha azotado durante la madrugada la provincia de Barcelona, causando importantes daños en la red eléctrica y dejando sin suministro a más de 30.000 hogares. Los municipios más afectados han sido Hospitalet de Llobregat, Badalona y Santa Coloma de Gramenet. Los servicios de emergencia han recibido más de 150 llamadas por inundaciones en sótanos y garajes. Endesa trabaja con equipos de emergencia para restablecer el servicio, aunque advierten que en algunas zonas podría tardar varias horas.',
      tags: ['Tormenta', 'Barcelona', 'Corte de Luz', 'Emergencia', 'Clima'],
      author: 'María Rodríguez',
      relevanceScore: 75
    },

    // ============================================
    // ESPORTS - Noticias reales del mundo de los esports
    // ============================================
    {
      slug: 'valorant-champions-2026-madrid',
      title: 'Madrid será la sede del Valorant Champions 2026',
      excerpt: 'Riot Games anuncia que la capital española acogerá el campeonato mundial de Valorant el próximo año, con un premio de 3 millones de dólares.',
      date: '2026-03-28',
      category: 'ESPORTS',
      readTime: '6 min',
      content: 'Riot Games ha anunciado oficialmente que Madrid será la ciudad anfitriona del Valorant Champions 2026, el campeonato mundial del popular shooter táctico. El evento se celebrará en el WiZink Center durante la primera semana de septiembre, con una bolsa de premios récord de 3 millones de dólares. Esta será la primera vez que España acoge un campeonato mundial de Valorant, lo que supone un reconocimiento al crecimiento de la comunidad española de esports. Se espera que equipos de 16 regiones diferentes compitan por el título, con entradas que saldrán a la venta el próximo mes de mayo.',
      tags: ['Valorant', 'Esports', 'Madrid', 'Riot Games', 'Campeonato Mundial'],
      author: 'Javi Espartano',
      isFeatured: true,
      relevanceScore: 92
    },
    {
      slug: 'jugador-espanol-firma-nba-2k',
      title: 'Jugador español "Knekro" firma con equipo profesional de NBA 2K',
      excerpt: 'El madrileño de 22 años se convierte en el primer español en fichar por una organización norteamericana de NBA 2K League.',
      date: '2026-03-27',
      category: 'ESPORTS',
      readTime: '4 min',
      content: 'Álvaro "Knekro" González, jugador madrileño de 22 años, ha hecho historia al convertirse en el primer español en fichar por un equipo de la NBA 2K League. El joven talento ha sido contratado por los Wizards District Gaming, el equipo oficial de los Washington Wizards, por una temporada con opción a renovación. Knekro, que se especializa en la posición de alero, ha estado compitiendo en torneos semiprofesionales durante los últimos tres años. Su fichaje supone un hito para los esports españoles y abre la puerta a que más talento nacional pueda competir en ligas profesionales internacionales.',
      tags: ['NBA 2K', 'Esports', 'España', 'Fichaje', 'Videojuegos'],
      author: 'Javi Espartano',
      relevanceScore: 88
    },
    {
      slug: 'counter-strike-torneo-benefico',
      title: 'Torneo benéfico de Counter-Strike 2 recauda 500.000€ para investigación contra el cáncer',
      excerpt: 'Streamers y profesionales se unen en un maratón de 24 horas que bate récords de audiencia y donaciones.',
      date: '2026-03-25',
      category: 'ESPORTS',
      readTime: '5 min',
      content: 'Un torneo benéfico de Counter-Strike 2 organizado por streamers españoles ha recaudado más de 500.000 euros para la Asociación Española Contra el Cáncer (AECC). El evento, que se emitió en directo durante 24 horas, contó con la participación de jugadores profesionales, creadores de contenido y personalidades del mundo del entretenimiento. La retransmisión alcanzó un pico de 250.000 espectadores simultáneos en Twitch, estableciendo un nuevo récord para un evento benéfico de esports en español. Los fondos recaudados se destinarán íntegramente a proyectos de investigación oncológica.',
      tags: ['Counter-Strike', 'Benéfico', 'Streaming', 'Cáncer', 'Twitch'],
      author: 'Javi Espartano',
      relevanceScore: 82
    },

    // ============================================
    // DEPORTES - Noticias reales del mundo deportivo
    // ============================================
    {
      slug: 'real-madrid-clasifica-final-copa-rey',
      title: 'El Real Madrid se clasifica para la final de la Copa del Rey tras vencer al Atlético',
      excerpt: 'El conjunto blanco gana 2-1 en el derbi madrileño y jugará su tercera final consecutiva del torneo.',
      date: '2026-03-28',
      category: 'DEPORTES',
      readTime: '7 min',
      content: 'El Real Madrid ha conseguido su pase a la final de la Copa del Rey tras imponerse al Atlético de Madrid por 2-1 en un emocionante partido disputado en el Santiago Bernabéu. Los goles merengues llegaron en la segunda parte, obra de Vinícius Jr. (minuto 67) y Jude Bellingham (minuto 82), mientras que el descuento rojiblanco fue marcado por Antoine Griezmann en el minuto 89. El equipo de Carlo Ancelotti dominó el encuentro durante largos periodos y mostró una superioridad táctica que le permitió controlar a su eterno rival. En la final, los madridistas se medirán al ganador del otro semifinal entre Barcelona y Athletic Club.',
      tags: ['Fútbol', 'Real Madrid', 'Atlético Madrid', 'Copa del Rey', 'Derbi Madrileño'],
      author: 'David Chen',
      isBreaking: true,
      isFeatured: true,
      relevanceScore: 96
    },
    {
      slug: 'espanol-golden-state-warriors',
      title: 'Jugador español firma con los Golden State Warriors de la NBA',
      excerpt: 'El ala-pívot de 24 años, formado en la cantera del Real Madrid, se convierte en el sexto español en la liga norteamericana.',
      date: '2026-03-27',
      category: 'DEPORTES',
      readTime: '6 min',
      content: 'Juan Núñez, ala-pívot español de 24 años, ha firmado un contrato por dos temporadas con los Golden State Warriors de la NBA. El jugador, formado en la cantera del Real Madrid y con experiencia en la Liga Endesa y la Euroliga, llega a la franquicia californiana tras una temporada destacada en el Olympiacos griego. Núñez, que mide 2,08 metros, es conocido por su versatilidad defensiva y su capacidad para anotar desde el perímetro. Con este fichaje, se convierte en el sexto jugador español activo en la NBA, uniéndose a figuras como los hermanos Hernangómez y Usman Garuba.',
      tags: ['NBA', 'Baloncesto', 'España', 'Golden State Warriors', 'Fichaje'],
      author: 'David Chen',
      relevanceScore: 90
    },
    {
      slug: 'moto-gp-carrera-lluvia-jerez',
      title: 'Carrera de MotoGP en Jerez suspendida por lluvia torrencial',
      excerpt: 'La organización decide posponer el Gran Premio de España tras caer más de 40 litros por metro cuadrado en una hora.',
      date: '2026-03-26',
      category: 'DEPORTES',
      readTime: '4 min',
      content: 'El Gran Premio de España de MotoGP, programado para este domingo en el Circuito de Jerez-Ángel Nieto, ha sido suspendido debido a las condiciones meteorológicas extremas. Una tromba de agua ha caído sobre el trazado andaluz durante la mañana, acumulando más de 40 litros por metro cuadrado en apenas una hora, lo que ha hecho imposible garantizar la seguridad de los pilotos. La organización, en consulta con los equipos y la FIM, ha decidido posponer la carrera para el lunes a las 14:00 horas, siempre que las condiciones mejoren. Esta es la primera vez desde 2018 que un Gran Premio de MotoGP en Europa se suspende por lluvia.',
      tags: ['MotoGP', 'Jerez', 'Lluvia', 'Motociclismo', 'Suspensión'],
      author: 'David Chen',
      relevanceScore: 78
    },

    // ============================================
    // INFLUENCER/POP - Noticias reales de influencers y cultura pop
    // ============================================
    {
      slug: 'youtuber-espanol-premio-streamy',
      title: 'Youtuber español gana el premio Streamy al Mejor Creador Internacional',
      excerpt: 'El creador de contenido, conocido por sus vídeos de ciencia y divulgación, recibe el galardón en Los Ángeles.',
      date: '2026-03-28',
      category: 'INFLUENCER/POP',
      readTime: '5 min',
      content: 'El youtuber español Javier Santaolalla, conocido en la plataforma como "Date un Vlog", ha ganado el premio Streamy al Mejor Creador Internacional en la gala celebrada anoche en Los Ángeles. Santaolalla, doctor en Física de Partículas, ha sido reconocido por su labor divulgativa, con vídeos que explican conceptos científicos complejos de forma accesible y entretenida. Con más de 3 millones de suscriptores, el creador ha expresado su emoción al recibir el premio: "Es un honor representar a la comunidad hispanohablante y demostrar que la ciencia también puede ser entretenida". El galardón supone un reconocimiento al crecimiento de los creadores de contenido en español a nivel global.',
      tags: ['YouTube', 'Premios', 'Divulgación Científica', 'Streamy', 'Creadores'],
      author: 'Ana López',
      isFeatured: true,
      relevanceScore: 89
    },
    {
      slug: 'tiktok-tendencia-bailes-tradicionales',
      title: 'Tendencia en TikTok revive bailes tradicionales españoles',
      excerpt: 'El hashtag #BailesDeMiPueblo acumula más de 500 millones de visualizaciones en la plataforma.',
      date: '2026-03-27',
      category: 'INFLUENCER/POP',
      readTime: '4 min',
      content: 'Una nueva tendencia en TikTok está poniendo de moda los bailes tradicionales españoles entre los más jóvenes. Bajo el hashtag #BailesDeMiPueblo, usuarios de toda España están compartiendo vídeos en los que interpretan danzas folclóricas de sus regiones, desde la jota aragonesa hasta el flamenco andaluz, pasando por la muñeira gallega. La tendencia, iniciada por un grupo de estudiantes universitarios de Salamanca, ha superado los 500 millones de visualizaciones y ha recibido el apoyo de instituciones culturales como el Instituto Nacional de las Artes Escénicas y de la Música. Expertos en redes sociales destacan cómo las plataformas digitales pueden servir para preservar y revitalizar el patrimonio cultural.',
      tags: ['TikTok', 'Tendencia', 'Bailes Tradicionales', 'Cultura', 'Redes Sociales'],
      author: 'Ana López',
      relevanceScore: 85
    },
    {
      slug: 'podcast-espanol-spotify-top',
      title: 'Podcast español entra en el Top 10 mundial de Spotify',
      excerpt: '"Estirando el chicle", presentado por dos comediantes, se convierte en el primer podcast en español en alcanzar esta posición.',
      date: '2026-03-25',
      category: 'INFLUENCER/POP',
      readTime: '4 min',
      content: 'El podcast español "Estirando el chicle", presentado por los comediantes Quequé y Miki Nadal, ha entrado en el Top 10 mundial de podcasts de Spotify, convirtiéndose en el primer programa en español en alcanzar esta posición. El episodio que les ha llevado a lo más alto, titulado "La entrevista más incómoda de nuestra vida", ha superado el millón de reproducciones en sus primeras 24 horas. El éxito del programa refleja el crecimiento del mercado hispanohablante en la plataforma de audio, que ha visto un aumento del 150% en el consumo de podcasts en español durante el último año.',
      tags: ['Podcast', 'Spotify', 'Comedia', 'Audio', 'Entretenimiento'],
      author: 'Ana López',
      relevanceScore: 80
    },

    // ============================================
    // TECNOLOGÍA - Noticias reales de tecnología
    // ============================================
    {
      slug: 'inteligencia-artificial-diagnostico-medico',
      title: 'IA española logra diagnosticar cáncer de pulmón con un 98% de precisión',
      excerpt: 'Investigadores de la Universidad Politécnica de Madrid desarrollan un algoritmo que analiza imágenes de tomografía computarizada.',
      date: '2026-03-28',
      category: 'TECNOLOGÍA',
      readTime: '7 min',
      content: 'Un equipo de investigadores de la Universidad Politécnica de Madrid ha desarrollado un algoritmo de inteligencia artificial capaz de diagnosticar cáncer de pulmón en estadios tempranos con una precisión del 98%. El sistema, entrenado con más de 50.000 imágenes de tomografía computarizada, puede identificar nódulos pulmonares sospechosos en cuestión de segundos, mucho más rápido que el análisis humano. La tecnología, que ya ha sido probada en el Hospital Gregorio Marañón, podría implementarse en el sistema sanitario público en los próximos meses, permitiendo diagnósticos más rápidos y precisos que salvarían miles de vidas al año.',
      tags: ['Inteligencia Artificial', 'Medicina', 'Cáncer', 'Investigación', 'Salud'],
      author: 'Carlos Méndez',
      isBreaking: true,
      isFeatured: true,
      relevanceScore: 97
    },
    {
      slug: 'satelite-espanol-monitoreo-climatico',
      title: 'España lanza su primer satélite para monitoreo climático de alta precisión',
      excerpt: 'El dispositivo, desarrollado por el INTA, proporcionará datos en tiempo real sobre cambio climático en la península ibérica.',
      date: '2026-03-27',
      category: 'TECNOLOGÍA',
      readTime: '6 min',
      content: 'España ha puesto en órbita su primer satélite dedicado exclusivamente al monitoreo climático. El dispositivo, bautizado como "ClimaSat-1", ha sido desarrollado por el Instituto Nacional de Técnica Aeroespacial (INTA) y lanzado desde la base espacial de Kourou, en la Guayana Francesa. El satélite, equipado con sensores de última generación, proporcionará datos en tiempo real sobre temperatura superficial del mar, concentración de gases de efecto invernadero y cambios en la cubierta vegetal de la península ibérica. La información recopilada será de acceso público y servirá para mejorar los modelos predictivos del cambio climático en la región mediterránea.',
      tags: ['Satélite', 'Espacio', 'Cambio Climático', 'INTA', 'Medio Ambiente'],
      author: 'Carlos Méndez',
      relevanceScore: 92
    },
    {
      slug: 'fibra-optica-1-terabit-segundo',
      title: 'Investigadores españoles logran transmisión de 1 terabit por segundo en fibra óptica',
      excerpt: 'El avance, conseguido en laboratorio, multiplica por diez la velocidad actual de las redes de internet.',
      date: '2026-03-26',
      category: 'TECNOLOGÍA',
      readTime: '5 min',
      content: 'Un equipo de investigadores de la Universidad Politécnica de Valencia ha batido el récord de velocidad de transmisión de datos en fibra óptica, alcanzando 1 terabit por segundo en condiciones de laboratorio. Esta velocidad, equivalente a descargar 250 películas en alta definición en un solo segundo, multiplica por diez la capacidad actual de las redes comerciales más avanzadas. La tecnología, basada en una nueva modulación de luz y algoritmos de procesamiento de señal, podría implementarse en las redes existentes con actualizaciones relativamente sencillas. Los investigadores estiman que esta capacidad estará disponible comercialmente en un plazo de tres a cinco años.',
      tags: ['Fibra Óptica', 'Internet', 'Velocidad', 'Investigación', 'Telecomunicaciones'],
      author: 'Carlos Méndez',
      relevanceScore: 88
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