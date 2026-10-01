import type { Metadata } from "next";
import Nav from "@/components/nav";
import Breadcrumb from "@/components/breadcrumb";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Aviso Legal | Quesos El Consuelo",
  description: "Aviso legal y condiciones de uso del sitio web de S.A.T. Cañada Real Soriana.",
  robots: { index: false, follow: false },
};

export default function AvisoLegalPage() {
  return (
    <main>
      <Nav />
      <Breadcrumb items={[{ label: "Aviso Legal" }]} />

      <article
        className="px-6 py-16"
        style={{ background: "#F7F0E3", minHeight: "60vh" }}
      >
        <div className="max-w-3xl mx-auto">
          <h1
            className="mb-10"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#231A0E",
            }}
          >
            Aviso Legal
          </h1>

          <div
            className="space-y-8 text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-lora)", color: "#231A0E" }}
          >
            <section>
              <h2
                className="mb-3"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.4rem",
                  fontStyle: "italic",
                  color: "#7A3B28",
                }}
              >
                1. Identificación del titular
              </h2>
              <p className="mb-2">
                En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la
                Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se
                facilitan los siguientes datos de identificación:
              </p>
              <ul className="space-y-1 pl-4" style={{ borderLeft: "2px solid #C17D3C" }}>
                <li className="pl-3"><strong>Denominación social:</strong> S.A.T. Cañada Real Soriana</li>
                <li className="pl-3"><strong>Nombre comercial:</strong> Quesos El Consuelo</li>
                <li className="pl-3"><strong>Domicilio:</strong> Ctra. Toledo-Alcázar de San Juan, km 69,200, Madridejos (Toledo)</li>
                <li className="pl-3"><strong>Teléfono:</strong> +34 667 638 293</li>
                <li className="pl-3"><strong>Actividad:</strong> Elaboración y venta de queso manchego artesanal</li>
              </ul>
            </section>

            <section>
              <h2
                className="mb-3"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.4rem",
                  fontStyle: "italic",
                  color: "#7A3B28",
                }}
              >
                2. Condiciones de uso
              </h2>
              <p className="mb-3">
                El acceso a este sitio web es gratuito y no requiere registro previo.
                El uso del sitio web implica la aceptación plena y sin reservas de las
                presentes condiciones de uso.
              </p>
              <p>
                El usuario se compromete a hacer un uso adecuado de los contenidos y
                servicios del sitio web y a no emplearlos para realizar actividades
                ilícitas o contrarias a la buena fe y al orden público.
              </p>
            </section>

            <section>
              <h2
                className="mb-3"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.4rem",
                  fontStyle: "italic",
                  color: "#7A3B28",
                }}
              >
                3. Propiedad intelectual e industrial
              </h2>
              <p className="mb-3">
                Todos los contenidos del sitio web (textos, fotografías, gráficos,
                imágenes, tecnología, software, logotipos, marcas y demás elementos)
                son titularidad de S.A.T. Cañada Real Soriana o de terceros que han
                autorizado su uso.
              </p>
              <p>
                Queda prohibida la reproducción, distribución, comunicación pública o
                cualquier otra forma de explotación de los contenidos sin autorización
                expresa y por escrito del titular.
              </p>
            </section>

            <section>
              <h2
                className="mb-3"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.4rem",
                  fontStyle: "italic",
                  color: "#7A3B28",
                }}
              >
                4. Limitación de responsabilidad
              </h2>
              <p className="mb-3">
                S.A.T. Cañada Real Soriana no se responsabiliza de los daños y
                perjuicios que pudieran derivarse de la utilización del sitio web, ni
                de posibles errores en los contenidos.
              </p>
              <p>
                El titular se reserva el derecho de modificar, suspender o interrumpir
                el acceso al sitio web en cualquier momento y sin previo aviso.
              </p>
            </section>

            <section>
              <h2
                className="mb-3"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.4rem",
                  fontStyle: "italic",
                  color: "#7A3B28",
                }}
              >
                5. Ley aplicable y jurisdicción
              </h2>
              <p>
                Las presentes condiciones de uso se rigen e interpretan conforme a la
                legislación española. Para la resolución de cualquier controversia
                derivada del acceso o uso de este sitio web, las partes se someten a
                los Juzgados y Tribunales de Toledo, con renuncia a cualquier otro
                fuero que pudiera corresponderles.
              </p>
            </section>

            <p
              className="pt-4 text-xs"
              style={{ color: "#8C7B6A", borderTop: "1px solid rgba(193,125,60,0.2)" }}
            >
              Última actualización: septiembre de 2025
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
