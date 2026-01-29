import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/ring-hero.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden noise-overlay">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      
      {/* Content wrapper */}
      <div className="relative w-full">
        <div className="container mx-auto px-4 sm:px-6 pt-24 pb-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-0 items-center min-h-[calc(100vh-6rem)]">
            
            {/* Text content - 45% */}
            <div className="lg:col-span-5 z-10">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-sm tracking-eyebrow uppercase text-primary mb-6"
              >
                The Eternal Brilliance
              </motion.p>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-serif text-hero-mobile md:text-hero leading-none mb-6"
              >
                Diamond Fire.
                <span className="block italic text-primary/90">Without the Diamond Price.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-muted-foreground font-light mb-8 max-w-md"
              >
                The oval-cut moissanite solitaire that passes every diamond test. 
                Handcrafted in 925 sterling silver. From $49.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button 
                  size="lg" 
                  className="btn-gold h-14 px-10 text-base rounded-none"
                  onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Shop the Collection
                </Button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-sm text-muted-foreground mt-8 flex items-center gap-4 flex-wrap"
              >
                <span>Free Express Shipping</span>
                <span className="text-border">—</span>
                <span>60-Day Returns</span>
                <span className="text-border">—</span>
                <span>Passes Diamond Tester</span>
              </motion.p>
            </div>

            {/* Image - 55% bleeding off edge */}
            <div className="lg:col-span-7 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative lg:absolute lg:-right-32 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[140%]"
              >
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl" />
                
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="aspect-square lg:aspect-[4/5] rounded-lg overflow-hidden">
                    <img 
                      src={heroImage} 
                      alt="Eternal Brilliance Solitaire Ring" 
                      className="w-full h-full object-cover"
                    />
                    {/* Dark overlay for drama */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/60 pointer-events-none" />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
