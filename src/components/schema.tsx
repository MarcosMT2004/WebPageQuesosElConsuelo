export default function Schema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "@id": "https://www.quesoselconsuelo.com",
    name: "Quesos El Consuelo",
    alternateName: "S.A.T. Cañada Real Soriana",
    description:
      "Queso manchego artesanal con Denominación de Origen Protegida. Desde 1938, en Madridejos, Toledo.",
    url: "https://www.quesoselconsuelo.com",
    telephone: ["+34667638293", "+34925462459"],
    foundingDate: "1938",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Madridejos",
      addressRegion: "Toledo",
      addressCountry: "ES",
    },
    sameAs: ["https://www.instagram.com/quesoselconsuelo/"],
    servesCuisine: "Queso Manchego",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Quesos Manchegos Artesanales",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "El Consuelo" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "El Cordel" } },
        { "@type": "Offer", itemOffered: { "@type": "Product", name: "El Redil" } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
