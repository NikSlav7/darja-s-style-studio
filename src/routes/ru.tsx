import { createFileRoute } from "@tanstack/react-router";
import { DarjaSite } from "@/components/DarjaSite";

export const Route = createFileRoute("/ru")({
  head: () => ({
    meta: [
      { title: "Свадебные причёски и макияж в Таллинне | Darja" },
      { name: "description", content: "Дарья создаёт свадебные и вечерние причёски, макияж и оформление бровей в Таллинне. Выезд на свадьбы по всей Эстонии. Посмотрите работы и свяжитесь с Дарьей." },
      { property: "og:title", content: "Свадебные причёски и макияж в Таллинне | Darja" },
      { property: "og:description", content: "Свадебные причёски, макияж и вечерние образы от Дарьи в Таллинне." },
      { property: "og:type", content: "website" }, { property: "og:url", content: "/ru" }, { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/ru" }, { rel: "alternate", hrefLang: "et", href: "/et" }, { rel: "alternate", hrefLang: "ru", href: "/ru" }, { rel: "alternate", hrefLang: "x-default", href: "/et" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "BeautySalon", name: "Darja soengud, jumestus ja kulmud", address: { "@type": "PostalAddress", streetAddress: "Katusepapi 4", addressLocality: "Tallinn", addressCountry: "EE" }, telephone: "+37256653706", email: "darja_d@mail.ru", sameAs: ["https://www.facebook.com/DarjaHairstyles"], availableLanguage: ["et", "ru"] }) }],
  }),
  component: () => <DarjaSite lang="ru" />,
});
