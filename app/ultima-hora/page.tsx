import { AlertTriangle } from 'lucide-react'
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

      {/* Últimas noticias */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold font-serif">ÚLTIMAS NOTICIAS</h2>
          <div className="text-sm text-gray-500 flex items-center gap-1">
            <AlertTriangle className="h-4 w-4 text-red-500" />
            Actualizado minuto a minuto
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {ultimaHoraPosts.length > 0 ? (
            ultimaHoraPosts.map((post) => (
              <NewsCard key={post.slug} post={post} variant="default" />
            ))
          ) : (
            <div className="col-span-3 bg-gray-50 rounded-2xl p-12 text-center border border-gray-200">
              <div className="inline-flex items-center justify-center p-4 bg-gray-100 rounded-full mb-6">
                <AlertTriangle className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-700 mb-3">No hay noticias de última hora</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                No hay noticias publicadas en esta categoría. Las noticias de última hora aparecerán aquí cuando se publiquen.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Servicios de emergencia (versión simplificada) */}
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