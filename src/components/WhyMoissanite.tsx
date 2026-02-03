import { motion } from "framer-motion";

const features = [
  {
    title: "More Fire",
    description: "2.4× more brilliance than diamonds"
  },
  {
    title: "Ethically Perfect",
    description: "100% lab-created, zero mining"
  },
  {
    title: "Diamond Certified",
    description: "Passes thermal diamond testers"
  }
];

export function WhyMoissanite() {
  return (
    <section className="py-40 sm:py-56 bg-background">
      <div className="px-10 sm:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-24"
        >
          <h2 className="font-serif text-display-mobile md:text-display text-foreground">
            Why Moissanite
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-20 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="text-center"
            >
              <h3 className="font-serif text-xl mb-4 text-foreground italic">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
