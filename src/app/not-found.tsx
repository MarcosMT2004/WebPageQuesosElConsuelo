import Link from "next/link";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

export default function NotFound() {
  return (
    <main>
      <Nav />
      <section
        className="flex flex-col items-center justify-center text-center px-6"
        style={{ minHeight: "100vh", background: "#231A0E" }}
      >
        <p
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(6rem, 20vw, 14rem)",
            color: "rgba(193,125,60,0.2)",
            lineHeight: 1,
            fontWeight: 400,
            fontStyle: "italic",
            userSelect: "none",
          }}
          aria-hidden
        >
          404
        </p>
        <h1
          className="-mt-4 mb-6"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            color: "#F7F0E3",
            fontWeight: 400,
            fontStyle: "italic",
          }}
        >
          Esta página no existe
        </h1>
        <p
          className="mb-10 max-w-sm"
          style={{
            fontFamily: "var(--font-lora)",
            fontSize: "0.9rem",
            color: "rgba(247,240,227,0.55)",
            lineHeight: 1.75,
          }}
        >
          Puede que la URL haya cambiado o que simplemente el queso ya se haya acabado.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 text-sm transition-opacity hover:opacity-90"
          style={{
            background: "#C17D3C",
            color: "#F7F0E3",
            fontFamily: "var(--font-lora)",
          }}
        >
          Volver al inicio
        </Link>
      </section>
      <Footer />
    </main>
  );
}
