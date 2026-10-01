import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ElCordelContent from "@/components/el-cordel-content";
import Breadcrumb from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: "El Cordel DOP | Queso Manchego con Denominación de Origen — Quesos El Consuelo",
  description:
    "El Cordel, nuestro queso manchego con Denominación de Origen Protegida. Medalla de Plata en el World Cheese Awards 2016. Corteza natural, pasta firme y retrogusto largo.",
  openGraph: {
    title: "El Cordel DOP | Queso Manchego",
    description: "DOP Manchego. Medalla de Plata World Cheese Awards 2016. El queso más premiado de la casa.",
    url: "https://www.quesoselconsuelo.com/quesos/el-cordel",
    images: [{ url: "/images/quesos-cordel.jpg" }],
  },
};

function ProductSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Queso El Cordel DOP",
    description:
      "Queso manchego con Denominación de Origen Protegida. Medalla de Plata en el World Cheese Awards 2016. Disponible en semicurado, curado y añejo. Leche cruda de oveja manchega.",
    brand: { "@type": "Brand", name: "Quesos El Consuelo" },
    award: "Medalla de Plata World Cheese Awards 2016",
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
    category: "Queso Manchego DOP",
    hasCertification: {
      "@type": "Certification",
      name: "Denominación de Origen Protegida Manchego",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function ElCordelPage() {
  return (
    <>
      <ProductSchema />
      <main>
        <Nav />
        <Breadcrumb
          items={[
            { label: "Nuestros Quesos", href: "/quesos" },
            { label: "El Cordel" },
          ]}
        />
        <ElCordelContent />
        <Footer />
      </main>
    </>
  );
}
