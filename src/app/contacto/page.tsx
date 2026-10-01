import type { Metadata } from "next";
import Nav from "@/components/nav";
import Breadcrumb from "@/components/breadcrumb";
import ContactoContent from "@/components/contacto-content";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Contacto | Quesos El Consuelo — Madridejos, Toledo",
  description:
    "Contacta con Quesos El Consuelo. Estamos en Madridejos, Toledo. Pedidos y consultas por WhatsApp (+34 667 638 293) o teléfono (+34 925 462 459).",
  openGraph: {
    title: "Contacto | Quesos El Consuelo",
    description:
      "Madridejos, Toledo. Pedidos y consultas por WhatsApp o teléfono.",
    url: "https://www.quesoselconsuelo.com/contacto",
    images: [
      {
        url: "/api/og?title=Cont%C3%A1ctanos&sub=Madridejos%2C+Toledo+%C2%B7+WhatsApp+%2B34+667+638+293",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function ContactoPage() {
  return (
    <main>
      <Nav />
      <Breadcrumb items={[{ label: "Contacto" }]} />
      <ContactoContent />
      <Footer />
    </main>
  );
}
