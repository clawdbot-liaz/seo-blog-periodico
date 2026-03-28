import Link from 'next/link'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

interface NewsCardProps {
  post: {
    slug: string
    title: string
    excerpt: string
    date: string
    category: string
    readTime: string
    tags: string[]
    author?: string
    isFeatured?: boolean
    isBreaking?: boolean
    imageUrl?: string
  }
  variant?: 'default' | 'featured' | 'compact' | 'headline'
}

export default function NewsCard({ post, variant = 'default' }: NewsCardProps) {
  const formattedDate = format(new Date(post.date), "d 'de' MMMM, yyyy", { locale: es })

  // Estilos por variante
  const variants = {
    default: {
      container: 'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow',
      title: 'text-xl font-bold text-gray-900 mb-3 hover:text-red-600 transition',
      excerpt: 'text-gray-600 mb-4 line-clamp-3',
      meta: 'text-sm text-gray-500'
    },
    featured: {
      container: 'bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-red-600',
      title: 'text-2xl font-bold text-gray-900 mb-4 hover:text-red-600 transition',
      excerpt: 'text-gray-700 text-lg mb-6 line-clamp-4',
      meta: 'text-sm text-gray-600'
    },
    compact: {
      container: 'bg-white border-b border-gray-200 pb-4',
      title: 'text-lg font-semibold text-gray-900 mb-2 hover:text-red-600 transition',
      excerpt: 'text-gray-600 text-sm mb-3 line-clamp-2',
      meta: 'text-xs text-gray-500'
    },
    headline: {
      container: 'bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl overflow-hidden',
      title: 'text-3xl font-bold mb-6 hover:text-red-300 transition',
      excerpt: 'text-gray-300 text-lg mb-8 line-clamp-3',
      meta: 'text-gray-400'
    }
  }

  const style = variants[variant]

  return (
    <article className={style.container}>
      {/* Breaking news badge */}
      {post.isBreaking && (
        <div className="bg-red-600 text-white px-4 py-2 font-bold uppercase text-sm tracking-wider">
          ⚡ ULTIMA HORA
        </div>
      )}

      {/* Category badge */}
      <div className="px-6 pt-6">
        <span className={`inline-block ${variant === 'headline' ? 'bg-red-600' : 'bg-red-100'} ${variant === 'headline' ? 'text-white' : 'text-red-800'} text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider`}>
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <Link href={`/articulos/${post.slug}`}>
          <h3 className={style.title}>
            {post.title}
          </h3>
        </Link>
        
        {variant !== 'compact' && (
          <p className={style.excerpt}>
            {post.excerpt}
          </p>
        )}

        {/* Meta information */}
        <div className={`flex items-center justify-between ${style.meta}`}>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.date}>{formattedDate}</time>
            </div>
            
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
            
            {post.author && (
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
            )}
          </div>
          
          {variant !== 'compact' && (
            <Link 
              href={`/articulos/${post.slug}`}
              className={`flex items-center gap-1 font-semibold ${variant === 'headline' ? 'text-red-300 hover:text-white' : 'text-red-600 hover:text-red-800'} transition`}
            >
              Leer más
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        {/* Tags */}
        {post.tags.length > 0 && variant !== 'compact' && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <span 
                  key={tag}
                  className={`text-xs px-2 py-1 rounded ${variant === 'headline' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Image placeholder (si hubiera imagen) */}
      {post.imageUrl && variant === 'featured' && (
        <div className="h-64 bg-gradient-to-r from-blue-50 to-gray-100"></div>
      )}
    </article>
  )
}