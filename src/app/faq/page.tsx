import type { Metadata } from "next";
import Nav from "@/components/nav";
import Breadcrumb from "@/components/breadcrumb";
import FaqContent from "@/components/faq-content";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Quesos El Consuelo",
  description:
    "Resolvemos tus dudas sobre envíos, pedidos mínimos, conservación del queso, la DOP Queso Manchego y las diferencias entre nuestras líneas.",
  openGraph: {
    title: "Preguntas Frecuentes | Quesos El Consuelo",
    description:
      "Envíos, pedidos, conservación, DOP Queso Manchego y más.",
    url: "https://www.quesoselconsuelo.com/faq",
    images: [
      {
        url: "/api/og?title=Preguntas+frecuentes&sub=Env%C3%ADos+%C2%B7+Pedidos+%C2%B7+Conservaci%C3%B3n+%C2%B7+DOP+Queso+Manchego",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function FaqPage() {
  return (
    <main>
      <Nav />
      <Breadcrumb items={[{ label: "Preguntas Frecuentes" }]} />
      <FaqContent />
      <Footer />
    </main>
  );
}
