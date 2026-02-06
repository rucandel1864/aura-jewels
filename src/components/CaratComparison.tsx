import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import carat1ctImage from "@/assets/ring-carat-1ct.jpg";
import carat2ctImage from "@/assets/ring-carat-2ct.jpg";
import carat3ctImage from "@/assets/ring-carat-3ct.jpg";

const CARAT_OPTIONS = [
  { size: "1CT", diameter: "6.5mm", price: "$69.99", wasPrice: "$129.99", image: carat1ctImage },
  { size: "2CT", diameter: "8.0mm", price: "$99.99", wasPrice: "$179.99", image: carat2ctImage },
  { size: "3CT", diameter: "9.0mm", price: "$129.99", wasPrice: "$249.99", image: carat3ctImage },
];

export function CaratComparison() {
  const [selectedCarat, setSelectedCarat] = useState(1); // Default to 2CT

  return (
    <section className="py-32 sm:py-40 bg-card/30">
      <div className="container mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-6">
            Size Guide
          </p>
          <h2 className="font-serif text-display-mobile md:text-display mb-6">
            Carat Comparison
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            See the actual size difference. Choose the presence that suits your style.
          </p>
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-lg mx-auto mb-12"
        >
          <div className="aspect-square relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedCarat}
                src={CARAT_OPTIONS[selectedCarat].image}
                alt={`${CARAT_OPTIONS[selectedCarat].size} moissanite ring`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Size and price display */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mb-10"
        >
          <p className="font-serif text-2xl text-foreground mb-1">
            {CARAT_OPTIONS[selectedCarat].size}
          </p>
          <p className="text-sm text-muted-foreground">
            {CARAT_OPTIONS[selectedCarat].diameter} · <span className="line-through opacity-50">{CARAT_OPTIONS[selectedCarat].wasPrice}</span> <span className="text-primary">{CARAT_OPTIONS[selectedCarat].price}</span>
          </p>
        </motion.div>

        {/* Dot navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4"
        >
          {CARAT_OPTIONS.map((item, index) => (
            <button
              key={item.size}
              onClick={() => setSelectedCarat(index)}
              className="group p-2"
              aria-label={`View ${item.size} carat`}
            >
              <div className={`w-2 h-2 rounded-full transition-all duration-400 ${
                selectedCarat === index
                  ? 'bg-primary scale-125'
                  : 'bg-muted-foreground/30 group-hover:bg-muted-foreground/60'
              }`} />
            </button>
          ))}
        </motion.div>

        {/* Size labels */}
        <div className="flex justify-center gap-12 mt-6">
          {CARAT_OPTIONS.map((item, index) => (
            <button
              key={item.size}
              onClick={() => setSelectedCarat(index)}
              className={`text-xs tracking-[0.2em] uppercase transition-all duration-400 ${
                selectedCarat === index
                  ? 'text-primary'
                  : 'text-muted-foreground/50 hover:text-muted-foreground'
              }`}
            >
              {item.size}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
