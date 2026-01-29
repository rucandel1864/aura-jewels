import { motion } from "framer-motion";
import ringBridal from "@/assets/ring-bridal.jpg";

export function BrandStory() {
  return (
    <section id="story" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm tracking-[0.15em] uppercase text-primary mb-4">
              Our Promise
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-6 leading-tight">
              Brilliance without compromise
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                At Lumière, we believe that brilliance shouldn't come at a cost — to your wallet 
                or to the world. That's why every piece in our collection is crafted with ethically 
                sourced materials and conflict-free stones.
              </p>
              <p>
                Our AAA cubic zirconia offers the same fire, clarity, and brilliance as mined diamonds, 
                at a fraction of the price. Combined with 925 sterling silver, each ring is designed 
                to last a lifetime.
              </p>
              <p>
                By working directly with skilled artisans and cutting out the traditional retail 
                markup, we deliver luxury pieces at accessible prices. No compromises.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t">
              <div className="text-center">
                <p className="font-serif text-3xl text-primary">100%</p>
                <p className="text-xs text-muted-foreground mt-1">Conflict-Free</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl text-primary">925</p>
                <p className="text-xs text-muted-foreground mt-1">Sterling Silver</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl text-primary">60</p>
                <p className="text-xs text-muted-foreground mt-1">Day Returns</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src={ringBridal}
                alt="Celestial Promise Band - Stacked rings styling"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-lg shadow-xl max-w-xs hidden sm:block">
              <p className="font-serif text-lg italic">
                "The perfect symbol of forever"
              </p>
              <p className="text-xs text-muted-foreground mt-2">— Lumière Collection</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
