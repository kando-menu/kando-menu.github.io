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
          items: [
            'getting-started/intro',
            'getting-started/installation-windows',
            'getting-started/installation-macos',
            'getting-started/installation-linux',
            'getting-started/usage',
            'getting-started/creating-menus',
            {
              label: 'Available Item Types',
              items: [
                'getting-started/item-type/open-uri',
                'getting-started/item-type/paste-text',
                'getting-started/item-type/run-command',
                'getting-started/item-type/simulate-hotkey',
                'getting-started/item-type/simulate-macro',
                'getting-started/item-type/submenu',
              ],
            },
          ],
        },
        {
          label: 'Advanced Usage',
          items: [
            'advanced-usage/customizing',
            'advanced-usage/opening-menus',
            'advanced-usage/launch-from-cli',
            'advanced-usage/create-menu-themes',
          ],
        },
        {
          label: 'Getting Involved',
          items: [
            'getting-involved/donating',
            'getting-involved/translating',
            'getting-involved/compile-from-source',
            'getting-involved/contribution-guide',
          ],
        },
        {
          label: 'API References',
          collapsed: true,
          items: ['reference/cli', 'reference/config-files', 'reference/valid-keys'],
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
