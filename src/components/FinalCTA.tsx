import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import lifestyleImage from "@/assets/ring-bridal.jpg";

export function FinalCTA() {
  return (
    <section className="relative py-32 sm:py-40 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={lifestyleImage} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm tracking-eyebrow uppercase text-primary mb-6">
              Ready?
            </p>
            <h2 className="font-serif text-display-mobile md:text-display mb-6 text-foreground">
              Your Forever Sparkle Awaits
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Join thousands of women who chose brilliance without compromise.
            </p>
            <Button 
              size="lg" 
              className="btn-gold h-14 px-12 text-base rounded-none"
              onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Shop Now — From $49
            </Button>

            <div className="flex flex-wrap gap-x-8 gap-y-4 mt-10 pt-8 border-t border-border">
              <span className="text-sm text-muted-foreground">60-Day Returns</span>
              <span className="text-sm text-muted-foreground">Free Shipping</span>
              <span className="text-sm text-muted-foreground">Lifetime Warranty</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
