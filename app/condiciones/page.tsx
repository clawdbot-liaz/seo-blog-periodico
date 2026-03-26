import { FileText, Scale, AlertTriangle, BookOpen } from 'lucide-react'
import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-4 bg-red-100 rounded-full mb-6">
          <FileText className="h-12 w-12 text-red-600" />
        </div>
        <h1 className="text-4xl font-bold font-serif mb-4">Términos y Condiciones de Uso</h1>
        <p className="text-gray-600 text-lg">
          Última actualización: 26 de marzo de 2026
        </p>
      </div>

      {/* Introducción */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3">1. Aceptación de los términos</h2>
        <div className="space-y-4">
          <p className="text-gray-700">
            Al acceder y utilizar el sitio web <strong>elinformador.es</strong> (en adelante, "el Sitio"), 
            propiedad de <strong>EL INFORMADOR</strong>, usted acepta cumplir y estar sujeto a estos 
            Términos y Condiciones de Uso.
          </p>
          <p className="text-gray-700">
            Si no está de acuerdo con alguno de estos términos, le rogamos que no utilice nuestro Sitio.
          </p>
          <div className="bg-gray-100 rounded-lg p-4">
            <p className="text-gray-700">
              <strong>Nota importante:</strong> Estos términos se aplican a todos los visitantes, 
              usuarios y otras personas que accedan o utilicen el Sitio.
            </p>
          </div>
        </div>
      </section>

      {/* Descripción del servicio */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3 flex items-center gap-3">
          <BookOpen className="h-6 w-6" />
          2. Descripción del servicio
        </h2>
        
        <div className="space-y-4">
          <p className="text-gray-700">
            <strong>EL INFORMADOR</strong> es un periódico digital que proporciona:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-bold mb-2">Contenido informativo</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>Noticias de última hora</li>
                <li>Artículos sobre esports</li>
                <li>Contenido sobre deportes tradicionales</li>
                <li>Noticias de tecnología</li>
                <li>Contenido sobre cultura influencer/pop</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-bold mb-2">Servicios adicionales</h3>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>Comentarios en artículos</li>
                <li>Suscripción a newsletters</li>
                <li>Archivo de noticias</li>
                <li>Búsqueda de contenido</li>
              </ul>
            </div>
          </div>
          
          <p className="text-gray-700">
            Nos reservamos el derecho de modificar, suspender o interrumpir, temporal o permanentemente, 
            el Sitio o cualquier parte del mismo, con o sin previo aviso.
          </p>
        </div>
      </section>

      {/* Uso aceptable */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3">3. Uso aceptable</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold text-lg mb-4">Lo que puede hacer</h3>
            <ul className="text-gray-700 space-y-2">
              <li>Acceder y navegar por el Sitio para uso personal</li>
              <li>Compartir enlaces a nuestros artículos en redes sociales</li>
              <li>Participar en los comentarios de forma respetuosa</li>
              <li>Utilizar el contenido para fines informativos no comerciales</li>
              <li>Suscribirse a nuestros newsletters</li>
            </ul>
          </div>
          
          <div className="bg-red-50 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-red-600 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-4 text-red-800">Lo que no puede hacer</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>Utilizar el Sitio para actividades ilegales o no autorizadas</li>
                  <li>Violar derechos de propiedad intelectual</li>
                  <li>Publicar contenido ofensivo, difamatorio o ilegal en comentarios</li>
                  <li>Utilizar robots, spiders o medios automatizados para acceder al Sitio</li>
                  <li>Intentar interferir con la seguridad o funcionamiento del Sitio</li>
                  <li>Suplantar la identidad de otra persona</li>
                  <li>Distribuir virus o código malicioso</li>
                  <li>Realizar ataques de denegación de servicio</li>
                </ul>
              </div>
            </div>
          </div>
          
          <p className="text-gray-700">
            Nos reservamos el derecho de suspender o terminar su acceso al Sitio si viola estos términos.
          </p>
        </div>
      </section>

      {/* Propiedad intelectual */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3 flex items-center gap-3">
          <Scale className="h-6 w-6" />
          4. Propiedad intelectual
        </h2>
        
        <div className="space-y-4">
          <p className="text-gray-700">
            Todo el contenido presente en el Sitio, incluyendo pero no limitado a textos, gráficos, 
            logotipos, iconos, imágenes, clips de audio, descargas digitales, compilaciones de datos 
            y software, es propiedad de <strong>EL INFORMADOR</strong> o de sus proveedores de contenido 
            y está protegido por las leyes de propiedad intelectual.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4">Licencia limitada</h3>
            <p className="text-gray-700 mb-4">
              Le concedemos una licencia limitada, no exclusiva, intransferible y revocable para:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6 list-disc">
              <li>Acceder y visualizar el contenido del Sitio para uso personal y no comercial</li>
              <li>Compartir enlaces a nuestros artículos en redes sociales</li>
              <li>Utilizar extractos breves (máximo 100 palabras) con atribución y enlace al artículo original</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Esta licencia no incluye el derecho a reproducir, distribuir, modificar, crear obras derivadas, 
              mostrar públicamente, realizar públicamente, republicar, descargar, almacenar o transmitir 
              cualquier contenido del Sitio, excepto como se indica expresamente en estos términos.
            </p>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4 text-yellow-800">Marcas registradas</h3>
            <p className="text-gray-700">
              El nombre <strong>EL INFORMADOR</strong>, el logotipo y todos los nombres, logotipos, 
              eslóganes y diseños relacionados son marcas comerciales de <strong>EL INFORMADOR</strong> 
              o sus afiliados. No puede utilizar estas marcas sin nuestro permiso por escrito previo.
            </p>
          </div>
        </div>
      </section>

      {/* Contenido de usuarios */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3">5. Contenido generado por usuarios</h2>
        
        <div className="space-y-4">
          <p className="text-gray-700">
            El Sitio puede permitir a los usuarios publicar comentarios y otro contenido. Usted es 
            responsable del contenido que publique y de las consecuencias de su publicación.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4">Al publicar contenido, usted:</h3>
            <ul className="text-gray-700 space-y-2 ml-6 list-disc">
              <li>Garantiza que tiene derecho a publicar dicho contenido</li>
              <li>Garantiza que el contenido no infringe derechos de terceros</li>
              <li>Concede a <strong>EL INFORMADOR</strong> una licencia mundial, no exclusiva, 
                  libre de regalías para usar, reproducir y mostrar dicho contenido</li>
              <li>Acepta que podemos moderar, editar o eliminar contenido a nuestra discreción</li>
            </ul>
          </div>
          
          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4 text-red-800">Contenido prohibido</h3>
            <p className="text-gray-700 mb-3">
              No permitimos contenido que sea:
            </p>
            <ul className="text-gray-700 space-y-1 ml-6 list-disc">
              <li>Difamatorio, obsceno, pornográfico o ofensivo</li>
              <li>Promueva la violencia, el odio o la discriminación</li>
              <li>Infrinja derechos de propiedad intelectual</li>
              <li>Contenga información personal de terceros sin consentimiento</li>
              <li>Sea spam, publicidad no autorizada o enlaces maliciosos</li>
              <li>Sea falso, engañoso o fraudulento</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Limitación de responsabilidad */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3">6. Limitación de responsabilidad</h2>
        
        <div className="space-y-4">
          <p className="text-gray-700">
            El Sitio y todo su contenido se proporcionan "tal cual" y "según disponibilidad". 
            No ofrecemos garantías de ningún tipo, expresas o implícitas.
          </p>
          
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4">Exención de responsabilidad</h3>
            <p className="text-gray-700 mb-3">
              En la máxima medida permitida por la ley aplicable, <strong>EL INFORMADOR</strong> no será 
              responsable por:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6 list-disc">
              <li>Daños directos, indirectos, incidentales, consecuentes o punitivos</li>
              <li>Pérdida de datos, ingresos, beneficios o oportunidades de negocio</li>
              <li>Interrupciones del servicio o errores técnicos</li>
              <li>Contenido inexacto, incompleto o desactualizado</li>
              <li>Acciones de terceros o enlaces a sitios externos</li>
              <li>Conducta de otros usuarios en los comentarios</li>
            </ul>
          </div>
          
          <p className="text-gray-700">
            Esta limitación de responsabilidad se aplica independientemente de la teoría legal en la que 
            se base la reclamación.
          </p>
        </div>
      </section>

      {/* Indemnización */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3">7. Indemnización</h2>
        
        <p className="text-gray-700 mb-4">
          Usted acepta indemnizar, defender y mantener indemne a <strong>EL INFORMADOR</strong>, sus 
          afiliados, directores, empleados y agentes, de y contra cualquier reclamación, responsabilidad, 
          daño, pérdida o gasto (incluyendo honorarios razonables de abogados) que surja de o esté 
          relacionado con:
        </p>
        
        <ul className="text-gray-700 space-y-2 ml-6 list-disc mb-4">
          <li>Su uso del Sitio</li>
          <li>Su violación de estos Términos y Condiciones</li>
          <li>Su violación de cualquier derecho de un tercero</li>
          <li>Cualquier contenido que publique en el Sitio</li>
        </ul>
      </section>

      {/* Modificaciones */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3">8. Modificaciones de los términos</h2>
        
        <div className="space-y-4">
          <p className="text-gray-700">
            Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos 
            Términos y Condiciones en cualquier momento.
          </p>
          
          <div className="bg-gray-100 rounded-lg p-4">
            <p className="text-gray-700">
              <strong>Notificación de cambios:</strong> Publicaremos los términos revisados en esta página 
              con una nueva fecha de "Última actualización". Su uso continuado del Sitio después de dichos 
              cambios constituye su aceptación de los nuevos términos.
            </p>
          </div>
          
          <p className="text-gray-700">
            Le recomendamos revisar periódicamente esta página para estar informado sobre cualquier cambio.
          </p>
        </div>
      </section>

      {/* Ley aplicable */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3">9. Ley aplicable y jurisdicción</h2>
        
        <div className="space-y-4">
          <p className="text-gray-700">
            Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes de España, 
            sin tener en cuenta sus disposiciones sobre conflictos de leyes.
          </p>
          
          <p className="text-gray-700">
            Cualquier disputa que surja de o esté relacionada con estos términos o el uso del Sitio 
            se someterá a la jurisdicción exclusiva de los tribunales de Madrid, España.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-700">
              <strong>Resolución de disputas:</strong> Antes de iniciar cualquier procedimiento legal, 
              le animamos a contactarnos primero para intentar resolver cualquier disputa de manera informal.
            </p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-3">10. Contacto</h2>
        
        <div className="bg-red-50 rounded-xl p-8 text-center">
          <h3 className="text-xl font-bold mb-4">¿Tiene preguntas sobre estos Términos y Condiciones?</h3>
          
          <div className="space-y-3 mb-6">
            <p className="text-gray-700">
              <strong>Responsable:</strong> EL INFORMADOR
            </p>
            <p className="text-gray-700">
              <strong>Correo electrónico:</strong> contacto@elinformador.es
            </p>
            <p className="text-gray-700">
              <strong>Dirección web:</strong> https://elinformador.es/condiciones
            </p>
          </div>
          
          <p className="text-gray-600">
            Para consultas sobre privacidad, consulte nuestra 
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
              Estos términos cumplen con la Ley de Servicios de la Sociedad de la Información (LSSI).
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