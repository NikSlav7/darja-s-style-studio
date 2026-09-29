// @lovable.dev/vite-tanstack-config already includes tanstackStart, viteReact, tailwindcss, etc.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static build for GitHub Pages: run with STATIC_BUILD=1 (and BASE_PATH=/repo-name/).
const isStatic = process.env.STATIC_BUILD === "1";
const base = process.env.BASE_PATH || "/";

export default defineConfig({
  vite: isStatic ? { base } : {},
  tanstackStart: isStatic
    ? {
        server: { entry: "server" },
        router: { basepath: base },
        pages: [{ path: "/et" }, { path: "/ru" }],
        prerender: { enabled: true, autoStaticPathsDiscovery: false },
      }
    : { server: { entry: "server" } },
});
