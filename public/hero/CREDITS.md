# Hero background photography

Source: [Unsplash](https://unsplash.com) (free to use under the Unsplash License;
attribution appreciated but not required). Downloaded 2026-06-29.

| File | Unsplash photo ID | Used on |
|------|-------------------|---------|
| `hero-home.jpg`    | `photo-1615361200098-9e630ec29b4e` | Home hero |
| `hero-about.jpg`   | `photo-1607301405418-780ee5e6dd10` | About header |
| `hero-menu.jpg`    | `photo-1583623025817-d180a2221d0a` | Menu header |
| `hero-contact.jpg` | `photo-1617196905100-216ffe128142` | Contact header |

To re-fetch at a given size: `https://images.unsplash.com/<photo-id>?w=2400&q=72&fm=jpg&fit=crop`

Treatment lives in `src/index.css` (`.hero-photo`, `.hero-scrim`, `.hero-scrim-left`):
the image sits at ~42% opacity, warm-graded, beneath a vignette/scrim that dissolves
it into the obsidian theme and keeps gold/ivory text legible.
