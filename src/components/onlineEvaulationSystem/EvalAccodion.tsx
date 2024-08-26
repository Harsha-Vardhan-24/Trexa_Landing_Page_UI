import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const EvalAccodion = () => {
  const ACCORD_DATA = [
    {
      question: "How do we evaluate exams?",
      answer:
        "We use a combination of AI-driven algorithms and manual reviews to ensure accurate and fair grading. Our system automatically grades objective questions, while subjective answers are reviewed by experienced educators.",
    },
    {
      question: "What security measures are in place during exams?",
      answer:
        "We employ advanced security protocols including AI-based proctoring, browser lockdown, and real-time monitoring to prevent cheating and ensure the integrity of the exam process.",
    },
    {
      question: "Can exams be customized to our specific needs?",
      answer:
        "Yes, our platform allows complete customization of exams, including question formats, time limits, and proctoring methods, to meet the specific requirements of your institution.",
    },
    {
      question: "How quickly are results available after the exam?",
      answer:
        "Results are available immediately for automatically graded questions. For exams requiring manual review, results are typically released within 24 to 48 hours.",
    },
  ];

  return (
    <section className="px-4 py-6 my-8">
      <div className="col-span-2 py-8 px-2 lg:px-8">
        <h1 className="text-xl lg:text-2xl text-center font-semibold">
          Our Online Paper Checking System Completely Automates Evaluation
          Processes
        </h1>
        <div>
          <Accordion
            type="single"
            collapsible
            className="w-full lg:px-16 py-4 text-left"
          >
            {ACCORD_DATA.map(
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
