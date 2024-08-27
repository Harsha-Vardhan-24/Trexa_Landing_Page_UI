import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FeedbackToolFAQ = () => {
  const FEEDBACK_DATA = [
    {
      question: "How is feedback collected using the tool?",
      answer:
        "Feedback is collected through customizable online forms, allowing peers, managers, and subordinates to provide structured input on various performance metrics. The tool supports anonymous feedback to ensure candid and honest responses.",
    },
    {
      question: "What types of feedback can be gathered?",
      answer:
        "Our feedback tool allows for the collection of a wide range of feedback, including performance reviews, peer assessments, and 360-degree evaluations. The tool can be tailored to focus on specific competencies, behaviors, and development areas relevant to your organization.",
    },
    {
      question: "Can the feedback process be customized?",
      answer:
        "Yes, our platform offers full customization of feedback forms, allowing you to select the criteria, questions, and format that best suit your organization’s needs. You can create different templates for various roles, departments, or feedback objectives.",
    },
    {
      question: "How are feedback results presented?",
      answer:
        "Results are compiled into detailed, easy-to-read reports that highlight key strengths, areas for improvement, and actionable insights. These reports can be shared with individuals or teams to guide personal development and organizational growth.",
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
          {FEEDBACK_DATA.map(
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
