import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export default async function Home() {
  const posts = await getPosts()

  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Blog Optimizado para <span className="text-primary-600">SEO</span> y <span className="text-primary-600">Tráfico</span>
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          Contenido de calidad, estructura técnica perfecta y estrategias probadas para generar visitas orgánicas.
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/blog" 
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
          >
            Ver Artículos
          </Link>
          <Link 
            href="#features" 
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold border border-primary-600 hover:bg-primary-50 transition"
          >
            Características
          </Link>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Optimizado para Resultados</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-primary-600 text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-3">SEO Técnico Perfecto</h3>
            <p className="text-gray-600">Meta tags, sitemap, schema markup, velocidad 95+ PageSpeed.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-primary-600 text-3xl mb-4">📈</div>
            <h3 className="text-xl font-bold mb-3">Análisis de Tráfico</h3>
            <p className="text-gray-600">Vercel Analytics integrado para monitorizar visitas y conversiones.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-primary-600 text-3xl mb-4">🔍</div>
            <h3 className="text-xl font-bold mb-3">Contenido Indexable</h3>
            <p className="text-gray-600">Estructura optimizada para posicionar en Google rápidamente.</p>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Artículos Recientes</h2>
          <Link href="/blog" className="text-primary-600 hover:text-primary-800 font-semibold">
            Ver todos →
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 6).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 text-center bg-gray-50 py-12 rounded-2xl">
        <h2 className="text-3xl font-bold mb-4">¿Listo para generar tráfico?</h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          Suscríbete para recibir los mejores artículos sobre SEO, marketing de contenidos y crecimiento web.
        </p>
        <form className="max-w-md mx-auto flex gap-2">
          <input
            type="email"
            placeholder="Tu email"
            className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <button
            type="submit"
            className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
          >
            Suscribirse
          </button>
        </form>
      </section>
    </div>
  )
}