---
title: Compile Kando from Source
description: A guide in my new Starlight docs site.
banner:
  content: 🚧 This page is under construction! 🚧
sidebar:
  order: 3
---

macOS: If you run Kando from source, you will need to grant the permissions to the terminal you are using to start Kando.
You will have to grant Kando Accessibility and Screen Recording permissions in the system settings. Accessibility permissions are required to simulate key presses and move the mouse cursor. Screen Recording permissions are required to get the name of the currently focused window.

On some distributions, you may encounter the error `The SUID sandbox helper binary was found, but is not configured correctly. Rather than run without sandboxing I'm aborting now`. This is related to [this issue](https://github.com/electron/electron/issues/17972) and can be fixed by running these commands:

```bash
sudo chmod 4755 node_modules/electron/dist/chrome-sandbox
sudo chown root node_modules/electron/dist/chrome-sandbox
```
