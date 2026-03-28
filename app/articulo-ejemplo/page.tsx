import Link from 'next/link'
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, Bookmark } from 'lucide-react'
import { getRelatedPosts } from '@/lib/posts'

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

export default function ArticuloEjemplo() {
  // Obtener artículos relacionados (basados en el artículo actual "incendio-edificio-madrid")
  const relatedPosts = getRelatedPosts('incendio-edificio-madrid', 3)

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
              ÚLTIMA HORA
            </span>
          </div>

          {/* Título */}
          <h1 className="text-4xl md:text-5xl font-black text-gray-950 leading-tight mb-6">
            Gran incendio en edificio histórico del centro de Madrid: Bomberos trabajan para controlar las llamas
          </h1>

          {/* Metadatos */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="font-medium">María Rodríguez</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime="2026-03-23">23 de marzo de 2026</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>5 min de lectura</span>
            </div>
          </div>

          {/* Imagen destacada */}
          <div className="mb-10">
            <div className="relative w-full h-64 md:h-96 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl font-bold mb-2">📰</div>
                  <p className="text-lg font-medium">Imagen: Incendio en edificio histórico</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-black/70 text-white text-xs px-3 py-1.5 rounded">
                Foto: Bomberos de Madrid
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-3 text-center">
              Los bomberos trabajan en el control del incendio en un edificio histórico de la calle Gran Vía.
            </p>
          </div>
        </header>

        {/* Contenido principal */}
        <div className="prose prose-lg max-w-none">
          {/* Lead / Entradilla */}
          <div className="bg-red-50 border-l-4 border-red-600 pl-6 py-4 mb-8">
            <p className="text-xl font-semibold text-gray-800 italic">
              Un incendio de grandes proporciones se declaró esta tarde en un edificio histórico de la calle Gran Vía. 
              Los bomberos trabajan intensamente para controlar las llamas mientras se procede a la evacuación de residentes.
            </p>
          </div>

          {/* Párrafos del artículo */}
          <div className="space-y-6 text-gray-800 leading-relaxed">
            <p className="text-lg">
              <strong>Madrid, 23 de marzo de 2026</strong> - Un incendio de origen aún por determinar se ha declarado 
              esta tarde en un edificio histórico situado en el número 45 de la calle Gran Vía, en pleno centro de Madrid. 
              El fuego, que comenzó alrededor de las 16:30 horas, ha provocado una importante movilización de los servicios 
              de emergencia.
            </p>

            <p>
              Según fuentes del Cuerpo de Bomberos de Madrid, <strong>más de 50 efectivos</strong> trabajan en la extinción 
              del incendio, que afecta principalmente a la tercera y cuarta planta del inmueble, construido en 1928 y 
              catalogado como Bien de Interés Cultural. Hasta el momento, no se han registrado víctimas mortales, aunque 
              tres personas han sido atendidas por inhalación de humo y trasladadas al Hospital Clínico San Carlos como 
              medida preventiva.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Evacuación ordenada</h2>

            <p>
              La Policía Municipal ha establecido un <strong>perímetro de seguridad</strong> de 200 metros alrededor del 
              edificio, afectando al tráfico en la zona. Los residentes de los edificios colindantes han sido evacuados 
              de manera preventiva, mientras los bomberos intentan evitar que el fuego se propague a otras construcciones.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
              <h3 className="font-bold text-lg mb-4 text-gray-900">📋 DATOS CLAVE DEL INCENDIO</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-red-100 text-red-600 rounded-full p-1 mt-0.5">
                    <div className="h-2 w-2"></div>
                  </div>
                  <span><strong>Hora de inicio:</strong> 16:30 horas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-100 text-red-600 rounded-full p-1 mt-0.5">
                    <div className="h-2 w-2"></div>
                  </div>
                  <span><strong>Efectivos movilizados:</strong> 50 bomberos, 12 vehículos</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-100 text-red-600 rounded-full p-1 mt-0.5">
                    <div className="h-2 w-2"></div>
                  </div>
                  <span><strong>Personas evacuadas:</strong> 85 residentes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-red-100 text-red-600 rounded-full p-1 mt-0.5">
                    <div className="h-2 w-2"></div>
                  </div>
                  <span><strong>Heridos leves:</strong> 3 personas (inhalación de humo)</span>
                </li>
              </ul>
            </div>

            <p>
              El portavoz de Bomberos, <strong>Carlos Gutiérrez</strong>, ha informado a los medios que "la situación 
              está siendo especialmente complicada debido a la antigüedad del edificio y a la presencia de materiales 
              inflamables en su estructura". Los equipos están utilizando <strong>escaleras telescópicas y mangueras de 
              gran caudal</strong> para intentar controlar las llamas desde el exterior, mientras otros grupos acceden 
              al interior con equipos de respiración autónoma.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Reacción institucional</h2>

            <p>
              La alcaldesa de Madrid, <strong>Martina Sánchez</strong>, se ha desplazado a la zona para seguir de cerca 
              la evolución de los hechos. En declaraciones a EL INFORMADOR, ha afirmado que "la prioridad absoluta es 
              la seguridad de las personas" y ha anunciado que el Ayuntamiento habilitará un <strong>punto de atención 
              temporal</strong> en el Centro Cultural Conde Duque para los vecinos evacuados.
            </p>

            <p>
              Por su parte, la Comunidad de Madrid ha activado el <strong>Plan de Emergencias por Incendios en Edificios 
              Históricos</strong>, coordinando la actuación de todos los servicios implicados. El consejero de Interior, 
              <strong> David López</strong>, ha destacado la "rápida y eficaz respuesta" de los servicios de emergencia 
              y ha pedido a los ciudadanos que eviten acercarse a la zona para facilitar las labores de extinción.
            </p>

            <div className="border-l-4 border-blue-600 pl-6 py-4 my-8 bg-blue-50">
              <p className="text-gray-800">
                <strong>🚨 ACTUALIZACIÓN 18:45:</strong> Los bomberos informan que han conseguido <strong>controlar el 
                70% del incendio</strong>. Las llamas ya no amenazan con extenderse a edificios colindantes. Se mantiene 
                el perímetro de seguridad mientras continúan las labores de extinción.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">Tráfico y transporte afectado</h2>

            <p>
              El incendio ha provocado importantes <strong>alteraciones en el tráfico</strong> del centro de Madrid. 
              La calle Gran Vía permanece cortada entre Callao y Plaza de España, y se recomienda evitar la zona. 
              La EMT ha desviado varias líneas de autobús (1, 2, 44, 74, 146) y se han habilitado rutas alternativas.
            </p>

            <p>
              El Metro de Madrid ha informado que las estaciones de <strong>Gran Vía (L1, L5) y Callao (L3, L5)</strong> 
              funcionan con normalidad, aunque con mayor afluencia de pasajeros debido a las restricciones en superficie. 
              Se recomienda a los usuarios planificar sus desplazamientos con antelación.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Tag className="h-5 w-5 text-gray-500" />
              <span className="font-medium text-gray-700">Etiquetas:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Madrid', 'Incendio', 'Emergencia', 'Bomberos', 'Gran Vía', 'Evacuación', 'Tráfico', 'Edificio Histórico'].map((tag) => (
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
                <h3 className="font-bold text-gray-900 mb-1">María Rodríguez</h3>
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