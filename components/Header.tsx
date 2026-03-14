import Link from 'next/link'
import { Newspaper, Search, Menu, User } from 'lucide-react'

export default function Header() {
  const currentDate = new Date().toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <header className="border-b-4 border-black">
      {/* Top bar */}
      <div className="bg-black text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <span className="hidden md:inline">📰 Edición Digital</span>
              <span>•</span>
              <span>{currentDate}</span>
              <span>•</span>
              <span className="text-yellow-300">ÚLTIMA HORA</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="hover:text-yellow-300 transition">Suscribirse</button>
              <span>|</span>
              <button className="hover:text-yellow-300 transition">Iniciar Sesión</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <Link href="/" className="block">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Newspaper className="h-12 w-12 text-red-600" />
                <div>
                  <h1 className="text-5xl font-bold tracking-tighter font-serif">EL INFORMADOR</h1>
                  <p className="text-gray-600 text-sm uppercase tracking-widest mt-1">DIARIO DIGITAL DE NOTICIAS</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Breaking news ticker */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 w-full md:w-auto">
            <div className="flex items-center gap-3">
              <span className="breaking-news text-sm">BREAKING</span>
              <div className="overflow-hidden">
                <div className="animate-marquee whitespace-nowrap text-gray-800 font-semibold">
                  • SEO técnico revoluciona el tráfico web • Nueva actualización de Google afecta rankings • Expertos predicen cambios en algoritmos para 2024 •
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center py-4">
            {/* Main nav */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-4 md:mb-0">
              <Link href="/" className="font-bold text-gray-900 hover:text-red-600 transition border-b-2 border-transparent hover:border-red-600 pb-1">
                PORTADA
              </Link>
              <Link href="/nacional" className="font-bold text-gray-900 hover:text-red-600 transition border-b-2 border-transparent hover:border-red-600 pb-1">
                NACIONAL
              </Link>
              <Link href="/internacional" className="font-bold text-gray-900 hover:text-red-600 transition border-b-2 border-transparent hover:border-red-600 pb-1">
                INTERNACIONAL
              </Link>
              <Link href="/economia" className="font-bold text-gray-900 hover:text-red-600 transition border-b-2 border-transparent hover:border-red-600 pb-1">
                ECONOMÍA
              </Link>
              <Link href="/tecnologia" className="font-bold text-gray-900 hover:text-red-600 transition border-b-2 border-transparent hover:border-red-600 pb-1">
                TECNOLOGÍA
              </Link>
              <Link href="/cultura" className="font-bold text-gray-900 hover:text-red-600 transition border-b-2 border-transparent hover:border-red-600 pb-1">
                CULTURA
              </Link>
              <Link href="/deportes" className="font-bold text-gray-900 hover:text-red-600 transition border-b-2 border-transparent hover:border-red-600 pb-1">
                DEPORTES
              </Link>
              <Link href="/opinion" className="font-bold text-gray-900 hover:text-red-600 transition border-b-2 border-transparent hover:border-red-600 pb-1">
                OPINIÓN
              </Link>
            </div>

            {/* Search and menu */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition md:hidden">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}