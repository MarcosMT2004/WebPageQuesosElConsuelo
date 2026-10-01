import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ElRedilContent from "@/components/el-redil-content";
import Breadcrumb from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: "El Redil | Quesos de Oveja y Cabra — Quesos El Consuelo",
  description:
    "El Redil, la gama más versátil de Quesos El Consuelo. Queso de oveja madurado, queso de cabra al pimentón y variedades tiernas. Artesanal, accesible, sin concesiones.",
  openGraph: {
    title: "El Redil | Quesos de Oveja y Cabra",
    description: "La gama más versátil. Oveja madurado, cabra al pimentón, tierno. Artesanal y para cada ocasión.",
    url: "https://www.quesoselconsuelo.com/quesos/el-redil",
    images: [{ url: "/images/slide7.jpg" }],
  },
};

function ProductSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Queso El Redil",
    description:
      "Gama El Redil de Quesos El Consuelo. Queso de oveja madurado graso, queso de cabra al pimentón y tierno de oveja. Artesanal, elaborado en Madridejos, Toledo.",
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
    category: "Queso Artesanal",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function ElRedilPage() {
  return (
    <>
      <ProductSchema />
      <main>
        <Nav />
        <Breadcrumb
          items={[
            { label: "Nuestros Quesos", href: "/quesos" },
            { label: "El Redil" },
          ]}
        />
        <ElRedilContent />
        <Footer />
      </main>
    </>
  );
}
