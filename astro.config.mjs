import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://tisura.xyz',
  integrations: [tailwind()]
});
