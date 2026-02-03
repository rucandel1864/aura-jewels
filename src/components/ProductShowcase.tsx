import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Check } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { toast } from "sonner";

const CARAT_PRICES: Record<string, number> = {
  "1CT": 100,
  "2CT": 150,
  "3CT": 200,
};

export function ProductShowcase() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCarat, setSelectedCarat] = useState<string>("1CT");
  const [selectedSize, setSelectedSize] = useState<string>("7");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [justAdded, setJustAdded] = useState(false);
  const { addItem, isLoading: cartLoading } = useCartStore();

  useEffect(() => {
    fetchProducts(1).then(data => {
      setProducts(data);
      setLoading(false);
    }).catch(err => {
      console.error(err);
      setLoading(false);
    });
  }, []);

  const product = products[0];
  const images = product?.node.images.edges || [];
  const variants = product?.node.variants.edges || [];
  
  const selectedVariant = variants.find(v => {
    const opts = v.node.selectedOptions;
    return opts.some(o => o.name === "Carat" && o.value === selectedCarat) &&
           opts.some(o => o.name === "Size" && o.value === selectedSize);
  });

  const displayPrice = CARAT_PRICES[selectedCarat] || 100;

  const handleAddToCart = async () => {
    if (!product || !selectedVariant) {
      toast.error("Please select all options");
      return;
    }
    
    await addItem({
      product,
      variantId: selectedVariant.node.id,
      variantTitle: selectedVariant.node.title,
      price: selectedVariant.node.price,
      quantity: 1,
      selectedOptions: selectedVariant.node.selectedOptions,
    });
    
    setJustAdded(true);
    toast.success("Added to bag", {
      description: `${product.node.title} — ${selectedCarat} Size ${selectedSize}`,
      position: "top-center",
    });
    setTimeout(() => setJustAdded(false), 2000);
  };

  if (loading) {
    return (
      <section id="product" className="py-40 bg-background">
        <div className="flex justify-center">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" strokeWidth={1} />
        </div>
      </section>
    );
  }

  if (!product) {
    return (
      <section id="product" className="py-40 bg-background">
        <div className="text-center">
          <p className="text-muted-foreground text-sm">No products found</p>
        </div>
      </section>
    );
  }

  const caratOption = product.node.options.find(o => o.name === "Carat");
  const sizeOption = product.node.options.find(o => o.name === "Size");

  return (
    <section id="product" className="py-32 sm:py-40 bg-background">
      <div className="px-10 sm:px-16 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start max-w-6xl mx-auto">
          {/* Image Gallery */}
          <div className="space-y-6">
            <motion.div
              key={selectedImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="aspect-square bg-foreground/5"
            >
              {images[selectedImageIndex] ? (
                <img
                  src={images[selectedImageIndex].node.url}
                  alt={images[selectedImageIndex].node.altText || product.node.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                  No image available
                </div>
              )}
            </motion.div>
            
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square overflow-hidden transition-opacity duration-500 ${
                      selectedImageIndex === index 
                        ? 'opacity-100' 
                        : 'opacity-40 hover:opacity-70'
                    }`}
                  >
                    <img
                      src={img.node.url}
                      alt={img.node.altText || `View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-32 space-y-8">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-4">
                {product.node.title}
              </h2>
              <p className="text-sm text-muted-foreground mb-2">
                Moissanite, Sterling Silver
              </p>
              <p className="text-sm text-muted-foreground">
                AU$ {displayPrice}
              </p>
            </div>

            <div className="section-divider" />

            {/* Carat Selection */}
            {caratOption && (
              <div className="space-y-4">
                <label className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                  Carat Size
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {caratOption.values.map((carat) => (
                    <button
                      key={carat}
                      onClick={() => setSelectedCarat(carat)}
                      className={`py-4 border transition-all duration-500 text-center ${
                        selectedCarat === carat 
                          ? 'border-foreground text-foreground' 
                          : 'border-border text-muted-foreground hover:border-foreground/30'
                      }`}
                    >
                      <span className="text-xs">{carat}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            <div className="space-y-4">
              <label className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
                Ring Size
              </label>
              {sizeOption && (
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger className="w-full h-12 border-border bg-transparent text-foreground text-sm">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {sizeOption.values.map((size) => (
                      <SelectItem key={size} value={size} className="text-foreground text-sm">
                        Size {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>

            {/* Add to Cart */}
            <Button
              size="lg"
              className="w-full h-14 btn-gold-outline"
              onClick={handleAddToCart}
              disabled={cartLoading || !selectedVariant}
            >
              <AnimatePresence mode="wait">
                {cartLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" strokeWidth={1} />
                ) : justAdded ? (
                  <motion.div
                    key="added"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Check className="h-4 w-4" strokeWidth={1} />
                    Added
                  </motion.div>
                ) : (
                  <motion.span
                    key="default"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Add to Bag
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>

            {/* Product details */}
            <div className="pt-8 space-y-4 text-sm text-muted-foreground">
              <p>Free express shipping worldwide</p>
              <p>60-day returns</p>
              <p>Complimentary gift packaging</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
