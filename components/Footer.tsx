import { Newspaper, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white mt-16 border-t-4 border-red-600">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Newspaper className="h-10 w-10 text-red-400" />
              <div>
                <h3 className="text-2xl font-bold font-serif">EL INFORMADOR</h3>
                <p className="text-gray-400 text-sm">Diario Digital</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              El periódico digital líder en noticias de última hora, análisis en profundidad y periodismo de calidad.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Secciones */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-red-600 pl-3">SECCIONES</h4>
            <ul className="space-y-3">
              <li><a href="/ultima-hora" className="text-gray-400 hover:text-white transition">Última Hora</a></li>
              <li><a href="/esports" className="text-gray-400 hover:text-white transition">ESPORTS</a></li>
              <li><a href="/deportes" className="text-gray-400 hover:text-white transition">Deportes</a></li>
              <li><a href="/influencer-pop" className="text-gray-400 hover:text-white transition">Influencer/Pop</a></li>
              <li><a href="/tecnologia" className="text-gray-400 hover:text-white transition">Tecnología</a></li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-red-600 pl-3">SERVICIOS</h4>
            <ul className="space-y-3">
              <li><a href="/suscripciones" className="text-gray-400 hover:text-white transition">Suscripciones</a></li>
              <li><a href="/publicidad" className="text-gray-400 hover:text-white transition">Publicidad</a></li>
              <li><a href="/archivo" className="text-gray-400 hover:text-white transition">Archivo</a></li>
              <li><a href="/contacto" className="text-gray-400 hover:text-white transition">Contacto</a></li>
              <li><a href="/redaccion" className="text-gray-400 hover:text-white transition">Redacción</a></li>
              <li><a href="/empleo" className="text-gray-400 hover:text-white transition">Empleo</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-red-600 pl-3">CONTACTO</h4>
            <div className="text-gray-400 space-y-3">
              <p>Redacción: redaccion@elinformador.es</p>
              <p>Publicidad: publicidad@elinformador.es</p>
              <p>Soporte: soporte@elinformador.es</p>
              <p>Web: www.elinformador.es</p>
              <p>Horario: Lunes a Viernes 9:00 - 18:00</p>
            </div>
          </div>
        </div>


      </div>

      {/* Copyright */}
      <div className="bg-black py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© {currentYear} EL INFORMADOR. Todos los derechos reservados.</p>
          </div>
          <div className="text-center text-gray-500 text-xs mt-4">
            <div className="flex flex-wrap justify-center gap-4 mb-2">
              <a href="/privacidad" className="hover:text-white transition">Política de Privacidad</a>
              <span className="text-gray-600">•</span>
              <a href="/cookies" className="hover:text-white transition">Política de Cookies</a>
              <span className="text-gray-600">•</span>
              <a href="/aviso-legal" className="hover:text-white transition">Aviso Legal</a>
              <span className="text-gray-600">•</span>
              <a href="/condiciones" className="hover:text-white transition">Términos y Condiciones</a>
            </div>
            <p>Las opiniones expresadas en los artículos son responsabilidad exclusiva de sus autores.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}