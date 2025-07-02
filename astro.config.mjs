// SPDX-FileCopyrightText: Simon Schneegans <code@simonschneegans.de>
// SPDX-License-Identifier: CC0-1.0

import starlight from '@astrojs/starlight';
import icon from 'astro-icon';
import {defineConfig} from 'astro/config';

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
        baseUrl:
            'https://github.com/kando-menu/kando-menu.github.io/edit/main/',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/kando-menu/kando'
        },
        {
          icon: 'discord',
          label: 'Discord',
          href: 'https://discord.gg/hZwbVSDkhy'
        },
        {
          icon: 'youtube',
          label: 'Youtube',
          href: 'https://www.youtube.com/@simonschneegans'
        },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            'intro',
            'installation-on-windows',
            'installation-on-macos',
            'installation-on-linux',
            'usage',
            'creating-menus',
            {
              label: 'Available Item Types',
              items: [
                'item-submenu',
                'item-run-command',
                'item-file',
                'item-simulate-hotkey',
                'item-execute-macro',
                'item-paste-text',
                'item-open-uri',
                'item-redirect',
                'item-settings',
              ],
            },
          ],
        },
        {
          label: 'Customizing Kando',
          items: [
            'menu-themes',
            'sound-themes',
            'icon-themes',
          ],
        },
        {
          label: 'Advanced Usage',
          items: [
            'opening-menus',
            'launch-from-cli',
          ],
        },
        {
          label: 'Getting Involved',
          items: [
            'donating',
            'translating',
            'create-menu-themes',
            'create-sound-themes',
            'compile-from-source',
            'contribution-guide',
            'debugging',
          ],
        },
        {
          label: 'Reference',
          collapsed: true,
          items: [
            'config-files',
            'valid-keynames',
            'release-management',
          ],
        },
        {
          label: 'Discord ↗',
          link: 'https://discord.gg/hZwbVSDkhy',
          attrs: {target: '_blank'},
        },
        {
          label: 'Issue Tracker ↗',
          link: 'https://github.com/kando-menu/kando/issues',
          attrs: {target: '_blank'},
        },
        {
          label: 'Changelog ↗',
          link:
              'https://github.com/kando-menu/kando/blob/main/docs/changelog.md',
          attrs: {target: '_blank'},
        },
        {
          label: 'Code of Conduct ↗',
          link:
              'https://github.com/kando-menu/kando/blob/main/docs/code-of-conduct.md',
          attrs: {target: '_blank'},
        },
      ],
      lastUpdated: true,
      customCss: ['./src/styles/custom.css', '@fontsource/neucha/400.css'],
      components: {
        Head: './src/components/Head.astro',
        Footer: './src/components/Footer.astro',
      },
    }),
  ],
});
