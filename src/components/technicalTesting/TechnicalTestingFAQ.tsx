import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const TechnicalTestingFAQ = () => {
  const TECHNICAL_DATA = [
    {
      question: "How are technical tests conducted?",
      answer:
        "Technical tests are conducted online using a variety of formats, including coding challenges, simulations, and problem-solving tasks. These tests are designed to evaluate a candidate's technical skills, such as programming, system design, and troubleshooting, based on real-world scenarios.",
    },
    {
      question: "What types of skills are evaluated in technical tests?",
      answer:
        "Our technical tests assess a wide range of skills, including coding proficiency, software development, system architecture, networking, and IT support. These skills are essential for determining a candidate’s ability to perform in technical roles across various industries.",
    },
    {
      question: "Can technical tests be customized?",
      answer:
        "Yes, our platform allows full customization of technical tests to align with your organization's specific requirements. You can choose the technologies, difficulty levels, and scenarios that best reflect the demands of the role you are hiring for.",
    },
    {
      question: "How are the results of technical tests presented?",
      answer:
        "Results are presented in detailed reports that provide a comprehensive analysis of the candidate's technical abilities. The reports include scores for each technical category, comparisons with industry benchmarks, and insights into the candidate’s readiness for the role.",
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
          {TECHNICAL_DATA.map(
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
