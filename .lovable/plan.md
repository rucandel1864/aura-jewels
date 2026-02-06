
# Valentine's Sale Update

## Overview
Update all pricing across the site to Valentine's sale prices with crossed-out "Was" prices, and add prominent "Certified Moissanite" and "925 Sterling Silver" badges to the product page.

## Price Changes (everywhere)

| Size | Sale Price | Was Price |
|------|-----------|-----------|
| 1CT  | $69.99    | $129.99   |
| 2CT  | $99.99    | $179.99   |
| 3CT  | $129.99   | $249.99   |

## Files to Update

### 1. ProductShowcase.tsx (main product page)
- Update `CARAT_PRICES` to new sale prices and add `CARAT_COMPARE_PRICES` for "Was" prices
- Show strikethrough "Was" price next to sale price in the header area (e.g., ~~$129.99~~ **$69.99**)
- Show strikethrough prices in the carat selector buttons
- Add a "Valentine's Sale" badge or label near the price
- Add two prominent badges below the title: **"Certified Moissanite"** and **"925 Sterling Silver"** -- styled as elegant pill/tag elements with the gold accent color
- Update the product description bullets to lead with certification language

### 2. CaratComparison.tsx
- Update prices to $69.99 / $99.99 / $129.99
- Add compare-at prices with strikethrough display

### 3. StickyAddToCart.tsx
- Change "From $79.99" to "From $69.99" with a strikethrough on "~~$129.99~~"

### 4. FinalCTA.tsx
- Change "From $79.99" to "From $69.99"

### 5. LumiereTheme.tsx
- Update `caratOptions` prices to 69.99 / 99.99 / 129.99
- Add compare-at prices with strikethrough in product section and carat comparison section
- Update the "Starting from" bar under the hero video

### 6. HeroSection.tsx
- No price references here, no changes needed

### 7. SpecsAccordion.tsx
- Add a "Certification" accordion section with entries like "Moissanite Certification: Verified Authentic" and "Metal Purity: 925 Sterling Silver (Stamped)"

## Certification Badges (ProductShowcase.tsx)
Below the product title, add two inline badges styled with a subtle border and gold accent:
- A shield/gem icon + "Certified Moissanite"
- A stamp icon + "925 Sterling Silver"

These will use small pill-shaped elements with `border-primary/30` styling to feel premium and trustworthy.

## Technical Details

- Sale prices stored as constants alongside compare-at prices in each file
- Strikethrough prices use `line-through` CSS with `text-muted-foreground` coloring
- Sale price displayed in the primary/foreground color for emphasis
- Badge elements use flexbox with Lucide icons (Shield, Award, or similar)
- All changes are purely frontend display -- Shopify variant prices should also be updated in Shopify Admin to match
