import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Historia from "@/components/historia";
import Quesos from "@/components/quesos";
import Cifras from "@/components/cifras";
import Testimonio from "@/components/testimonio";
import Contacto from "@/components/contacto";
import Footer from "@/components/footer";
import Schema from "@/components/schema";

export default function Home() {
  return (
    <>
      <Schema />
      <main>
        <Nav />
        <Hero />
        <Historia />
        <Quesos />
        <Cifras />
        <Testimonio />
        <Contacto />
        <Footer />
      </main>
    </>
  );
}
