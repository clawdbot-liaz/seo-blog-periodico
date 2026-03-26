import { Cookie, Settings, Shield, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-4 bg-red-100 rounded-full mb-6">
          <Cookie className="h-12 w-12 text-red-600" />
        </div>
        <h1 className="text-4xl font-bold font-serif mb-4">Política de Cookies</h1>
        <p className="text-gray-600 text-lg">
          Última actualización: 26 de marzo de 2026
        </p>
      </div>

      {/* Introducción */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3">1. ¿Qué son las cookies?</h2>
        <p className="text-gray-700 mb-4">
          Las cookies son pequeños archivos de texto que los sitios web que visita colocan en su dispositivo. 
          Se utilizan ampliamente para hacer que los sitios web funcionen, o funcionen de manera más eficiente, 
          así como para proporcionar información a los propietarios del sitio.
        </p>
        <p className="text-gray-700">
          En <strong>EL INFORMADOR</strong> utilizamos cookies para mejorar su experiencia de navegación, 
          analizar el tráfico del sitio y personalizar el contenido.
        </p>
      </section>

      {/* Tipos de cookies que utilizamos */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3 flex items-center gap-3">
          <Settings className="h-6 w-6" />
          2. Tipos de cookies que utilizamos
        </h2>
        
        <div className="space-y-6">
          <div className="bg-red-50 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-4 text-red-800">Cookies técnicas o necesarias</h3>
            <p className="text-gray-700 mb-3">
              Son esenciales para que el sitio web funcione correctamente. Permiten la navegación y 
              utilizan funciones de seguridad.
            </p>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold mb-2">Ejemplos:</h4>
              <ul className="text-gray-700 space-y-1 ml-4 list-disc">
                <li>Cookies de sesión para mantener la navegación</li>
                <li>Cookies de seguridad para proteger contra ataques</li>
                <li>Cookies de equilibrio de carga para distribuir tráfico</li>
              </ul>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              <strong>No se pueden desactivar</strong> desde nuestro sistema. Son necesarias para el funcionamiento básico.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-4 text-gray-800">Cookies de análisis o estadísticas</h3>
            <p className="text-gray-700 mb-3">
              Nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico 
              de la utilización que hacen los usuarios del servicio ofrecido.
            </p>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold mb-2">Ejemplos:</h4>
              <ul className="text-gray-700 space-y-1 ml-4 list-disc">
                <li>Google Analytics para análisis de tráfico</li>
                <li>Cookies de medición de audiencia</li>
                <li>Cookies de análisis de comportamiento</li>
              </ul>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Puede desactivarlas en cualquier momento desde la configuración de cookies.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-4 text-gray-800">Cookies de funcionalidad</h3>
            <p className="text-gray-700 mb-3">
              Permiten recordar información para que el usuario acceda al servicio con determinadas 
              características que pueden diferenciar su experiencia de la de otros usuarios.
            </p>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold mb-2">Ejemplos:</h4>
              <ul className="text-gray-700 space-y-1 ml-4 list-disc">
                <li>Recordar preferencias de idioma</li>
                <li>Recordar configuración de visualización</li>
                <li>Cookies de personalización de interfaz</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-4 text-gray-800">Cookies de publicidad comportamental</h3>
            <p className="text-gray-700 mb-3">
              Almacenan información del comportamiento de los usuarios obtenida a través de la observación 
              continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico 
              para mostrar publicidad en función del mismo.
            </p>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold mb-2">Ejemplos:</h4>
              <ul className="text-gray-700 space-y-1 ml-4 list-disc">
                <li>Cookies de redes publicitarias (Google Ads, Facebook)</li>
                <li>Cookies de remarketing</li>
                <li>Cookies de segmentación de audiencia</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cookies de terceros */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3">3. Cookies de terceros</h2>
        
        <div className="space-y-4">
          <p className="text-gray-700">
            Algunas cookies son colocadas por servicios de terceros que aparecen en nuestras páginas. 
            No tenemos control sobre estas cookies de terceros.
          </p>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-6 w-6 text-yellow-600 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2 text-yellow-800">Servicios de terceros que utilizamos</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>
                    <strong>Google Analytics:</strong> Para análisis web. Google puede recopilar información 
                    según su propia política de privacidad.
                  </li>
                  <li>
                    <strong>Redes sociales:</strong> Botones para compartir contenido en redes sociales 
                    (Facebook, Twitter, LinkedIn) pueden colocar cookies.
                  </li>
                  <li>
                    <strong>Servicios de video:</strong> Incrustaciones de YouTube o Vimeo pueden colocar cookies.
                  </li>
                  <li>
                    <strong>Publicidad:</strong> Servicios de publicidad como Google AdSense pueden colocar cookies.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <p className="text-gray-700">
            Le recomendamos consultar las políticas de privacidad de estos terceros para obtener 
            más información sobre sus cookies y cómo gestionarlas.
          </p>
        </div>
      </section>

      {/* Gestión de cookies */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3 flex items-center gap-3">
          <Shield className="h-6 w-6" />
          4. Cómo gestionar las cookies
        </h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-4">Configuración inicial</h3>
            <p className="text-gray-700 mb-4">
              La primera vez que visite nuestro sitio, se le mostrará un banner informativo sobre el uso 
              de cookies. Desde allí puede:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6 list-disc">
              <li><strong>Aceptar todas las cookies:</strong> Consiente el uso de todos los tipos de cookies</li>
              <li><strong>Aceptar solo las necesarias:</strong> Solo se instalarán cookies técnicas</li>
              <li><strong>Personalizar configuración:</strong> Elegir qué tipos de cookies acepta</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-4">Cambiar configuración posteriormente</h3>
            <p className="text-gray-700 mb-4">
              Puede cambiar sus preferencias en cualquier momento de las siguientes formas:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold mb-2">Desde nuestro sitio</h4>
                <p className="text-sm text-gray-600">
                  Haga clic en el icono de cookies que aparece en la esquina inferior derecha de la pantalla.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold mb-2">Desde su navegador</h4>
                <p className="text-sm text-gray-600">
                  La mayoría de navegadores permiten gestionar cookies desde sus opciones de configuración.
                </p>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-red-50 rounded-lg">
              <p className="text-red-800">
                <strong>Nota importante:</strong> Si desactiva las cookies, es posible que algunas funciones 
                del sitio no funcionen correctamente.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-4">Configuración por navegador</h3>
            <p className="text-gray-700 mb-4">
              A continuación, enlaces a las instrucciones para gestionar cookies en los navegadores más populares:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <a 
                href="https://support.google.com/chrome/answer/95647" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:bg-gray-50 transition"
              >
                <p className="font-medium">Google Chrome</p>
              </a>
              
              <a 
                href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:bg-gray-50 transition"
              >
                <p className="font-medium">Mozilla Firefox</p>
              </a>
              
              <a 
                href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:bg-gray-50 transition"
              >
                <p className="font-medium">Safari</p>
              </a>
              
              <a 
                href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:bg-gray-50 transition"
              >
                <p className="font-medium">Microsoft Edge</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Actualizaciones de la política */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3">5. Actualizaciones de esta política</h2>
        
        <div className="space-y-4">
          <p className="text-gray-700">
            Podemos actualizar esta Política de Cookies para reflejar cambios en nuestras prácticas 
            o por otros motivos operativos, legales o regulatorios.
          </p>
          
          <div className="bg-gray-100 rounded-lg p-4">
            <p className="text-gray-700">
              <strong>Notificación de cambios:</strong> Para cambios materiales en la forma en que 
              utilizamos cookies, actualizaremos esta página con una nueva fecha de "Última actualización" 
              y, si es necesario, le notificaremos mediante un aviso destacado en nuestro sitio.
            </p>
          </div>
          
          <p className="text-gray-700">
            Le recomendamos revisar periódicamente esta página para estar informado sobre cómo utilizamos las cookies.
          </p>
        </div>
      </section>

      {/* Contacto */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3">6. Contacto</h2>
        
        <div className="bg-red-50 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">¿Tiene preguntas sobre nuestra Política de Cookies?</h3>
          
          <div className="space-y-3 mb-6">
            <p className="text-gray-700">
              <strong>Responsable del tratamiento:</strong> EL INFORMADOR
            </p>
            <p className="text-gray-700">
              <strong>Correo electrónico:</strong> privacidad@elinformador.es
            </p>
            <p className="text-gray-700">
              <strong>Dirección web:</strong> https://elinformador.es/cookies
            </p>
          </div>
          
          <p className="text-gray-600">
            Para ejercer sus derechos relacionados con la protección de datos, consulte nuestra 
            <Link href="/privacidad" className="text-red-600 hover:text-red-800 font-medium mx-1">
              Política de Privacidad
            </Link>.
          </p>
        </div>
      </section>

      {/* Footer de la página */}
      <div className="border-t border-gray-200 pt-8 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-gray-600">
              © 2026 EL INFORMADOR. Todos los derechos reservados.
            </p>
            <p className="text-sm text-gray-500">
              Esta política cumple con la Ley de Servicios de la Sociedad de la Información (LSSI) y el RGPD.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Link 
              href="/"
              className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}