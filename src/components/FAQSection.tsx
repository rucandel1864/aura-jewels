import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does shipping take?",
    answer: "Orders are processed within 1-2 business days. Standard shipping takes 7-14 business days. Express shipping (3-5 days) is available at checkout for an additional fee. All orders include tracking."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 60-day hassle-free return policy. If you're not completely satisfied with your purchase, simply contact us for a prepaid return label. Full refunds are processed within 5-7 business days of receiving your return."
  },
  {
    question: "How do I find my ring size?",
    answer: "We recommend using our size guide above the size selector. The most common method is to measure the inside diameter of a ring that fits well. Size 7 is our most popular size. When in doubt, we recommend sizing up for a comfortable fit."
  },
  {
    question: "What is AAA Cubic Zirconia?",
    answer: "AAA-grade cubic zirconia is the highest quality synthetic gemstone, offering exceptional brilliance and clarity. It's virtually indistinguishable from natural diamonds to the naked eye but is ethically produced and more affordable."
  },
  {
    question: "Is sterling silver hypoallergenic?",
    answer: "Yes! Our 925 sterling silver is hypoallergenic and safe for sensitive skin. It contains 92.5% pure silver and is nickel-free. With proper care, your ring will maintain its beautiful luster for years."
  },
  {
    question: "How do I care for my ring?",
    answer: "To maintain its brilliance, clean your ring with a soft cloth and mild soap. Avoid exposure to harsh chemicals, perfumes, and chlorine. Store in the included jewelry box when not wearing. Remove before swimming or showering."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.15em] uppercase text-primary mb-4">
            Questions
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl">
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
                className="bg-muted/30 rounded-lg px-6 border-none"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5 text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
