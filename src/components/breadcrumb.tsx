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
        background: "#F7F0E3",
        borderBottom: "1px solid rgba(193,125,60,0.15)",
      }}
    >
      <ol
        className="max-w-6xl mx-auto flex items-center gap-2 py-3"
        style={{ fontFamily: "var(--font-lora)", fontSize: "0.75rem" }}
      >
        <li>
          <Link
            href="/"
            style={{ color: "#8C7B6A", transition: "color 150ms" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#C17D3C")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8C7B6A")}
          >
            Inicio
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span style={{ color: "rgba(193,125,60,0.45)" }} aria-hidden>/</span>
            {item.href ? (
              <Link
                href={item.href}
                style={{ color: "#8C7B6A", transition: "color 150ms" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C17D3C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8C7B6A")}
              >
                {item.label}
              </Link>
            ) : (
              <span style={{ color: "#231A0E" }}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
    </>
  );
}
