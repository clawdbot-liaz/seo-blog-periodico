'use client'

import { useState, useEffect } from 'react'
import { X, Cookie } from 'lucide-react'

export default function CookiesPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Verificar si el usuario ya aceptó las cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted')
    
    if (!cookiesAccepted) {
      // Mostrar popup después de 2 segundos
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)
      
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true')
    setIsVisible(false)
  }

  const rejectCookies = () => {
    localStorage.setItem('cookiesRejected', 'true')
    setIsVisible(false)
  }

  const openPrivacyPolicy = () => {
    window.location.href = '/privacidad'
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 md:inset-auto md:bottom-4 md:right-4 md:left-auto z-50 flex items-end justify-center md:items-start md:justify-end p-4 md:p-0">
      {/* Overlay para móviles */}
      <div 
        className="fixed inset-0 bg-black/50 md:hidden"
        onClick={() => setIsVisible(false)}
      />
      
      <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl border border-gray-200 w-full max-w-2xl md:max-w-md md:w-96 animate-fade-in-up relative">
        <div className="flex items-start justify-between p-4 md:p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <Cookie className="h-5 w-5 md:h-6 md:w-6 text-red-600" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-gray-900">Configuración de Cookies</h3>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 transition p-1"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4 md:p-6 max-h-[60vh] md:max-h-none overflow-y-auto">
          <p className="text-gray-600 text-sm md:text-base mb-4">
            Utilizamos cookies propias y de terceros para mejorar nuestros servicios, 
            personalizar contenido, analizar el tráfico y mostrar publicidad relevante.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-3 md:p-4 mb-4">
            <h4 className="font-semibold text-gray-800 text-sm md:text-base mb-2">Tipos de cookies que utilizamos:</h4>
            <ul className="text-xs md:text-sm text-gray-600 space-y-1">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong className="font-semibold">Esenciales:</strong> Necesarias para el funcionamiento básico</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong className="font-semibold">Analíticas:</strong> Para entender cómo usas nuestro sitio</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong className="font-semibold">Funcionales:</strong> Para recordar tus preferencias</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong className="font-semibold">Publicitarias:</strong> Para mostrar anuncios relevantes</span>
              </li>
            </ul>
          </div>

          <p className="text-xs md:text-sm text-gray-500">
            Al hacer clic en "Aceptar todas", consientes el uso de todas las cookies. 
            Puedes personalizar tu configuración en cualquier momento.
          </p>
        </div>

        <div className="p-4 md:p-6 pt-0 md:pt-0 border-t border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3">
            <button
              onClick={rejectCookies}
              className="px-4 py-2.5 md:px-6 md:py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition text-sm md:text-base"
            >
              Solo necesarias
            </button>
            
            <button
              onClick={openPrivacyPolicy}
              className="px-4 py-2.5 md:px-6 md:py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition text-sm md:text-base"
            >
              Más información
            </button>
            
            <button
              onClick={acceptCookies}
              className="px-4 py-2.5 md:px-6 md:py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition text-sm md:text-base col-span-1 sm:col-span-3 md:col-span-1"
            >
              Aceptar todas
            </button>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Al continuar navegando, aceptas nuestra{' '}
              <a 
                href="/privacidad" 
                className="text-red-600 hover:text-red-800 underline"
                onClick={(e) => {
                  e.preventDefault()
                  openPrivacyPolicy()
                }}
              >
                Política de Privacidad
              </a>
              {' '}y el uso de cookies.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}