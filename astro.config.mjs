import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  integrations: [react(), tailwind()],
  server: {
    host: "0.0.0.0"
  }
});