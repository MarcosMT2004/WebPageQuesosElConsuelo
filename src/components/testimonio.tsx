// Libro de visitas de la quesería: cada opinión es una entrada en renglones.
const opiniones = [
  {
    texto:
      "El Cordel añejo es el que compro para regalar. Tiene una intensidad que sorprende a la gente. Desde que lo probé en la quesería no compro otro manchego.",
    nombre: "Jose L.",
    origen: "Toledo",
  },
  {
    texto:
      "Pedimos por teléfono y llegó perfectamente embalado. El semicurado tiene un punto láctico que no encuentro en otros manchegos. Ya lo tenemos fijo en casa.",
    nombre: "Carmen P.",
    origen: "Madrid",
  },
  {
    texto:
      "Llevamos años comprando el curado en aceite. Mis hijos lo piden por su nombre. No concebimos la tabla de quesos sin él.",
    nombre: "Antonio M.",
    origen: "Sevilla",
  },
];

export default function Testimonio() {
  return (
    <section className="bg-azulejo px-4 sm:px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.05] text-verde">
          Del libro de visitas
        </h2>
        <div className="mt-12 bg-marmol px-5 sm:px-10 py-8 shadow-[0_14px_30px_-14px_rgba(20,42,32,0.45)]">
          <ul className="divide-y-2 divide-double divide-verde/25">
            {opiniones.map((o) => (
              <li key={o.nombre} className="grid gap-3 py-7 first:pt-0 last:pb-0 md:grid-cols-[12rem_1fr] md:gap-10">
                <p className="font-label text-[1.05rem] font-semibold uppercase tracking-[0.1em] text-verde">
                  {o.nombre}
                  <span className="block font-normal normal-case tracking-normal text-gris">{o.origen}</span>
                </p>
                <blockquote className="font-display italic text-[clamp(1.25rem,2.2vw,1.6rem)] leading-snug text-tinta max-w-[52ch]">
                  {o.texto}
                </blockquote>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
