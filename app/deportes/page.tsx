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