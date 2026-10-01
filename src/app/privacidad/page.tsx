import type { Metadata } from "next";
import Nav from "@/components/nav";
import Breadcrumb from "@/components/breadcrumb";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Política de Privacidad | Quesos El Consuelo",
  description: "Política de privacidad y protección de datos de S.A.T. Cañada Real Soriana.",
  robots: { index: false, follow: false },
};

export default function PrivacidadPage() {
  return (
    <main>
      <Nav />
      <Breadcrumb items={[{ label: "Política de Privacidad" }]} />

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
            Política de Privacidad
          </h1>

          <div
            className="space-y-8 text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-lora)", color: "#231A0E" }}
          >
            <p style={{ color: "#8C7B6A" }}>
              En S.A.T. Cañada Real Soriana nos comprometemos a proteger y respetar
              su privacidad de conformidad con el Reglamento (UE) 2016/679 (RGPD) y
              la Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD).
            </p>

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
                1. Responsable del tratamiento
              </h2>
              <ul className="space-y-1 pl-4" style={{ borderLeft: "2px solid #C17D3C" }}>
                <li className="pl-3"><strong>Identidad:</strong> S.A.T. Cañada Real Soriana</li>
                <li className="pl-3"><strong>Dirección:</strong> Ctra. Toledo-Alcázar de San Juan, km 69,200, Madridejos (Toledo)</li>
                <li className="pl-3"><strong>Contacto:</strong> +34 667 638 293 (WhatsApp y llamadas)</li>
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
                2. Datos que recogemos
              </h2>
              <p className="mb-3">
                Al contactar con nosotros a través de WhatsApp o por teléfono,
                podemos recoger:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Nombre y apellidos</li>
                <li>Número de teléfono</li>
                <li>Mensaje o consulta realizada</li>
                <li>Datos necesarios para gestionar su pedido (dirección de envío, etc.)</li>
              </ul>
              <p className="mt-3">
                Este sitio web no dispone de formularios de registro ni recopila datos
                de forma automatizada más allá de las cookies técnicas descritas en el
                apartado correspondiente.
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
                3. Finalidad y base jurídica del tratamiento
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr style={{ background: "rgba(193,125,60,0.12)" }}>
                      <th className="p-3 text-left" style={{ border: "1px solid rgba(193,125,60,0.2)" }}>Finalidad</th>
                      <th className="p-3 text-left" style={{ border: "1px solid rgba(193,125,60,0.2)" }}>Base jurídica</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3" style={{ border: "1px solid rgba(193,125,60,0.2)" }}>Atender consultas comerciales</td>
                      <td className="p-3" style={{ border: "1px solid rgba(193,125,60,0.2)" }}>Consentimiento del interesado (art. 6.1.a RGPD)</td>
                    </tr>
                    <tr style={{ background: "rgba(247,240,227,0.6)" }}>
                      <td className="p-3" style={{ border: "1px solid rgba(193,125,60,0.2)" }}>Gestionar y enviar pedidos</td>
                      <td className="p-3" style={{ border: "1px solid rgba(193,125,60,0.2)" }}>Ejecución de contrato (art. 6.1.b RGPD)</td>
                    </tr>
                    <tr>
                      <td className="p-3" style={{ border: "1px solid rgba(193,125,60,0.2)" }}>Cumplir obligaciones legales</td>
                      <td className="p-3" style={{ border: "1px solid rgba(193,125,60,0.2)" }}>Obligación legal (art. 6.1.c RGPD)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
                4. Plazo de conservación
              </h2>
              <p>
                Los datos se conservarán mientras sean necesarios para la finalidad
                para la que se recogieron, y en ningún caso más allá del plazo
                legalmente establecido para atender posibles responsabilidades. Tras
                dicho plazo, los datos serán suprimidos de forma segura.
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
                5. Cesión de datos a terceros
              </h2>
              <p>
                No cedemos sus datos a terceros salvo obligación legal o cuando sea
                estrictamente necesario para la prestación del servicio solicitado
                (por ejemplo, empresas de transporte para gestionar entregas).
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
                6. Sus derechos
              </h2>
              <p className="mb-3">
                En cualquier momento puede ejercer los siguientes derechos frente a
                S.A.T. Cañada Real Soriana:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Acceso:</strong> conocer qué datos tenemos sobre usted.</li>
                <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
                <li><strong>Supresión:</strong> solicitar la eliminación de sus datos.</li>
                <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos.</li>
                <li><strong>Portabilidad:</strong> recibir sus datos en formato estructurado.</li>
                <li><strong>Limitación:</strong> solicitar la limitación del tratamiento.</li>
              </ul>
              <p className="mt-3">
                Para ejercer cualquiera de estos derechos, puede contactarnos por
                teléfono al{" "}
                <a
                  href="https://wa.me/34667638293"
                  style={{ color: "#C17D3C", textDecoration: "underline" }}
                >
                  +34 667 638 293
                </a>
                . Asimismo, tiene derecho a presentar una reclamación ante la Agencia
                Española de Protección de Datos (www.aepd.es).
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
                7. Política de cookies
              </h2>
              <p>
                Este sitio web utiliza únicamente cookies técnicas necesarias para
                su correcto funcionamiento. No empleamos cookies de análisis,
                publicidad o seguimiento. Las cookies técnicas no requieren
                consentimiento conforme al art. 22.2 de la LSSI.
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
