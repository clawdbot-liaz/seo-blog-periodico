'use client'

import { useState, useRef, useEffect } from 'react'
import { Share2, Facebook, Twitter, Linkedin, Link as LinkIcon, Check, X } from 'lucide-react'

interface ShareButtonsProps {
  title: string
  url: string
  excerpt: string
}

export default function ShareButtons({ title, url, excerpt }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  
  // URL completa para compartir
  const fullUrl = typeof window !== 'undefined' ? window.location.origin + url : url
  
  // Texto para compartir
  const shareText = `${title} - EL INFORMADOR`
  
  // URLs de compartir para cada plataforma
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(fullUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
  }
  
  // Función para copiar enlace al portapapeles
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Error al copiar:', err)
      // Fallback para navegadores antiguos
      const textArea = document.createElement('textarea')
      textArea.value = fullUrl
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }
  
  // Función para compartir nativo (Web Share API)
  const shareNative = async () => {
    // Verificar si la Web Share API está disponible
    const canShare = typeof navigator !== 'undefined' && 'share' in navigator
    
    if (canShare) {
      try {
        await navigator.share({
          title: shareText,
          text: excerpt,
          url: fullUrl,
        })
      } catch (err) {
        console.log('Compartir cancelado:', err)
      }
    } else {
      // Si no hay API nativa, mostrar menú
      setShowMenu(true)
    }
  }
  
  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false)
      }
    }
    
    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showMenu])
  
  return (
    <div className="relative" ref={menuRef}>
      {/* Botón principal de compartir */}
      <button
        onClick={() => {
          // Verificar si la Web Share API está disponible
          const canShare = typeof navigator !== 'undefined' && 'share' in navigator
          
          if (canShare) {
            shareNative()
          } else {
            setShowMenu(!showMenu)
          }
        }}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors font-medium"
        aria-label="Compartir artículo"
      >
        <Share2 className="h-5 w-5" />
        <span>Compartir</span>
      </button>
      
      {/* Menú desplegable de opciones de compartir */}
      {showMenu && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50">
          {/* Encabezado del menú */}
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-medium text-gray-700">Compartir artículo</p>
            <button
              onClick={() => setShowMenu(false)}
              className="p-1 hover:bg-gray-100 rounded"
              aria-label="Cerrar menú"
            >
              <X className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          
          <div className="space-y-2">
            {/* Facebook */}
            <a
              href={shareUrls.facebook}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setShowMenu(false)}
              className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded transition-colors text-blue-600"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Facebook className="h-4 w-4 text-white" />
              </div>
              <span className="flex-1 text-sm">Compartir en Facebook</span>
            </a>
            
            {/* Twitter */}
            <a
              href={shareUrls.twitter}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setShowMenu(false)}
              className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded transition-colors text-blue-400"
            >
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                <Twitter className="h-4 w-4 text-white" />
              </div>
              <span className="flex-1 text-sm">Compartir en Twitter</span>
            </a>
            
            {/* LinkedIn */}
            <a
              href={shareUrls.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setShowMenu(false)}
              className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded transition-colors text-blue-700"
            >
              <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                <Linkedin className="h-4 w-4 text-white" />
              </div>
              <span className="flex-1 text-sm">Compartir en LinkedIn</span>
            </a>
            
            {/* Separador */}
            <div className="border-t border-gray-200 my-2"></div>
            
            {/* Copiar enlace */}
            <button
              onClick={() => {
                copyToClipboard()
                setShowMenu(false)
              }}
              className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded transition-colors text-gray-700 w-full"
            >
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                {copied ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <LinkIcon className="h-4 w-4 text-gray-600" />
                )}
              </div>
              <span className="flex-1 text-sm text-left">
                {copied ? '¡Enlace copiado!' : 'Copiar enlace'}
              </span>
            </button>
          </div>
          
          {/* URL para copiar */}
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-xs text-gray-500 mb-1">Enlace del artículo:</p>
            <div className="bg-gray-50 rounded p-2">
              <code className="text-xs text-gray-700 break-all">
                {fullUrl}
              </code>
            </div>
          </div>
        </div>
      )}
      
      {/* Notificación de enlace copiado (global) */}
      {copied && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg z-50 animate-fade-in-up">
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5" />
            <span>¡Enlace copiado al portapapeles!</span>
          </div>
        </div>
      )}
    </div>
  )
}