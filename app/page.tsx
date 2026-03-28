import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import NewsCard from '@/components/NewsCard'
import { Zap, TrendingUp, AlertTriangle, Trophy, Users, Cpu, ArrowRight } from 'lucide-react'

const CATEGORIES = [
  {
    key: 'ÚLTIMA HORA',
    label: 'Última Hora',
    icon: AlertTriangle,
    color: 'bg-red-600',
    light: 'bg-red-50',
    text: 'text-red-600',
    href: '/ultima-hora',
  },
  {
    key: 'ESPORTS',
    label: 'Esports',
    icon: Trophy,
    color: 'bg-blue-600',
    light: 'bg-blue-50',
    text: 'text-blue-600',
    href: '/esports',
  },
  {
    key: 'DEPORTES',
    label: 'Deportes',
    icon: Trophy,
    color: 'bg-amber-500',
    light: 'bg-amber-50',
    text: 'text-amber-600',
    href: '/deportes',
  },
  {
    key: 'INFLUENCER/POP',
    label: 'Influencer / Pop',
    icon: Users,
    color: 'bg-purple-600',
    light: 'bg-purple-50',
    text: 'text-purple-600',
    href: '/influencer-pop',
  },
  {
    key: 'TECNOLOGÍA',
    label: 'Tecnología',
    icon: Cpu,
    color: 'bg-emerald-600',
    light: 'bg-emerald-50',
    text: 'text-emerald-600',
    href: '/tecnologia',
  },
]

const TRENDS = ['SEO 2024', 'Core Web Vitals', 'IA en Marketing', 'E-commerce']

export default async function Home() {
  const posts = await getPosts()

  const newspaperPosts = posts.map((post, index) => ({
    ...post,
    author:
      index % 3 === 0 ? 'María Rodríguez'
      : index % 3 === 1 ? 'Carlos Méndez'
      : 'Ana López',
    isBreaking: index === 0,
    isFeatured: index < 3,
    imageUrl: index % 4 === 0 ? '/placeholder.jpg' : undefined,
  }))

  const featuredPosts = newspaperPosts.slice(0, 3)
  const latestNews = newspaperPosts.slice(3, 9)

  return (
    <div className="min-h-screen bg-[#f5f4f0]">

      {/* ══════════════════════════════════════════
      PORTADA
      ══════════════════════════════════════════ */}
      <section className="bg-white">
        <div className="container mx-auto px-4 md:px-8 py-8">

          {/* Row label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-gray-950 text-white text-[11px] font-bold px-3 py-1 tracking-widest uppercase">
              Portada
            </span>
            <div className="flex items-center gap-1.5 text-red-600">
              <Zap className="h-3.5 w-3.5 fill-red-600" />
              <span className="text-[11px] font-bold tracking-wide uppercase">En vivo</span>
            </div>
          </div>

          {/* Content + Sidebar */}
          <div className="grid lg:grid-cols-[1fr_280px] gap-0 border border-gray-200">

            {/* Main content */}
            <div className="divide-y divide-gray-200">

              {/* Headline */}
              {featuredPosts[0] && (
                <div className="p-6 md:p-8">
                  <NewsCard post={featuredPosts[0]} variant="headline" />
                </div>
              )}

              {/* Two sub-features */}
              <div className="grid md:grid-cols-2 divide-x divide-gray-200">
                {featuredPosts.slice(1).map((post) => (
                  <div key={post.slug} className="p-6">
                    <NewsCard post={post} variant="featured" />
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="border-l border-gray-200 bg-gray-50 divide-y divide-gray-200">

              {/* Última hora header */}
              <div className="bg-red-600 px-5 py-3 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-white" />
                <span className="text-white text-[11px] font-bold tracking-widest uppercase">
                  Última Hora
                </span>
              </div>

              {/* Latest items */}
              <div className="divide-y divide-gray-200">
                {latestNews.slice(0, 4).map((post) => (
                  <div key={post.slug} className="px-5 py-4 hover:bg-white transition-colors">
                    <NewsCard post={post} variant="compact" />
                  </div>
                ))}
              </div>

              {/* Trending */}
              <div>
                <div className="px-5 py-3 flex items-center gap-2 bg-gray-100 border-b border-gray-200">
                  <TrendingUp className="h-3.5 w-3.5 text-gray-500" />
                  <span className="text-[11px] font-bold tracking-widest uppercase text-gray-500">
                    Tendencias
                  </span>
                </div>
                <ol>
                  {TRENDS.map((trend, i) => (
                    <li key={i}>
                      <button className="w-full flex items-center gap-3 px-5 py-3 border-b border-gray-200 hover:bg-white transition-colors text-left">
                        <span className="text-[13px] font-black text-gray-300 w-5 shrink-0 tabular-nums">
                          {i + 1}
                        </span>
                        <span className="text-sm text-gray-700 font-medium flex-1">{trend}</span>
                      </button>
                    </li>
                  ))}
                </ol>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
      SECCIONES
      ══════════════════════════════════════════ */}
      <section className="container mx-auto px-4 md:px-8 py-12">

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-gray-200 border border-gray-200">
          {CATEGORIES.map(({ key, label, icon: Icon, color, light, text, href }) => {
            const categoryPosts = newspaperPosts
              .filter((p) => p.category === key)
              .slice(0, 3)

            return (
              <div key={key} className="bg-white flex flex-col">

                {/* Category header — clearly colored */}
                <div className={`${color} px-4 py-3 flex items-center justify-between`}>
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-white" />
                    <span className="text-white text-[11px] font-black tracking-widest uppercase">
                      {label}
                    </span>
                  </div>
                  <Link href={href} className="text-white/70 hover:text-white transition-colors">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                {/* Posts */}
                <div className="flex-1 divide-y divide-gray-100">
                  {categoryPosts.map((post) => (
                    <div key={post.slug} className="px-4 py-4 hover:bg-gray-50 transition-colors">
                      <NewsCard post={post} variant="compact" />
                    </div>
                  ))}
                </div>

                {/* Footer link */}
                <Link
                  href={href}
                  className={`flex items-center justify-center gap-1.5 py-3 border-t border-gray-100 ${light} ${text} text-[11px] font-bold tracking-wider uppercase hover:opacity-80 transition-opacity no-underline`}
                >
                  Ver sección <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════
      DESTACADOS DEL DÍA
      ══════════════════════════════════════════ */}
      <section className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-8 py-10">

          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gray-950 flex items-center gap-2 px-3 py-2">
              <Zap className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="text-white text-[11px] font-black tracking-widest uppercase">
                Destacados del día
              </span>
            </div>
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-[11px] text-gray-400 tabular-nums">
              {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {newspaperPosts
              .filter((p) => p.isFeatured)
              .map((post) => (
                <div key={post.slug} className="bg-white p-6 hover:bg-gray-50 transition-colors">
                  <NewsCard post={post} variant="default" />
                </div>
              ))}
          </div>

        </div>
      </section>

    </div>
  )
}