import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconType } from "react-icons";
import SEM_FEAT_SVG from "../../../assets/illustrations/SEM_FEAT_SVG.svg";

import { PiExam } from "react-icons/pi";
import { SiOpenai } from "react-icons/si";
import { FaChalkboardTeacher } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";

export const FeaturesWithVideoCard = () => {
  const SEM_FEAT_DATA = [
    {
      icon: PiExam,
      title: "Comprehensive Exam Management",
      description:
        "Manage all aspects of your semester exams seamlessly, from scheduling to grading, all within one intuitive platform.",
    },
    {
      icon: SiOpenai,
      title: "AI-Driven Proctoring",
      description:
        "Ensure the integrity of your exams with advanced AI-based proctoring that detects and prevents any form of cheating.",
    },
    {
      icon: FaChalkboardTeacher,
      title: "Real-Time Monitoring and Analytics",
      description:
        "Gain insights and monitor exams in real-time, enabling you to make informed decisions quickly and efficiently.",
    },
    {
      icon: VscFeedback,
      title: "Instant Grading and Feedback",
      description:
        "Provide students with immediate results and feedback, enhancing their learning experience and reducing administrative workload.",
    },
  ];

  return (
    <Card className="px-4 py-6 my-8 shadow-lg">
      <CardHeader>
        <CardTitle>
          Man2Web | TrExa Delivers a Reliable and Comprehensive Solution for
          End-to-End Virtual Semester Exams.
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 lg:grid-cols-2  gap-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SEM_FEAT_DATA.map(
            (
              feature: { icon: IconType; title: string; description: string },
              index
            ) => (
              <Card key={index}>
                <CardHeader className="text-left">
                  <feature.icon />
                  <CardTitle className="text-md font-semibold">
                    {feature.title}
                  </CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            )
          )}
        </div>
        <img src={SEM_FEAT_SVG} className="order-first lg:order-last" />
      </CardContent>
    </Card>
  );
};
