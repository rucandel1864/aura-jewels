import { motion } from "framer-motion";

const trustItems = [
  "Free Express Shipping",
  "60-Day Returns",
  "Passes Diamond Tester",
  "Ethically Sourced",
];

export function TrustBar() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3"
        >
          {trustItems.map((item, index) => (
            <div key={item} className="flex items-center">
              <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {item}
              </span>
              {index < trustItems.length - 1 && (
                <span className="ml-4 text-primary/40">·</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
