---
name: NUBI
description: Pedidos por WhatsApp con IA. The landing is the conversation, on daylight paper with night-blue bands.
colors:
  night: "#0A1330"
  night-2: "#121E47"
  night-3: "#1C2B57"
  ink: "#0A1330"
  ink-2: "#44527A"
  paper: "#F4F7FA"
  surface: "#FFFFFF"
  line: "#D8E0EB"
  line-strong: "#B4C2D6"
  on-night: "#FFFFFF"
  on-night-2: "#B9C7E3"
  line-night: "rgba(185, 199, 227, 0.18)"
  cyan: "#4FE3D6"
  cyan-soft: "#9BF6EC"
  teal: "#0A6B65"
  teal-strong: "#064F4A"
  bubble-in: "#1C2B57"
  bubble-out: "#154452"
typography:
  display:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.5rem + 3.6vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 1.35rem + 2.2vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1.15rem + 0.9vw, 1.75rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  body-lg:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 650
    lineHeight: 1.3
  caption:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.45
  code:
    fontFamily: "'Bricolage Grotesque', system-ui, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "0.18em"
    fontFeature: "tnum"
rounded:
  sm: "8px"
  md: "14px"
  lg: "22px"
  pill: "999px"
spacing:
  s-1: "4px"
  s-2: "8px"
  s-3: "12px"
  s-4: "16px"
  s-5: "24px"
  s-6: "32px"
  s-7: "48px"
  s-8: "64px"
  s-9: "96px"
  gutter: "clamp(16px, 4vw, 32px)"
  max: "1160px"
components:
  button-primary:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.night}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.cyan-soft}"
    textColor: "{colors.night}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.on-night}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "52px"
  button-dark:
    backgroundColor: "{colors.night}"
    textColor: "{colors.on-night}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "52px"
  button-dark-hover:
    backgroundColor: "{colors.night-3}"
  button-small:
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "44px"
  bubble-in:
    backgroundColor: "{colors.bubble-in}"
    textColor: "{colors.on-night}"
    rounded: "{rounded.md}"
    padding: "10px 14px"
  bubble-out:
    backgroundColor: "{colors.bubble-out}"
    textColor: "{colors.on-night}"
    rounded: "{rounded.md}"
    padding: "10px 14px"
  option-chip:
    backgroundColor: "transparent"
    textColor: "{colors.cyan}"
    rounded: "{rounded.pill}"
    padding: "0 12px"
    height: "32px"
  chat-input:
    backgroundColor: "{colors.night}"
    textColor: "{colors.on-night}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "48px"
  chat-send:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.night}"
    rounded: "50%"
    size: "48px"
  chat-window:
    backgroundColor: "{colors.night-2}"
    textColor: "{colors.on-night}"
    rounded: "{rounded.lg}"
    width: "420px"
  ticket:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.code}"
    rounded: "{rounded.md}"
    padding: "16px 32px"
  nav:
    backgroundColor: "{colors.night}"
    textColor: "{colors.on-night-2}"
    height: "64px"
---

# Design System: NUBI

## Overview

**Creative North Star: "The Conversation in Daylight"**

The page is the conversation. Everything NUBI shows is told through the material of a WhatsApp chat: bubbles, option chips, delivery ticks, and a ticket-stub delivery code. That chat language sits on cool daylight paper, built to read in sunlight on a phone, and is framed by full-bleed night-blue bands (the logo's colour) at the opening and the close. Cyan is a signal, not a decoration: it marks what you can press and what state a message is in.

Density is calm and mobile-first. Sections breathe on a 96px rhythm, copy runs in short measures, and every interactive target is at least 44px tall. The system deliberately refuses the dark AI-SaaS idiom: no gradient headlines, starfields, glass cards, glows or metric rows. Depth comes from the night/paper contrast and from two restrained shadows, not from effects.

The landing (`index.html`, `styles.css`) is the canonical implementation. The legal pages (`privacidad.html`, `terminos-domiciliarios.html`) still use the previous dark look in `legal.css` and are pending migration to this system; `legal.css` is not part of it.

**Key Characteristics:**
- Cool daylight paper (#F4F7FA family, never cream) with night-blue ink.
- Full-bleed night bands for the hero, the closing call to action and the sticky nav.
- Chat bubbles, option chips, ticks and the ticket stub are the component language.
- Cyan only for action and state on night; deep teal for action on light.
- Bricolage Grotesque for display, the phone's own system UI face for everything you read.
- Pill buttons, softly rounded containers, no gradients, glass or glows.

## Colors

A two-ground palette: daylight paper and night-blue bands, with one cyan/teal signal pair that switches by ground.

### Primary
- **Signal Cyan** (`cyan`): primary buttons on night, the chat send button, option chips, the "en línea" status, read ticks, focus rings on night, text selection. The one non-action use is the emphasised middle line of the hero headline; keep it to that line. It sits only on night grounds; never cyan text on paper.
- **Pale Signal Cyan** (`cyan-soft`): hover state of cyan surfaces, read-state ticks, inline delivery codes inside bubbles.
- **Harbour Teal** (`teal`): the cyan's counterpart on light grounds. Links, step numerals, list dashes, service separators and focus rings on paper. Its deep sibling **Deep Harbour** (`teal-strong`) is the hover for teal links.

### Neutral
- **Night Ink** (`night`, same value as `ink`): the band ground, the nav, the dark button, and all headline/body ink on paper.
- **Night Raised** (`night-2`): chat windows, phone "screens" and the moment cards that sit on paper; one step up from the band.
- **Night Lifted** (`night-3`): inbound bubbles (`bubble-in`), dark-button hover, the CMS announcement bar.
- **Harbour Bubble** (`bubble-out`): NUBI's outbound bubbles, a blue-teal that reads as "the bot".
- **Daylight Paper** (`paper`): page ground and footer. **Plain White** (`surface`): the services strip, the roles section and the ticket stub.
- **Slate Ink** (`ink-2`): secondary copy on paper. **Mist** (`on-night-2`): secondary copy, nav links and placeholders on night.
- **Hairlines**: `line` and `line-strong` on paper (section borders, ticket perforation), `line-night` on night (chat dividers, ghost-button border).

### Named Rules
**The Signal Switch Rule.** The action colour depends on the ground: cyan on night, teal (or the night button) on paper. Cyan text or cyan fills never appear on paper.

**The Two Grounds Rule.** Every surface is either paper or night. Night arrives as full-bleed bands or as raised night objects (chat, screen, moment cards); there is no third mid-tone ground.

## Typography

**Display Font:** Bricolage Grotesque, self-hosted variable woff2 (`bricolage-grotesque-latin-v2.woff2`: Spanish Latin subset, wght 600–800, opsz 14–96, 62 kB), with system-ui fallback
**Body Font:** system-ui stack (-apple-system, Segoe UI, Roboto, Helvetica Neue, Arial)

**Character:** A chunky, slightly quirky grotesque that sets confident, tightly tracked headlines, against the phone's native UI face for body copy so reading feels like using the phone itself, and nothing extra downloads for text.

### Hierarchy
- **Display** (800, `clamp(2.5rem…4.5rem)`, 0.98, -0.035em): the hero h1 only. On ≤600px it becomes `clamp(2.25rem, 10.5vw, 3rem)`.
- **Headline** (700, `clamp(1.875rem…3rem)`, 1.08, -0.02em): section h2s and the closing h2.
- **Title** (700, `clamp(1.375rem…1.75rem)`): step h3s, the services strip, the courier fact line. Role h3s sit slightly larger at `clamp(1.5rem…2.125rem)`.
- **Body large** (400, 1.1875rem, 1.55): hero subtitle and section intros, held to 40–44ch.
- **Body** (400, 1.0625rem, 1.6): running copy, measures of 34–46ch.
- **Label** (650, 0.9375rem): buttons, chat names, screen heads, footer titles.
- **Caption** (400, 0.8125rem): hints, notes, ticket label, footer base.
- **Code** (Bricolage 800, 2.5rem, +0.18em, tabular figures): the four-digit delivery code on the ticket stub.

### Named Rules
**The Native Reader Rule.** Bricolage is for headings, the wordmark, the services strip and the delivery code. Anything a person reads as a sentence uses the system face.

**The Tabular Code Rule.** Delivery codes and phone numbers always use tabular figures; codes are tracked wide (0.08em inline, 0.18em on the ticket).

## Layout

A single centred column, max 1160px, with fluid gutters (`clamp(16px, 4vw, 32px)`), on a 4px spacing scale (4, 8, 12, 16, 24, 32, 48, 64, 96). Sections use 96px vertical padding (64px on ≤600px); section heads are capped at 40rem with 48px below.

The hero is a two-column grid (1.08fr / 0.92fr, 64px gap): headline and copy on the left, the live chat on the right. At ≤900px it stacks headline → chat → copy, so on a 390px phone the chat's first bubbles and its input sit inside the first viewport. Other grids: three steps (stack at ≤900px into image/text pairs, then single column at ≤600px), role rows that alternate copy and phone screen, a four-up "why" list (2-up ≤1020px, 1-up ≤600px), and a 4-column footer.

Breakpoints: 1020px, 900px, 760px (nav links hide), 600px. On ≤600px, primary CTAs go full width.

## Elevation & Depth

Depth is mostly tonal: night objects sit on paper, raised night sits on the band, hairlines separate everything else. Two shadows exist, both soft and night-tinted, both for "a phone in the hand".

### Shadow Vocabulary
- **Resting card** (`0 1px 2px rgba(10,19,48,.06), 0 4px 14px rgba(10,19,48,.06)`): the role phone screens on white, and the CMS preview badge.
- **Held phone** (`0 2px 6px rgba(5,9,20,.18), 0 28px 56px -16px rgba(5,9,20,.55)`): the hero chat only, lifting it off the night band.

### Named Rules
**The No-Glow Rule.** Shadows are dark and diffuse, never coloured. No glows, no glass, no backdrop blur, no gradient fills.

## Shapes

Soft but not bubbly. Pill (999px) for every button, nav link, option chip, tag and the chat input; 22px for chat windows, phone screens and moment cards; 14px for bubbles, the ticket and the QR plate; 8px for focus rings and the skip link. Bubbles cut one corner to 4px on the tail side (bottom-right for the customer, bottom-left for NUBI). The ticket stub is the signature silhouette: semicircular 9px notches masked out of both sides and a dashed tear line under its label. Small 14×10 check marks, 8×2 dashes and 6px dots are the only list markers.

## Components

### Buttons
Chunky, rounded, thumb-sized.
- **Shape:** full pill (999px), 52px tall, 24px side padding, 650 weight.
- **Primary (on night):** cyan fill, night text; hover goes to pale cyan.
- **Dark (on paper):** night fill, white text; hover to Night Lifted.
- **Ghost (on night):** transparent, white text, `line-night` border; hover brightens the border to Mist and adds a 6% white wash.
- **Small:** 44px tall, 16px padding, 0.9375rem; used in the nav.
- **States:** 160ms colour transitions on `cubic-bezier(0.16, 1, 0.3, 1)`; press scales to 0.97. Focus is a 2px ring offset 3px (teal on paper, cyan on night).

### Chips (options)
- **Style:** outline pill, 32px tall, cyan text and 70% cyan border, 0.8125rem semibold. They show what NUBI offers to tap inside a chat; they are illustrations, not interactive.

### Chat window (signature)
- Night Raised panel, 22px radius, hairline border, the held-phone shadow, max 420px. Header with avatar, name, "en línea" status in cyan and an outline "Ejemplo" tag. The body (400px, 300px on phones) stacks messages from the bottom like a real chat. Messages enter one by one (fade and rise 8px, 280–420ms), with a three-dot typing bubble and ticks that go sent → delivered → read (Mist → Pale Cyan). This entrance is the page's only animation.
- **Input:** night pill field, 48px, Mist placeholder, cyan caret; focus is a 2px cyan ring. A 48px round cyan send button with an arrow icon. Submitting opens WhatsApp with the text prefilled.

### Phone screens and moment cards
- Same night-raised material at smaller scale: role "screens" (max 400px, resting shadow, head line "NUBI · Negocio") and the step "moments" (min 168px tall, no shadow) each hold two to four bubbles and chips.

### Ticket stub (signature)
- White stub on night, 14px radius with side notches, label above a dashed tear line, then the four-digit code in Bricolage 800 with tabular, widely tracked figures. It is the visual proof of a verified delivery.

### Navigation
- Sticky night bar, 64px, hairline bottom border. Wordmark "nubi" in Bricolage 800 beside the logo; text links in Mist as 44px pills that go white with a 6% wash on hover or when current; one small cyan button. At ≤760px the links hide and only the wordmark and button remain.

### Audience pages and new pieces (2026-10-27)
- **Page hero** (`.page-hero`): night band, copy left and a chat/screen example right; used by `negocios.html` and `domiciliarios.html`.
- **Feature rows** (`.feature`, `.feature-flip`): copy with a teal check list beside a night-raised example (screen, POS mock); alternate sides, hairline between rows.
- **Voice note bubble** (`.bubble.voice`): play glyph, drawn waveform, tabular duration.
- **Pick list** (`.pick`): "Arma tu pedido" rows with price and a cyan quantity dot.
- **POS mock** (`.pos-mock`): table grid (free = dashed, busy = cyan, paying = pale cyan) and a white bill stub with tabular amounts.
- **Mini chart** (`.mini-chart`): hand-drawn SVG bars (cyan today, Harbour Bubble earlier); no chart library on the site.
- **Plans** (`.plans`): five white columns on the roles ground; Crece marked by a 2px night border, no badge; columns scroll-snap under 1020px.
- **Journey** (`.journey`): numbered steps topped by a 2px ink rule, like the why list.
- **FAQ** (`.faq`): native `<details>` with a teal plus that turns into an x; heading column sticky on desktop. Every FAQ is mirrored in FAQPage JSON-LD with the same text.
- **Big fact** (`.big-fact`): one oversized cyan number on night ("100%") for the courier page only.

### Lists and "why" items
- Role lists use an 8×2 teal dash; hero proof uses cyan check marks. "Why" items are topped by a 2px ink rule, no card.

## Do's and Don'ts

### Do:
- **Do** put night content in full-bleed bands or raised night objects; keep everything else on Daylight Paper (#F4F7FA) or white.
- **Do** use cyan for action and state on night and teal for links and markers on paper.
- **Do** tell product behaviour through bubbles, chips, ticks and the ticket stub rather than icons or illustrations.
- **Do** keep every tap target at least 44px, primary buttons 52px, and make CTAs full-width on ≤600px.
- **Do** use tabular figures for codes and phone numbers.
- **Do** honour `prefers-reduced-motion`: transitions collapse to 1ms and the typing dots stop.

### Don't:
- **Don't** use gradient fills, glass, glows or backdrop blur. (Gradients used only as a mask, as in the ticket's notches, are fine.)
- **Don't** use cream or warm off-white grounds; the paper stays cool.
- **Don't** put cyan text or cyan fills on paper.
- **Don't** set body copy in Bricolage Grotesque or load another text face.
- **Don't** add a metric row or stat band; proof is shown as mechanisms (codes, checks, review), not numbers.
- **Don't** treat `legal.css` as part of this system; migrate the legal pages to these tokens when they are redesigned.
