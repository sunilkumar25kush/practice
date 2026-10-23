# Jishnu Mondal — Full Stack Developer Design System

## Overview

**Product:** Sunil Kumar / Jishnu Mondal Reference Portfolio
**URL:** https://jishnumondal.vercel.app/
**Surface type:** Portfolio & Interactive Showcase
**Audience:** Technical recruiters, engineering leads, tech founders
**Brand character:** Data-driven application interface with a rich, dark-mode crimson palette and 5 high-craft typefaces.

### Design Principles

- **Data visibility** — The most important metrics and achievements are immediately visible without interaction.
- **Progressive disclosure** — Surface summaries, reveal interactive depth and code nuances on demand.
- **Efficiency over decoration** — Every pixel communicates state, motion, or enables direct action.

---

## Colors

| Token | CSS Variable | Hex / Value | Role |
|-------|--------------|-------------|------|
| `color-1` | `--color-1` | `#111114` | Background Dark |
| `color-2` | `--color-2` | `#A02A22` | Text Primary / Brand Crimson Red |
| `color-3` | `--color-3` | `#FC6B2F` | Accent Vermilion Orange |
| `color-4` | `--color-4` | `#B5B5B5` | Text Light Muted |
| `color-5` | `--color-5` | `#E8E8EA` | Text Light Medium |
| `color-6` | `--color-6` | `#EDF0F3` | Text Light Crisp |
| `color-7` | `--color-7` | `#F5F5F7` | Text Light Pure |
| `color-8` | `--color-8` | `#FFFFFF` | Pure White |

---

## Typography

**Font stack:** `Roboto Flex`, `Josefin Sans`, `Space Grotesk`, `Inter`, `Poppins`

| Level | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `text-xs` | 9px | 13.5px | Captions, metadata, tiny pills |
| `text-sm` | 11px | 16.5px | Labels, secondary text, counter tags |
| `text-base` | 13px | 18.57px | Body text (default) |
| `text-lg` | 14px | 20.74px | Subheadings, button text, emphasis |
| `text-xl` | 16px | 24px | Small section headings |
| `text-2xl` | 20px | 28px | Section headings, card titles |
| `text-3xl` | 36px | 50.4px | Medium section headings |
| `text-4xl` | 51px | 56.32px | Major section titles |
| `text-9` | 68px | 74.8px | Large headline titles |
| `text-10` | 283px | 283.33px | Massive Hero letterforms (`SUNIL`) |

**Weight scale:** `100` · `400` · `500` · `600` · `700` · `800`

---

## Spacing

**Base unit:** 4px

- `space-1`: 6px
- `space-2`: 8px
- `space-3`: 10px
- `space-4`: 12px
- `space-5`: 14px
- `space-6`: 16px
- `space-7`: 20px
- `space-8`: 21px
- `space-9`: 24px
- `space-10`: 28px
- `space-11`: 32px
- `space-12`: 48px
- `space-13`: 72px
- `space-14`: 94px
- `space-15`: 104px
- `space-16`: 205px

---

## Shapes & Radii

- `radius-sm`: `2px` (subtle badges, code blocks)
- `radius-md`: `24px` (cards, macOS mockup windows, dialogs)
- `radius-full`: `9999px` (pills, circular avatars, toggle buttons)

---

## Elevation / Shadows

- **shadow-sm:** `0px 0px 8px 0px rgb(160, 42, 34)`
- **shadow-md:** `0px 0px 25px 0px rgba(160, 42, 34, 0.4)`
- **shadow-lg:** `0px 0px 10px 0px rgb(160, 42, 34)`
- **shadow-xl:** `0px 8px 32px 0px rgba(0, 0, 0, 0.4)`
- **shadow-5:** `0px 25px 60px -15px rgba(0, 0, 0, 0.9), 0px 0px 40px 0px rgba(160, 42, 34, 0.15)`
- **shadow-6:** `30px 0px 90px 0px rgba(0, 0, 0, 0.95)`

---

## Motion Tokens

- **duration-fast:** `0.15s ease`
- **duration-base:** `0.3s cubic-bezier(0.16, 1, 0.3, 1)`
- **duration-slow:** `0.5s cubic-bezier(0.4, 0, 0.2, 1)`
- **pulse:** `2s cubic-bezier(0.4, 0, 0.6, 1) infinite`
- **float durations:** `5.2s ... 8.5s` for organic cosmic particle motion
