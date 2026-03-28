import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import NewsCard from '@/components/NewsCard'
import { Zap, TrendingUp, AlertTriangle, Trophy, Users, Cpu } from 'lucide-react'

const CATEGORIES = [
  {
    key: 'ÚLTIMA HORA',
    label: 'Última Hora',
    icon: AlertTriangle,
    accent: 'text-red-600',
    bar: 'bg-red-600',
  },
  {
    key: 'ESPORTS',
    label: 'Esports',
    icon: Trophy,
    accent: 'text-blue-600',
    bar: 'bg-blue-600',
  },
  {
    key: 'DEPORTES',
    label: 'Deportes',
    icon: Trophy,
    accent: 'text-amber-500',
    bar: 'bg-amber-500',
  },
  {
    key: 'INFLUENCER/POP',
    label: 'Influencer / Pop',
    icon: Users,
    accent: 'text-purple-600',
    bar: 'bg-purple-600',
  },
  {
    key: 'TECNOLOGÍA',
    label: 'Tecnología',
    icon: Cpu,
    accent: 'text-emerald-600',
    bar: 'bg-emerald-600',
  },
]

const TRENDS = ['SEO 2024', 'Core Web Vitals', 'IA en Marketing', 'E-commerce']

export default async function Home() {
  const posts = await getPosts()

  const newspaperPosts = posts.map((post, index) => ({
    ...post,
    author:
      index % 3 === 0
        ? 'María Rodríguez'
        : index % 3 === 1
        ? 'Carlos Méndez'
        : 'Ana López',
    isBreaking: index === 0,
    isFeatured: index < 3,
    imageUrl: index % 4 === 0 ? '/placeholder.jpg' : undefined,
  }))

  const featuredPosts = newspaperPosts.slice(0, 3)
  const latestNews = newspaperPosts.slice(3, 9)

  return (
    <div
      className="min-h-screen bg-gray-50"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >

      {/* ─── PORTADA ─────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-10">

          {/* Section header */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-gray-950">
            <h2
              className="text-xs font-bold tracking-widest uppercase text-gray-950"
              style={{ letterSpacing: '0.2em' }}
            >
              Portada
            </h2>
            <div className="flex items-center gap-2 text-red-600">
              <Zap className="h-3.5 w-3.5" />
              <span 
                className="text-xs font-bold tracking-wider" 
                style={{ letterSpacing: '0.1em' }}
              >
                Actualizado hace 5 min
              </span>
            </div>
          </div>

          {/* Main grid: content + sidebar */}
          <div className="grid lg:grid-cols-[1fr_300px] gap-10">

            {/* Left — featured articles */}
            <div>
              {/* Headline */}
              {featuredPosts[0] && (
                <div className="pb-8 mb-8 border-b border-gray-200">
                  <NewsCard post={featuredPosts[0]} variant="headline" />
                </div>
              )}

              {/* Two sub-features */}
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.slice(1).map((post) => (
                  <div key={post.slug} className="border-t-2 border-gray-950 pt-5">
                    <NewsCard post={post} variant="featured" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right — sidebar */}
            <aside className="border-l border-gray-200 pl-8 space-y-8">

              {/* Última hora */}
              <div>
                <div className="flex items-center gap-2 mb-5 pb-3 border-b-2 border-red-600">
                  <AlertTriangle className="h-3.5 w-3.5 text-red-600" />
                  <h3
                    className="text-xs font-bold tracking-widest text-red-600"
                    style={{ letterSpacing: '0.18em' }}
                  >
                    Última Hora
                  </h3>
                </div>
                <div className="space-y-5">
                  {latestNews.slice(0, 4).map((post, i) => (
                    <div key={post.slug} className={i > 0 ? 'pt-5 border-t border-gray-100' : ''}>
                      <NewsCard post={post} variant="compact" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Tendencias */}
              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 mb-5">
                  <TrendingUp className="h-3.5 w-3.5 text-gray-500" />
                  <h4
                    className="text-xs font-bold tracking-widest text-gray-500"
                    style={{ letterSpacing: '0.18em' }}
                  >
                    Tendencias
                  </h4>
                </div>
                <ol className="space-y-1">
                  {TRENDS.map((trend, i) => (
                    <li key={i}>
                      <button className="w-full flex items-center gap-3 py-2.5 border-b border-gray-100 hover:bg-gray-50 transition-colors text-left group">
                        <span className="text-xs text-gray-300 font-bold w-4 shrink-0">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-sm text-gray-700 group-hover:text-red-600 transition-colors flex-1">
                          {trend}
                        </span>
                      </button>
                    </li>
                  ))}
                </ol>
              </div>

            </aside>
          </div>
        </div>
      </section>

      {/* ─── SECCIONES POR CATEGORÍA ─────────────────────────────────── */}
      <section className="container mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-10 pb-4 border-b-2 border-gray-950">
          <h2
            className="text-xs font-bold tracking-widest uppercase"
            style={{ letterSpacing: '0.2em' }}
          >
            Todas las Secciones
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {CATEGORIES.map(({ key, label, icon: Icon, accent, bar }) => {
            const categoryPosts = newspaperPosts
              .filter((p) => p.category === key)
              .slice(0, 3)

            return (
              <div key={key}>
                {/* Category header */}
                <div className={`h-0.5 w-full ${bar} mb-4`} />
                <div className="flex items-center gap-2 mb-5">
                  <Icon className={`h-3.5 w-3.5 ${accent} shrink-0`} />
                  <h3
                    className={`text-xs font-bold tracking-widest ${accent}`}
                    style={{ letterSpacing: '0.15em' }}
                  >
                    {label.toUpperCase()}
                  </h3>
                </div>

                <div className="space-y-5">
                  {categoryPosts.map((post, i) => (
                    <div key={post.slug} className={i > 0 ? 'pt-5 border-t border-gray-100' : ''}>
                      <NewsCard post={post} variant="compact" />
                    </div>
                  ))}
                </div>

                <Link
                  href={`/${key.toLowerCase().replace('/', '-')}`}
                  className={`inline-flex items-center gap-1 mt-5 text-xs font-bold tracking-wider ${accent} hover:underline no-underline`}
                  style={{ letterSpacing: '0.1em' }}
                >
                  Ver más →
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      {/* ─── DESTACADOS DEL DÍA ──────────────────────────────────────── */}
      <section className="border-t border-gray-200 bg-white">
        <div className="container mx-auto px-6 py-14">

          <div className="flex items-center justify-between mb-10 pb-4 border-b-2 border-gray-950">
            <div className="flex items-center gap-2">
              <Zap className="h-3.5 w-3.5 text-red-600" />
              <h2
                className="text-xs font-bold tracking-widest"
                style={{ letterSpacing: '0.2em' }}
              >
                DESTACADOS DEL DÍA
              </h2>
            </div>
            <div className="h-px flex-1 bg-gray-200 mx-6" />
            <span className="text-xs text-gray-400">
              {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {newspaperPosts
              .filter((p) => p.isFeatured)
              .map((post, i) => (
                <div
                  key={post.slug}
                  className={`${i < 2 ? 'md:border-r md:border-gray-200 md:pr-10' : ''}`}
                >
                  <NewsCard post={post} variant="default" />
                </div>
              ))}
          </div>

        </div>
      </section>

    </div>
  )
}