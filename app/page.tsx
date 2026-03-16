import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import NewsCard from '@/components/NewsCard'
import NewsletterForm from '@/components/NewsletterForm'
import { Newspaper, TrendingUp, Zap } from 'lucide-react'

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

      {/* Más noticias */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold font-serif mb-8 border-b-2 border-gray-300 pb-4">MÁS NOTICIAS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {latestNews.slice(0, 6).map((post) => (
              <NewsCard key={post.slug} post={post} variant="default" />
            ))}
          </div>
        </div>

        {/* Destacados del día */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 mb-12">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <Zap className="h-6 w-6 text-red-600" />
            </div>
            DESTACADOS DEL DÍA
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {trendingNews.map((post) => (
              <NewsCard key={post.slug} post={post} variant="featured" />
            ))}
          </div>
        </div>

        {/* Newsletter funcional */}
        <NewsletterForm />
      </section>
    </div>
  )
}