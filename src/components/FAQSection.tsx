import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Will it pass a diamond tester?",
    answer: "Yes. Moissanite passes thermal diamond testers because it has similar thermal conductivity to diamonds."
  },
  {
    question: "What's the difference between carat sizes?",
    answer: "1CT (6.5mm) is delicate and everyday. 2CT (8mm) offers perfect balance. 3CT (9mm) is our statement piece."
  },
  {
    question: "How do I find my ring size?",
    answer: "Measure the inside diameter of a ring that fits well. Size 7 is most popular. When in doubt, size up."
  },
  {
    question: "What is your return policy?",
    answer: "60-day hassle-free returns. Full refunds processed within 5-7 business days."
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping: 7-14 days. Express shipping: 3-5 days. All orders include tracking."
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-32 sm:py-40 bg-foreground/5">
      <div className="px-10 sm:px-16 lg:px-24 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-display-mobile md:text-display text-foreground">
            Frequently Asked
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-b border-border"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 text-sm font-light text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-8 text-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-center mt-16"
        >
          <a href="mailto:hello@lumiere.com" className="text-link text-[11px] tracking-[0.3em] uppercase">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
