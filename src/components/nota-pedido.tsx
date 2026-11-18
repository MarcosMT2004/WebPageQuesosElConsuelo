"use client";

import { useId, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Minus, Plus, X } from "lucide-react";
import { LINEAS, mensajePedido, type Linea, type LineaPedido } from "@/lib/quesos";
import { WA_URL } from "@/lib/contacto";
import { WhatsAppIcon } from "@/components/whatsapp-button";

const ease = [0.23, 1, 0.32, 1] as const;

// Grupo de opciones como radios nativos con aspecto de etiqueta esmaltada.
function Opciones({
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset className="mt-4 first:mt-0">
      <legend className="font-label text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-tinta/80 mb-2">
        {legend}
      </legend>
      <div className="flex flex-wrap gap-1.5">
        {options.map((o) => (
          <label key={o} className="cursor-pointer">
            <input
              type="radio"
              name={name}
              value={o}
              checked={value === o}
              onChange={() => onChange(o)}
              className="peer sr-only"
            />
            <span
              className="block px-3 py-1.5 font-label text-[0.95rem] font-medium border border-verde/25 text-tinta bg-marmol/70
                transition-colors duration-150 hover:border-verde
                peer-checked:bg-verde peer-checked:text-marmol peer-checked:border-verde
                peer-focus-visible:outline-2 peer-focus-visible:outline-cordel peer-focus-visible:outline-offset-2"
            >
              {o}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function NotaPedido({
  lineaInicial,
  onLinea,
}: {
  lineaInicial?: string;
  onLinea?: (l: Linea) => void; // avisa al escaparate para que cambie foto y rótulo
}) {
  const uid = useId();
  const inicial = LINEAS.find((l) => l.slug === lineaInicial) ?? LINEAS[0];

  const [linea, setLinea] = useState(inicial.nombre);
  const [variedad, setVariedad] = useState(inicial.variedades[0].nombre);
  const [formato, setFormato] = useState(inicial.variedades[0].formatos[0]);
  const [cantidad, setCantidad] = useState(1);
  const [nota, setNota] = useState<LineaPedido[]>([]);
  const [nombre, setNombre] = useState("");
  const [atada, setAtada] = useState(false);

  const lineaActual = LINEAS.find((l) => l.nombre === linea)!;
  const variedadActual = lineaActual.variedades.find((v) => v.nombre === variedad)!;

  function elegirLinea(n: string) {
    const l = LINEAS.find((x) => x.nombre === n)!;
    setLinea(n);
    onLinea?.(l);
    setVariedad(l.variedades[0].nombre);
    setFormato(l.variedades[0].formatos[0]);
  }

  function elegirVariedad(n: string) {
    const v = lineaActual.variedades.find((x) => x.nombre === n)!;
    setVariedad(n);
    if (!v.formatos.includes(formato)) setFormato(v.formatos[0]);
  }

  const seleccion: LineaPedido = { linea, variedad, formato, cantidad };

  function anadir() {
    setNota((prev) => {
      const i = prev.findIndex(
        (p) => p.linea === linea && p.variedad === variedad && p.formato === formato
      );
      if (i === -1) return [...prev, seleccion];
      return prev.map((p, j) => (j === i ? { ...p, cantidad: p.cantidad + cantidad } : p));
    });
    setCantidad(1);
  }

  // Si la nota está vacía se envía lo que está seleccionado: pedir nunca exige dos pasos.
  const pedido = nota.length ? nota : [seleccion];
  const href = `${WA_URL}?text=${encodeURIComponent(mensajePedido(pedido, nombre))}`;

  return (
    <form
      aria-labelledby={`${uid}-t`}
      onSubmit={(e) => e.preventDefault()}
      className="relative bg-estraza text-tinta shadow-[0_18px_40px_-12px_rgba(20,42,32,0.55)]"
    >
      {/* Taco de notas: borde superior troquelado */}
      <div
        aria-hidden
        className="h-3 bg-verde-hondo/90 [mask-image:radial-gradient(circle_at_6px_100%,transparent_4px,#000_4.5px)] [mask-size:12px_12px] [mask-repeat:repeat-x] [mask-position:bottom]"
      />
      <div className="px-5 sm:px-7 pt-5 pb-6">
        <div className="flex items-baseline justify-between gap-4 border-b-2 border-tinta/80 pb-2 mb-4">
          <h2 id={`${uid}-t`} className="font-display italic text-[1.7rem] leading-none">
            Nota de pedido
          </h2>
          <span className="hidden sm:inline font-label text-[0.8rem] uppercase tracking-[0.12em] text-tinta/80">
            Se envía por WhatsApp
          </span>
        </div>

        <Opciones
          legend="Queso"
          name={`${uid}-linea`}
          options={LINEAS.map((l) => l.nombre)}
          value={linea}
          onChange={elegirLinea}
        />
        <Opciones
          legend="Variedad"
          name={`${uid}-variedad`}
          options={lineaActual.variedades.map((v) => v.nombre)}
          value={variedad}
          onChange={elegirVariedad}
        />
        <div className="mt-4 flex flex-wrap items-end gap-x-6 gap-y-4">
          <Opciones
            legend="Formato"
            name={`${uid}-formato`}
            options={variedadActual.formatos}
            value={formato}
            onChange={setFormato}
          />
          <fieldset>
            <legend className="font-label text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-tinta/80 mb-2">
              Cantidad
            </legend>
            <div className="flex items-center border border-verde/25 bg-marmol/70">
              <button
                type="button"
                onClick={() => setCantidad((c) => Math.max(1, c - 1))}
                disabled={cantidad === 1}
                aria-label="Una menos"
                className="p-2 text-verde disabled:opacity-35"
              >
                <Minus size={16} />
              </button>
              <output aria-live="polite" className="w-8 text-center font-label text-lg font-semibold tabular-nums">
                {cantidad}
              </output>
              <button
                type="button"
                onClick={() => setCantidad((c) => Math.min(20, c + 1))}
                aria-label="Una más"
                className="p-2 text-verde"
              >
                <Plus size={16} />
              </button>
            </div>
          </fieldset>
          <button
            type="button"
            onClick={anadir}
            className="font-label text-[0.95rem] font-semibold uppercase tracking-[0.08em] text-verde underline decoration-cordel decoration-2 underline-offset-4 hover:text-cordel transition-colors"
          >
            + Añadir a la nota
          </button>
        </div>

        {/* Libreta: lo apuntado, en cifras tabulares */}
        <ul aria-label="Quesos apuntados" className="mt-5 font-label text-[1.05rem]">
          <AnimatePresence initial={false}>
            {nota.map((p, i) => (
              <motion.li
                key={`${p.linea}-${p.variedad}-${p.formato}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease }}
                className="overflow-hidden"
              >
                <div className="flex items-center gap-3 h-8">
                  <span className="tabular-nums font-semibold w-7 text-right">{p.cantidad}×</span>
                  <span className="flex-1 truncate">
                    {p.linea} {p.variedad} <span className="text-tinta/80">· {p.formato}</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setNota((prev) => prev.filter((_, j) => j !== i))}
                    aria-label={`Quitar ${p.linea} ${p.variedad} ${p.formato}`}
                    className="p-1 text-tinta/80 hover:text-cordel"
                  >
                    <X size={15} />
                  </button>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
        {nota.length === 0 && (
          <p className="mt-1 text-[0.85rem] text-tinta/80">
            Si solo quieres un queso, envía directamente. Para varios, añádelos a la nota.
          </p>
        )}

        <label className="mt-5 block">
          <span className="font-label text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-tinta/80">
            Tu nombre <span className="normal-case tracking-normal font-normal">(opcional)</span>
          </span>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            autoComplete="name"
            className="mt-1 w-full bg-transparent border-0 border-b border-tinta/40 px-0 py-1.5 text-base focus:border-verde focus:outline-none"
          />
        </label>

        <div className="relative mt-6">
          {/* El cordel que «ata» la nota al enviarla */}
          <svg aria-hidden viewBox="0 0 400 12" preserveAspectRatio="none" className="absolute -top-3 left-0 w-full h-3 overflow-visible">
            <motion.path
              d="M0 6 C 60 0, 120 12, 200 6 S 340 0, 400 6"
              fill="none"
              stroke="var(--color-cordel)"
              strokeWidth="2.5"
              strokeDasharray="6 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: atada ? 1 : 0 }}
              transition={{ duration: 0.6, ease }}
            />
          </svg>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setAtada(true)}
            className="flex w-full items-center justify-center gap-2.5 bg-verde px-5 py-3.5 font-label text-[1.1rem] font-semibold uppercase tracking-[0.08em] text-marmol transition-colors hover:bg-verde-hondo"
          >
            <WhatsAppIcon size={19} />
            Enviar pedido por WhatsApp
          </a>
          <p className="mt-2 text-center text-[0.8rem] text-tinta/80">
            Te confirmamos disponibilidad, precio y envío.
          </p>
        </div>
      </div>
    </form>
  );
}
