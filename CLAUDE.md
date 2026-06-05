# CLAUDE.md — Frontend Website Rules

## Always Do First — Two-Phase UI Workflow

Run both phases, in order, before writing any frontend code — every session, no exceptions.

### Phase 1 — Plan with `frontend-design`
- **Invoke the `frontend-design` skill first.**
- Use it to produce the overall blueprint: page/component architecture, layout
  structure, and how the screens fit together.
- Output of this phase is the structural plan, not finished styling.

### Phase 2 — Polish with `ui-ux-pro-max`
- **Then invoke the `ui-ux-pro-max` skill** (`ui-ux-pro-max:ui-ux-pro-max`).
- Use it to turn the Phase 1 blueprint into a concrete design system:
  - Select specific UI **styles** (e.g. glassmorphism, bento grid, minimalism).
  - Choose a **color palette** and **font pairings**.
  - Define **responsive variables/tokens** tailored to this stack (React + Tailwind CSS v4).
- Pass the relevant action (`plan`, `design`, `build`, `implement`, `review`,
  `improve`, `refactor`, `check`) plus context (e.g. "polish the navbar for a
  restaurant landing page, glassmorphism, React + Tailwind").
- Feed the resulting tokens into `tailwind.config.js` and apply the style guidance
  to the components you write.

## Project Setup
- **Always scaffold as a React project** using Vite + Tailwind CSS.
- Bootstrap: `npm create vite@latest . -- --template react && npm install && npm install -D tailwindcss @tailwindcss/vite`
- Configure `tailwind.config.js` with a custom `theme.extend` for brand colors, spacing tokens, and font pairings — do not rely on default Tailwind palette.
- If the project is already bootstrapped, do not re-scaffold. Check for `package.json` first.

## Component Structure
- Components live in `src/components/`. One component per file, named in PascalCase.
- Use Tailwind classes (not inline styles) for all styling.
- Custom design tokens (colors, spacing, shadows, fonts) belong in `tailwind.config.js`, not hardcoded in className strings.
- Keep `App.jsx` as a thin composition root — no styling logic there.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not add visual content not in the reference.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `npm run dev` (Vite default: `http://localhost:5173`)
- Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- Puppeteer cache is at `~/.cache/puppeteer/` on macOS.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:5173`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:5173 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

## Anti-Generic Guardrails

> Source these from Phase 2: the **color palette** and **font pairings** chosen via
> the `ui-ux-pro-max` skill drive the **Colors** and **Typography** rules below.
> Write the resulting values into `tailwind.config.js` as tokens, then follow the
> rules here to keep the output non-generic.

- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Define a custom brand palette in `tailwind.config.js` and use those tokens.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens defined in `tailwind.config.js` — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Hard Rules
- Do not add visual content or sections not in the reference
- Do not "improve" a reference design visually — match it; componentizing and extracting reusable parts is fine
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
