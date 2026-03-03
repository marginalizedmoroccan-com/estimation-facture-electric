import { defineConfig } from 'astro/config';
import { webcore } from 'webcoreui/integration'
import cloudflare from '@astrojs/cloudflare';
// https://astro.build/config
export default defineConfig({
    adapter: cloudflare({ platformProxy: { enabled: true }, imageService: "cloudflare" }),
    integrations: [webcore()]
});
