import { Users, TrendingUp, Video, Music, Instagram, Youtube } from 'lucide-react'
import NewsCard from '@/components/NewsCard'
import { getPostsByCategory } from '@/lib/posts'
import Link from 'next/link'

export default function InfluencerPopPage() {
  const influencerPosts = getPostsByCategory('INFLUENCER/POP')
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-4 bg-red-100 rounded-full mb-6">
          <Users className="h-12 w-12 text-red-600" />
        </div>
        <h1 className="text-4xl font-bold font-serif mb-4">INFLUENCER/POP</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          La cultura digital al día. Streaming, redes sociales, tendencias virales, creadores de contenido 
          y todo sobre el mundo influencer y la cultura pop contemporánea.
        </p>
      </div>

      {/* Estadísticas destacadas */}
      <div className="bg-gray-50 rounded-2xl p-8 mb-12 border border-gray-200">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <TrendingUp className="h-6 w-6 text-red-600" />
          CULTURA DIGITAL EN CIFRAS
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-red-600 mb-2">4.9B</div>
            <p className="text-gray-600">Usuarios redes sociales</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-red-600 mb-2">$21B</div>
            <p className="text-gray-600">Industria influencer</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-red-600 mb-2">140M</div>
            <p className="text-gray-600">Creadores profesionales</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
            <div className="text-3xl font-bold text-red-600 mb-2">1.5T</div>
            <p className="text-gray-600">Visualizaciones diarias</p>
          </div>
        </div>
      </div>

      {/* Últimas noticias */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold font-serif">ÚLTIMAS NOTICIAS</h2>
          <div className="text-sm text-gray-500">
            Actualizado cada hora
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {influencerPosts.map((post) => (
            <NewsCard key={post.slug} post={post} variant="default" />
          ))}
        </div>
      </section>

      {/* Plataformas principales */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold font-serif mb-8 border-b-2 border-gray-300 pb-4">PLATAFORMAS PRINCIPALES</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-red-300 transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <Video className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold">YouTube</h3>
            </div>
            <p className="text-gray-600 mb-4">
              La plataforma de video líder con más de 2.7 mil millones de usuarios activos mensuales.
            </p>
            <div className="text-sm text-gray-500">
              <Youtube className="inline h-4 w-4 mr-1" />
              500 horas subidas por minuto
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-red-300 transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <Video className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold">TikTok</h3>
            </div>
            <p className="text-gray-600 mb-4">
              La red social de video corto que domina las tendencias virales entre jóvenes.
            </p>
            <div className="text-sm text-gray-500">
              <Video className="inline h-4 w-4 mr-1" />
              1.7B usuarios activos
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-red-300 transition">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <Instagram className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold">Instagram</h3>
            </div>
            <p className="text-gray-600 mb-4">
              La red social visual por excelencia para influencers y marcas de lifestyle.
            </p>
            <div className="text-sm text-gray-500">
              <Users className="inline h-4 w-4 mr-1" />
              2.4B usuarios activos
            </div>
          </div>
        </div>
      </section>

      {/* Tendencias actuales */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold font-serif mb-8 border-b-2 border-gray-300 pb-4">TENDENCIAS ACTUALES</h2>
        
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-6">
              <h3 className="font-bold text-lg mb-3">Streaming en directo</h3>
              <p className="text-gray-600 mb-2">Twitch, YouTube Live, TikTok Live</p>
              <p className="text-sm text-gray-500">Crecimiento del 35% anual</p>
              <p className="text-sm text-red-600 font-medium mt-2">24/7 contenido en vivo</p>
            </div>
            
            <div className="p-6">
              <h3 className="font-bold text-lg mb-3">Podcasts y audio</h3>
              <p className="text-gray-600 mb-2">Spotify, Apple Podcasts, YouTube</p>
              <p className="text-sm text-gray-500">464M oyentes globales</p>
              <p className="text-sm text-red-600 font-medium mt-2">Formato en auge</p>
            </div>
            
            <div className="p-6">
              <h3 className="font-bold text-lg mb-3">Comercio social</h3>
              <p className="text-gray-600 mb-2">TikTok Shop, Instagram Shopping</p>
              <p className="text-sm text-gray-500">$1.2T en ventas 2025</p>
              <p className="text-sm text-red-600 font-medium mt-2">Fusión contenido-comercio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías de contenido */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold font-serif mb-8 border-b-2 border-gray-300 pb-4">CATEGORÍAS DE CONTENIDO</h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { name: 'Gaming', icon: Video, stats: '850M espectadores' },
            { name: 'Beauty & Fashion', icon: Users, stats: '320M seguidores' },
            { name: 'Lifestyle', icon: Instagram, stats: '540M creadores' },
            { name: 'Music & Dance', icon: Music, stats: '210M videos diarios' }
          ].map((categoria) => (
            <div key={categoria.name} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-red-300 transition">
              <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <categoria.icon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-center">{categoria.name}</h3>
              <p className="text-sm text-gray-600 text-center">{categoria.stats}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impacto cultural */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold font-serif mb-8 border-b-2 border-gray-300 pb-4">IMPACTO CULTURAL</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4 text-red-800">Revolución del consumo</h3>
            <p className="text-gray-700 mb-4">
              Los influencers han transformado cómo descubrimos productos, consumimos entretenimiento 
              y nos informamos. El 72% de los millennials y Gen Z confían más en recomendaciones de 
              creadores que en publicidad tradicional.
            </p>
            <div className="text-sm text-gray-600">
              <TrendingUp className="inline h-4 w-4 mr-1" />
              Crecimiento del 240% en inversión publicitaria 2020-2025
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">Nuevas profesiones</h3>
            <p className="text-gray-700 mb-4">
              Content creator, community manager, social media strategist, influencer manager... 
              La economía digital ha creado profesiones que no existían hace una década, empleando 
              a millones de personas globalmente.
            </p>
            <div className="text-sm text-gray-600">
              <Users className="inline h-4 w-4 mr-1" />
              8.5M empleos creados en la industria
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
            <span className="text-gray-700">INFLUENCER/POP</span>
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
              href="/tecnologia"
              className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition"
            >
              Tecnología →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}