

# Lumière Theme Replacement - Implementation Plan

## Overview

Replacing the current multi-component architecture with the uploaded single-file React theme, integrating all uploaded assets (including the video), and connecting it to the existing Shopify cart functionality.

---

## Assets to Copy

| Uploaded File | Destination | Purpose |
|---------------|-------------|---------|
| `cad.jpg` | `src/assets/cad.jpg` | CAD/design image for intro section |
| `main-image-3-2.jpeg` | `src/assets/main-image-3.jpeg` | Gallery image 1 |
| `main-image-4-2.jpeg` | `src/assets/main-image-4.jpeg` | Gallery image 2 |
| `main-image-5-2.jpeg` | `src/assets/main-image-5.jpeg` | Gallery image 3 |
| `main-image-6-2.jpeg` | `src/assets/main-image-6.jpeg` | Gallery image 4 |
| `ring-carat-1ct.jpg` | `src/assets/variant-1ct.jpg` | 1CT carat comparison |
| `ring-carat-2ct.jpg` | `src/assets/variant-2ct.jpg` | 2CT carat comparison |
| `ring-carat-3ct.jpg` | `src/assets/variant-3ct.jpg` | 3CT carat comparison |
| `ffuxnpjphare5u3okdfc.mp4` | `public/ring-video.mp4` | Hero video (in public for direct video src) |

---

## Implementation Steps

### Step 1: Copy All Assets

Copy the 9 uploaded files to the project:
- Images go to `src/assets/` for ES6 imports
- Video goes to `public/` for direct video src reference

### Step 2: Create `src/components/LumiereTheme.tsx`

Convert the uploaded JSX to TypeScript with these integrations:

- **Import all assets** from `src/assets/` using ES6 imports
- **Add Shopify cart integration**:
  - Import `useCartStore` and `fetchProducts` from existing modules
  - Import `CartDrawer` component for the header cart icon
  - Replace static "Add to Bag" with real `addItem` function
  - Find matching variant by carat + size selection
- **Import `useCartSync`** hook for cart synchronization
- **Use video from public folder**: `/ring-video.mp4`
- **Add responsive adjustments** for mobile with media query considerations

### Step 3: Update `src/pages/Index.tsx`

Replace the multi-component structure with single `LumiereTheme` import:
- Remove all old component imports (HeroSection, TrustBar, etc.)
- Keep `useCartSync` hook call
- Render just `<LumiereTheme />`

---

## Key Shopify Integration Code

```typescript
// Inside LumiereTheme.tsx
import { useCartStore } from "@/stores/cartStore";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { CartDrawer } from "@/components/CartDrawer";
import { useCartSync } from "@/hooks/useCartSync";

// State for product data
const [product, setProduct] = useState<ShopifyProduct | null>(null);

// Fetch product on mount
useEffect(() => {
  fetchProducts(1).then(products => {
    if (products[0]) setProduct(products[0]);
  });
}, []);

// Add to cart handler
const handleAddToCart = async () => {
  if (!product) return;
  
  // Find variant matching selected carat + size
  const variant = product.node.variants.edges.find(v => {
    const opts = v.node.selectedOptions;
    const caratMatch = opts.some(o => o.value === selectedCarat);
    const sizeMatch = opts.some(o => o.value === selectedSize);
    return caratMatch && sizeMatch;
  });
  
  if (variant) {
    await addItem({
      product,
      variantId: variant.node.id,
      variantTitle: variant.node.title,
      price: variant.node.price,
      quantity: 1,
      selectedOptions: variant.node.selectedOptions,
    });
  }
};
```

---

## Files to Create/Modify

| File | Action | Purpose |
|------|--------|---------|
| `src/assets/cad.jpg` | Copy | CAD image |
| `src/assets/main-image-3.jpeg` | Copy | Gallery |
| `src/assets/main-image-4.jpeg` | Copy | Gallery |
| `src/assets/main-image-5.jpeg` | Copy | Gallery |
| `src/assets/main-image-6.jpeg` | Copy | Gallery |
| `src/assets/variant-1ct.jpg` | Copy | Carat comparison |
| `src/assets/variant-2ct.jpg` | Copy | Carat comparison |
| `src/assets/variant-3ct.jpg` | Copy | Carat comparison |
| `public/ring-video.mp4` | Copy | Hero video |
| `src/components/LumiereTheme.tsx` | Create | Main theme component |
| `src/pages/Index.tsx` | Modify | Use new theme |

---

## What Gets Preserved

- Full Shopify cart functionality (add, update, remove items)
- Cart drawer with checkout redirect
- Cart sync on page visibility
- All policy pages (Shipping, Returns, Privacy, Terms)
- Existing router configuration

## What Gets Replaced

- All section components (HeroSection, TrustBar, etc.)
- Current dark/cream color scheme (becomes white + gold)
- Multi-component architecture (becomes single file)

---

## Design Features from Theme

- Animated 2-second loading screen with logo reveal
- Split-layout hero with video on right
- Scroll-responsive header (transparent to white)
- Product gallery with thumbnail selection
- Carat selection with live price update
- Size selector dropdown
- Testimonials section
- Newsletter signup
- Refined footer

