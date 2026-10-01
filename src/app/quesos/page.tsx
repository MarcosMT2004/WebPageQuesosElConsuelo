import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import QuesosIndexContent from "@/components/quesos-index-content";
import Breadcrumb from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: "Nuestros Quesos | Quesos El Consuelo — El Consuelo, El Cordel y El Redil",
  description:
    "Tres líneas de queso manchego artesanal: El Consuelo, El Cordel DOP y El Redil. Elaborados con leche cruda de oveja manchega en Madridejos, Toledo, desde 1938.",
  openGraph: {
    title: "Nuestros Quesos | Quesos El Consuelo",
    description: "El Consuelo, El Cordel DOP y El Redil. Tres líneas, un único origen artesanal.",
    url: "https://www.quesoselconsuelo.com/quesos",
    images: [{ url: "/images/hero-productos.jpg" }],
  },
};

export default function QuesosPage() {
  return (
    <main>
      <Nav />
      <Breadcrumb items={[{ label: "Nuestros Quesos" }]} />
      <QuesosIndexContent />
      <Footer />
    </main>
  );
}
