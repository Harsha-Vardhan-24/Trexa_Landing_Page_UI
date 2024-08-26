import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const BehavioralTestingFAQ = () => {
  const BEHAVIORAL_DATA = [
    {
      question: "How are behavioral assessments conducted?",
      answer:
        "Behavioral assessments are conducted using simulated work scenarios where candidates are required to demonstrate their skills in real-life organizational situations. These assessments are designed to evaluate key competencies such as decision-making, teamwork, and leadership.",
    },
    {
      question: "What types of behaviors are evaluated?",
      answer:
        "Our behavioral assessments evaluate a wide range of competencies, including communication skills, problem-solving abilities, emotional intelligence, adaptability, and leadership potential. Each assessment is tailored to measure the specific behaviors relevant to the role.",
    },
    {
      question: "Can behavioral assessments be customized?",
      answer:
        "Yes, our platform allows full customization of behavioral assessments to align with your organization's specific requirements. You can tailor the scenarios, competencies measured, and even the assessment format to suit your needs.",
    },
    {
      question: "How are the results of behavioral assessments presented?",
      answer:
        "Results are provided in detailed reports that highlight the candidate's strengths and areas for improvement. These reports include a breakdown of performance across different competencies and provide actionable insights for making informed decisions.",
    },
  ];

  return (
    <section className="px-4 py-6 my-8">
      <div className="col-span-2 py-8 px-8">
        <h1 className="text-2xl text-center font-semibold">
          Frequently Asked Questions(FAQs)
        </h1>
        <div>
          <Accordion
            type="single"
            collapsible
            className="w-full lg:px-16 py-4 text-left"
          >
            {BEHAVIORAL_DATA.map(
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
      </div>
    </section>
  );
};
