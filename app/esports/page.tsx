import { Trophy, Users, Calendar, TrendingUp } from 'lucide-react'
import NewsCard from '@/components/NewsCard'
import { getPostsByCategory } from '@/lib/posts'
import Link from 'next/link'

export default function EsportsPage() {
  const esportsPosts = getPostsByCategory('ESPORTS')
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-4 bg-red-100 rounded-full mb-6">
          <Trophy className="h-12 w-12 text-red-600" />
        </div>
        <h1 className="text-4xl font-bold font-serif mb-4">ESPORTS</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          La sección definitiva de deportes electrónicos. Noticias, análisis, resultados y todo sobre 
          Counter-Strike 2, Valorant, League of Legends y los principales torneos competitivos.
        </p>
      </div>



      {/* Últimas noticias */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold font-serif">ÚLTIMAS NOTICIAS</h2>
          <div className="text-sm text-gray-500">
            <Calendar className="inline h-4 w-4 mr-1" />
            Actualizado diariamente
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {esportsPosts.map((post) => (
            <NewsCard key={post.slug} post={post} variant="default" />
          ))}
        </div>
      </section>

      {/* Juegos principales */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold font-serif mb-8 border-b-2 border-gray-300 pb-4">JUEGOS PRINCIPALES</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-red-300 transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <Trophy className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold">Counter-Strike 2</h3>
            </div>
            <p className="text-gray-600 mb-4">
              El shooter táctico por equipos más importante del mundo. Majors, ESL Pro League y BLAST Premier.
            </p>
            <div className="text-sm text-gray-500">
              <Users className="inline h-4 w-4 mr-1" />
              25M+ jugadores mensuales
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-red-300 transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <Trophy className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold">Valorant</h3>
            </div>
            <p className="text-gray-600 mb-4">
              El shooter táctico de Riot Games que domina la escena competitiva con el VCT.
            </p>
            <div className="text-sm text-gray-500">
              <Users className="inline h-4 w-4 mr-1" />
              20M+ jugadores mensuales
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-red-300 transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <Trophy className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold">League of Legends</h3>
            </div>
            <p className="text-gray-600 mb-4">
              El MOBA que revolucionó los esports con Worlds, MSI y ligas regionales.
            </p>
            <div className="text-sm text-gray-500">
              <Users className="inline h-4 w-4 mr-1" />
              180M+ jugadores mensuales
            </div>
          </div>
        </div>
      </section>

      {/* Próximos torneos */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold font-serif mb-8 border-b-2 border-gray-300 pb-4">PRÓXIMOS TORNEOS</h2>
        
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-6">
              <h3 className="font-bold text-lg mb-3">Counter-Strike 2 Major</h3>
              <p className="text-gray-600 mb-2">París 2026</p>
              <p className="text-sm text-gray-500">Abril 15-30, 2026</p>
              <p className="text-sm text-red-600 font-medium mt-2">$2,500,000 en premios</p>
            </div>
            
            <div className="p-6">
              <h3 className="font-bold text-lg mb-3">Valorant Champions</h3>
              <p className="text-gray-600 mb-2">Seúl, Corea del Sur</p>
              <p className="text-sm text-gray-500">Agosto 10-25, 2026</p>
              <p className="text-sm text-red-600 font-medium mt-2">$3,000,000 en premios</p>
            </div>
            
            <div className="p-6">
              <h3 className="font-bold text-lg mb-3">LoL Worlds</h3>
              <p className="text-gray-600 mb-2">Londres, Reino Unido</p>
              <p className="text-sm text-gray-500">Octubre 5 - Noviembre 10, 2026</p>
              <p className="text-sm text-red-600 font-medium mt-2">$4,500,000 en premios</p>
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
            <span className="text-gray-700">ESPORTS</span>
          </div>
          
          <div className="flex gap-4">
            <Link 
              href="/deportes"
              className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition"
            >
              ← Deportes
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