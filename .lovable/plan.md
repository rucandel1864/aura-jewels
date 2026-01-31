

# Product Swap: Oval Solitaire to Round Halo Moissanite Ring

## Overview

We're replacing the current oval-cut solitaire ring with a new round-cut halo design from AliExpress. This is a complete product overhaul affecting the Shopify product, pricing, variants, specifications, and UI copy throughout the site.

---

## New Product Details

**Design:** Round-cut moissanite center stone with 5A zircon halo (side stones)

**Specifications (from listing):**
- Material: 925 Sterling Silver with 18K white gold plating + AF protective film
- Main Stone: D Color VVS1 Moissanite, Round cut
- Main Stone Sizes: 6.5mm (1CT), plus 2CT and 3CT equivalents
- Side Stones: 5A Zircon, 1.5mm
- Diamond Tester: Passes

**Variants:**
| Carat | Price |
|-------|-------|
| 1CT   | $100  |
| 2CT   | $150  |
| 3CT   | $200  |

**Ring Sizes:** 5, 6, 7, 8, 9 (no half sizes)

**Metal:** Single option - 18K White Gold plated Sterling Silver (no gold/silver toggle needed)

---

## Changes Required

### 1. Shopify Product Updates

**Delete existing product variants** (all 35 current variants for the old product)

**Update product details:**
- Title: "Brilliance Halo Ring" (or similar - emphasizes the halo design)
- Description: Updated to reflect round-cut with halo setting
- Options: 
  - Remove "Metal" option (only 18K white gold available)
  - Change "Carat" values from [1CT, 2CT, 5CT, 8CT] to [1CT, 2CT, 3CT]
  - Change "Size" values from [5-11] to [5, 6, 7, 8, 9]
- Tags: Update to reflect new style (halo, round cut, etc.)

**Create new variants** (15 total):
- 1CT: Sizes 5, 6, 7, 8, 9 at $100 each
- 2CT: Sizes 5, 6, 7, 8, 9 at $150 each  
- 3CT: Sizes 5, 6, 7, 8, 9 at $200 each

**Upload product images** from AliExpress listing

---

### 2. Frontend Code Updates

**ProductShowcase.tsx:**
- Remove metal selection UI (no longer needed)
- Update `CARAT_PRICES` constant: `{ "1CT": 100, "2CT": 150, "3CT": 200 }`
- Remove `GOLD_PREMIUM` constant
- Update variant matching logic (remove metal check)
- Update product description text
- Update default selections (remove metal, default carat to 1CT)

**HeroSection.tsx:**
- Change "oval-cut" to "round-cut" in copy
- Update starting price from "$49" to "$100"
- Adjust tagline if needed (e.g., mention halo design)

**CaratComparison.tsx:**
- Update from 4 sizes to 3 sizes
- Change data: 
  - 1CT: 6.5mm, $100
  - 2CT: ~8mm, $150
  - 3CT: ~9mm, $200
- May need to remove/replace the comparison image or adjust grid to 3 columns

**SpecsAccordion.tsx:**
- Stone Details:
  - Cut: "Round Brilliant" (was "Oval Brilliant")
  - Add: "Side Stones: 5A Zircon 1.5mm"
- Metal & Setting:
  - Metal: "925 Sterling Silver with 18K White Gold Plating"
  - Setting Style: "Halo with Prong Setting"
  - Add: "Protective Film: AF coating"

**FAQSection.tsx:**
- Update carat size FAQ to reference 1CT, 2CT, 3CT
- Keep other FAQs mostly the same

**FinalCTA.tsx:**
- Update "From $49" to "From $100"

**StickyAddToCart.tsx:**
- Verify pricing display updates correctly

**Size Guide Dialog (in ProductShowcase):**
- Update to only show sizes 5-9 in the chart

---

### 3. Image Assets

The AliExpress listing contains product images that need to be saved and uploaded:
- Will need to download images from the AliExpress listing
- Upload to Shopify product
- Update any local asset references if used

---

## Technical Considerations

1. **Shopify variant limit:** Shopify allows 100 variants per product. With 3 carats x 5 sizes = 15 variants, we're well under the limit.

2. **Cart compatibility:** Existing carts with old variant IDs will fail. Users with items in cart from the old product will see errors (acceptable for product swap).

3. **No compare-at price change needed:** Following the 1.4x rule, compare-at prices will be ~$140, ~$210, ~$280.

---

## Implementation Order

1. Update Shopify product (delete old variants, update product info, create new variants, upload images)
2. Update ProductShowcase.tsx (main product UI)
3. Update HeroSection.tsx (hero copy and pricing)
4. Update CaratComparison.tsx (size grid)
5. Update SpecsAccordion.tsx (specifications)
6. Update FinalCTA.tsx (CTA pricing)
7. Update FAQSection.tsx (carat size FAQ)
8. Test the full purchase flow

