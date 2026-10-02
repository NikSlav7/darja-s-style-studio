import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    basepath: import.meta.env.BASE_URL,
    // Keep trailing-slash URLs as-is: the static prerenderer requests them and
    // the default ("never") makes the router redirect-loop against it.
    trailingSlash: "preserve",
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
