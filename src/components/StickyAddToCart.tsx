import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

export function StickyAddToCart() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const productSection = document.getElementById('product');
    if (!productSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(productSection);
    return () => observer.disconnect();
  }, []);

  const scrollToProduct = () => {
    document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
        >
          <div className="header-glass border-t border-primary/20 px-4 py-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-serif text-sm text-foreground">Eternal Brilliance</p>
                <p className="text-primary text-sm">From $49</p>
              </div>
              <Button 
                onClick={scrollToProduct}
                className="btn-gold h-11 px-6 rounded-none"
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                Shop Now
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
