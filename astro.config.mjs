// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://elvisdelfosTI.github.io',
	base: '/guiedes.delfosTI',
	integrations: [
		starlight({
			title: 'Delfosti Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Empezando',
					items: [
					  { label: 'Quien soy', link: '/about/me' }
					]
				  },
				  {
					label: 'Las guías de Delfos',
					autogenerate: {
					  directory: 'guides'
					}
				  }
			],
			defaultLocale: 'es',
		}),
	],
});
