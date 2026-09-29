import { createFileRoute } from "@tanstack/react-router";
import { DarjaSite } from "@/components/DarjaSite";

export const Route = createFileRoute("/et")({
  head: () => ({
    meta: [
      { title: "Pruudisoengud ja jumestus Tallinnas | Darja" },
      { name: "description", content: "Darja loob pruudisoenguid, õhtusoenguid ja jumestust Tallinnas ning tuleb ka pulmapaika üle Eesti. Tutvu töödega ja võta ühendust." },
      { property: "og:title", content: "Pruudisoengud ja jumestus Tallinnas | Darja" },
      { property: "og:description", content: "Isiklikud pruudisoengud, pulmajumestus ja õhtused look'id Darjalt Tallinnas." },
      { property: "og:type", content: "website" }, { property: "og:url", content: "/et" }, { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/et" }, { rel: "alternate", hrefLang: "et", href: "/et" }, { rel: "alternate", hrefLang: "ru", href: "/ru" }, { rel: "alternate", hrefLang: "x-default", href: "/et" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "BeautySalon", name: "Darja soengud, jumestus ja kulmud", address: { "@type": "PostalAddress", streetAddress: "Katusepapi 4", addressLocality: "Tallinn", addressCountry: "EE" }, telephone: "+37256653706", email: "darja_d@mail.ru", sameAs: ["https://www.facebook.com/DarjaHairstyles"], availableLanguage: ["et", "ru"] }) }],
  }),
  component: () => <DarjaSite lang="et" />,
});
