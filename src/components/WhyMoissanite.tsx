import { motion } from "framer-motion";
import { Sparkles, Leaf, Award } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "More Fire",
    description: "2.4x more brilliance than diamonds. The sparkle that turns heads in any light."
  },
  {
    icon: Leaf,
    title: "Ethically Perfect",
    description: "100% lab-created. Zero mining, zero guilt. Beauty without compromise."
  },
  {
    icon: Award,
    title: "Diamond Test Certified",
    description: "Passes thermal diamond testers. The secret is yours to keep."
  }
];

export function WhyMoissanite() {
  return (
    <section className="py-36 sm:py-48 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20 sm:mb-28"
        >
          <p className="eyebrow mb-6">
            The Lumière Difference
          </p>
          <h2 className="font-serif text-display-mobile md:text-display">
            Why Women Are Choosing Moissanite
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-16 md:gap-12 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="text-center"
            >
              <feature.icon className="h-6 w-6 text-primary mx-auto mb-8" strokeWidth={1.5} />
              <h3 className="font-serif text-xl mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
