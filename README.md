# Astro Fonts API: fallback measured on the first file

Minimal reproduction for an Astro issue: the optimized fallback's `size-adjust`
is computed from the first font file the provider returns, which here is the
Cyrillic italic subset of Montserrat.

```sh
npm install
npm run build
grep -o 'size-adjust:[^;]*' dist/index.html
```

With `subsets: ["latin", "cyrillic"]` in `astro.config.mjs` the build gives
`size-adjust:120.6817%`. With `subsets: ["latin"]` it gives
`size-adjust:114.1766%`. Montserrat 400 is about 113% as wide as Arial, so the
Cyrillic subset should not change the fallback for Latin text.

Checked with Astro 7.4.12.
