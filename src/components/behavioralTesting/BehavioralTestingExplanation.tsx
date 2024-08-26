import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { RiCameraLensFill } from "react-icons/ri";
import { GrDatabase } from "react-icons/gr";
import { IoPeopleOutline, IoShieldOutline } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import { FaRegPenToSquare } from "react-icons/fa6";

export const BehavioralTestingExplanation = () => {
  const BEHAVIORAL_TOOLS_DATA = [
    {
      type: "Online Behavioral Tools",
      points: [
        {
          icon: RiCameraLensFill,
          title: "100% Cheating-Free Exams",
          description:
            "Leverage advanced proctoring technology to ensure complete integrity during online assessments.",
        },
        {
          icon: GrDatabase,
          title: "Real-Time Monitoring",
          description:
            "Track candidate responses and behaviors in real-time to gain instant insights into their performance.",
        },
        {
          icon: IoShieldOutline,
          title: "Secure Data Handling",
          description:
            "All candidate data is securely stored and processed, ensuring confidentiality and compliance with regulations.",
        },
      ],
    },
    {
      type: "Offline Behavioral Tools",
      points: [
        {
          icon: IoPeopleOutline,
          title: "Controlled Testing Environment",
          description:
            "Conduct assessments in a controlled environment to minimize distractions and ensure focused participation.",
        },
        {
          icon: SiGoogleclassroom,
          title: "Manual Proctoring",
          description:
            "Utilize trained proctors to oversee the assessment process, maintaining high standards of integrity.",
        },
        {
          icon: FaRegPenToSquare,
          title: "Paper-Based or Digital Options",
          description:
            "Choose between traditional paper-based assessments or digital tools, depending on your specific needs.",
        },
      ],
    },
  ];
  return (
    <Card className="my-16 shadow-xl">
      <CardHeader>
        <CardTitle className="py-4 px-2 lg:px-16 text-xl font-semibold ">
          Measure Critical Competencies With The Best Behavioral Assessment
          Tools
        </CardTitle>
      </CardHeader>
      {BEHAVIORAL_TOOLS_DATA.map((item, index) => (
        <div key={index} className="mb-8">
          <h1 className="col-span-3 text-xl font-semibold mb-4">{item.type}</h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 px-4 gap-4">
            {item.points.map((point, index) => (
              <Card
                key={index}
                className="text-left p-4 shadow-sm col-span-3 md:col-span-1"
              >
                <CardHeader>
                  <div className="text-4xl">
                    <point.icon />
                  </div>
                  <CardTitle className="font-xl">{point.title}</CardTitle>
                  <CardDescription>{point.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      ))}

      <CardFooter className="flex justify-center gap-2">
        <Button size="sm">Schedule Demo</Button>
      </CardFooter>
    </Card>
  );
};
