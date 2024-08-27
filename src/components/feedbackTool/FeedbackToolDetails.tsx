import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { IconType } from "react-icons";
import { BiCustomize } from "react-icons/bi";
import { MdBrowserUpdated } from "react-icons/md";
import { PiChalkboardTeacherFill } from "react-icons/pi";
import { VscFeedback } from "react-icons/vsc";

export const FeedbackToolDetails = () => {
  const FEEDBACK_TOOL_CONTENT = [
    {
      icon: VscFeedback,
      title: "360-Degree Feedback",
      description:
        "Gather comprehensive insights from peers, managers, and subordinates to provide a well-rounded evaluation of employee performance.",
    },
    {
      icon: BiCustomize,
      title: "Customizable Feedback Templates",
      description:
        "Tailor feedback forms to fit your organization's specific needs, ensuring relevant and targeted evaluations.",
    },
    {
      icon: MdBrowserUpdated,
      title: "Real-Time Feedback Reports",
      description:
        "Generate instant feedback reports that offer actionable insights, helping employees improve continuously.",
    },
    {
      icon: PiChalkboardTeacherFill,
      title: "Anonymous Feedback Option",
      description:
        "Enable anonymous feedback to ensure honest and candid responses, fostering a culture of trust and open communication.",
    },
  ];

  return (
    <Card className="my-16 shadow-xl">
      <CardHeader>
        <CardTitle className="py-4 px-4 lg:px-16 text-xl font-semibold ">
          Comprehensive Feedback Tool for Continuous Employee Development
        </CardTitle>
        <CardDescription>
          Facilitate Meaningful and Actionable Feedback to Drive Growth and
          Improvement
        </CardDescription>
      </CardHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {FEEDBACK_TOOL_CONTENT.map(
          (
            data: { icon: IconType; title: string; description: string },
            index
          ) => (
            <Card key={index} className="text-left p-4 shadow-sm">
              <CardHeader>
                <div className="text-4xl">
                  <data.icon />
                </div>
                <CardTitle className="font-xl">{data.title}</CardTitle>
                <CardDescription>{data.description} </CardDescription>
              </CardHeader>
            </Card>
          )
        )}
      </div>
      <CardFooter className="flex justify-center gap-2">
        <Button size="sm" variant="outline">
          Schedule Demo
        </Button>
        <Button size="sm">Start Free Trail</Button>
      </CardFooter>
    </Card>
  );
};
