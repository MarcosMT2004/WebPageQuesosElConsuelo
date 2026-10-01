import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ElaboracionContent from "@/components/elaboracion-content";
import Breadcrumb from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: "La Elaboración | Quesos El Consuelo — Proceso artesanal",
  description:
    "Cómo se hace el queso manchego artesanal: desde la leche cruda de oveja manchega hasta la bodega de maduración. Proceso tradicional con los estándares de la DOP Manchego.",
  openGraph: {
    title: "La Elaboración | Quesos El Consuelo",
    description: "Del pasto a la bodega. El proceso artesanal detrás de cada rueda de queso manchego.",
    url: "https://www.quesoselconsuelo.com/elaboracion",
    images: [{ url: "/images/quesos-cordel.jpg" }],
  },
};

export default function ElaboracionPage() {
  return (
    <main>
      <Nav />
      <Breadcrumb items={[{ label: "La Elaboración" }]} />
      <ElaboracionContent />
      <Footer />
    </main>
  );
}
