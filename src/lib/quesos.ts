// Catálogo para la nota de pedido y el escaparate. Mismos datos que las páginas de cada línea.
// Sin precios: se confirman por WhatsApp.

export type Variedad = { nombre: string; formatos: string[] };

export type Linea = {
  slug: string;
  nombre: string;
  rotulo: string; // lo que pone la etiqueta esmaltada
  href: string;
  logo: string;
  foto: string;
  variedades: Variedad[];
};

export const LINEAS: Linea[] = [
  {
    slug: "el-cordel",
    nombre: "El Cordel",
    rotulo: "DOP · Plata WCA 2016",
    href: "/quesos/el-cordel",
    logo: "/images/logo-cordel.png",
    foto: "/images/quesos-cordel.jpg",
    variedades: [
      { nombre: "Semicurado", formatos: ["1 kg", "2,5 kg"] },
      { nombre: "Curado", formatos: ["1 kg", "2,5 kg"] },
      { nombre: "Añejo", formatos: ["1 kg", "2,5 kg"] },
    ],
  },
  {
    slug: "el-consuelo",
    nombre: "El Consuelo",
    rotulo: "La línea de la casa",
    href: "/quesos/el-consuelo",
    logo: "/images/logo-consuelo.png",
    foto: "/images/slide6.jpg",
    variedades: [
      { nombre: "Fresco", formatos: ["1 kg"] },
      { nombre: "Semicurado", formatos: ["1 kg", "2,5 kg"] },
      { nombre: "Curado", formatos: ["1 kg", "2,5 kg"] },
      { nombre: "En aceite", formatos: ["1 kg"] },
    ],
  },
  {
    slug: "el-redil",
    nombre: "El Redil",
    rotulo: "Para todos los días",
    href: "/quesos/el-redil",
    logo: "/images/logo-redil.png",
    foto: "/images/slide7.jpg",
    variedades: [
      { nombre: "Oveja Madurado", formatos: ["1 kg", "2,5 kg"] },
      { nombre: "Cabra al Pimentón", formatos: ["Pequeño formato"] },
      { nombre: "Tierno de Oveja", formatos: ["1 kg"] },
    ],
  },
];

export type LineaPedido = { linea: string; variedad: string; formato: string; cantidad: number };

export function mensajePedido(lineas: LineaPedido[], nombre: string): string {
  const items = lineas.map(
    (l) => `• ${l.cantidad} × ${l.linea} ${l.variedad} (${l.formato})`
  );
  return [
    "Hola, quiero hacer este pedido:",
    ...items,
    nombre.trim() ? `A nombre de: ${nombre.trim()}` : "",
    "¿Me confirmáis disponibilidad, precio y envío?",
  ]
    .filter(Boolean)
    .join("\n");
}
