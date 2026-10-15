import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { services } from "@/lib/services";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches the Human-Centric AI page with all five phases and fifteen services", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    const humanAI = services.find((service) => service.id === "human-ai");
    expect(humanAI?.intro).toContain("augmenting human intelligence");
    expect(humanAI?.groups).toHaveLength(5);
    for (const group of humanAI?.groups ?? []) {
      expect(group.intro).toBeTruthy();
      expect(group.details).toHaveLength(3);
      expect(group.details?.map((detail) => detail.name)).toEqual(group.items);
      expect(group.details?.every((detail) => detail.description.length > 0)).toBe(true);
    }
    expect(router.matchRoutes("/services/human-centric-ai").at(-1)?.routeId).toBe("/services_/human-centric-ai");
  });
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
