// SPDX-FileCopyrightText: Simon Schneegans <code@simonschneegans.de>
// SPDX-License-Identifier: CC0-1.0

/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type StarlightRouteData = import('@astrojs/starlight/route-data').StarlightRouteData;

declare namespace App {
  interface Locals {
    starlightRoute: StarlightRouteData;
  }
}
