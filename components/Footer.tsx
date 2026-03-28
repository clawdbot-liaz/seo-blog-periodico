import { Newspaper, Mail, Globe, Clock, ArrowUpRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const secciones = [
    { label: 'Última Hora', href: '/ultima-hora' },
    { label: 'Esports', href: '/esports' },
    { label: 'Deportes', href: '/deportes' },
    { label: 'Influencer / Pop', href: '/influencer-pop' },
    { label: 'Tecnología', href: '/tecnologia' },
  ]

  const legal = [
    { label: 'Privacidad', href: '/privacidad' },
    { label: 'Cookies', href: '/cookies' },
    { label: 'Aviso Legal', href: '/aviso-legal' },
    { label: 'Términos', href: '/condiciones' },
  ]

  return (
    <footer
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
      className="bg-gray-950 text-white mt-16"
    >
      {/* Red accent bar */}
      <div className="h-1 w-full bg-red-600" />

      {/* Top strip — masthead */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <div className="bg-red-600 p-2 rounded">
              <Newspaper className="h-7 w-7 text-white" />
            </div>
            <div>
              <p 
                className="text-2xl font-bold tracking-widest uppercase leading-none" 
                style={{ letterSpacing: '0.18em' }}
              >
                El Informador
              </p>
              <p 
                className="text-gray-500 text-xs tracking-widest uppercase mt-0.5" 
                style={{ letterSpacing: '0.25em' }}
              >
                Diario Digital
              </p>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed border-l border-gray-700 pl-5 italic">
            Periodismo de calidad, noticias de última hora y análisis en profundidad.
          </p>
        </div>
      </div>

      {/* Main grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Secciones */}
          <div>
            <h4 
              className="text-xs font-bold tracking-widest uppercase text-red-500 mb-6" 
              style={{ letterSpacing: '0.2em' }}
            >
              Secciones
            </h4>
            <ul className="space-y-1">
              {secciones.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="group flex items-center justify-between py-2.5 border-b border-gray-800 text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <span className="text-sm">{label}</span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 text-gray-600 group-hover:text-red-500 transition-colors duration-200 opacity-0 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 
              className="text-xs font-bold tracking-widest uppercase text-red-500 mb-6" 
              style={{ letterSpacing: '0.2em' }}
            >
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">Redacción</p>
                  <a 
                    href="mailto:contacto@elinformador.es" 
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    contacto@elinformador.es
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">Publicidad</p>
                  <a 
                    href="mailto:publicidad@elinformador.es" 
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    publicidad@elinformador.es
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">Web</p>
                  <a 
                    href="https://www.elinformador.es" 
                    className="text-gray-300 hover:text-white text-sm transition-colors"
                  >
                    www.elinformador.es
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">Horario</p>
                  <p className="text-gray-300 text-sm">Lun – Vie · 9:00 – 18:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quote / divider block */}
          <div className="flex flex-col justify-between">
            <blockquote className="border-l-2 border-red-600 pl-5 py-2 mt-2">
              <p className="text-gray-400 text-sm leading-relaxed italic">
                "La libertad de prensa es la base de cualquier democracia sana."
              </p>
            </blockquote>

            <div className="mt-10 p-5 border border-gray-800 rounded-sm">
              <p 
                className="text-gray-500 text-xs uppercase tracking-widest mb-2" 
                style={{ letterSpacing: '0.15em' }}
              >
                Nota editorial
              </p>
              <p className="text-gray-400 text-xs leading-relaxed">
                Las opiniones expresadas en los artículos son responsabilidad exclusiva de sus autores y no representan la línea editorial de EL INFORMADOR.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 bg-black/50">
        <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs tracking-wide">
            © {currentYear} <span className="text-gray-500">EL INFORMADOR</span> · Todos los derechos reservados
          </p>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-1">
            {legal.map(({ label, href }, i) => (
              <a
                key={href}
                href={href}
                className="text-gray-600 hover:text-gray-300 text-xs transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}