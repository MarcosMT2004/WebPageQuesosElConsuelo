import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/whatsapp-button";
import CookieBanner from "@/components/cookie-banner";
import ScrollToTop from "@/components/scroll-to-top";
import Analytics from "@/components/analytics";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.quesoselconsuelo.com"),
  title: "Quesos El Consuelo · Queso Manchego Artesanal",
  description:
    "Queso manchego artesanal con Denominación de Origen Protegida. Desde 1938, en Madridejos, Toledo. Tres líneas: El Consuelo, El Cordel y El Redil.",
  keywords: [
    "queso manchego",
    "artesanal",
    "denominación de origen",
    "DOP",
    "Madridejos",
    "Toledo",
  ],
  openGraph: {
    title: "Quesos El Consuelo · Sabor de La Mancha",
    description:
      "Queso manchego artesanal con DOP. 88 años de tradición, 1.200 ovejas manchegas propias.",
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: "/api/og?title=Quesos+El+Consuelo&sub=Queso+Manchego+Artesanal+%C2%B7+DOP+%C2%B7+Madridejos%2C+Toledo",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${cormorant.variable} ${lora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Quesos El Consuelo",
              legalName: "S.A.T. Cañada Real Soriana",
              description:
                "Elaboración artesanal de queso manchego con Denominación de Origen Protegida (DOP) desde 1938. Tres líneas: El Consuelo, El Cordel y El Redil.",
              url: "https://www.quesoselconsuelo.com",
              telephone: ["+34667638293", "+34925462459"],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Ctra. Toledo-Alcázar de San Juan, km 69,200",
                addressLocality: "Madridejos",
                addressRegion: "Castilla-La Mancha",
                postalCode: "45710",
                addressCountry: "ES",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 39.434,
                longitude: -3.531,
              },
              foundingDate: "1938",
              image: "https://www.quesoselconsuelo.com/images/logo.png",
              priceRange: "€€",
              sameAs: ["https://www.instagram.com/quesoselconsuelo/"],
            }),
          }}
        />
        {children}
        <ScrollToTop />
        <WhatsAppButton />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
