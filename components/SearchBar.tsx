'use client'

import { useState, useRef, useEffect } from 'react'
import { Search, X, Clock, Calendar, User, Tag } from 'lucide-react'
import Link from 'next/link'
import { getPosts } from '@/lib/posts'

interface SearchResult {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  author: string
  tags: string[]
  relevance: number
}

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Función para buscar posts
  const searchPosts = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      return
    }

    setIsLoading(true)
    
    // Obtener todos los posts
    const allPosts = getPosts()
    const queryLower = searchQuery.toLowerCase()
    
    // Calcular relevancia para cada post
    const scoredPosts = allPosts.map(post => {
      let score = 0
      
      // Búsqueda en título (máxima relevancia)
      if (post.title.toLowerCase().includes(queryLower)) {
        score += 100
      }
      
      // Búsqueda en extracto
      if (post.excerpt.toLowerCase().includes(queryLower)) {
        score += 50
      }
      
      // Búsqueda en contenido
      if (post.content.toLowerCase().includes(queryLower)) {
        score += 30
      }
      
      // Búsqueda en etiquetas
      const tagMatches = post.tags.filter(tag => 
        tag.toLowerCase().includes(queryLower)
      ).length
      score += tagMatches * 20
      
      // Búsqueda en categoría
      if (post.category.toLowerCase().includes(queryLower)) {
        score += 40
      }
      
      // Búsqueda en autor
      if (post.author.toLowerCase().includes(queryLower)) {
        score += 30
      }
      
      // Penalización por antigüedad (posts más recientes primero)
      const postDate = new Date(post.date)
      const now = new Date()
      const daysDiff = Math.floor((now.getTime() - postDate.getTime()) / (1000 * 3600 * 24))
      score -= Math.min(daysDiff, 30) // Máximo 30 puntos de penalización
      
      return {
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        date: post.date,
        category: post.category,
        author: post.author,
        tags: post.tags,
        relevance: score
      }
    })
    
    // Filtrar y ordenar resultados
    const filteredResults = scoredPosts
      .filter(post => post.relevance > 0)
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 8) // Limitar a 8 resultados
    
    setResults(filteredResults)
    setIsLoading(false)
  }

  // Manejar cambios en la búsqueda
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    
    // Debounce para evitar búsquedas muy frecuentes
    const timeoutId = setTimeout(() => {
      searchPosts(value)
    }, 300)
    
    return () => clearTimeout(timeoutId)
  }

  // Limpiar búsqueda
  const clearSearch = () => {
    setQuery('')
    setResults([])
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  // Cerrar búsqueda al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      // Enfocar el input cuando se abre
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus()
        }
      }, 100)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Manejar tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  // Función para formatear fecha
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })
  }

  // Función para obtener color de categoría
  const getCategoryColor = (category: string) => {
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

  return (
    <div className="relative" ref={searchRef}>
      {/* Botón de búsqueda (visible siempre) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-red-600 hover:bg-gray-100 rounded-full transition-colors duration-150"
        aria-label="Buscar"
      >
        <Search className="h-5 w-5" />
      </button>

      {/* Overlay y panel de búsqueda */}
      {isOpen && (
        <>
          {/* Overlay de fondo */}
          <div 
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Panel de búsqueda */}
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl z-50">
            <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden mx-4">
              {/* Barra de búsqueda */}
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={handleSearch}
                    placeholder="Buscar noticias, categorías, autores..."
                    className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    autoComplete="off"
                  />
                  {query && (
                    <button
                      onClick={clearSearch}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded"
                      aria-label="Limpiar búsqueda"
                    >
                      <X className="h-4 w-4 text-gray-400" />
                    </button>
                  )}
                </div>
              </div>

              {/* Resultados de búsqueda */}
              <div className="max-h-[60vh] overflow-y-auto">
                {isLoading ? (
                  <div className="p-8 text-center">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
                    <p className="mt-2 text-gray-500">Buscando...</p>
                  </div>
                ) : query && results.length > 0 ? (
                  <div className="divide-y divide-gray-100">
                    {results.map((result) => (
                      <Link
                        key={result.slug}
                        href={`/articulos/${result.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="block p-4 hover:bg-gray-50 transition-colors no-underline"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            {/* Categoría */}
                            <div className="flex items-center gap-2 mb-2">
                              <span className={`inline-block ${getCategoryColor(result.category)} text-white text-xs font-bold px-2 py-0.5 rounded-full`}>
                                {result.category}
                              </span>
                              <span className="text-xs text-gray-500">
                                {formatDate(result.date)}
                              </span>
                            </div>
                            
                            {/* Título */}
                            <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                              {result.title}
                            </h3>
                            
                            {/* Extracto */}
                            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                              {result.excerpt}
                            </p>
                            
                            {/* Metadatos */}
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <div className="flex items-center gap-1">
                                <User className="h-3 w-3" />
                                <span>{result.author}</span>
                              </div>
                              
                              {result.tags.length > 0 && (
                                <div className="flex items-center gap-1">
                                  <Tag className="h-3 w-3" />
                                  <span>{result.tags.slice(0, 2).join(', ')}</span>
                                </div>
                              )}
                            </div>
                          </div>
                          
                          {/* Indicador de relevancia (solo en desarrollo) */}
                          {process.env.NODE_ENV === 'development' && (
                            <div className="ml-4 text-xs text-gray-400">
                              {result.relevance.toFixed(0)} pts
                            </div>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : query && !isLoading ? (
                  <div className="p-8 text-center">
                    <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 mb-2">No se encontraron resultados</p>
                    <p className="text-sm text-gray-400">
                      Intenta con otras palabras clave o términos diferentes
                    </p>
                  </div>
                ) : (
                  <div className="p-8">
                    <p className="text-gray-500 mb-4 text-center">Sugerencias de búsqueda:</p>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => {
                          setQuery('Madrid')
                          searchPosts('Madrid')
                        }}
                        className="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-left transition-colors"
                      >
                        <div className="text-sm font-medium text-gray-900">Madrid</div>
                        <div className="text-xs text-gray-500">Noticias de la capital</div>
                      </button>
                      
                      <button
                        onClick={() => {
                          setQuery('Tecnología')
                          searchPosts('Tecnología')
                        }}
                        className="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-left transition-colors"
                      >
                        <div className="text-sm font-medium text-gray-900">Tecnología</div>
                        <div className="text-xs text-gray-500">IA, innovación, ciencia</div>
                      </button>
                      
                      <button
                        onClick={() => {
                          setQuery('Deportes')
                          searchPosts('Deportes')
                        }}
                        className="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-left transition-colors"
                      >
                        <div className="text-sm font-medium text-gray-900">Deportes</div>
                        <div className="text-xs text-gray-500">Fútbol, baloncesto, MotoGP</div>
                      </button>
                      
                      <button
                        onClick={() => {
                          setQuery('María Rodríguez')
                          searchPosts('María Rodríguez')
                        }}
                        className="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-left transition-colors"
                      >
                        <div className="text-sm font-medium text-gray-900">María Rodríguez</div>
                        <div className="text-xs text-gray-500">Autora de Última Hora</div>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer del buscador */}
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Esc</kbd>
                      <span>para cerrar</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">↵</kbd>
                      <span>para seleccionar</span>
                    </div>
                  </div>
                  <div>
                    {results.length > 0 && (
                      <span>{results.length} resultado{results.length !== 1 ? 's' : ''}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}