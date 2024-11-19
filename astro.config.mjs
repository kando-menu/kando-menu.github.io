// @ts-check
import starlight from '@astrojs/starlight';
import {defineConfig} from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://kando.menu',
  integrations: [
    starlight({
      title: 'Kando',
      logo: {
        src: './src/assets/kando.svg',
        alt: 'Kando Logo',
      },
      editLink: {
        baseUrl:
            'https://github.com/kando-menu/kando-menu.github.io/edit/main/',
      },
      social: {
        github: 'https://github.com/kando-menu/kando',
        discord: 'https://discord.gg/hZwbVSDkhy',
        youtube: 'https://www.youtube.com/@simonschneegans',
      },
      sidebar: [
        {
          label: 'Getting Started',
          autogenerate: {directory: 'getting-started'},
        },
        {
          label: 'Reference',
          autogenerate: {directory: 'reference'},
        },
        {label: 'Changelog', link: '/changelog'},
        {label: 'Code of Conduct', link: '/code-of-conduct'},
      ],
      lastUpdated: true,
      customCss: [
        // Relative path to your custom CSS file
        './src/styles/custom.css',
      ],
    }),
  ],
});
