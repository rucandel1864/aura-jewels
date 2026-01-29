import { motion } from "framer-motion";
import { Truck, RefreshCw, Shield, Gem } from "lucide-react";

const trustItems = [
  { icon: Truck, label: "Free Express Shipping" },
  { icon: RefreshCw, label: "60-Day Returns" },
  { icon: Shield, label: "SSL Secure Checkout" },
  { icon: Gem, label: "Ethically Sourced" },
];

export function TrustBar() {
  return (
    <section className="py-6 border-y border-border/50 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <item.icon className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
