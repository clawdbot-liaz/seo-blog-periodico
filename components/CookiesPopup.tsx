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
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-4 md:w-96 z-50">
      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6 animate-fade-in-up">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <Cookie className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Configuración de Cookies</h3>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 transition"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mb-6">
          <p className="text-gray-600 mb-4">
            Utilizamos cookies propias y de terceros para mejorar nuestros servicios, 
            personalizar contenido, analizar el tráfico y mostrar publicidad relevante.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <h4 className="font-semibold text-gray-800 mb-2">Tipos de cookies que utilizamos:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• <strong>Esenciales:</strong> Necesarias para el funcionamiento básico</li>
              <li>• <strong>Analíticas:</strong> Para entender cómo usas nuestro sitio</li>
              <li>• <strong>Funcionales:</strong> Para recordar tus preferencias</li>
              <li>• <strong>Publicitarias:</strong> Para mostrar anuncios relevantes</li>
            </ul>
          </div>

          <p className="text-sm text-gray-500">
            Al hacer clic en "Aceptar todas", consientes el uso de todas las cookies. 
            Puedes personalizar tu configuración en cualquier momento.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={rejectCookies}
            className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition flex-1"
          >
            Solo necesarias
          </button>
          
          <button
            onClick={openPrivacyPolicy}
            className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition flex-1"
          >
            Más información
          </button>
          
          <button
            onClick={acceptCookies}
            className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition flex-1"
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
  )
}