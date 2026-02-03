import { motion } from "framer-motion";
import heroImage from "@/assets/ring-lifestyle-2.jpg";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img 
            src={heroImage} 
            alt="Lumière moissanite ring" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
      </div>
      
      {/* Content - positioned left like Van Cleef */}
      <div className="relative w-full">
        <div className="px-10 sm:px-16 lg:px-24">
          <div className="max-w-lg">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="font-serif text-hero-mobile md:text-hero text-foreground leading-tight"
            >
              <span className="italic">A sparkling setting</span>
              <br />
              to celebrate
              <br />
              <span className="italic">your moment</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-sm text-foreground/70 mt-8 mb-10 max-w-sm leading-relaxed"
            >
              Lumière accompanies you during these precious moments
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <a 
                href="#product"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-link text-[11px] tracking-[0.3em] uppercase"
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
