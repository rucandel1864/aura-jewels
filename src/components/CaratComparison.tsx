import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import carat1ctImage from "@/assets/ring-carat-1ct.jpg";
import carat2ctImage from "@/assets/ring-carat-2ct.jpg";
import carat3ctImage from "@/assets/ring-carat-3ct.jpg";

const CARAT_OPTIONS = [
  { size: "1CT", diameter: "6.5mm", price: "$100", image: carat1ctImage },
  { size: "2CT", diameter: "8.0mm", price: "$150", image: carat2ctImage },
  { size: "3CT", diameter: "9.0mm", price: "$200", image: carat3ctImage },
];

export function CaratComparison() {
  const [selectedCarat, setSelectedCarat] = useState(0);

  return (
    <section className="py-16 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-sm tracking-eyebrow uppercase text-primary mb-4">
            Size Guide
          </p>
          <h2 className="font-serif text-display-mobile md:text-display">
            Carat Size Comparison
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            See the actual size difference on a finger. Choose the presence that suits your style.
          </p>
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto mb-6"
        >
          <div className="rounded-lg overflow-hidden border border-border/50 aspect-square relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedCarat}
                src={CARAT_OPTIONS[selectedCarat].image}
                alt={`${CARAT_OPTIONS[selectedCarat].size} moissanite ring - ${CARAT_OPTIONS[selectedCarat].diameter}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Carat Selector Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-3 max-w-md mx-auto"
        >
          {CARAT_OPTIONS.map((item, index) => (
            <button
              key={item.size}
              onClick={() => setSelectedCarat(index)}
              className={`py-4 px-2 rounded-md border transition-all text-center ${
                selectedCarat === index
                  ? 'border-primary bg-primary/10 text-foreground'
                  : 'border-border bg-transparent text-muted-foreground hover:border-primary/50'
              }`}
            >
              <p className="font-serif text-lg">{item.size}</p>
              <p className="text-xs text-muted-foreground">{item.diameter}</p>
              <p className="text-xs text-primary mt-1">{item.price}</p>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
