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
    ]
  },
  {
    title: "Metal & Setting",
    content: [
      { label: "Metal", value: "925 Sterling Silver" },
      { label: "Plating", value: "18K White Gold" },
      { label: "Setting Style", value: "Halo with Prong Setting" },
    ]
  },
];

export function SpecsAccordion() {
  return (
    <section className="py-32 sm:py-40 bg-background">
      <div className="px-10 sm:px-16 lg:px-24 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-display-mobile md:text-display text-foreground">
            Specifications
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <Accordion type="single" collapsible>
            {specs.map((spec, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-b border-border"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 text-sm font-light text-foreground">
                  {spec.title}
                </AccordionTrigger>
                <AccordionContent className="pb-8">
                  <div className="space-y-4">
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
