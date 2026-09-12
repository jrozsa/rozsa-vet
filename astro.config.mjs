import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.SITE_URL || "https://www.rozsa-vet.sk";
const base = process.env.BASE_PATH || "/";

export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
  output: "static",
});
