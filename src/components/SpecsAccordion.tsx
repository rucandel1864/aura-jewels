import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const specs = [
  {
    title: "Stone Details",
    content: [
      { label: "Stone Type", value: "Moissanite" },
      { label: "Cut", value: "Round Brilliant" },
      { label: "Clarity", value: "VVS1" },
      { label: "Color", value: "D-E-F (Colorless)" },
      { label: "Side Stones", value: "5A Zircon 1.5mm" },
      { label: "Brilliance", value: "2.4x more fire than diamond" },
    ]
  },
  {
    title: "Metal & Setting",
    content: [
      { label: "Metal", value: "925 Sterling Silver" },
      { label: "Plating", value: "18K White Gold" },
      { label: "Setting Style", value: "Halo with Prong Setting" },
      { label: "Protective Film", value: "AF coating included" },
    ]
  },
];

export function SpecsAccordion() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-eyebrow uppercase text-primary mb-4">
            Details
          </p>
          <h2 className="font-serif text-display-mobile md:text-display">
            Specifications
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {specs.map((spec, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="glass-card rounded-lg px-6 border-none data-[state=open]:bg-card/50"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5 text-base font-medium text-foreground [&[data-state=open]>svg]:text-primary">
                  {spec.title}
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <div className="space-y-3">
                    {spec.content.map((item, i) => (
                      <div key={i} className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="text-foreground">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
