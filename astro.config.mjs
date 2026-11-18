import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// GitHub Pages (project site): https://vndesignwork-creator.github.io/teste_sitereal_01/
	site: 'https://vndesignwork-creator.github.io',
	base: '/teste_sitereal_01',
	vite: {
		plugins: [tailwindcss()],
	},
});
