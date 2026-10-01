import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import EmpresaContent from "@/components/empresa-content";
import Breadcrumb from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: "La Empresa | Quesos El Consuelo — S.A.T. Cañada Real Soriana",
  description:
    "Desde 1938 en Madridejos, Toledo. La historia de S.A.T. Cañada Real Soriana, fundada por Jesús Ávila Durango junto a la histórica Cañada Real. Queso manchego artesanal de raíz.",
  openGraph: {
    title: "La Empresa | Quesos El Consuelo",
    description: "Desde 1938 en Madridejos, Toledo. Queso manchego artesanal de generación en generación.",
    url: "https://www.quesoselconsuelo.com/empresa",
    images: [{ url: "/images/hero-rebano.jpg" }],
  },
};

export default function EmpresaPage() {
  return (
    <main>
      <Nav />
      <Breadcrumb items={[{ label: "La Empresa" }]} />
      <EmpresaContent />
      <Footer />
    </main>
  );
}
