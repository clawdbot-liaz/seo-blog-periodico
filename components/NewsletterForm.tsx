'use client'

import { useState } from 'react'
import { Mail, Check, Loader2 } from 'lucide-react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setStatus('error')
      setMessage('Por favor, introduce un email válido')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      // Aquí integrarás tu servicio de suscripción (Stripe, PayPal, etc.)
      // Por ahora es un placeholder
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Simulación de éxito
      setStatus('success')
      setMessage('¡Suscripción exitosa! Revisa tu email para confirmar.')
      setEmail('')
      
      // Reset después de 5 segundos
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
      
    } catch (error) {
      setStatus('error')
      setMessage('Error al procesar la suscripción. Intenta de nuevo.')
    }
  }

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-4">
          <Mail className="h-8 w-8" />
        </div>
        <h3 className="text-3xl font-bold mb-4">SUSCRÍBETE A NUESTRO NEWSLETTER PREMIUM</h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Accede a contenido exclusivo, análisis en profundidad y las últimas tendencias del sector.
          Recibe informes semanales y acceso anticipado a nuestros estudios.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Tu email profesional
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@empresa.com"
            className="w-full px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
            disabled={status === 'loading'}
            required
          />
        </div>

        <div className="mb-6">
          <label className="flex items-start gap-3 text-sm text-gray-300">
            <input
              type="checkbox"
              className="mt-1"
              required
              disabled={status === 'loading'}
            />
            <span>
              Acepto recibir comunicaciones y confirmo que he leído la{' '}
              <a href="/privacidad" className="text-red-300 hover:text-red-400 underline">
                Política de Privacidad
              </a>
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              PROCESANDO...
            </>
          ) : status === 'success' ? (
            <>
              <Check className="h-5 w-5" />
              ¡SUSCRITO!
            </>
          ) : (
            'SUSCRIBIRSE AHORA'
          )}
        </button>

        {message && (
          <div className={`mt-4 p-3 rounded-lg text-center ${
            status === 'success' ? 'bg-green-900/30 text-green-300' : 'bg-red-900/30 text-red-300'
          }`}>
            {message}
          </div>
        )}

        <p className="text-gray-400 text-sm mt-4 text-center">
          Sin spam. Puedes darte de baja en cualquier momento.
        </p>
      </form>

      {/* Planes de suscripción (placeholder para integración con Stripe/PayPal) */}
      <div className="mt-12 pt-8 border-t border-gray-700">
        <h4 className="text-xl font-bold mb-6 text-center">PLANES DE SUSCRIPCIÓN</h4>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <h5 className="text-lg font-bold mb-2">BÁSICO</h5>
            <div className="text-3xl font-bold mb-4">Gratis</div>
            <ul className="text-gray-300 text-sm space-y-2 mb-6">
              <li>✓ Newsletter semanal</li>
              <li>✓ Resumen de noticias</li>
              <li>✓ Acceso a artículos públicos</li>
            </ul>
            <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg transition">
              Actual
            </button>
          </div>

          <div className="bg-red-900/30 border-2 border-red-600 rounded-xl p-6 text-center relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                RECOMENDADO
              </span>
            </div>
            <h5 className="text-lg font-bold mb-2">PREMIUM</h5>
            <div className="text-3xl font-bold mb-4">€9.99<span className="text-lg text-gray-300">/mes</span></div>
            <ul className="text-gray-300 text-sm space-y-2 mb-6">
              <li>✓ Todo lo del plan Básico</li>
              <li>✓ Análisis exclusivos</li>
              <li>✓ Webinars mensuales</li>
              <li>✓ Acceso a base de datos</li>
              <li>✓ Soporte prioritario</li>
            </ul>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition">
              SUSCRIBIRSE
            </button>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <h5 className="text-lg font-bold mb-2">EMPRESA</h5>
            <div className="text-3xl font-bold mb-4">€29.99<span className="text-lg text-gray-300">/mes</span></div>
            <ul className="text-gray-300 text-sm space-y-2 mb-6">
              <li>✓ Todo lo del plan Premium</li>
              <li>✓ Hasta 5 usuarios</li>
              <li>✓ Informes personalizados</li>
              <li>✓ Consultoría mensual</li>
              <li>✓ API access</li>
            </ul>
            <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg transition">
              CONTACTAR
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}