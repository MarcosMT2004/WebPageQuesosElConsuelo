import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ElConsueloContent from "@/components/el-consuelo-content";
import Breadcrumb from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: "El Consuelo | Queso Manchego Artesanal — Quesos El Consuelo",
  description:
    "La línea insignia de Quesos El Consuelo. Queso manchego artesanal en variedades fresco, semicurado, curado y en aceite. Elaborado con leche cruda de oveja manchega.",
  openGraph: {
    title: "El Consuelo | Queso Manchego Artesanal",
    description: "La línea insignia. Fresco, semicurado, curado y en aceite. Queso manchego artesanal desde Madridejos, Toledo.",
    url: "https://www.quesoselconsuelo.com/quesos/el-consuelo",
    images: [{ url: "/images/slide6.jpg" }],
  },
};

function ProductSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Queso El Consuelo",
    description:
      "Queso manchego artesanal de la línea El Consuelo. Disponible en fresco, semicurado, curado y en aceite. Elaborado con leche cruda de oveja manchega en Madridejos, Toledo.",
    brand: { "@type": "Brand", name: "Quesos El Consuelo" },
    manufacturer: {
      "@type": "Organization",
      name: "S.A.T. Cañada Real Soriana",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Madridejos",
        addressRegion: "Toledo",
        addressCountry: "ES",
      },
    },
    category: "Queso Manchego Artesanal",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function ElConsueloPage() {
  return (
    <>
      <ProductSchema />
      <main>
        <Nav />
        <Breadcrumb
          items={[
            { label: "Nuestros Quesos", href: "/quesos" },
            { label: "El Consuelo" },
          ]}
        />
        <ElConsueloContent />
        <Footer />
      </main>
    </>
  );
}
