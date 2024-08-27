import { BsShield } from "react-icons/bs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const PricingFAQ = () => {
  const PRICING_DATA = [
    {
      question: "How does your pricing structure work?",
      answer:
        "Our pricing is straightforward and cost-effective, charging per student. This model ensures that you only pay for what you use, offering significant savings compared to traditional methods of exam administration.",
    },
    {
      question: "Can I customize my pricing plan?",
      answer:
        "Yes, our platform allows flexibility in customizing your plan. You can adjust the number of students, features, and services to meet your specific needs and budget, ensuring you get the most value out of our platform.",
    },
    {
      question: "How can I calculate the cost for my organization?",
      answer:
        "You can use Trexa's price calculator to estimate the total cost based on the number of students and the specific features you choose. This helps you understand the pricing structure and plan your budget accordingly.",
    },
    {
      question: "How does your pricing compare to traditional methods?",
      answer:
        "Our per-student pricing model is designed to be more affordable than traditional methods. By eliminating the need for physical resources and simplifying administration, our platform offers a more efficient and economical solution.",
    },
  ];

  return (
    <section className="px-4 py-6 my-8">
      <div className="col-span-2 py-8 px-8">
        <h1 className="text-2xl text-center font-semibold">
          Frequently Asked Questions(FAQs)
        </h1>
        <Accordion
          type="single"
          collapsible
          className="w-full lg:px-16 py-4 text-left"
        >
          {PRICING_DATA.map(
            (data: { question: string; answer: string }, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="text-left"
              >
                <AccordionTrigger className="text-left">
                  {data.question}
                </AccordionTrigger>
                <AccordionContent>{data.answer}</AccordionContent>
              </AccordionItem>
            )
          )}
        </Accordion>
      </div>
    </section>
  );
};
