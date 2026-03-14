export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              SEO<span className="text-primary-400">Blog</span>
            </div>
            <p className="text-gray-400">
              Blog profesional optimizado para SEO y generación de tráfico orgánico.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Inicio</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="/categorias" className="text-gray-400 hover:text-white">Categorías</a></li>
              <li><a href="/sobre" className="text-gray-400 hover:text-white">Sobre Nosotros</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacidad" className="text-gray-400 hover:text-white">Política de Privacidad</a></li>
              <li><a href="/cookies" className="text-gray-400 hover:text-white">Cookies</a></li>
              <li><a href="/terminos" className="text-gray-400 hover:text-white">Términos y Condiciones</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Suscríbete para recibir los mejores artículos sobre SEO.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-grow px-4 py-2 rounded-l-lg text-gray-900"
              />
              <button
                type="submit"
                className="bg-primary-600 px-4 py-2 rounded-r-lg font-semibold hover:bg-primary-700"
              >
                →
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} SEOBlog. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">
            Optimizado para SEO • Velocidad 95+ PageSpeed • Indexación perfecta
          </p>
        </div>
      </div>
    </footer>
  )
}