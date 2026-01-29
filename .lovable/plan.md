
# Lumière Premium Redesign — Bold Dark-Mode Editorial Luxury

## Overview
Transform the current light, minimal design into a bold, dark-mode editorial experience inspired by high-end jewelry brands. The redesign focuses on dramatic visual contrast, refined typography, and an immersive product-first experience — without artificial urgency tactics or "AI slop."

---

## Design Philosophy

**What we're keeping:**
- Existing Shopify integration and cart functionality
- Core component structure (Header, Hero, Product, Story, FAQ, Footer)
- Framer Motion animations
- Product selection logic (Metal, Carat, Size)

**What's changing:**
- Color scheme: Light backgrounds → Deep charcoal/black with cream text
- Typography: Larger, more dramatic serif headlines (up to 72px)
- Layout: More asymmetric, editorial compositions
- Contrast: Jewelry on dark backgrounds for visual "pop"
- Text visibility: Higher contrast ratios throughout

---

## Color Palette Update

| Element | Current | New |
|---------|---------|-----|
| Background | Off-white #FEFEFE | Deep black #0D0D0D |
| Foreground | Charcoal #1A1A1A | Cream #F5F0E8 |
| Muted text | Gray 40% | Warm gray #9A9A9A |
| Primary accent | Gold #C9A77D | Refined gold #C9A962 |
| Cards | Light gray | Glass-morphism on dark |

---

## Section-by-Section Changes

### 1. Header — Transparent to Solid Transition
- Transparent on page load, transitions to solid black on scroll
- Logo in refined serif with increased letter-spacing
- Navigation links: "The Ring" | "Our Story" | "FAQ"
- Subtle 1px gold bottom border that fades in on scroll
- Cart icon with gold dot indicator (replacing current badge)

### 2. Hero Section — Full Viewport Drama
**Layout:** Asymmetric split (45% text / 55% image bleeding off edge)

**Content:**
- Eyebrow: "THE ETERNAL BRILLIANCE" in gold, uppercase, tracked
- Headline: Large serif (64-72px mobile-responsive)
  - "Diamond Fire."
  - *"Without the Diamond Price."* (italic second line)
- Subheadline: Warm gray, 18px
- CTA: Gold button with black text, inverts on hover
- Trust strip: Simple text with em-dashes, no emojis

**Animation:**
- Staggered fade-in on load
- Subtle ring image float animation (6s cycle, 10px movement)

### 3. Trust Bar — Refined Dark Strip
- Full-width charcoal background
- Centered statement: "Trusted by women who chose brilliance over tradition"
- Trust icons in muted gold, clean iconography (no emojis)
- Subtle horizontal line separators

### 4. "Why Moissanite" Section — Editorial Feature Cards
**Three glass-morphism cards on dark background:**
1. "More Fire" — 2.4x more brilliance than diamonds
2. "Ethically Perfect" — 100% lab-created, zero mining
3. "Diamond Test Certified" — Passes thermal testers

**Card styling:**
- Semi-transparent white border
- Subtle backdrop blur
- Gold accent icon at top
- Lift + gold glow on hover

### 5. Product Showcase — Complete Overhaul
**Layout:** Dark background with product card floating over lifestyle image

**Left side:** Large lifestyle image with dark gradient overlay
**Right side:** Floating product configuration panel

**Product panel includes:**
- Product name in serif
- Price display (30% discount, compare-at ~1.4x)
- Metal selection (visual buttons, not dropdown)
- Carat selection (buttons with live price updates based on metal)
- Size selector (styled dropdown with size guide link)
- Add to Bag button (full-width gold)
- Payment icons strip below button

**Image gallery:**
- Main image with dark velvet treatment
- Thumbnail strip with gold border on active

### 6. Specifications — Clean Accordion
- Dark background section
- Expandable sections:
  - "Stone Details" (Cut, Clarity, Color)
  - "Metal & Setting" (925 Sterling, 4-prong cathedral)
  - "What's Included" (Ring, velvet box, certificate, cloth)
- Gold "+" icons that rotate to "×" on expand
- Smooth height transitions

### 7. Brand Story — Alternating Parallax Blocks
**Block 1 (cream background):**
- Large serif quote: "We believe brilliance shouldn't cost the earth — or your savings."
- Artisan/crafting imagery

**Block 2 (charcoal background):**
- Story about direct-to-consumer model
- Packaging/unboxing imagery

**Effect:** Subtle parallax scroll (10-15% movement)

### 8. FAQ Section — Dark & Refined
- Dark charcoal background
- Clean accordion with gold accents
- Questions remain product-focused
- "Still have questions?" CTA with gold underline

### 9. Final CTA Section
- Full-width lifestyle image background (ring on hands)
- Dark overlay
- Headline: "Ready for Your Forever Sparkle?"
- Large gold CTA button
- Guarantee badges row

### 10. Footer — Premium Dark
- Deep charcoal background
- Logo + tagline: "Brilliance, redefined."
- Newsletter signup with gold submit button
- Social icons (Instagram, TikTok, Pinterest style)
- Payment method icons

---

## Typography Scale

| Element | Font | Size (Desktop) | Size (Mobile) |
|---------|------|----------------|---------------|
| Hero headline | Playfair Display | 72px | 40px |
| Section headline | Playfair Display | 48px | 32px |
| Subheadline | Inter | 18px | 16px |
| Body text | Inter | 16px, 1.7 line-height | 16px |
| Eyebrow text | Inter | 12px, tracked | 11px |
| Button text | Inter | 16px | 14px |

---

## Animation Specifications

| Element | Animation | Duration |
|---------|-----------|----------|
| Page load | Staggered fade-in | 0.3s delays |
| Scroll reveal | Fade-in-up on viewport entry | 0.6s |
| Button hover | Background invert | 0.2s |
| Card hover | Lift + glow | 0.2s |
| Product image | Slow zoom | 0.4s (1.0 → 1.05) |
| Ring float | Vertical oscillation | 6s cycle |

---

## Technical Implementation

### Files to Modify

**Styling:**
- `src/index.css` — New dark color scheme, updated typography scale
- `tailwind.config.ts` — Additional animations, glass-morphism utilities

**Components (complete rewrite):**
- `src/components/Header.tsx` — Scroll-based transparency, gold border
- `src/components/HeroSection.tsx` — Asymmetric layout, new headline structure
- `src/components/TrustBar.tsx` — Dark styling, no emoji icons
- `src/components/ProductShowcase.tsx` — Dark card overlay, updated image treatment
- `src/components/BrandStory.tsx` — Alternating blocks with parallax
- `src/components/FAQSection.tsx` — Dark theme, refined accordion
- `src/components/Footer.tsx` — Newsletter signup, updated layout

**New Components:**
- `src/components/WhyMoissanite.tsx` — Feature cards section
- `src/components/FinalCTA.tsx` — Conversion section before footer
- `src/components/SpecsAccordion.tsx` — Product specifications

**Page Update:**
- `src/pages/Index.tsx` — Add new sections in order

---

## What We're NOT Including

Per brand guidelines:
- No emojis anywhere
- No pulsing urgency indicators
- No fake review content or counts
- No "X people viewing" counters
- No artificial scarcity messaging
- No generic Shopify theme patterns

---

## Mobile Considerations

- All sections stack vertically
- Hero text scales down gracefully (40px headline)
- Product configuration becomes full-width
- Sticky add-to-cart bar remains at bottom
- Touch-friendly button sizing (min 44px tap targets)
- Parallax effects disabled on mobile for performance
