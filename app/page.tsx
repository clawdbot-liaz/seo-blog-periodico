import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import NewsCard from '@/components/NewsCard'
import { Newspaper, TrendingUp, Zap, BarChart, Target, Globe, Shield, Users } from 'lucide-react'

export default async function Home() {
  const posts = await getPosts()

  // Transformar posts para el periódico
  const newspaperPosts = posts.map((post, index) => ({
    ...post,
    author: index % 3 === 0 ? 'María Rodríguez' : index % 3 === 1 ? 'Carlos Méndez' : 'Ana López',
    isBreaking: index === 0,
    isFeatured: index < 3,
    imageUrl: index % 4 === 0 ? '/placeholder.jpg' : undefined
  }))

  const featuredPosts = newspaperPosts.slice(0, 3)
  const latestNews = newspaperPosts.slice(3, 9)
  const trendingNews = newspaperPosts.slice(9, 12)
  const opinionNews = newspaperPosts.slice(12, 15)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Portada del periódico */}
      <section className="bg-white border-b-4 border-black">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold font-serif">PORTADA</h2>
            <div className="flex items-center gap-2 text-red-600">
              <Zap className="h-5 w-5" />
              <span className="font-bold">ACTUALIZADO HACE 5 MINUTOS</span>
            </div>
          </div>

          {/* Featured grid - Layout de periódico */}
          <div className="newspaper-grid gap-8">
            {/* Columna principal - Noticia destacada */}
            <div className="space-y-8">
              {featuredPosts[0] && (
                <div className="featured-article">
                  <NewsCard post={featuredPosts[0]} variant="headline" />
                </div>
              )}
              
              {/* Sub-noticias */}
              <div className="grid md:grid-cols-2 gap-6">
                {featuredPosts.slice(1).map((post) => (
                  <NewsCard key={post.slug} post={post} variant="featured" />
                ))}
              </div>
            </div>

            {/* Sidebar - Última hora */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="h-5 w-5 text-red-600" />
                <h3 className="text-xl font-bold">ÚLTIMA HORA</h3>
              </div>
              
              <div className="space-y-6">
                {latestNews.slice(0, 4).map((post) => (
                  <NewsCard key={post.slug} post={post} variant="compact" />
                ))}
              </div>

              {/* Tendencias */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  <h4 className="font-bold">TENDENCIAS</h4>
                </div>
                <div className="space-y-3">
                  {['SEO 2024', 'Core Web Vitals', 'IA en Marketing', 'E-commerce'].map((trend, i) => (
                    <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-100 rounded-lg transition">
                      <span className="font-medium">{trend}</span>
                      <span className="text-sm text-gray-500">+{Math.floor(Math.random() * 1000)} búsquedas</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secciones del periódico */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Sección Tecnología */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <BarChart className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold">TECNOLOGÍA</h3>
            </div>
            <div className="space-y-6">
              {trendingNews.map((post) => (
                <NewsCard key={post.slug} post={post} variant="default" />
              ))}
            </div>
          </div>

          {/* Sección Marketing */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 rounded-lg">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold">MARKETING</h3>
            </div>
            <div className="space-y-6">
              {opinionNews.map((post) => (
                <NewsCard key={post.slug} post={post} variant="default" />
              ))}
            </div>
          </div>

          {/* Sección Internacional */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Globe className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold">INTERNACIONAL</h3>
            </div>
            <div className="space-y-6">
              {latestNews.slice(4, 7).map((post) => (
                <NewsCard key={post.slug} post={post} variant="default" />
              ))}
            </div>
          </div>
        </div>

        {/* Columnas de opinión */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Users className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold">COLUMNAS DE OPINIÓN</h3>
          </div>
          
          <div className="newspaper-columns">
            <div className="space-y-6">
              <div className="mb-6">
                <h4 className="text-xl font-bold mb-3">"El futuro del SEO es semántico"</h4>
                <p className="text-gray-700 mb-4">
                  Los motores de búsqueda están evolucionando hacia la comprensión del significado detrás de las consultas, no solo de las palabras clave. La inteligencia artificial está revolucionando cómo indexamos y clasificamos contenido.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="font-semibold">Dr. Alejandro Ruiz</p>
                    <p className="text-sm text-gray-600">Experto en IA y SEO</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold mb-3">"La velocidad como factor crítico"</h4>
                <p className="text-gray-700 mb-4">
                  Core Web Vitals no es solo una métrica de Google, es la experiencia real del usuario. Las webs que cargan en menos de 2 segundos tienen tasas de conversión un 50% más altas que las más lentas.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="font-semibold">Laura Martínez</p>
                    <p className="text-sm text-gray-600">Especialista en Performance</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3">"Seguridad web: la nueva frontera"</h4>
                <p className="text-gray-700 mb-4">
                  HTTPS ya no es opcional. Los certificados SSL, headers de seguridad y protección contra vulnerabilidades son esenciales no solo para la seguridad, sino también para el posicionamiento SEO.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="font-semibold">Miguel Ángel Torres</p>
                    <p className="text-sm text-gray-600">Consultor de Seguridad Web</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Estadísticas y datos */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
            <p className="text-gray-600">Webs que mejoran SEO con optimización técnica</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">125%</div>
            <p className="text-gray-600">Aumento promedio de tráfico orgánico</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">2.1s</div>
            <p className="text-gray-600">Tiempo de carga óptimo para mejor conversión</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">30%</div>
            <p className="text-gray-600">Aumento CTR con rich snippets</p>
          </div>
        </div>

        {/* Suscripción */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8 text-center">
          <Newspaper className="h-16 w-16 mx-auto mb-6 text-red-400" />
          <h3 className="text-3xl font-bold mb-4">SUSCRÍBETE A NUESTRO NEWSLETTER</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Recibe las noticias más importantes sobre SEO, marketing digital y tecnología directamente en tu correo. Análisis exclusivos, casos de estudio y tendencias del sector.
          </p>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Tu email profesional"
              className="flex-grow px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition"
            >
              SUSCRIBIRSE
            </button>
          </form>
          <p className="text-gray-400 text-sm mt-4">
            Sin spam. Puedes darte de baja en cualquier momento.
          </p>
        </div>
      </section>
    </div>
  )
}