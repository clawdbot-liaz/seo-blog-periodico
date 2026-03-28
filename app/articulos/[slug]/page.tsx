import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, User, Tag, ArrowLeft, Bookmark } from 'lucide-react'
import { getPostBySlug, getRelatedPosts } from '@/lib/posts'
import ShareButtons from '@/components/ShareButtons'

// Función para obtener el color de la categoría
function getCategoryColor(category: string) {
  switch (category) {
    case 'ÚLTIMA HORA':
      return 'bg-red-600'
    case 'ESPORTS':
      return 'bg-blue-600'
    case 'DEPORTES':
      return 'bg-amber-500'
    case 'INFLUENCER/POP':
      return 'bg-purple-600'
    case 'TECNOLOGÍA':
      return 'bg-emerald-600'
    default:
      return 'bg-gray-600'
  }
}

// Función para formatear la fecha
function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })
}

// Generar metadatos estáticos para cada artículo
export async function generateStaticParams() {
  const { getPosts } = await import('@/lib/posts')
  const posts = getPosts()
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Página del artículo individual
export default async function ArticuloPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }
  
  // Obtener artículos relacionados
  const relatedPosts = getRelatedPosts(post.slug, 3)
  
  // Generar contenido extendido basado en el extracto
  const generateExtendedContent = (excerpt: string, tags: string[]) => {
    const baseContent = excerpt
    
    const additionalContent = `
      <h2 class="text-2xl font-bold mt-10 mb-6 text-gray-900">Desarrollo de la noticia</h2>
      <p>Los detalles completos de esta información continúan desarrollándose según las últimas actualizaciones recibidas por nuestra redacción. EL INFORMADOR mantiene un equipo de periodistas trabajando para ofrecer la información más precisa y actualizada sobre este tema.</p>
      
      <div class="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
        <h3 class="font-bold text-lg mb-4 text-gray-900">📋 CONTEXTO ADICIONAL</h3>
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <div class="bg-red-100 text-red-600 rounded-full p-1 mt-0.5">
              <div class="h-2 w-2"></div>
            </div>
            <span>Esta información ha sido verificada por múltiples fuentes</span>
          </li>
          <li class="flex items-start gap-3">
            <div class="bg-red-100 text-red-600 rounded-full p-1 mt-0.5">
              <div class="h-2 w-2"></div>
            </div>
            <span>Actualizaremos este artículo con nueva información cuando esté disponible</span>
          </li>
          <li class="flex items-start gap-3">
            <div class="bg-red-100 text-red-600 rounded-full p-1 mt-0.5">
              <div class="h-2 w-2"></div>
            </div>
            <span>Puedes seguir las últimas noticias en nuestra sección de ${post.category}</span>
          </li>
        </ul>
      </div>
      
      <h2 class="text-2xl font-bold mt-10 mb-6 text-gray-900">Análisis de expertos</h2>
      <p>Según los analistas consultados por EL INFORMADOR, esta noticia tiene implicaciones significativas en su ámbito. Los expertos coinciden en la importancia de seguir de cerca los desarrollos relacionados con ${tags.slice(0, 2).join(' y ')}.</p>
      
      <div class="border-l-4 border-blue-600 pl-6 py-4 my-8 bg-blue-50">
        <p class="text-gray-800">
          <strong>🚨 ACTUALIZACIÓN EN CURSO:</strong> Nuestro equipo de redacción está recopilando información adicional sobre este tema. Publicaremos actualizaciones según vayamos recibiendo confirmaciones oficiales y datos verificados.
        </p>
      </div>
      
      <h2 class="text-2xl font-bold mt-10 mb-6 text-gray-900">Impacto y repercusiones</h2>
      <p>Las consecuencias de esta noticia se están evaluando en tiempo real. Desde EL INFORMADOR nos comprometemos a ofrecer cobertura completa y rigurosa de todos los aspectos relacionados con este desarrollo informativo.</p>
    `
    
    return { baseContent, additionalContent }
  }
  
  const { baseContent, additionalContent } = generateExtendedContent(post.content, post.tags)
  
  return (
    <div className="min-h-screen bg-[#f5f4f0]">
      {/* Header del artículo */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors text-sm font-medium no-underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a portada
            </Link>
            
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Guardar">
                <Bookmark className="h-5 w-5 text-gray-500" />
              </button>
              <ShareButtons 
                title={post.title}
                url={`/articulos/${post.slug}`}
                excerpt={post.excerpt}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contenido del artículo */}
      <article className="container mx-auto px-4 md:px-8 py-8 max-w-4xl">
        
        {/* Cabecera del artículo */}
        <header className="mb-10">
          {/* Categoría */}
          <div className="mb-6">
            <span className={`inline-flex items-center gap-2 ${getCategoryColor(post.category)} text-white px-3 py-1.5 text-xs font-bold tracking-widest uppercase`}>
              {post.category}
            </span>
          </div>

          {/* Título */}
          <h1 className="text-4xl md:text-5xl font-black text-gray-950 leading-tight mb-6">
            {post.title}
          </h1>

          {/* Metadatos */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('es-ES', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} de lectura</span>
            </div>
          </div>

          {/* Imagen destacada */}
          <div className="mb-10">
            <div className="relative w-full h-64 md:h-96 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl font-bold mb-2">
                    {post.category === 'ÚLTIMA HORA' ? '🚨' : 
                     post.category === 'ESPORTS' ? '🎮' :
                     post.category === 'DEPORTES' ? '⚽' :
                     post.category === 'INFLUENCER/POP' ? '🌟' :
                     post.category === 'TECNOLOGÍA' ? '💻' : '📰'}
                  </div>
                  <p className="text-lg font-medium">Imagen: {post.title.split(':')[0]}</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-black/70 text-white text-xs px-3 py-1.5 rounded">
                Foto: Archivo EL INFORMADOR
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-3 text-center">
              {post.excerpt}
            </p>
          </div>
        </header>

        {/* Contenido principal */}
        <div className="prose prose-lg max-w-none">
          {/* Lead / Entradilla */}
          <div className="bg-red-50 border-l-4 border-red-600 pl-6 py-4 mb-8">
            <p className="text-xl font-semibold text-gray-800 italic">
              {post.excerpt}
            </p>
          </div>

          {/* Párrafos del artículo */}
          <div className="space-y-6 text-gray-800 leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: baseContent }} />
            <div dangerouslySetInnerHTML={{ __html: additionalContent }} />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Tag className="h-5 w-5 text-gray-500" />
              <span className="font-medium text-gray-700">Etiquetas:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link 
                  key={tag}
                  href={`/?tag=${tag.toLowerCase()}`}
                  className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200 transition-colors no-underline"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Autor */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{post.author}</h3>
                <p className="text-gray-600 text-sm">
                  {post.category === 'ÚLTIMA HORA' ? 'Redactora de la sección de Última Hora.' :
                   post.category === 'ESPORTS' ? 'Especialista en esports y videojuegos.' :
                   post.category === 'DEPORTES' ? 'Periodista deportivo.' :
                   post.category === 'INFLUENCER/POP' ? 'Redactora de cultura y entretenimiento.' :
                   post.category === 'TECNOLOGÍA' ? 'Especialista en tecnología e innovación.' :
                   'Redactor de EL INFORMADOR.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Artículos relacionados */}
      <section className="bg-white border-t border-gray-200 mt-12">
        <div className="container mx-auto px-4 md:px-8 py-12">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Artículos relacionados</h2>
          
          {relatedPosts.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.slug} 
                  href={`/articulos/${relatedPost.slug}`}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-white block no-underline"
                >
                  <div className="p-6">
                    {/* Categoría */}
                    <span className={`inline-block ${getCategoryColor(relatedPost.category)} text-white text-xs font-bold px-3 py-1 rounded-full mb-4`}>
                      {relatedPost.category}
                    </span>
                    
                    {/* Título */}
                    <h3 className="font-bold text-lg mb-3 text-gray-900 hover:text-red-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    
                    {/* Extracto */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    
                    {/* Metadatos */}
                    <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                      <span>{relatedPost.author}</span>
                      <span>{formatDate(relatedPost.date)}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <p>No hay artículos relacionados disponibles en este momento.</p>
              <Link href="/" className="text-red-600 hover:underline mt-2 inline-block no-underline">
                Ver todas las noticias →
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}