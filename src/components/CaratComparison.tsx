import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import carat1ctImage from "@/assets/ring-carat-1ct.jpg";
import carat2ctImage from "@/assets/ring-carat-2ct.jpg";
import carat3ctImage from "@/assets/ring-carat-3ct.jpg";

const CARAT_OPTIONS = [
  { size: "1CT", diameter: "6.5mm", price: "AU$ 100", image: carat1ctImage },
  { size: "2CT", diameter: "8.0mm", price: "AU$ 150", image: carat2ctImage },
  { size: "3CT", diameter: "9.0mm", price: "AU$ 200", image: carat3ctImage },
];

export function CaratComparison() {
  const [selectedCarat, setSelectedCarat] = useState(1);

  return (
    <section className="min-h-screen grid lg:grid-cols-2">
      {/* Left - Product display like Van Cleef */}
      <div className="bg-foreground/5 flex flex-col items-center justify-center py-20 px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full max-w-sm"
        >
          <div className="aspect-square relative mb-10">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedCarat}
                src={CARAT_OPTIONS[selectedCarat].image}
                alt={`${CARAT_OPTIONS[selectedCarat].size} moissanite ring`}
                className="w-full h-full object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>
          </div>

          {/* Product info */}
          <div className="text-center">
            <h3 className="font-serif text-lg text-foreground mb-2">
              Eternal Brilliance Ring
            </h3>
            <p className="text-xs text-muted-foreground mb-1">
              {CARAT_OPTIONS[selectedCarat].size}, {CARAT_OPTIONS[selectedCarat].diameter}
            </p>
            <p className="text-xs text-muted-foreground">
              {CARAT_OPTIONS[selectedCarat].price}
            </p>
          </div>

          {/* Dot navigation */}
          <div className="flex justify-center gap-3 mt-10">
            {CARAT_OPTIONS.map((item, index) => (
              <button
                key={item.size}
                onClick={() => setSelectedCarat(index)}
                className="p-2"
                aria-label={`View ${item.size}`}
              >
                <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                  selectedCarat === index
                    ? 'bg-foreground'
                    : 'bg-foreground/20'
                }`} />
              </button>
            ))}
          </div>

          {/* CTA Link */}
          <div className="text-center mt-10">
            <a 
              href="#product"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-link text-[11px] tracking-[0.3em] uppercase"
            >
              More Creations
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right - Lifestyle image */}
      <div className="relative min-h-[500px] lg:min-h-0">
        <img
          src={carat2ctImage}
          alt="Ring on hand"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
