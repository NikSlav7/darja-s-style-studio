import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => { throw redirect({ to: "/et" }); },
  head: () => ({ meta: [
    { title: "Darja | Soengud ja jumestus Tallinnas" },
    { name: "description", content: "Darja pruudisoengud, pulmajumestus ja kulmud Tallinnas." },
    { property: "og:title", content: "Darja | Soengud ja jumestus Tallinnas" },
    { property: "og:description", content: "Darja pruudisoengud, pulmajumestus ja kulmud Tallinnas." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
});
