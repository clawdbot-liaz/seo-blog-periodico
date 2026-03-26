import { Cpu, Smartphone, Globe, Cpu as AI, Zap, TrendingUp } from 'lucide-react'
import NewsCard from '@/components/NewsCard'
import { getPostsByCategory } from '@/lib/posts'
import Link from 'next/link'

export default function TecnologiaPage() {
  const tecnologiaPosts = getPostsByCategory('TECNOLOGÍA')
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-4 bg-red-100 rounded-full mb-6">
          <Cpu className="h-12 w-12 text-red-600" />
        </div>
        <h1 className="text-4xl font-bold font-serif mb-4">TECNOLOGÍA</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Innovación, gadgets, inteligencia artificial y el futuro digital. Las últimas novedades 
          tecnológicas, análisis de productos y tendencias que están transformando el mundo.
        </p>
      </div>

      {/* Estadísticas destacadas */}
      <div className="bg-gray-50 rounded-2xl p-8 mb-12 border border-gray-200">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <TrendingUp className="h-6 w-6 text-red-600" />
          TECNOLOGÍA EN CIFRAS
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-red-600 mb-2">$5.3T</div>
            <p className="text-gray-600">Mercado tech global</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-red-600 mb-2">4.9B</div>
            <p className="text-gray-600">Usuarios de internet</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-red-600 mb-2">$94B</div>
            <p className="text-gray-600">Inversión en IA 2025</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-red-600 mb-2">28B</div>
            <p className="text-gray-600">Dispositivos IoT</p>
          </div>
        </div>
      </div>

      {/* Últimas noticias */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold font-serif">ÚLTIMAS NOTICIAS</h2>
          <div className="text-sm text-gray-500">
            Innovación en tiempo real
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {tecnologiaPosts.map((post) => (
            <NewsCard key={post.slug} post={post} variant="default" />
          ))}
        </div>
      </section>

      {/* Áreas principales */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold font-serif mb-8 border-b-2 border-gray-300 pb-4">ÁREAS PRINCIPALES</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-red-300 transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <AI className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold">Inteligencia Artificial</h3>
            </div>
            <p className="text-gray-600 mb-4">
              ChatGPT, Gemini, modelos generativos, machine learning y el futuro de la automatización.
            </p>
            <div className="text-sm text-gray-500">
              <Zap className="inline h-4 w-4 mr-1" />
              Revolución cada 6 meses
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-red-300 transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <Smartphone className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold">Dispositivos</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Smartphones, wearables, laptops, tablets y la próxima generación de hardware.
            </p>
            <div className="text-sm text-gray-500">
              <Globe className="inline h-4 w-4 mr-1" />
              6.9B smartphones activos
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-red-300 transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <Globe className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold">Internet y Cloud</h3>
            </div>
            <p className="text-gray-600 mb-4">
              5G, 6G, computación en la nube, edge computing y la infraestructura digital.
            </p>
            <div className="text-sm text-gray-500">
              <Cpu className="inline h-4 w-4 mr-1" />
              $800B mercado cloud
            </div>
          </div>
        </div>
      </section>

      {/* Próximos lanzamientos */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold font-serif mb-8 border-b-2 border-gray-300 pb-4">PRÓXIMOS LANZAMIENTOS</h2>
        
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-6">
              <h3 className="font-bold text-lg mb-3">Apple iPhone 16 Pro</h3>
              <p className="text-gray-600 mb-2">Septiembre 2026</p>
              <p className="text-sm text-gray-500">IA integrada, cámara 48MP</p>
              <p className="text-sm text-red-600 font-medium mt-2">Desde $1,199</p>
            </div>
            
            <div className="p-6">
              <h3 className="font-bold text-lg mb-3">Tesla Model 3 2027</h3>
              <p className="text-gray-600 mb-2">Marzo 2027</p>
              <p className="text-sm text-gray-500">Autonomía 500km, FSD completo</p>
              <p className="text-sm text-red-600 font-medium mt-2">Desde $39,990</p>
            </div>
            
            <div className="p-6">
              <h3 className="font-bold text-lg mb-3">Meta Quest 4</h3>
              <p className="text-gray-600 mb-2">Octubre 2026</p>
              <p className="text-sm text-gray-500">Realidad mixta, 8K por ojo</p>
              <p className="text-sm text-red-600 font-medium mt-2">Desde $499</p>
            </div>
          </div>
        </div>
      </section>

      {/* Empresas líderes */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold font-serif mb-8 border-b-2 border-gray-300 pb-4">EMPRESAS LÍDERES</h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { name: 'Apple', value: '$3.1T', focus: 'Hardware & Software' },
            { name: 'Microsoft', value: '$2.8T', focus: 'Cloud & IA' },
            { name: 'Google', value: '$1.9T', focus: 'Búsqueda & Android' },
            { name: 'NVIDIA', value: '$2.2T', focus: 'Chips IA' }
          ].map((empresa) => (
            <div key={empresa.name} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-red-300 transition">
              <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-center">{empresa.name}</h3>
              <p className="text-sm text-gray-600 text-center">{empresa.value}</p>
              <p className="text-xs text-gray-500 text-center mt-1">{empresa.focus}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tendencias futuras */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold font-serif mb-8 border-b-2 border-gray-300 pb-4">TENDENCIAS FUTURAS</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4 text-red-800">Computación Cuántica</h3>
            <p className="text-gray-700 mb-4">
              La próxima frontera computacional. Mientras los ordenadores clásicos alcanzan sus límites, 
              la computación cuántica promete resolver problemas imposibles para la tecnología actual.
            </p>
            <div className="text-sm text-gray-600">
              <Zap className="inline h-4 w-4 mr-1" />
              $10B inversión global 2025-2030
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">Realidad Extendida</h3>
            <p className="text-gray-700 mb-4">
              AR, VR y MR están convergiendo hacia dispositivos todo-en-uno que redefinirán cómo 
              trabajamos, aprendemos y nos entretenemos. Apple Vision Pro marca el inicio de esta era.
            </p>
            <div className="text-sm text-gray-600">
              <Globe className="inline h-4 w-4 mr-1" />
              $300B mercado estimado 2030
            </div>
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
            <span className="text-gray-700">TECNOLOGÍA</span>
          </div>
          
          <div className="flex gap-4">
            <Link 
              href="/influencer-pop"
              className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition"
            >
              ← Influencer/Pop
            </Link>
            
            <Link 
              href="/"
              className="px-6 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition"
            >
              Volver al inicio
            </Link>
            
            <Link 
              href="/ultima-hora"
              className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition"
            >
              Última Hora →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}