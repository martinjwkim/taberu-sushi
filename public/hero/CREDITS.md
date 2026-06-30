# Hero background photography

Source: [Unsplash](https://unsplash.com) (free to use under the Unsplash License;
attribution appreciated but not required). Downloaded 2026-06-29.

| File | Unsplash photo ID | Used on |
|------|-------------------|---------|
| `hero-home.jpg`    | `zali_zGDWo8` (salmon nigiri on black) | Home hero |
| `hero-about.jpg`   | `WMjCjmkGL2k` (wooden sashimi box; lower-portion crop) | About header |
| `hero-menu.jpg`    | `dqulzxRF31M` (hand holding chopsticks on dark stone) | Menu header |
| `hero-contact.jpg` | `J8vNJfGz6os` (itamae presenting nigiri at the counter) | Contact header |

To re-fetch at a given size: `https://images.unsplash.com/<photo-id>?w=2400&q=72&fm=jpg&fit=crop`

Treatment lives in `src/index.css` (`.hero-photo`, `.hero-scrim`, `.hero-scrim-left`):
the image sits at ~42% opacity, warm-graded, beneath a vignette/scrim that dissolves
it into the obsidian theme and keeps gold/ivory text legible.
