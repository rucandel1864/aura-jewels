import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Check, Sparkles, Ruler, Info } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function ProductShowcase() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [justAdded, setJustAdded] = useState(false);
  const { addItem, isLoading: cartLoading } = useCartStore();

  useEffect(() => {
    fetchProducts(1).then(data => {
      setProducts(data);
      if (data[0]?.node.options[0]?.values[0]) {
        setSelectedSize(data[0].node.options[0].values[2] || data[0].node.options[0].values[0]); // Default to size 7
      }
      setLoading(false);
    }).catch(err => {
      console.error(err);
      setLoading(false);
    });
  }, []);

  const product = products[0];
  const images = product?.node.images.edges || [];
  const variants = product?.node.variants.edges || [];
  const selectedVariant = variants.find(v => v.node.selectedOptions.some(o => o.value === selectedSize));

  const handleAddToCart = async () => {
    if (!product || !selectedVariant) return;
    
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
      description: `${product.node.title} — Size ${selectedSize}`,
      position: "top-center",
    });
    setTimeout(() => setJustAdded(false), 2000);
  };

  if (loading) {
    return (
      <section id="product" className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      </section>
    );
  }

  if (!product) {
    return (
      <section id="product" className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-muted-foreground">No products found</p>
        </div>
      </section>
    );
  }

  return (
    <section id="product" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image Gallery */}
          <div className="space-y-4">
            <motion.div
              key={selectedImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-square bg-muted rounded-lg overflow-hidden"
            >
              <img
                src={images[selectedImageIndex]?.node.url}
                alt={images[selectedImageIndex]?.node.altText || product.node.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            
            <div className="grid grid-cols-4 gap-3">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`aspect-square rounded-md overflow-hidden border-2 transition-all ${
                    selectedImageIndex === index ? 'border-primary' : 'border-transparent hover:border-muted-foreground/30'
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
          </div>

          {/* Product Info */}
          <div className="lg:sticky lg:top-28 space-y-6">
            <div>
              <p className="text-sm tracking-[0.15em] uppercase text-primary mb-2">
                Lumière Collection
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl mb-2">{product.node.title}</h2>
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-medium">
                  ${parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(0)}
                </span>
                <span className="text-sm text-muted-foreground line-through">$149</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Save 55%</span>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4 py-4 border-y">
              <div className="flex items-center gap-2 text-sm">
                <Sparkles className="h-4 w-4 text-primary" />
                <span>AAA Cubic Zirconia</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-primary">925</span>
                <span>Sterling Silver</span>
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Ring Size</label>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-xs text-primary hover:underline flex items-center gap-1">
                      <Ruler className="h-3 w-3" />
                      Size Guide
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle className="font-serif text-xl">Ring Size Guide</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 pt-4">
                      <p className="text-sm text-muted-foreground">
                        Not sure of your ring size? Here are some easy ways to find out:
                      </p>
                      <div className="space-y-3">
                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">1</div>
                          <div>
                            <p className="font-medium text-sm">Use an existing ring</p>
                            <p className="text-xs text-muted-foreground">Measure the inside diameter in mm</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">2</div>
                          <div>
                            <p className="font-medium text-sm">Wrap string around finger</p>
                            <p className="text-xs text-muted-foreground">Measure the length in mm, then divide by 3.14</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-muted rounded-lg p-4 mt-4">
                        <p className="text-xs font-medium mb-2">Size Chart (US)</p>
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div>Size 5 = 15.7mm</div>
                          <div>Size 6 = 16.5mm</div>
                          <div>Size 7 = 17.3mm</div>
                          <div>Size 8 = 18.1mm</div>
                          <div>Size 9 = 18.9mm</div>
                          <div>Size 10 = 19.8mm</div>
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
              
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger className="w-full h-12">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {product.node.options[0]?.values.map((size) => (
                    <SelectItem key={size} value={size}>
                      Size {size} {size === "7" && "(Most Popular)"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Add to Cart */}
            <Button
              size="lg"
              className="w-full h-14 text-base bg-foreground text-background hover:bg-foreground/90"
              onClick={handleAddToCart}
              disabled={cartLoading || !selectedSize}
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
                    Add to Bag — ${parseFloat(product.node.priceRange.minVariantPrice.amount).toFixed(0)}
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>

            {/* Description */}
            <div className="prose prose-sm max-w-none text-muted-foreground pt-4">
              <p>
                A delicate row of brilliant round-cut stones set in sterling silver, the Celestial Promise Band 
                embodies modern elegance. Slim enough to stack, stunning enough to stand alone — perfect for 
                promises, weddings, or everyday luxury.
              </p>
              <ul className="space-y-2 mt-4 list-none pl-0">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-medium">—</span>
                  Stackable design for layering with other bands
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-medium">—</span>
                  AAA Cubic Zirconia with brilliant round-cut stones
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-medium">—</span>
                  925 Sterling Silver, hypoallergenic finish
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-medium">—</span>
                  Arrives in luxury gift-ready packaging
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
