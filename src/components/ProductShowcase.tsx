import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Check, Ruler, Info, Play, Shield, Award } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { toast } from "sonner";
const ringVideo = "/ring-video.mp4";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const CARAT_PRICES: Record<string, number> = {
  "1CT": 69.99,
  "2CT": 99.99,
  "3CT": 129.99,
};

const CARAT_COMPARE_PRICES: Record<string, number> = {
  "1CT": 129.99,
  "2CT": 179.99,
  "3CT": 249.99,
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
      <section id="product" className="py-36 sm:py-48 bg-background">
        <div className="container mx-auto px-6 sm:px-8 flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" strokeWidth={1.5} />
        </div>
      </section>
    );
  }

  if (!product) {
    return (
      <section id="product" className="py-36 sm:py-48 bg-background">
        <div className="container mx-auto px-6 sm:px-8 text-center">
          <p className="text-muted-foreground">No products found</p>
        </div>
      </section>
    );
  }

  const caratOption = product.node.options.find(o => o.name === "Carat");
  const sizeOption = product.node.options.find(o => o.name === "Size");

  return (
    <section id="product" className="py-36 sm:py-48 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Image Gallery */}
          <div className="space-y-6">
            <motion.div
              key={selectedImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="aspect-square bg-card overflow-hidden"
            >
              {selectedImageIndex === 0 ? (
                <video
                  src={ringVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : images[selectedImageIndex - 1] ? (
                <img
                  src={images[selectedImageIndex - 1].node.url}
                  alt={images[selectedImageIndex - 1].node.altText || product.node.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  No image available
                </div>
              )}
            </motion.div>
            
            {/* Thumbnails: video first, then images */}
            <div className="grid grid-cols-5 gap-3">
              {/* Video thumbnail */}
              <button
                onClick={() => setSelectedImageIndex(0)}
                className={`aspect-square overflow-hidden transition-all duration-400 relative ${
                  selectedImageIndex === 0 
                    ? 'ring-1 ring-primary' 
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <video
                  src={ringVideo}
                  muted
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-background/20">
                  <Play className="w-4 h-4 text-foreground fill-foreground" />
                </div>
              </button>
              
              {/* Image thumbnails */}
              {images.slice(0, 4).map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index + 1)}
                  className={`aspect-square overflow-hidden transition-all duration-400 ${
                    selectedImageIndex === index + 1 
                      ? 'ring-1 ring-primary' 
                      : 'opacity-60 hover:opacity-100'
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

          {/* Product Configuration Panel */}
          <div className="lg:sticky lg:top-32 space-y-10">
            <div>
              <p className="eyebrow mb-4">
                Lumis Collection
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl mb-4 text-foreground">
                {product.node.title}
              </h2>
              
              {/* Certification Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-primary/30 text-xs tracking-[0.1em] uppercase text-primary">
                  <Shield className="h-3.5 w-3.5" strokeWidth={1.5} />
                  Certified Moissanite
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-primary/30 text-xs tracking-[0.1em] uppercase text-primary">
                  <Award className="h-3.5 w-3.5" strokeWidth={1.5} />
                  925 Sterling Silver
                </span>
              </div>

              <div className="flex items-baseline gap-3">
                <p className="text-2xl font-serif text-foreground">
                  ${displayPrice}
                </p>
                <p className="text-base font-serif text-muted-foreground line-through">
                  ${CARAT_COMPARE_PRICES[selectedCarat]}
                </p>
                <span className="text-xs tracking-[0.1em] uppercase text-primary font-medium">
                  Valentine's Sale
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="section-divider" />

            {/* Carat Selection */}
            {caratOption && (
              <div className="space-y-4">
                <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Carat Size</label>
                <div className="grid grid-cols-3 gap-3">
                  {caratOption.values.map((carat) => {
                    const caratPrice = CARAT_PRICES[carat] || 100;
                    return (
                      <button
                        key={carat}
                        onClick={() => setSelectedCarat(carat)}
                        className={`py-5 border transition-all duration-400 text-center ${
                          selectedCarat === carat 
                            ? 'border-primary text-foreground' 
                            : 'border-border text-muted-foreground hover:border-muted-foreground'
                        }`}
                      >
                        <span className="block text-sm">{carat}</span>
                        <span className="text-xs text-muted-foreground/50 line-through mt-1 block">${CARAT_COMPARE_PRICES[carat]}</span>
                        <span className="text-xs text-foreground block">${caratPrice}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Size Selection */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Ring Size</label>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="text-xs text-primary hover:opacity-70 transition-opacity flex items-center gap-1.5">
                      <Ruler className="h-3 w-3" strokeWidth={1.5} />
                      Size Guide
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md bg-card border-border">
                    <DialogHeader>
                      <DialogTitle className="font-serif text-xl text-foreground">Ring Size Guide</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6 pt-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Not sure of your ring size? Here are some easy ways to find out:
                      </p>
                      <div className="space-y-4">
                        <div className="flex gap-4">
                          <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center text-sm text-foreground">1</div>
                          <div>
                            <p className="text-sm text-foreground">Use an existing ring</p>
                            <p className="text-xs text-muted-foreground mt-1">Measure the inside diameter in mm</p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center text-sm text-foreground">2</div>
                          <div>
                            <p className="text-sm text-foreground">Wrap string around finger</p>
                            <p className="text-xs text-muted-foreground mt-1">Measure the length in mm, divide by 3.14</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-muted/50 p-5 mt-6">
                        <p className="text-xs tracking-[0.1em] uppercase mb-3 text-foreground">Size Chart (US)</p>
                        <div className="grid grid-cols-3 gap-3 text-xs text-muted-foreground">
                          <div>Size 5 = 15.7mm</div>
                          <div>Size 6 = 16.5mm</div>
                          <div>Size 7 = 17.3mm</div>
                          <div>Size 8 = 18.1mm</div>
                          <div>Size 9 = 18.9mm</div>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground flex items-start gap-2">
                        <Info className="h-3 w-3 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                        Size 7 is most popular. When in doubt, size up.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              
              {sizeOption && (
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger className="w-full h-14 border-border bg-transparent text-foreground">
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
              className="w-full h-14 text-sm tracking-[0.15em] uppercase btn-gold-outline"
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
                    <Loader2 className="h-5 w-5 animate-spin" strokeWidth={1.5} />
                  </motion.div>
                ) : justAdded ? (
                  <motion.div
                    key="added"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Check className="h-4 w-4" strokeWidth={1.5} />
                    Added to Bag
                  </motion.div>
                ) : (
                  <motion.span
                    key="default"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {selectedVariant ? "Add to Bag" : "Select options"}
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
          transition={{ duration: 1 }}
          className="mt-24 max-w-xl"
        >
          <p className="text-muted-foreground leading-relaxed mb-8">
            A stunning round-cut moissanite center stone surrounded by a sparkling 5A zircon halo, 
            embodying timeless elegance. Passes diamond tester with exceptional fire and brilliance.
          </p>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-4 text-muted-foreground">
              <span className="text-primary">—</span>
              Certified moissanite — verified authentic with documentation
            </li>
            <li className="flex items-start gap-4 text-muted-foreground">
              <span className="text-primary">—</span>
              925 Sterling Silver (stamped) with 18K white gold plating
            </li>
            <li className="flex items-start gap-4 text-muted-foreground">
              <span className="text-primary">—</span>
              100% passes thermal diamond tester
            </li>
            <li className="flex items-start gap-4 text-muted-foreground">
              <span className="text-primary">—</span>
              Available in 1CT, 2CT, and 3CT with halo setting
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
