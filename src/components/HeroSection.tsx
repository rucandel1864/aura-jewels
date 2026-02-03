import { motion } from "framer-motion";
import heroImage from "@/assets/ring-lifestyle-2.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img 
            src={heroImage} 
            alt="Lumière moissanite ring" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/30" />
      </div>
      
      {/* Content */}
      <div className="relative w-full">
        <div className="container mx-auto px-6 sm:px-8 pt-32 pb-24">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="eyebrow mb-8"
            >
              The Eternal Brilliance
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-serif text-hero-mobile md:text-hero leading-none mb-8"
            >
              Diamond Fire.
              <span className="block italic text-primary/90 mt-2">Without the Diamond Price.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-lg text-muted-foreground font-light leading-relaxed mb-12 max-w-md"
            >
              The round-cut moissanite halo ring that passes every diamond test. 
              Handcrafted in 925 sterling silver with 18K white gold.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <a 
                href="#product"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-link text-sm tracking-[0.2em] uppercase"
              >
                Discover the Collection
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
