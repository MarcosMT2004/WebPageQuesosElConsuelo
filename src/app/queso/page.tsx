import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import QuesoContent from "@/components/queso-content";
import Breadcrumb from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: "El Queso Manchego | Quesos El Consuelo — DOP, variedades y maridaje",
  description:
    "Todo sobre el queso manchego: la Denominación de Origen Protegida, sus características únicas, las variedades por curación y los mejores maridajes.",
  openGraph: {
    title: "El Queso Manchego | Quesos El Consuelo",
    description: "DOP, corteza de esparto, leche de oveja manchega. Todo lo que necesitas saber sobre el queso manchego.",
    url: "https://www.quesoselconsuelo.com/queso",
    images: [{ url: "/images/hero-productos.jpg" }],
  },
};

export default function QuesoPage() {
  return (
    <main>
      <Nav />
      <Breadcrumb items={[{ label: "El Queso" }]} />
      <QuesoContent />
      <Footer />
    </main>
  );
}
