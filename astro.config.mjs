import { defineConfig } from 'astro/config';
import { webcore } from 'webcoreui/integration'
import cloudflare from '@astrojs/cloudflare';
// https://astro.build/config
export default defineConfig({
    site: 'https://estimation-facture.ma', // Updated to match professional domain
    adapter: cloudflare({ platformProxy: { enabled: true }, imageService: "cloudflare" }),
    integrations: [webcore()]
});
