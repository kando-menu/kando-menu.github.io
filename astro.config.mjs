// @ts-check
import starlight from '@astrojs/starlight';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://kando.menu',
  integrations: [
    icon(),
    starlight({
      title: 'Kando',
      logo: {
        src: './src/assets/kando.svg',
        alt: 'Kando Logo',
      },
      editLink: {
        baseUrl: 'https://github.com/kando-menu/kando-menu.github.io/edit/main/',
      },
      social: {
        github: 'https://github.com/kando-menu/kando',
        discord: 'https://discord.gg/hZwbVSDkhy',
        youtube: 'https://www.youtube.com/@simonschneegans',
      },
      sidebar: [
        {
          label: 'Getting Started',
          autogenerate: { directory: 'getting-started' },
        },
        {
          label: 'Advanced Usage',
          autogenerate: { directory: 'advanced-usage' },
        },
        {
          label: 'Getting Involved',
          autogenerate: { directory: 'getting-involved' },
        },
        {
          label: 'API References',
          autogenerate: { directory: 'reference' },
          collapsed: true,
        },
        {
          label: 'Discord 🗗',
          link: 'https://discord.gg/hZwbVSDkhy',
          attrs: { target: '_blank' },
        },
        {
          label: 'Issue Tracker 🗗',
          link: 'https://github.com/kando-menu/kando/issues',
          attrs: { target: '_blank' },
        },
        {
          label: 'Changelog 🗗',
          link: 'https://github.com/kando-menu/kando/blob/main/docs/changelog.md',
          attrs: { target: '_blank' },
        },
        {
          label: 'Code of Conduct 🗗',
          link: 'https://github.com/kando-menu/kando/blob/main/docs/code-of-conduct.md',
          attrs: { target: '_blank' },
        },
      ],
      lastUpdated: true,
      customCss: ['./src/styles/custom.css'],
      components: {
        Footer: './src/components/Footer.astro',
      },
    }),
  ],
});
