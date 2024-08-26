import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconType } from "react-icons";

import { FaChalkboardTeacher } from "react-icons/fa";
import { TbEyeSearch } from "react-icons/tb";
import { IoLaptopOutline } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
import { FaArrowUpShortWide } from "react-icons/fa6";
import { SiOpenai } from "react-icons/si";

export const ExamFeatues = () => {
  const EXAM_FEAT = [
    {
      icon: TbEyeSearch,
      title: "100% Cheat-Free Exams",
      description:
        "Ensure the integrity of your exams with our advanced security measures, designed to eliminate cheating and maintain fairness throughout the testing process.",
    },
    {
      icon: FaChalkboardTeacher,
      title: "AI-Based Proctoring",
      description:
        "Utilize cutting-edge AI technology to monitor exams in real-time, detecting any suspicious behavior and ensuring a secure exam environment.",
    },
    {
      icon: IoLaptopOutline,
      title: "Easy-to-Use Interface",
      description:
        "Our intuitive interface makes it simple for both exam administrators and test-takers to navigate and manage exams with minimal effort.",
    },
    {
      icon: FaUserEdit,
      title: "Create Exams However You Like",
      description:
        "Design your exams with complete flexibility, from question types to exam settings, to meet the specific needs of your institution or organization.",
    },
    {
      icon: FaArrowUpShortWide,
      title: "Wide Range of Questions to Choose From",
      description:
        "Access a vast library of questions across various subjects and difficulty levels, allowing you to build comprehensive and challenging exams.",
    },
    {
      icon: SiOpenai,
      title: "Generate Questions Using AI",
      description:
        "Leverage AI to automatically generate diverse and relevant questions, helping you create exams quickly while maintaining high standards of quality.",
    },
  ];

  return (
    <Card className="my-16 shadow-xl">
      <CardHeader>
        <CardTitle className="py-4 sm:px-8 lg:px-16 text-xl font-semibold">
          Conduct Online Exams On Our Platform With Ease At An Unmatched Scale
        </CardTitle>
        <CardDescription>
          Use Our Robust Exam Software With Integrated Tools And
          Industry-leading Features
        </CardDescription>
      </CardHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {EXAM_FEAT.map(
          (
            feature: { icon: IconType; title: string; description: string },
            index
          ) => (
            <Card key={index} className="text-left p-4 shadow-sm">
              <CardHeader>
                <div className="text-4xl">
                  <feature.icon />
                </div>
                <CardTitle className="font-xl">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
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
