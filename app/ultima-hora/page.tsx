import { AlertTriangle, Clock, MapPin, Users, Zap } from 'lucide-react'
import NewsCard from '@/components/NewsCard'
import { getPostsByCategory } from '@/lib/posts'
import Link from 'next/link'

export default function UltimaHoraPage() {
  const ultimaHoraPosts = getPostsByCategory('ÚLTIMA HORA')
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-4 bg-red-100 rounded-full mb-6">
          <AlertTriangle className="h-12 w-12 text-red-600" />
        </div>
        <h1 className="text-4xl font-bold font-serif mb-4">ÚLTIMA HORA</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Noticias de última hora, emergencias y acontecimientos en desarrollo. Información verificada 
          y actualizada minuto a minuto.
        </p>
      </div>

      {/* Alertas activas */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-red-100 rounded-lg">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-red-800">ALERTAS ACTIVAS</h2>
        </div>
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-6 border border-red-200">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-red-600" />
                  <span className="font-bold text-red-700">MADRID CENTRO</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Incendio en edificio Gran Vía</h3>
                <p className="text-gray-600 mb-3">
                  Los bomberos trabajan para controlar las llamas en un edificio histórico. 
                  Se ha desalojado la zona. Evite la circulación por la zona.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Actualizado: 14:30</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>12 unidades bomberos</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="inline-flex items-center px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                  <Zap className="h-3 w-3 mr-1" />
                  EN CURSO
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-yellow-200">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-yellow-600" />
                  <span className="font-bold text-yellow-700">COSTA MEDITERRÁNEA</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Alerta por fuertes lluvias</h3>
                <p className="text-gray-600 mb-3">
                  La AEMET activa avisos naranja por riesgo de inundaciones en Valencia, 
                  Alicante y Murcia. Precipitaciones intensas previstas.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Válido hasta: 20:00</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>Aviso naranja activo</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  ALERTA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Últimas noticias */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold font-serif">ÚLTIMAS NOTICIAS</h2>
          <div className="text-sm text-gray-500 flex items-center gap-1">
            <Clock className="h-4 w-4" />
            Actualizado minuto a minuto
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {ultimaHoraPosts.map((post) => (
            <NewsCard key={post.slug} post={post} variant="default" />
          ))}
        </div>
      </section>

      {/* Mapa de incidentes */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold font-serif mb-8 border-b-2 border-gray-300 pb-4">INCIDENTES POR ZONA</h2>
        
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
              <div className="text-3xl font-bold text-red-600 mb-2">3</div>
              <p className="text-gray-600">Incendios activos</p>
              <p className="text-xs text-gray-500 mt-1">Madrid, Barcelona, Valencia</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
              <div className="text-3xl font-bold text-yellow-600 mb-2">12</div>
              <p className="text-gray-600">Alertas meteorológicas</p>
              <p className="text-xs text-gray-500 mt-1">Costas y montaña</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
              <p className="text-gray-600">Protestas en curso</p>
              <p className="text-xs text-gray-500 mt-1">Transporte, educación</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
              <div className="text-3xl font-bold text-green-600 mb-2">47</div>
              <p className="text-gray-600">Emergencias atendidas</p>
              <p className="text-xs text-gray-500 mt-1">Últimas 24 horas</p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="font-bold text-lg mb-4">RECOMENDACIONES DE SEGURIDAD</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold mb-2">En caso de incendio</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Mantenga la calma y llame al 112</li>
                  <li>• No utilice ascensores</li>
                  <li>• Cierre puertas al salir</li>
                  <li>• Siga las indicaciones de bomberos</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold mb-2">En alertas meteorológicas</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Evite zonas inundables</li>
                  <li>• No circule por carreteras afectadas</li>
                  <li>• Tenga preparado kit de emergencia</li>
                  <li>• Siga las indicaciones de Protección Civil</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios de emergencia */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold font-serif mb-8 border-b-2 border-gray-300 pb-4">SERVICIOS DE EMERGENCIA</h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { name: 'Emergencias', number: '112', description: 'Todas las emergencias' },
            { name: 'Bomberos', number: '080', description: 'Incendios y rescates' },
            { name: 'Policía', number: '091', description: 'Seguridad ciudadana' },
            { name: 'Urgencias médicas', number: '061', description: 'Atención sanitaria' }
          ].map((servicio) => (
            <div key={servicio.name} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-red-300 transition text-center">
              <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">{servicio.name}</h3>
              <div className="text-2xl font-bold text-red-600 mb-2">{servicio.number}</div>
              <p className="text-sm text-gray-600">{servicio.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Información oficial */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold font-serif mb-8 border-b-2 border-gray-300 pb-4">INFORMACIÓN OFICIAL</h2>
        
        <div className="bg-blue-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-4 text-blue-800">Fuentes verificadas</h3>
          <p className="text-gray-700 mb-6">
            Toda la información publicada en esta sección proviene de fuentes oficiales verificadas 
            y se actualiza en tiempo real. En situaciones de emergencia, siga siempre las indicaciones 
            de las autoridades competentes.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <a 
              href="https://www.mitma.gob.es" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition text-center"
            >
              <p className="font-medium">Ministerio del Interior</p>
            </a>
            
            <a 
              href="https://www.aemet.es" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition text-center"
            >
              <p className="font-medium">AEMET</p>
            </a>
            
            <a 
              href="https://www.proteccioncivil.es" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition text-center"
            >
              <p className="font-medium">Protección Civil</p>
            </a>
          </div>
        </div>
      </section>

      {/* Breadcrumb y navegación */}
      <div className="border-t border-gray-200 pt-8 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            <Link href="/" className="text-gray-400 hover:text-red-600 transition">
              Inicio
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">ÚLTIMA HORA</span>
          </div>
          
          <div className="flex gap-4">
            <Link 
              href="/tecnologia"
              className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition"
            >
              ← Tecnología
            </Link>
            
            <Link 
              href="/"
              className="px-6 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition"
            >
              Volver al inicio
            </Link>
            
            <Link 
              href="/esports"
              className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition"
            >
              ESPORTS →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}