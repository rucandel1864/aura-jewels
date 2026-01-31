import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Check, Ruler, Info } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import lifestyleImage from "@/assets/ring-lifestyle-1.jpg";

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
      <section id="product" className="py-24 sm:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      </section>
    );
  }

  if (!product) {
    return (
      <section id="product" className="py-24 sm:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-muted-foreground">No products found</p>
        </div>
      </section>
    );
  }

  const caratOption = product.node.options.find(o => o.name === "Carat");
  const sizeOption = product.node.options.find(o => o.name === "Size");

  return (
    <section id="product" className="py-24 sm:py-32 bg-card relative overflow-hidden">
      {/* Background lifestyle image with overlay */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={lifestyleImage} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-card via-card/95 to-card/80" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image Gallery */}
          <div className="space-y-4">
            <motion.div
              key={selectedImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-square bg-background rounded-lg overflow-hidden border border-border/50"
            >
              {images[selectedImageIndex] ? (
                <img
                  src={images[selectedImageIndex].node.url}
                  alt={images[selectedImageIndex].node.altText || product.node.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  No image available
                </div>
              )}
            </motion.div>
            
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square rounded-md overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index 
                        ? 'border-primary' 
                        : 'border-border/50 hover:border-primary/50'
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

          {/* Product Configuration Panel */}
          <div className="glass-card rounded-lg p-8 lg:p-10 space-y-8">
            <div>
              <p className="text-sm tracking-eyebrow uppercase text-primary mb-3">
                Lumière Collection
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl mb-4 text-foreground">
                {product.node.title}
              </h2>
              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-serif text-primary">
                  ${displayPrice}
                </span>
                <span className="text-base text-muted-foreground line-through">
                  ${Math.round(displayPrice * 1.4)}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="section-divider" />

            {/* Carat Selection */}
            {caratOption && (
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">Carat Size</label>
                <div className="grid grid-cols-3 gap-2">
                  {caratOption.values.map((carat) => {
                    const caratPrice = CARAT_PRICES[carat] || 100;
                    return (
                      <button
                        key={carat}
                        onClick={() => setSelectedCarat(carat)}
                        className={`py-4 rounded-none border transition-all text-center ${
                          selectedCarat === carat 
                            ? 'border-primary bg-primary/10 text-foreground' 
                            : 'border-border bg-transparent text-muted-foreground hover:border-primary/50'
                        }`}
                      >
                        <span className="font-medium block">{carat}</span>
                        <span className="text-xs text-muted-foreground">${caratPrice}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Size Selection */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-foreground">Ring Size</label>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-xs text-primary hover:underline flex items-center gap-1">
                      <Ruler className="h-3 w-3" />
                      Size Guide
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md bg-card border-border">
                    <DialogHeader>
                      <DialogTitle className="font-serif text-xl text-foreground">Ring Size Guide</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 pt-4">
                      <p className="text-sm text-muted-foreground">
                        Not sure of your ring size? Here are some easy ways to find out:
                      </p>
                      <div className="space-y-3">
                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-foreground">1</div>
                          <div>
                            <p className="font-medium text-sm text-foreground">Use an existing ring</p>
                            <p className="text-xs text-muted-foreground">Measure the inside diameter in mm</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-foreground">2</div>
                          <div>
                            <p className="font-medium text-sm text-foreground">Wrap string around finger</p>
                            <p className="text-xs text-muted-foreground">Measure the length in mm, then divide by 3.14</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-muted rounded-lg p-4 mt-4">
                        <p className="text-xs font-medium mb-2 text-foreground">Size Chart (US)</p>
                        <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                          <div>Size 5 = 15.7mm</div>
                          <div>Size 6 = 16.5mm</div>
                          <div>Size 7 = 17.3mm</div>
                          <div>Size 8 = 18.1mm</div>
                          <div>Size 9 = 18.9mm</div>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground flex items-start gap-2">
                        <Info className="h-3 w-3 mt-0.5 flex-shrink-0" />
                        Most popular size is 7. When in doubt, size up for a comfortable fit.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              
              {sizeOption && (
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger className="w-full h-14 rounded-none border-border bg-transparent text-foreground">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {sizeOption.values.map((size) => (
                      <SelectItem key={size} value={size} className="text-foreground">
                        Size {size} {size === "7" && "(Most Popular)"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>

            {/* Add to Cart */}
            <Button
              size="lg"
              className="w-full h-14 text-base btn-gold rounded-none"
              onClick={handleAddToCart}
              disabled={cartLoading || !selectedVariant}
            >
              <AnimatePresence mode="wait">
                {cartLoading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Loader2 className="h-5 w-5 animate-spin" />
                  </motion.div>
                ) : justAdded ? (
                  <motion.div
                    key="added"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Check className="h-5 w-5" />
                    Added to Bag
                  </motion.div>
                ) : (
                  <motion.span
                    key="default"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {selectedVariant ? `Add to Bag — $${displayPrice}` : "Select options"}
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>

          </div>
        </div>

        {/* Product Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-2xl"
        >
          <p className="text-muted-foreground leading-relaxed">
            A stunning round-cut moissanite center stone surrounded by a sparkling 5A zircon halo, the Brilliance 
            Halo Ring embodies timeless elegance. Passes diamond tester with exceptional fire and brilliance — 
            perfect for engagements, promises, or everyday luxury.
          </p>
          <ul className="space-y-3 mt-6">
            <li className="flex items-start gap-3 text-muted-foreground">
              <span className="text-primary">—</span>
              Available in 1CT, 2CT, and 3CT sizes
            </li>
            <li className="flex items-start gap-3 text-muted-foreground">
              <span className="text-primary">—</span>
              925 Sterling Silver with 18K white gold plating
            </li>
            <li className="flex items-start gap-3 text-muted-foreground">
              <span className="text-primary">—</span>
              Halo setting with 5A zircon side stones
            </li>
            <li className="flex items-start gap-3 text-muted-foreground">
              <span className="text-primary">—</span>
              100% passes diamond tester
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
