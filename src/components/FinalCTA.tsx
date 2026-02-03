import { motion } from "framer-motion";
import lifestyleImage from "@/assets/ring-bridal.jpg";

export function FinalCTA() {
  return (
    <section className="relative py-48 sm:py-64 overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <img 
          src={lifestyleImage} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 relative">
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="eyebrow mb-8">
              Ready?
            </p>
            <h2 className="font-serif text-display-mobile md:text-display mb-8 text-foreground">
              Your Forever Sparkle Awaits
            </h2>
            <p className="text-muted-foreground mb-12 text-lg leading-relaxed">
              Join thousands of women who chose brilliance without compromise.
            </p>
            <a 
              href="#product"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-link text-sm tracking-[0.2em] uppercase"
            >
              Shop Now — From $100
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
