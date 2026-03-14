import { getPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export const metadata = {
  title: 'Blog - Artículos SEO Optimizados',
  description: 'Todos nuestros artículos sobre SEO, marketing de contenidos y generación de tráfico orgánico.',
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog SEO Optimizado</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Artículos de calidad, investigaciones profundas y guías prácticas para mejorar tu posicionamiento web.
        </p>
        <div className="mt-6">
          <span className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold">
            {posts.length} artículos publicados
          </span>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold">
            Todos
          </button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">
            SEO Técnico
          </button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">
            Marketing de Contenidos
          </button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">
            Keyword Research
          </button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">
            Performance
          </button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">
            Link Building
          </button>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center">
        <nav className="flex items-center gap-2">
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">
            ← Anterior
          </button>
          <button className="px-4 py-2 bg-primary-600 text-white rounded-lg font-semibold">
            1
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">
            2
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">
            3
          </button>
          <span className="px-2">...</span>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">
            10
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200">
            Siguiente →
          </button>
        </nav>
      </div>

      {/* CTA */}
      <div className="mt-16 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">¿Quieres más tráfico orgánico?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Suscríbete para recibir nuestras guías más avanzadas sobre SEO y casos de estudio exclusivos.
        </p>
        <form className="max-w-md mx-auto flex gap-2">
          <input
            type="email"
            placeholder="Tu email profesional"
            className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <button
            type="submit"
            className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
          >
            Suscribirse
          </button>
        </form>
      </div>
    </div>
  )
}