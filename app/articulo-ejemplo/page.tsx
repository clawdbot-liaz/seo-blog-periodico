import Link from 'next/link'
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, Bookmark } from 'lucide-react'
import { getRelatedPosts, getPostBySlug } from '@/lib/posts'

// Función para obtener el color de la categoría
function getCategoryColor(category: string) {
  switch (category) {
    case 'ÚLTIMA HORA':
      return 'bg-red-600'
    case 'ESPORTS':
      return 'bg-blue-600'
    case 'DEPORTES':
      return 'bg-amber-500'
    case 'INFLUENCER/POP':
      return 'bg-purple-600'
    case 'TECNOLOGÍA':
      return 'bg-emerald-600'
    default:
      return 'bg-gray-600'
  }
}

// Función para formatear la fecha
function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })
}

// Datos del artículo real (Accidente tren alta velocidad)
const currentArticle = {
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
  isFeatured: true
}

export default function ArticuloEjemplo() {
  // Obtener artículos relacionados (basados en el artículo actual)
  const relatedPosts = getRelatedPosts(currentArticle.slug, 3)

  return (
    <div className="min-h-screen bg-[#f5f4f0]">
      {/* Header del artículo */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors text-sm font-medium no-underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a portada
            </Link>
            
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Guardar">
                <Bookmark className="h-5 w-5 text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Compartir">
                <Share2 className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido del artículo */}
      <article className="container mx-auto px-4 md:px-8 py-8 max-w-4xl">
        
        {/* Cabecera del artículo */}
        <header className="mb-10">
          {/* Categoría */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-red-600 text-white px-3 py-1.5 text-xs font-bold tracking-widest uppercase">
              {currentArticle.category}
            </span>
          </div>

          {/* Título */}
          <h1 className="text-4xl md:text-5xl font-black text-gray-950 leading-tight mb-6">
            {currentArticle.title}
          </h1>

          {/* Metadatos */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="font-medium">{currentArticle.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={currentArticle.date}>
                {new Date(currentArticle.date).toLocaleDateString('es-ES', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{currentArticle.readTime} de lectura</span>
            </div>
          </div>

          {/* Imagen destacada */}
          <div className="mb-10">
            <div className="relative w-full h-64 md:h-96 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl font-bold mb-2">🚆</div>
                  <p className="text-lg font-medium">Imagen: Tren AVE en la vía</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-black/70 text-white text-xs px-3 py-1.5 rounded">
                Foto: Servicios de emergencia
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-3 text-center">
              Los servicios de emergencia trabajan en el lugar del accidente cerca de la estación de Casetas, Zaragoza.
            </p>
          </div>
        </header>

        {/* Contenido principal */}
        <div className="prose prose-lg max-w-none">
          {/* Lead / Entradilla */}
          <div className="bg-red-50 border-l-4 border-red-600 pl-6 py-4 mb-8">
            <p className="text-xl font-semibold text-gray-800 italic">
              {currentArticle.excerpt}
            </p>
          </div>

          {/* Párrafos del artículo */}
          <div className="space-y-6 text-gray-800 leading-relaxed">
            <p className="text-lg">
              <strong>Zaragoza, 28 de marzo de 2026</strong> - {currentArticle.content}
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Respuesta de emergencia inmediata</h2>

            <p>
              Los servicios de emergencia fueron alertados del accidente a las 8:47 horas, apenas dos minutos después de que ocurriera el incidente. 
              <strong> Doce ambulancias, ocho vehículos de bomberos y tres helicópteros medicalizados</strong> se desplazaron inmediatamente a la zona. 
              El Centro de Coordinación de Emergencias de Aragón activó el <strong>Plan de Emergencias por Accidente Ferroviario</strong>, 
              movilizando a más de 150 efectivos.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
              <h3 className="font-bold text-lg mb-4 text-gray-900">📋 DATOS CLAVE DEL ACCIDENTE</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-red-100 text-red-600 rounded-full p-1 mt-0.5">
                    <div className="h-2 w-2"></div>
                  </div>
                  <span><strong>Hora del accidente:</strong> 8:45 horas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-100 text-red-600 rounded-full p-1 mt-0.5">
                    <div className="h-2 w-2"></div>
                  </div>
                  <span><strong>Pasajeros a bordo:</strong> 187 personas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-100 text-red-600 rounded-full p-1 mt-0.5">
                    <div className="h-2 w-2"></div>
                  </div>
                  <span><strong>Heridos leves:</strong> 12 personas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-100 text-red-600 rounded-full p-1 mt-0.5">
                    <div className="h-2 w-2"></div>
                  </div>
                  <span><strong>Efectivos movilizados:</strong> 150 profesionales</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-100 text-red-600 rounded-full p-1 mt-0.5">
                    <div className="h-2 w-2"></div>
                  </div>
                  <span><strong>Vehículos de emergencia:</strong> 23 unidades</span>
                </li>
              </ul>
            </div>

            <p>
              El presidente de Renfe, <strong>Raúl Blanco</strong>, se ha desplazado a Zaragoza para seguir de cerca la situación. 
              En declaraciones a los medios, ha afirmado que "la prioridad absoluta es la atención a los pasajeros" y ha anunciado 
              que la compañía ha activado su <strong>protocolo de asistencia a viajeros</strong>, que incluye atención psicológica, 
              realojamiento en hoteles y reprogramación de viajes sin coste adicional.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Tráfico ferroviario afectado</h2>

            <p>
              El accidente ha provocado la <strong>interrupción total del tráfico ferroviario</strong> en la línea de alta velocidad 
              Madrid-Barcelona. Renfe ha suspendido temporalmente todos los servicios AVE y Avant en este corredor, afectando a 
              más de 15.000 pasajeros que tenían reservas para hoy. La compañía ha habilitado <strong>autobuses de sustitución</strong> 
              para los trayectos más urgentes y recomienda a los viajeros consultar su página web para obtener información actualizada.
            </p>

            <div className="border-l-4 border-blue-600 pl-6 py-4 my-8 bg-blue-50">
              <p className="text-gray-800">
                <strong>🚨 ACTUALIZACIÓN 11:30:</strong> Renfe informa que los <strong>12 heridos leves han sido dados de alta</strong> 
                tras ser atendidos en el Hospital Miguel Servet. Todos los pasajeros han sido evacuados del tren y se encuentran 
                en un centro de atención temporal habilitado en la estación de Zaragoza-Delicias.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Investigación de causas</h2>

            <p>
              La <strong>Comisión de Investigación de Accidentes Ferroviarios (CIAF)</strong> ha iniciado ya las diligencias para 
              determinar las causas del accidente. Un equipo de peritos se ha desplazado al lugar para examinar la vía, el material 
              rodante y los sistemas de señalización. Las primeras hipótesis apuntan a un <strong>problema técnico en el sistema de frenos</strong> 
              o a un objeto en la vía, aunque la investigación oficial podría tardar varias semanas en ofrecer conclusiones definitivas.
            </p>

            <p>
              El Ministerio de Transportes ha convocado una <strong>reunión de urgencia</strong> para evaluar la situación y coordinar 
              la respuesta con las comunidades autónomas afectadas. La ministra, <strong>Isabel Pardo</strong>, ha expresado su 
              "profunda preocupación" por lo sucedido y ha garantizado que se hará "todo lo necesario" para asistir a los afectados 
              y prevenir futuros incidentes.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Tag className="h-5 w-5 text-gray-500" />
              <span className="font-medium text-gray-700">Etiquetas:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {currentArticle.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Autor - Versión simplificada */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold">
                MR
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{currentArticle.author}</h3>
                <p className="text-gray-600 text-sm">
                  Redactora de la sección de Última Hora.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Artículos relacionados - Con lógica funcional */}
      <section className="bg-white border-t border-gray-200 mt-12">
        <div className="container mx-auto px-4 md:px-8 py-12">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Artículos relacionados</h2>
          
          {relatedPosts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <div 
                  key={post.slug} 
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white"
                >
                  <div className="p-6">
                    {/* Categoría */}
                    <span className={`inline-block ${getCategoryColor(post.category)} text-white text-xs font-bold px-3 py-1 rounded-full mb-4`}>
                      {post.category}
                    </span>
                    
                    {/* Título */}
                    <h3 className="font-bold text-lg mb-3 text-gray-900 hover:text-red-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    {/* Extracto */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    {/* Metadatos */}
                    <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                      <span>{post.author}</span>
                      <span>{formatDate(post.date)}</span>
                    </div>
                    
                    {/* Debug: Mostrar puntuación de relación (solo en desarrollo) */}
                    {process.env.NODE_ENV === 'development' && post.relationScore && (
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <div className="text-xs text-gray-400">
                          Relevancia: <span className="font-bold">{post.relationScore.toFixed(1)} puntos</span>
                          <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                            <div 
                              className="bg-green-500 h-1.5 rounded-full" 
                              style={{ width: `${Math.min(post.relationScore, 100)}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <p>No hay artículos relacionados disponibles en este momento.</p>
            </div>
          )}
          
          {/* Información sobre el algoritmo */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <details className="text-sm text-gray-500">
              <summary className="cursor-pointer hover:text-gray-700">
                ℹ️ ¿Cómo se seleccionan los artículos relacionados?
              </summary>
              <div className="mt-3 space-y-2 text-xs">
                <p>Los artículos se seleccionan mediante un algoritmo que considera:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Misma categoría</strong> (+40 puntos)</li>
                  <li><strong>Etiquetas comunes</strong> (+15 por cada etiqueta compartida)</li>
                  <li><strong>Mismo autor</strong> (+10 puntos)</li>
                  <li><strong>Contenido destacado</strong> (+5 puntos)</li>
                  <li><strong>Actualidad</strong> (-1 punto por cada día de diferencia)</li>
                  <li><strong>Relevancia predefinida</strong> (puntuación base del artículo)</li>
                </ul>
                <p className="mt-2 text-gray-400">
                  Los 3 artículos con mayor puntuación total se muestran como relacionados.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}