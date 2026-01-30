import { motion } from "framer-motion";
import caratComparisonImage from "@/assets/carat-comparison.jpg";

export function CaratComparison() {
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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <div className="rounded-lg overflow-hidden border border-border/50">
            <img 
              src={caratComparisonImage} 
              alt="Carat size comparison showing 1CT, 2CT, 5CT, and 8CT moissanite rings on a finger"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Size details below image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-4 gap-4 max-w-lg mx-auto mt-8"
        >
          {[
            { size: "1CT", diameter: "6×8mm", price: "$49" },
            { size: "2CT", diameter: "7×9mm", price: "$69" },
            { size: "5CT", diameter: "10×12mm", price: "$99" },
            { size: "8CT", diameter: "11×14mm", price: "$129" },
          ].map((item) => (
            <div key={item.size} className="text-center">
              <p className="font-serif text-lg text-foreground">{item.size}</p>
              <p className="text-xs text-muted-foreground">{item.diameter}</p>
              <p className="text-xs text-primary mt-1">{item.price}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
