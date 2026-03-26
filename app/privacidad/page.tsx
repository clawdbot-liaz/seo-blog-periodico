import { Shield, Cookie, User, Database, Eye } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-4 bg-red-100 rounded-full mb-6">
          <Shield className="h-12 w-12 text-red-600" />
        </div>
        <h1 className="text-4xl font-bold font-serif mb-4">Política de Privacidad</h1>
        <p className="text-gray-600 text-lg">
          Última actualización: 23 de marzo de 2026
        </p>
      </div>

      {/* Introducción */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3">1. Introducción</h2>
        <p className="text-gray-700 mb-4">
          En <strong>EL INFORMADOR</strong> (en adelante, "nosotros", "nuestro" o "el Sitio"), 
          respetamos su privacidad y nos comprometemos a proteger sus datos personales. 
          Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y 
          protegemos su información cuando visita nuestro sitio web <strong>elinformador.es</strong>.
        </p>
        <p className="text-gray-700">
          Al utilizar nuestro Sitio, usted acepta las prácticas descritas en esta Política de Privacidad.
        </p>
      </section>

      {/* Información que recopilamos */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3 flex items-center gap-3">
          <User className="h-6 w-6" />
          2. Información que Recopilamos
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3">Información que usted nos proporciona</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Datos de contacto (nombre, email) al suscribirse</li>
              <li>• Comentarios en artículos</li>
              <li>• Consultas a través de formularios de contacto</li>
              <li>• Participación en encuestas o concursos</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3">Información recopilada automáticamente</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Dirección IP y ubicación aproximada</li>
              <li>• Tipo de navegador y dispositivo</li>
              <li>• Páginas visitadas y tiempo de permanencia</li>
              <li>• Enlaces en los que hace clic</li>
              <li>• Datos de cookies y tecnologías similares</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Uso de Cookies */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3 flex items-center gap-3">
          <Cookie className="h-6 w-6" />
          3. Uso de Cookies
        </h2>
        
        <div className="bg-red-50 rounded-xl p-6 mb-6">
          <h3 className="font-bold text-lg mb-3 text-red-800">Tipos de cookies que utilizamos</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Cookies Esenciales</h4>
              <p className="text-sm text-gray-700">
                Necesarias para el funcionamiento básico del sitio. No se pueden desactivar.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Cookies Analíticas</h4>
              <p className="text-sm text-gray-700">
                Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Cookies Funcionales</h4>
              <p className="text-sm text-gray-700">
                Permiten recordar sus preferencias y personalizar su experiencia.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Cookies Publicitarias</h4>
              <p className="text-sm text-gray-700">
                Utilizadas para mostrar anuncios relevantes basados en sus intereses.
              </p>
            </div>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">
          Puede gestionar sus preferencias de cookies en cualquier momento haciendo clic en 
          el botón de configuración de cookies en la esquina inferior derecha de la pantalla.
        </p>
      </section>

      {/* Finalidad del tratamiento */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3 flex items-center gap-3">
          <Database className="h-6 w-6" />
          4. Finalidad del Tratamiento
        </h2>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-green-100 rounded-lg mt-1">
              <div className="h-4 w-4 bg-green-600 rounded-full"></div>
            </div>
            <div>
              <h3 className="font-bold mb-1">Proporcionar y mejorar nuestros servicios</h3>
              <p className="text-gray-700">
                Para ofrecer contenido relevante y personalizar su experiencia en nuestro sitio.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="p-2 bg-red-100 rounded-lg mt-1">
              <div className="h-4 w-4 bg-red-600 rounded-full"></div>
            </div>
            <div>
              <h3 className="font-bold mb-1">Análisis y estadísticas</h3>
              <p className="text-gray-700">
                Para entender cómo se utiliza nuestro sitio y mejorar su funcionalidad.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="p-2 bg-purple-100 rounded-lg mt-1">
              <div className="h-4 w-4 bg-purple-600 rounded-full"></div>
            </div>
            <div>
              <h3 className="font-bold mb-1">Comunicaciones</h3>
              <p className="text-gray-700">
                Para responder a sus consultas y enviar actualizaciones si se ha suscrito.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="p-2 bg-yellow-100 rounded-lg mt-1">
              <div className="h-4 w-4 bg-yellow-600 rounded-full"></div>
            </div>
            <div>
              <h3 className="font-bold mb-1">Cumplimiento legal</h3>
              <p className="text-gray-700">
                Para cumplir con nuestras obligaciones legales y regulatorias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sus derechos */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3 flex items-center gap-3">
          <Eye className="h-6 w-6" />
          5. Sus Derechos
        </h2>
        
        <div className="bg-gray-50 rounded-xl p-6">
          <p className="text-gray-700 mb-4">
            De acuerdo con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 
            de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), 
            usted tiene los siguientes derechos:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold mb-2">Derecho de acceso</h4>
              <p className="text-sm text-gray-600">
                Solicitar información sobre qué datos tenemos sobre usted.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold mb-2">Derecho de rectificación</h4>
              <p className="text-sm text-gray-600">
                Solicitar la corrección de datos inexactos o incompletos.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold mb-2">Derecho de supresión</h4>
              <p className="text-sm text-gray-600">
                Solicitar la eliminación de sus datos personales.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold mb-2">Derecho de oposición</h4>
              <p className="text-sm text-gray-600">
                Oponerse al tratamiento de sus datos para fines específicos.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold mb-2">Derecho a la portabilidad</h4>
              <p className="text-sm text-gray-600">
                Recibir sus datos en un formato estructurado y común.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold mb-2">Derecho de limitación</h4>
              <p className="text-sm text-gray-600">
                Solicitar la limitación del tratamiento de sus datos.
              </p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-red-50 rounded-lg">
            <p className="text-red-800">
              Para ejercer cualquiera de estos derechos, puede contactarnos en:{' '}
              <strong>privacidad@elinformador.es</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Compartir información */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3">6. Compartir Información</h2>
        
        <div className="space-y-4">
          <p className="text-gray-700">
            <strong>EL INFORMADOR</strong> no vende, alquila ni comercia con sus datos personales. 
            Podemos compartir su información en las siguientes circunstancias:
          </p>
          
          <ul className="text-gray-700 space-y-2 ml-6 list-disc">
            <li>
              <strong>Proveedores de servicios:</strong> Con empresas que nos ayudan a operar 
              nuestro sitio (hosting, análisis, marketing).
            </li>
            <li>
              <strong>Cumplimiento legal:</strong> Cuando sea requerido por ley o para proteger 
              nuestros derechos legales.
            </li>
            <li>
              <strong>Con su consentimiento:</strong> En cualquier otra circunstancia con su 
              autorización expresa.
            </li>
          </ul>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
            <p className="text-yellow-800">
              <strong>Nota importante:</strong> Utilizamos Google Analytics para análisis web. 
              Google puede recopilar información de acuerdo con su propia política de privacidad.
            </p>
          </div>
        </div>
      </section>

      {/* Seguridad */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3">7. Seguridad de los Datos</h2>
        
        <div className="space-y-4">
          <p className="text-gray-700">
            Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger 
            sus datos personales contra accesos no autorizados, alteración, divulgación o destrucción.
          </p>
          
          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-3 text-green-800">Medidas de seguridad implementadas</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Cifrado SSL/TLS para transmisión de datos</li>
              <li>• Firewalls y sistemas de detección de intrusiones</li>
              <li>• Acceso restringido a datos personales</li>
              <li>• Auditorías de seguridad periódicas</li>
              <li>• Copias de seguridad regulares</li>
            </ul>
          </div>
          
          <p className="text-gray-700">
            A pesar de nuestras medidas, ninguna transmisión por Internet o sistema de almacenamiento 
            electrónico es 100% seguro. No podemos garantizar la seguridad absoluta de sus datos.
          </p>
        </div>
      </section>

      {/* Enlaces a terceros */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3">8. Enlaces a Sitios de Terceros</h2>
        
        <p className="text-gray-700 mb-4">
          Nuestro sitio puede contener enlaces a sitios web de terceros. Esta Política de Privacidad 
          solo se aplica a <strong>elinformador.es</strong>. No somos responsables de las prácticas 
          de privacidad de otros sitios. Le recomendamos leer las políticas de privacidad de cada 
          sitio que visite.
        </p>
      </section>

      {/* Cambios en la política */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3">9. Cambios en esta Política</h2>
        
        <p className="text-gray-700 mb-4">
          Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en 
          nuestras prácticas o por otros motivos operativos, legales o regulatorios. Publicaremos 
          cualquier cambio en esta página con una nueva fecha de "Última actualización".
        </p>
        
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="text-gray-700">
            <strong>Notificación de cambios importantes:</strong> Para cambios materiales en la forma 
            en que tratamos sus datos personales, le notificaremos mediante un aviso destacado en 
            nuestro sitio o por correo electrónico si nos ha proporcionado su dirección.
          </p>
        </div>
      </section>

      {/* Contacto */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3">10. Contacto</h2>
        
        <div className="bg-red-50 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">¿Tiene preguntas sobre nuestra Política de Privacidad?</h3>
          
          <div className="space-y-3 mb-6">
            <p className="text-gray-700">
              <strong>Responsable del tratamiento:</strong> EL INFORMADOR
            </p>
            <p className="text-gray-700">
              <strong>Correo electrónico:</strong> contacto@elinformador.es
            </p>
            <p className="text-gray-700">
              <strong>Dirección web:</strong> https://elinformador.es/privacidad
            </p>
          </div>
          
          <p className="text-gray-600">
            También puede contactar con nuestra Delegada de Protección de Datos (DPD) en:{' '}
            <strong>contacto@elinformador.es</strong>
          </p>
          
          <div className="mt-8 pt-6 border-t border-blue-200">
            <p className="text-sm text-gray-500">
              Si no está satisfecho con nuestra respuesta, tiene derecho a presentar una reclamación 
              ante la Agencia Española de Protección de Datos (AEPD).
            </p>
          </div>
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
              Esta política cumple con el RGPD y la LOPDGDD.
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