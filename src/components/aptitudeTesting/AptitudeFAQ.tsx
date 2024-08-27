import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const AptitudeFAQ = () => {
  const APTITUDE_DATA = [
    {
      question: "How are aptitude tests conducted?",
      answer:
        "Aptitude tests are conducted online through a series of timed questions designed to assess cognitive abilities such as numerical reasoning, logical thinking, and problem-solving skills. Candidates are evaluated based on their accuracy and speed in answering these questions.",
    },
    {
      question: "What types of skills are evaluated in aptitude tests?",
      answer:
        "Our aptitude tests evaluate a range of cognitive skills, including numerical reasoning, verbal reasoning, logical reasoning, spatial awareness, and abstract thinking. These skills are crucial indicators of a candidate’s ability to succeed in various roles.",
    },
    {
      question: "Can aptitude tests be customized?",
      answer:
        "Yes, our platform allows full customization of aptitude tests to meet the specific needs of your organization. You can select the types of questions, difficulty levels, and time limits that align with your recruitment or development goals.",
    },
    {
      question: "How are the results of aptitude tests presented?",
      answer:
        "Results are presented in detailed reports that provide a comprehensive analysis of the candidate's cognitive abilities. The reports include scores for each test category, comparative benchmarks, and insights into the candidate’s potential for success in the role.",
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
          {APTITUDE_DATA.map(
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
