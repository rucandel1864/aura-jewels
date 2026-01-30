import { motion } from "framer-motion";

const caratSizes = [
  { 
    size: "1CT", 
    diameter: "6.5mm",
    description: "Delicate everyday elegance",
    visual: 24 
  },
  { 
    size: "2CT", 
    diameter: "8mm",
    description: "Our most popular — perfect balance",
    visual: 32,
    popular: true
  },
  { 
    size: "5CT", 
    diameter: "11mm",
    description: "Statement presence",
    visual: 44
  },
  { 
    size: "8CT", 
    diameter: "13mm",
    description: "Maximum brilliance",
    visual: 52
  },
];

export function CaratComparison() {
  return (
    <section className="py-16 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-eyebrow uppercase text-primary mb-4">
            Size Guide
          </p>
          <h2 className="font-serif text-display-mobile md:text-display">
            Carat Size Comparison
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Actual proportions shown on a size 7 finger. Choose the presence that suits your style.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-end justify-center gap-8 md:gap-12">
          {caratSizes.map((carat, index) => (
            <motion.div
              key={carat.size}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              {/* Finger silhouette with stone */}
              <div className="relative mb-4">
                {/* Finger */}
                <div className="w-8 h-32 bg-gradient-to-b from-muted/50 to-muted/30 rounded-t-full rounded-b-lg relative">
                  {/* Ring band */}
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 w-10 h-3 bg-gradient-to-r from-muted-foreground/20 via-muted-foreground/40 to-muted-foreground/20 rounded-full" />
                  
                  {/* Stone */}
                  <motion.div
                    className="absolute top-10 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-br from-white via-primary/20 to-white shadow-lg"
                    style={{ 
                      width: carat.visual, 
                      height: carat.visual * 1.3,
                      borderRadius: "50%"
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Sparkle effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/60 to-transparent rounded-full" />
                  </motion.div>
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="font-serif text-xl text-foreground">{carat.size}</span>
                  {carat.popular && (
                    <span className="text-[10px] uppercase tracking-wider bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mb-1">{carat.diameter}</p>
                <p className="text-xs text-muted-foreground/70 max-w-24">{carat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
