import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    // Output a static app shell instead of requiring a running server
    spa: { enabled: true },
  },
  vite: {
    // GitHub Pages serves project sites from /<repo-name>/.
    // Set BASE_PATH only for the Pages build; leave it unset for a custom domain.
    base: process.env.BASE_PATH ?? "/",
  },
});
