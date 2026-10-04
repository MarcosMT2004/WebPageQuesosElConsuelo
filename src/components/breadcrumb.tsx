"use client";

import Link from "next/link";

const BASE_URL = "https://www.quesoselconsuelo.com";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ label: "Inicio", href: "/" }, ...items];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${BASE_URL}${item.href}` } : {}),
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <>
      <BreadcrumbSchema items={items} />
      <nav
      aria-label="Ruta de navegación"
      className="px-6"
      style={{
        paddingTop: "64px", // height of fixed nav
        background: "var(--color-marmol)",
        borderBottom: "1px solid rgba(201,162,74,0.15)",
      }}
    >
      <ol
        className="max-w-6xl mx-auto flex items-center gap-2 py-3"
        style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem" }}
      >
        <li>
          <Link
            href="/"
            style={{ color: "var(--color-gris)", transition: "color 150ms" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-oro)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-gris)")}
          >
            Inicio
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span style={{ color: "rgba(201,162,74,0.45)" }} aria-hidden>/</span>
            {item.href ? (
              <Link
                href={item.href}
                style={{ color: "var(--color-gris)", transition: "color 150ms" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-oro)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-gris)")}
              >
                {item.label}
              </Link>
            ) : (
              <span style={{ color: "var(--color-verde)" }}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
    </>
  );
}
