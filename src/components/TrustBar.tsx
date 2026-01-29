import { motion } from "framer-motion";
import { Truck, RefreshCw, Shield, Heart } from "lucide-react";

const trustItems = [
  { icon: Truck, label: "Free Shipping", sublabel: "On all orders" },
  { icon: RefreshCw, label: "60-Day Returns", sublabel: "No questions asked" },
  { icon: Shield, label: "Secure Checkout", sublabel: "SSL encrypted" },
  { icon: Heart, label: "Conflict-Free", sublabel: "Ethically sourced" },
];

export function TrustBar() {
  return (
    <section className="py-8 border-y bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-3 justify-center md:justify-start"
            >
              <item.icon className="h-5 w-5 text-primary flex-shrink-0" />
              <div className="text-center md:text-left">
                <p className="text-sm font-medium">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
