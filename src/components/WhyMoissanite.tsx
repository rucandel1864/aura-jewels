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
    <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-eyebrow uppercase text-primary mb-4">
            The Lumière Difference
          </p>
          <h2 className="font-serif text-display-mobile md:text-display">
            Why Women Are Choosing Moissanite
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card rounded-lg p-8 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
