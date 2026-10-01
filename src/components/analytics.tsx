import Script from "next/script";

// Set NEXT_PUBLIC_PLAUSIBLE_DOMAIN=quesoselconsuelo.com in .env.local
// to activate analytics. Get a free account at plausible.io
export default function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  if (!domain) return null;
  return (
    <Script
      defer
      data-domain={domain}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}
