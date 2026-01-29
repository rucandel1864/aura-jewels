import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";

export function StickyAddToCart() {
  const [isVisible, setIsVisible] = useState(false);
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const { addItem, isLoading } = useCartStore();

  useEffect(() => {
    fetchProducts(1).then(data => {
      if (data[0]) setProduct(data[0]);
    });

    const handleScroll = () => {
      const productSection = document.getElementById('product');
      if (productSection) {
        const rect = productSection.getBoundingClientRect();
        // Show sticky bar when product section is scrolled out of view
        setIsVisible(rect.bottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToCart = async () => {
    if (!product) return;
    const variant = product.node.variants.edges[2]; // Size 7 default
    if (!variant) return;

    await addItem({
      product,
      variantId: variant.node.id,
      variantTitle: variant.node.title,
      price: variant.node.price,
      quantity: 1,
      selectedOptions: variant.node.selectedOptions,
    });
  };

  if (!product) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-40 glass-effect border-t p-4 md:hidden"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                <img
                  src={product.node.images.edges[0]?.node.url}
                  alt={product.node.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="font-medium text-sm truncate">{product.node.title}</p>
                <p className="text-sm text-primary font-medium">
                  ${parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(0)}
                </p>
              </div>
            </div>
            <Button
              onClick={handleAddToCart}
              disabled={isLoading}
              className="bg-foreground text-background hover:bg-foreground/90 flex-shrink-0"
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
