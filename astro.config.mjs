import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://alexaquijano22.github.io",
  base: "/personal-portafolio",
  integrations: [tailwind()],
});
