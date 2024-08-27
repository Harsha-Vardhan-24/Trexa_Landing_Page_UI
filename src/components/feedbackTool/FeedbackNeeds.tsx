import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const FeedbackNeeds = () => {
  const FEEDBACK_TOOL_CONTENT = [
    {
      title: "Actionable Insights",
      description:
        "Transform raw feedback data into actionable insights that help identify strengths, areas for improvement, and development opportunities for employees.",
    },
    {
      title: "Customizable Feedback Templates",
      description:
        "Tailor feedback forms to meet the specific needs of your organization, ensuring that the questions and evaluation criteria align with your goals.",
    },
    {
      title: "Real-Time Feedback Reports",
      description:
        "Generate comprehensive reports in real-time, allowing managers and HR teams to make informed decisions based on up-to-date and accurate feedback.",
    },
    {
      title: "Continuous Development Support",
      description:
        "Use ongoing feedback to support employee growth and development, fostering a culture of continuous improvement within your organization.",
    },
  ];

  return (
    <Card className="px-4 py-6 my-8 shadow-lg">
      <CardHeader className="py-6 ">
        <CardTitle className="px-4 lg:px-16 text-xl lg:text-2xl font-semibold">
          The Complete Solution for All Your 360-Degree Feedback Requirements
        </CardTitle>
      </CardHeader>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {FEEDBACK_TOOL_CONTENT.map(
          (data: { title: string; description: string }, index) => (
            <Card key={index} className="text-left p-2 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">{data.title}</CardTitle>
                <CardDescription>{data.description}</CardDescription>
              </CardHeader>
            </Card>
          )
        )}
      </div>
      <CardFooter className="flex justify-center gap-2 pt-4">
        <Button size="sm" variant="outline">
          Schedule Demo
        </Button>
        <Button size="sm">Start Free Trail</Button>
      </CardFooter>
    </Card>
  );
};
