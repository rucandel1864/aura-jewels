import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Will it pass a diamond tester?",
    answer: "Yes! Moissanite passes thermal diamond testers because it has similar thermal conductivity to diamonds. Only a specialized moissanite tester can distinguish between them — and those aren't commonly available."
  },
  {
    question: "What's the difference between carat sizes?",
    answer: "Carat refers to the size of the center stone. Our 1CT is a delicate, everyday option. 2CT is our most popular, offering a perfect balance of presence and elegance. 5CT and 8CT are statement pieces for those who love maximum brilliance."
  },
  {
    question: "How do I find my ring size?",
    answer: "We recommend measuring the inside diameter of a ring that fits well, or wrapping string around your finger and measuring the length. Size 7 is our most popular. When in doubt, we recommend sizing up for a comfortable fit."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 60-day hassle-free return policy. If you're not completely satisfied with your purchase, contact us for a prepaid return label. Full refunds are processed within 5-7 business days of receiving your return."
  },
  {
    question: "How long does shipping take?",
    answer: "Orders are processed within 1-2 business days. Standard shipping takes 7-14 business days. Express shipping (3-5 days) is available at checkout. All orders include tracking."
  },
  {
    question: "Is moissanite durable for everyday wear?",
    answer: "Absolutely. Moissanite ranks 9.25 on the Mohs hardness scale (diamonds are 10), making it one of the hardest gemstones on earth. It's highly resistant to scratching, chipping, and breaking — perfect for daily wear."
  },
  {
    question: "How do I care for my ring?",
    answer: "Clean your ring with a soft cloth and mild soap. Avoid harsh chemicals, perfumes, and chlorine. Store in the included velvet pouch when not wearing. Remove before swimming or showering for best results."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-eyebrow uppercase text-primary mb-4">
            Questions
          </p>
          <h2 className="font-serif text-display-mobile md:text-display">
            Frequently Asked
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="glass-card rounded-lg px-6 border-none data-[state=open]:bg-card/50"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5 text-base font-medium text-foreground [&[data-state=open]>svg]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm">
            Still have questions?{" "}
            <a href="mailto:hello@lumiere.com" className="text-primary hover:underline">
              Get in touch
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
