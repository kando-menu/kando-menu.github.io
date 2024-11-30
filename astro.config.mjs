// SPDX-FileCopyrightText: Simon Schneegans <code@simonschneegans.de>
// SPDX-License-Identifier: CC0-1.0

import starlight from '@astrojs/starlight';
import icon from 'astro-icon';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
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
            'intro',
            'installation-on-windows',
            'installation-on-macos',
            'installation-on-linux',
            'usage',
            'creating-menus',
            {
              label: 'Available Item Types',
              items: [
                'item-open-uri',
                'item-paste-text',
                'item-run-command',
                'item-simulate-hotkey',
                'item-simulate-macro',
                'item-submenu',
              ],
            },
          ],
        },
        {
          label: 'Advanced Usage',
          items: [
            'opening-menus',
            'menu-themes',
            {
              slug: 'sound-themes',
              badge: { text: 'soon!', variant: 'tip' },
            },
            'icon-themes',
            'launch-from-cli',
          ],
        },
        {
          label: 'Getting Involved',
          items: [
            'donating',
            'translating',
            'create-menu-themes',
            {
              slug: 'create-sound-themes',
              badge: { text: 'soon!', variant: 'tip' },
            },
            'compile-from-source',
            'contribution-guide',
          ],
        },
        {
          label: 'API References',
          collapsed: true,
          items: ['commandline-interface', 'config-files', 'valid-keynames'],
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
      customCss: ['./src/styles/custom.css', '@fontsource/neucha/400.css'],
      components: {
        Head: './src/components/Head.astro',
        Hero: './src/components/Hero.astro',
        Footer: './src/components/Footer.astro',
      },
    }),
  ],
  markdown: {
    rehypePlugins: [
      rehypeHeadingIds,
      [
        rehypeAutolinkHeadings,
        {
          // Wrap the heading text in a link.
          behavior: 'wrap',
        },
      ],
    ],
  },
});
