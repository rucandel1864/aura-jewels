import { motion } from "framer-motion";
import ringBridal from "@/assets/ring-bridal.jpg";
import ringProduct2 from "@/assets/ring-product-2.jpg";

export function BrandStory() {
  return (
    <section id="story">
      {/* Block 1 - Full-width split */}
      <div className="min-h-screen grid lg:grid-cols-2">
        {/* Left - Image */}
        <div className="relative min-h-[500px] lg:min-h-0 order-2 lg:order-1">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            src={ringBridal}
            alt="Ring on hand"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right - Text */}
        <div className="flex items-center justify-center py-20 px-10 lg:px-20 order-1 lg:order-2 bg-foreground/5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-md"
          >
            <h2 className="font-serif text-display-mobile md:text-display text-foreground mb-10 leading-tight">
              <span className="italic">"We believe brilliance</span>
              <br />
              shouldn't cost the earth"
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-10">
              At Lumière, we've reimagined what luxury means. By partnering directly with 
              skilled artisans and eliminating traditional retail markup, we deliver 
              exceptional pieces at accessible prices.
            </p>
            <a 
              href="#product"
              className="text-link text-[11px] tracking-[0.3em] uppercase"
            >
              Discover More
            </a>
          </motion.div>
        </div>
      </div>

      {/* Block 2 - Reversed */}
      <div className="min-h-screen grid lg:grid-cols-2">
        {/* Left - Text */}
        <div className="flex items-center justify-center py-20 px-10 lg:px-20 bg-background">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-md"
          >
            <h2 className="font-serif text-display-mobile md:text-display text-foreground mb-10">
              Direct to You
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-10">
              Traditional jewelry retail adds 3-4× markup for storefronts, sales staff, 
              and middlemen. We've eliminated all of that. By selling directly to you, 
              we deliver the same quality at a fraction of the price.
            </p>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <p className="font-serif text-xl text-foreground">100%</p>
                <p className="text-[10px] text-muted-foreground mt-2 tracking-wide uppercase">Ethical</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-xl text-foreground">925</p>
                <p className="text-[10px] text-muted-foreground mt-2 tracking-wide uppercase">Silver</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-xl text-foreground">60</p>
                <p className="text-[10px] text-muted-foreground mt-2 tracking-wide uppercase">Day Returns</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right - Image */}
        <div className="relative min-h-[500px] lg:min-h-0">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            src={ringProduct2}
            alt="Ring packaging"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
