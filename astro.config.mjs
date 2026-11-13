import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Montserrat",
      cssVariable: "--font-montserrat",
      subsets: ["latin", "cyrillic"], // compare with ["latin"]
    },
  ],
});
