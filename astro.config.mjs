import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages (project site): https://vndesignwork-creator.github.io/teste_sitereal_01/
// The subfolder only applies on the GitHub build; the local preview stays at "/".
const onGitHub = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
	site: 'https://vndesignwork-creator.github.io/teste_sitereal_01/',
	...(onGitHub ? { base: '/teste_sitereal_01' } : {}),
	vite: {
		plugins: [tailwindcss()],
	},
});
