// SPDX-FileCopyrightText: Simon Schneegans <code@simonschneegans.de>
// SPDX-License-Identifier: CC0-1.0

// This generates OpenGraph images for all documentation pages. The images are
// generated using the `astro-og-canvas` package.
// This was cerated following this guide: https://hideoo.dev/notes/starlight-og-images

import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';

// Get all entries from the `docs` content collection.
const entries = await getCollection('docs');

// Map the entry array to an object with the page ID as key and the
// frontmatter data as value.
const pages = Object.fromEntries(entries.map(({ data, id }) => [id, { data }]));

export const { getStaticPaths, GET } = OGImageRoute({
  // Pass down the documentation pages.
  pages,
  // Define the name of the parameter used in the endpoint path, here `slug`
  // as the file is named `[...slug].ts`.
  param: 'slug',
  // Define a function called for each page to customize the generated image.
  getImageOptions: (_path, page: (typeof pages)[number]) => {
    return {
      title: page.data.title,
      description: page.data.description,
      border: { color: [224, 190, 205], width: 20 },
      bgImage: {
        path: 'src/assets/bg-dark.webp',
        fit: 'cover',
      },
      padding: 120,
      font: {
        title: {
          families: ['Neucha'],
          size: 156,
          lineHeight: 1.2,
        },
        description: {
          families: ['Neucha'],
        },
      },
      fonts: ['https://api.fontsource.org/v1/fonts/neucha/latin-400-normal.ttf'],
    };
  },
});
