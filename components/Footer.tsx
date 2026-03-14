import { Newspaper, Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react'

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
              <li><a href="/nacional" className="text-gray-400 hover:text-white transition">Nacional</a></li>
              <li><a href="/internacional" className="text-gray-400 hover:text-white transition">Internacional</a></li>
              <li><a href="/economia" className="text-gray-400 hover:text-white transition">Economía</a></li>
              <li><a href="/tecnologia" className="text-gray-400 hover:text-white transition">Tecnología</a></li>
              <li><a href="/cultura" className="text-gray-400 hover:text-white transition">Cultura</a></li>
              <li><a href="/deportes" className="text-gray-400 hover:text-white transition">Deportes</a></li>
              <li><a href="/opinion" className="text-gray-400 hover:text-white transition">Opinión</a></li>
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

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-red-600 pl-3">NEWSLETTER</h4>
            <p className="text-gray-400 mb-4">
              Suscríbete para recibir las noticias más importantes en tu correo.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom footer */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Legal */}
          <div>
            <h5 className="font-bold mb-4">LEGAL</h5>
            <div className="text-gray-400 text-sm space-y-2">
              <a href="/privacidad" className="block hover:text-white">Política de Privacidad</a>
              <a href="/cookies" className="block hover:text-white">Política de Cookies</a>
              <a href="/terminos" className="block hover:text-white">Términos y Condiciones</a>
              <a href="/aviso-legal" className="block hover:text-white">Aviso Legal</a>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h5 className="font-bold mb-4">CONTACTO</h5>
            <div className="text-gray-400 text-sm space-y-2">
              <p>Redacción: redaccion@elinformador.com</p>
              <p>Publicidad: publicidad@elinformador.com</p>
              <p>Teléfono: +34 900 123 456</p>
              <p>Dirección: Calle Periódico, 123, Madrid</p>
            </div>
          </div>

          {/* Certificaciones */}
          <div>
            <h5 className="font-bold mb-4">CERTIFICACIONES</h5>
            <div className="text-gray-400 text-sm space-y-2">
              <p>✅ Miembro de la AEDE</p>
              <p>✅ Verificado por IAB Spain</p>
              <p>✅ Certificado SSL</p>
              <p>✅ GDPR Compliant</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© {currentYear} EL INFORMADOR. Todos los derechos reservados.</p>
            <p className="mt-2 md:mt-0">
              ISSN: 1234-5678 • Depósito Legal: M-12345-{currentYear}
            </p>
          </div>
          <div className="text-center text-gray-500 text-xs mt-4">
            <p>Este periódico se publica bajo licencia Creative Commons. Las opiniones son responsabilidad de sus autores.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}