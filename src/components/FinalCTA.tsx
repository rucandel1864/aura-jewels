import { motion } from "framer-motion";
import lifestyleImage from "@/assets/ring-bridal.jpg";

export function FinalCTA() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <img 
          src={lifestyleImage} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="relative w-full">
        <div className="px-10 sm:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-lg"
          >
            <h2 className="font-serif text-display-mobile md:text-display text-foreground mb-8 leading-tight">
              <span className="italic">Your moment</span>
              <br />
              awaits
            </h2>
            <p className="text-sm text-foreground/70 mb-10 leading-relaxed">
              Join thousands who chose brilliance without compromise
            </p>
            <a 
              href="#product"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-link text-[11px] tracking-[0.3em] uppercase"
            >
              Shop Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
