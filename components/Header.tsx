'use client'
import Link from 'next/link'
import { Newspaper, Search, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { label: 'Portada', href: '/' },
  { label: 'Última Hora', href: '/ultima-hora' },
  { label: 'Esports', href: '/esports' },
  { label: 'Deportes', href: '/deportes' },
  { label: 'Influencer / Pop', href: '/influencer-pop' },
  { label: 'Tecnología', href: '/tecnologia' },
]

const tickerItems = [
  'ÚLTIMA HORA: Incendio en edificio del centro de Madrid',
  'ESPORTS: Team Spirit gana el Major de Berlín',
  'DEPORTES: Real Madrid clasificado para semifinales de Champions',
  'INFLUENCER: Streamer baneado de Twitch',
  'TECNOLOGÍA: Apple presenta nueva plataforma de IA',
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const currentDate = new Date().toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <header
      className="bg-white"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      {/* Top utility bar */}
      <div className="bg-gray-950 text-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-9 text-xs">
            <span className="text-gray-400 capitalize tracking-wide hidden md:block">{currentDate}</span>
            <div className="flex items-center gap-3 mx-auto md:mx-0">
              <span 
                className="inline-flex items-center gap-1.5 bg-red-600 text-white px-2.5 py-0.5 font-bold tracking-widest text-xs" 
                style={{ letterSpacing: '0.15em' }}
              >
                ● ÚLTIMA HORA
              </span>
              <span className="text-gray-400 hidden md:block">Edición Digital</span>
            </div>
          </div>
        </div>
      </div>

      {/* Masthead */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6">

            {/* Logo */}
            <Link href="/" className="group flex items-center gap-4 no-underline">
              <div className="bg-red-600 p-2.5">
                <Newspaper className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1
                  className="text-4xl md:text-5xl font-black text-gray-950 leading-none tracking-tight group-hover:text-red-600 transition-colors duration-200"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  EL INFORMADOR
                </h1>
                <p 
                  className="text-gray-400 text-xs tracking-widest uppercase mt-1" 
                  style={{ letterSpacing: '0.25em' }}
                >
                  Diario Digital de Noticias
                </p>
              </div>
            </Link>

            {/* Breaking news ticker */}
            <div className="w-full md:max-w-sm lg:max-w-md border border-gray-200 overflow-hidden">
              <div className="bg-red-600 px-3 py-1">
                <span 
                  className="text-white text-xs font-bold tracking-widest" 
                  style={{ letterSpacing: '0.15em' }}
                >
                  BREAKING
                </span>
              </div>
              <div className="overflow-hidden bg-gray-50 px-3 py-2">
                <div
                  className="whitespace-nowrap text-gray-800 text-xs font-semibold"
                  style={{
                    display: 'inline-block',
                    animation: 'ticker 30s linear infinite',
                  }}
                >
                  {tickerItems.map((item, i) => (
                    <span key={i} className="mr-10">· {item}</span>
                  ))}
                  {tickerItems.map((item, i) => (
                    <span key={`r${i}`} className="mr-10">· {item}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="border-b-2 border-gray-950">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">

            {/* Desktop nav */}
            <div className="hidden md:flex items-center">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="relative px-4 py-4 text-xs font-bold tracking-widest uppercase text-gray-700 hover:text-red-600 transition-colors duration-150 group no-underline"
                  style={{ letterSpacing: '0.1em' }}
                >
                  {label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-200" />
                </Link>
              ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-1 ml-auto md:ml-0 py-2">
              <button
                className="p-2 text-gray-600 hover:text-red-600 hover:bg-gray-100 rounded transition-colors duration-150"
                aria-label="Buscar"
              >
                <Search className="h-4 w-4" />
              </button>
              <button
                className="md:hidden p-2 text-gray-600 hover:text-red-600 hover:bg-gray-100 rounded transition-colors duration-150"
                aria-label="Menú"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between px-6 py-3.5 text-xs font-bold tracking-widest uppercase text-gray-700 hover:text-red-600 hover:bg-gray-50 border-b border-gray-100 transition-colors no-underline"
                style={{ letterSpacing: '0.12em' }}
              >
                {label}
                <span className="text-gray-300">›</span>
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Ticker keyframes */}
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </header>
  )
}