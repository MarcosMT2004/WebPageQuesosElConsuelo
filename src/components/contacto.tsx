import { WA_URL, TEL_HREF } from "@/lib/contacto";
import { WhatsAppIcon } from "@/components/whatsapp-button";

// El mostrador: a quién llamar y dónde estamos. Para pedir ya está la nota de pedido.
export default function Contacto() {
  return (
    <section id="contacto" className="scroll-mt-16 bg-azulejo px-4 sm:px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="border-t-[10px] border-verde bg-marmol px-5 sm:px-10 py-10 shadow-[0_14px_30px_-14px_rgba(20,42,32,0.45)]">
          <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-16">
            <div>
              <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.05] text-verde">Háblanos</h2>
              <p className="mt-4 max-w-[46ch] leading-relaxed text-tinta">
                Para dudas, pedidos grandes o venta a tiendas y restaurantes, te atendemos nosotros
                mismos desde la quesería.
              </p>
              <a
                href={`${WA_URL}?text=${encodeURIComponent("Hola, tengo una consulta sobre vuestros quesos.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2.5 bg-verde px-5 py-3.5 font-label text-[1.05rem] font-semibold uppercase tracking-[0.08em] text-marmol transition-colors hover:bg-verde-hondo"
              >
                <WhatsAppIcon size={19} />
                Escribir por WhatsApp
              </a>
            </div>

            <dl className="font-label text-[1.15rem]">
              {[
                { k: "Móvil y WhatsApp", v: "667 638 293", href: TEL_HREF },
                { k: "Teléfono fijo", v: "925 462 459", href: "tel:+34925462459" },
              ].map((t) => (
                <div key={t.k} className="flex items-baseline gap-2 border-b border-verde/15 py-3">
                  <dt className="font-semibold uppercase tracking-[0.08em] text-gris">{t.k}</dt>
                  <span aria-hidden className="flex-1 border-b-2 border-dotted border-verde/25 translate-y-[-4px]" />
                  <dd>
                    <a href={t.href} className="text-[1.4rem] font-semibold tabular-nums text-verde hover:text-cordel transition-colors">
                      {t.v}
                    </a>
                  </dd>
                </div>
              ))}
              <div className="py-3">
                <dt className="font-semibold uppercase tracking-[0.08em] text-gris">La quesería</dt>
                <dd className="mt-1 font-body text-base leading-relaxed text-tinta">
                  Ctra. Toledo–Alcázar de San Juan, km 69,200
                  <br />
                  45710 Madridejos (Toledo)
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
