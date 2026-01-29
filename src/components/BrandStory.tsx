import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ringBridal from "@/assets/ring-bridal.jpg";
import ringProduct2 from "@/assets/ring-product-2.jpg";

export function BrandStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="story" ref={sectionRef} className="overflow-hidden">
      {/* Block 1 - Cream background */}
      <div className="py-24 sm:py-32 bg-cream text-charcoal">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm tracking-eyebrow uppercase text-gold-dark mb-6">
                Our Promise
              </p>
              <h2 className="font-serif text-display-mobile md:text-display mb-8 text-charcoal">
                "We believe brilliance shouldn't cost the earth — or your savings."
              </h2>
              <p className="text-charcoal-light leading-relaxed">
                At Lumière, we've reimagined what luxury means. By partnering directly with 
                skilled artisans and eliminating traditional retail markup, we deliver 
                exceptional pieces at accessible prices. Our moissanite stones offer 
                superior fire and brilliance compared to mined diamonds — and every piece 
                passes diamond tester.
              </p>
            </motion.div>

            <motion.div 
              style={{ y: y1 }}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="aspect-[4/5] rounded-lg overflow-hidden"
              >
                <img
                  src={ringBridal}
                  alt="Ring on hand in intimate setting"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Block 2 - Charcoal background */}
      <div className="py-24 sm:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              style={{ y: y2 }}
              className="relative order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="aspect-[4/5] rounded-lg overflow-hidden"
              >
                <img
                  src={ringProduct2}
                  alt="Lumière ring packaging"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <p className="text-sm tracking-eyebrow uppercase text-primary mb-6">
                Direct to You
              </p>
              <h2 className="font-serif text-display-mobile md:text-display mb-8 text-foreground">
                Brilliance without the markup
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Traditional jewelry retail adds 3-4x markup for storefronts, sales staff, 
                and middlemen. We've cut all of that. By selling directly to you, we deliver 
                the same quality you'd find at luxury retailers — at a fraction of the price.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
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
          </div>
        </div>
      </div>
    </section>
  );
}
