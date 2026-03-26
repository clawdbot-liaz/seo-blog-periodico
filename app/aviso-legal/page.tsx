import { Building, Globe, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function LegalNoticePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-4 bg-red-100 rounded-full mb-6">
          <Building className="h-12 w-12 text-red-600" />
        </div>
        <h1 className="text-4xl font-bold font-serif mb-4">Aviso Legal</h1>
        <p className="text-gray-600 text-lg">
          Última actualización: 26 de marzo de 2026
        </p>
      </div>

      {/* Información del titular */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3">1. Información del titular</h2>
        
        <div className="bg-gray-50 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Building className="h-5 w-5 text-gray-600 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Denominación social</h3>
                  <p className="text-gray-700">EL INFORMADOR MEDIA S.L.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Globe className="h-5 w-5 text-gray-600 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Nombre comercial</h3>
                  <p className="text-gray-700">EL INFORMADOR</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gray-600 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Domicilio social</h3>
                  <p className="text-gray-700">Calle de la Prensa, 28<br />28012 Madrid, España</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-gray-600 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Correo electrónico</h3>
                  <p className="text-gray-700">legal@elinformador.es</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-gray-600 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Teléfono de contacto</h3>
                  <p className="text-gray-700">+34 910 123 456</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold mb-1">Datos registrales</h3>
                <p className="text-gray-700 text-sm">
                  Inscrita en el Registro Mercantil de Madrid, Tomo 12345, Folio 67, Hoja M-123456
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="font-bold mb-2">CIF/NIF</h3>
            <p className="text-gray-700">B-12345678</p>
          </div>
        </div>
      </section>

      {/* Objeto del sitio web */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3">2. Objeto del sitio web</h2>
        
        <div className="space-y-4">
          <p className="text-gray-700">
            El sitio web <strong>elinformador.es</strong> tiene como objeto principal la difusión de 
            información periodística y contenidos editoriales en formato digital, incluyendo:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-bold mb-2">Contenido informativo</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>Noticias de actualidad y última hora</li>
                <li>Artículos especializados en esports</li>
                <li>Información deportiva tradicional</li>
                <li>Noticias tecnológicas y de innovación</li>
                <li>Contenido sobre cultura digital e influencers</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-bold mb-2">Servicios adicionales</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>Comentarios y participación de lectores</li>
                <li>Suscripción a newsletters informativos</li>
                <li>Archivo histórico de publicaciones</li>
                <li>Búsqueda y filtrado de contenido</li>
              </ul>
            </div>
          </div>
          
          <p className="text-gray-700">
            El acceso y uso del sitio web atribuye la condición de usuario e implica la aceptación 
            plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.
          </p>
        </div>
      </section>

      {/* Condiciones de uso */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3">3. Condiciones de uso y acceso</h2>
        
        <div className="space-y-4">
          <p className="text-gray-700">
            El usuario se compromete a utilizar el sitio web, sus servicios y contenidos de conformidad 
            con la legislación vigente, la moral, el orden público y las buenas costumbres.
          </p>
          
          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4 text-red-800">Prohibiciones expresas</h3>
            <p className="text-gray-700 mb-3">
              Queda expresamente prohibido:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6 list-disc">
              <li>Utilizar el sitio web con fines ilícitos o contrarios a lo establecido en este Aviso Legal</li>
              <li>Reproducir, distribuir o comunicar públicamente los contenidos sin autorización expresa</li>
              <li>Realizar actos que puedan dañar, inutilizar o sobrecargar el sitio web</li>
              <li>Intentar acceder a datos de otros usuarios o áreas restringidas</li>
              <li>Introducir virus o cualquier otro código malicioso</li>
              <li>Suplantar la identidad de otros usuarios o de EL INFORMADOR</li>
            </ul>
          </div>
          
          <p className="text-gray-700">
            EL INFORMADOR se reserva el derecho de denegar o retirar el acceso al sitio web, en cualquier 
            momento y sin necesidad de preaviso, a aquellos usuarios que incumplan las presentes condiciones.
          </p>
        </div>
      </section>

      {/* Propiedad intelectual e industrial */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3">4. Propiedad intelectual e industrial</h2>
        
        <div className="space-y-4">
          <p className="text-gray-700">
            Todos los derechos de propiedad intelectual e industrial del sitio web, así como de los 
            elementos contenidos en el mismo (incluyendo, pero no limitado a, imágenes, sonido, audio, 
            video, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, 
            selección de materiales usados, programas de ordenador necesarios para su funcionamiento, 
            acceso y uso, etc.) son propiedad de EL INFORMADOR o de sus licenciantes.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4">Derechos reservados</h3>
            <p className="text-gray-700 mb-4">
              Quedan expresamente reservados todos los derechos. En virtud de lo dispuesto en la Ley de 
              Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y 
              la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o 
              parte de los contenidos de este sitio web, con fines comerciales, en cualquier soporte y 
              por cualquier medio técnico, sin la autorización de EL INFORMADOR.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold mb-2">Uso permitido</h4>
                <p className="text-sm text-gray-600">
                  El usuario podrá visualizar, imprimir, copiar y almacenar los elementos del sitio web 
                  exclusivamente para su uso personal y privado.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold mb-2">Atribución requerida</h4>
                <p className="text-sm text-gray-600">
                  En caso de citar contenidos, deberá mencionarse expresamente la autoría de EL INFORMADOR 
                  y enlazar al contenido original.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4 text-yellow-800">Marcas registradas</h3>
            <p className="text-gray-700">
              Las marcas, nombres comerciales o signos distintivos que aparecen en el sitio web son 
              propiedad de EL INFORMADOR o de terceros. Queda prohibido el uso de dichos elementos sin 
              el consentimiento expreso y por escrito de sus titulares.
            </p>
          </div>
        </div>
      </section>

      {/* Exclusión de responsabilidades */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3">5. Exclusión de responsabilidades</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4">Contenidos</h3>
            <p className="text-gray-700">
              EL INFORMADOR no garantiza la exactitud, exhaustividad o actualidad de los contenidos 
              publicados en el sitio web. Los contenidos tienen carácter meramente informativo y en 
              ningún caso deben considerarse como asesoramiento profesional de ningún tipo.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4">Funcionamiento y disponibilidad</h3>
            <p className="text-gray-700 mb-3">
              EL INFORMADOR no garantiza la disponibilidad y continuidad del funcionamiento del sitio web. 
              Cuando sea razonablemente posible, se advertirá previamente de las interrupciones en el 
              funcionamiento del sitio web.
            </p>
            <p className="text-gray-700">
              Tampoco garantiza la utilidad del sitio web para la realización de ninguna actividad en 
              concreto, ni su infalibilidad y, en particular, aunque no de modo exclusivo, que los usuarios 
              puedan efectivamente utilizar el sitio web, acceder a las distintas páginas que forman el 
              sitio web o a aquellos desde los que se prestan los servicios.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4">Enlaces a terceros</h3>
            <p className="text-gray-700">
              En el caso de que en el sitio web se dispusiesen enlaces o hipervínculos hacia otros sitios 
              de Internet, EL INFORMADOR no ejercerá ningún tipo de control sobre dichos sitios y contenidos. 
              En ningún caso asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente 
              a un sitio web ajeno, ni garantizará la disponibilidad técnica, calidad, fiabilidad, exactitud, 
              amplitud, veracidad, validez y constitucionalidad de cualquier material o información contenida 
              en ninguno de dichos hipervínculos u otros sitios de Internet.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4">Virus y elementos maliciosos</h3>
            <p className="text-gray-700">
              EL INFORMADOR no garantiza la ausencia de virus u otros elementos en los contenidos que 
              puedan producir alteraciones en su sistema informático (software y hardware) o en los 
              documentos electrónicos y ficheros almacenados en su sistema informático.
            </p>
          </div>
        </div>
      </section>

      {/* Protección de datos personales */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3">6. Protección de datos personales</h2>
        
        <div className="space-y-4">
          <p className="text-gray-700">
            De conformidad con lo establecido en el Reglamento General de Protección de Datos (RGPD) y la 
            Ley Orgánica de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), 
            EL INFORMADOR informa a los usuarios del sitio web sobre su política de protección de datos 
            personales.
          </p>
          
          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4 text-red-800">Información detallada</h3>
            <p className="text-gray-700 mb-3">
              Para conocer en detalle el tratamiento de datos personales que realizamos, consulte nuestra:
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                href="/privacidad"
                className="px-4 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition text-center"
              >
                Política de Privacidad
              </Link>
              
              <Link 
                href="/cookies"
                className="px-4 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition text-center"
              >
                Política de Cookies
              </Link>
            </div>
          </div>
          
          <p className="text-gray-700">
            EL INFORMADOR se compromete a utilizar los datos conforme a la finalidad para la que fueron 
            recabados y a tratar confidencialmente los datos de carácter personal a los que tenga acceso 
            como consecuencia de la navegación en el sitio web.
          </p>
        </div>
      </section>

      {/* Legislación aplicable y jurisdicción */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3">7. Legislación aplicable y jurisdicción</h2>
        
        <div className="space-y-4">
          <p className="text-gray-700">
            Las presentes condiciones se rigen por la legislación española. Para la resolución de 
            cualquier controversia o conflicto que pudiera derivarse del acceso o uso del sitio web, 
            las partes se someten expresamente a los juzgados y tribunales de la ciudad de Madrid, 
            con renuncia expresa a cualquier otro fuero que pudiera corresponderles.
          </p>
          
          <div className="bg-gray-100 rounded-lg p-4">
            <p className="text-gray-700">
              En caso de que cualquier disposición de este Aviso Legal sea declarada nula o inaplicable, 
              en su totalidad o en parte, por cualquier Juzgado, Tribunal u organismo administrativo 
              competente, dicha nulidad o inaplicación no afectará a las restantes disposiciones.
            </p>
          </div>
          
          <p className="text-gray-700">
            La no exigencia por parte de EL INFORMADOR del cumplimiento estricto de cualquiera de las 
            disposiciones de este Aviso Legal no constituirá ni podrá interpretarse en modo alguno como 
            una renuncia a exigir su cumplimiento en el futuro.
          </p>
        </div>
      </section>

      {/* Contacto */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3">8. Contacto</h2>
        
        <div className="bg-red-50 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">¿Tiene preguntas sobre este Aviso Legal?</h3>
          
          <div className="space-y-3 mb-6">
            <p className="text-gray-700">
              <strong>Responsable:</strong> EL INFORMADOR MEDIA S.L.
            </p>
            <p className="text-gray-700">
              <strong>Correo electrónico:</strong> legal@elinformador.es
            </p>
            <p className="text-gray-700">
              <strong>Dirección web:</strong> https://elinformador.es/aviso-legal
            </p>
          </div>
          
          <p className="text-gray-600">
            Para consultas sobre protección de datos, consulte nuestra 
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
              © 2026 EL INFORMADOR MEDIA S.L. Todos los derechos reservados.
            </p>
            <p className="text-sm text-gray-500">
              Este aviso legal cumple con la Ley de Servicios de la Sociedad de la Información (LSSI).
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
