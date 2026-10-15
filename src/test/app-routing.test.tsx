import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { services } from "@/lib/services";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches all Data Space detail pages", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    const dataSpace = services.find((service) => service.id === "data-space");
    expect(dataSpace?.groups).toHaveLength(5);
    for (const group of dataSpace?.groups ?? []) {
      expect(group.slug).toBeTruthy();
      expect(group.details?.map((detail) => detail.name)).toEqual(group.items);
      const matches = router.matchRoutes(`/services/data-space/${group.slug}`);
      expect(matches.at(-1)?.routeId).toBe("/services_/data-space/$slug");
    }
  });
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
});
