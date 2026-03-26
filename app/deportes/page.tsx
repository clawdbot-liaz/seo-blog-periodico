import { Trophy, Users, Calendar, TrendingUp, Car } from 'lucide-react'
import NewsCard from '@/components/NewsCard'
import { getPostsByCategory } from '@/lib/posts'
import Link from 'next/link'

export default function DeportesPage() {
  const deportesPosts = getPostsByCategory('DEPORTES')
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-4 bg-red-100 rounded-full mb-6">
          <Trophy className="h-12 w-12 text-red-600" />
        </div>
        <h1 className="text-4xl font-bold font-serif mb-4">DEPORTES</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          La cobertura deportiva más completa. Fútbol, baloncesto, tenis, Fórmula 1 y todos los deportes 
          con análisis, resultados y noticias en tiempo real.
        </p>
      </div>

      {/* Estadísticas destacadas */}
      <div className="bg-gray-50 rounded-2xl p-8 mb-12 border border-gray-200">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <TrendingUp className="h-6 w-6 text-red-600" />
          DEPORTES EN CIFRAS
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-red-600 mb-2">3.5B</div>
            <p className="text-gray-600">Aficionados al fútbol</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-red-600 mb-2">$600B</div>
            <p className="text-gray-600">Industria global</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-red-600 mb-2">200+</div>
            <p className="text-gray-600">Deportes olímpicos</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-red-600 mb-2">1.2B</div>
            <p className="text-gray-600">Espectadores NFL</p>
          </div>
        </div>
      </div>

      {/* Últimas noticias */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold font-serif">ÚLTIMAS NOTICIAS</h2>
          <div className="text-sm text-gray-500">
            <Calendar className="inline h-4 w-4 mr-1" />
            Actualizado en tiempo real
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {deportesPosts.map((post) => (
            <NewsCard key={post.slug} post={post} variant="default" />
          ))}
        </div>
      </section>

      {/* Deportes principales */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold font-serif mb-8 border-b-2 border-gray-300 pb-4">DEPORTES PRINCIPALES</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-red-300 transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <Trophy className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold">Fútbol</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Champions League, LaLiga, Premier League, Copa del Rey y todas las competiciones.
            </p>
            <div className="text-sm text-gray-500">
              <Users className="inline h-4 w-4 mr-1" />
              Competición más vista del mundo
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-red-300 transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <Trophy className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold">Baloncesto</h3>
            </div>
            <p className="text-gray-600 mb-4">
              NBA, Euroliga, ACB y competiciones internacionales. Análisis y resultados.
            </p>
            <div className="text-sm text-gray-500">
              <Users className="inline h-4 w-4 mr-1" />
              450M+ aficionados globales
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-red-300 transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <Car className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold">Fórmula 1</h3>
            </div>
            <p className="text-gray-600 mb-4">
              El campeonato mundial de automovilismo. Grandes Premios, equipos y pilotos.
            </p>
            <div className="text-sm text-gray-500">
              <Users className="inline h-4 w-4 mr-1" />
              1.5B espectadores por temporada
            </div>
          </div>
        </div>
      </section>

      {/* Próximos eventos */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold font-serif mb-8 border-b-2 border-gray-300 pb-4">PRÓXIMOS EVENTOS</h2>
        
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-6">
              <h3 className="font-bold text-lg mb-3">Final Champions League</h3>
              <p className="text-gray-600 mb-2">Estambul, Turquía</p>
              <p className="text-sm text-gray-500">Mayo 30, 2026</p>
              <p className="text-sm text-red-600 font-medium mt-2">Estadio Olímpico Atatürk</p>
            </div>
            
            <div className="p-6">
              <h3 className="font-bold text-lg mb-3">Finales NBA</h3>
              <p className="text-gray-600 mb-2">Estados Unidos</p>
              <p className="text-sm text-gray-500">Junio 5-20, 2026</p>
              <p className="text-sm text-red-600 font-medium mt-2">Mejor de 7 partidos</p>
            </div>
            
            <div className="p-6">
              <h3 className="font-bold text-lg mb-3">Gran Premio de Mónaco</h3>
              <p className="text-gray-600 mb-2">Montecarlo, Mónaco</p>
              <p className="text-sm text-gray-500">Mayo 24, 2026</p>
              <p className="text-sm text-red-600 font-medium mt-2">Circuito más prestigioso</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ligas y competiciones */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold font-serif mb-8 border-b-2 border-gray-300 pb-4">LIGAS Y COMPETICIONES</h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { name: 'LaLiga', country: 'España', type: 'Fútbol' },
            { name: 'Premier League', country: 'Inglaterra', type: 'Fútbol' },
            { name: 'NBA', country: 'EE.UU./Canadá', type: 'Baloncesto' },
            { name: 'Fórmula 1', country: 'Mundial', type: 'Automovilismo' }
          ].map((liga) => (
            <div key={liga.name} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-red-300 transition">
              <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-center">{liga.name}</h3>
              <p className="text-sm text-gray-600 text-center">{liga.country}</p>
              <p className="text-xs text-gray-500 text-center mt-1">{liga.type}</p>
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
            <span className="text-gray-700">DEPORTES</span>
          </div>
          
          <div className="flex gap-4">
            <Link 
              href="/esports"
              className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition"
            >
              ← ESPORTS
            </Link>
            
            <Link 
              href="/"
              className="px-6 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition"
            >
              Volver al inicio
            </Link>
            
            <Link 
              href="/influencer-pop"
              className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition"
            >
              Influencer/Pop →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}