import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { IconType } from "react-icons";

import { FaShieldAlt } from "react-icons/fa";
import { BiCustomize } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaStackExchange } from "react-icons/fa";
import { TbWorldLongitude } from "react-icons/tb";
import { FaFileSignature } from "react-icons/fa6";
import { MdOutlinePriceCheck } from "react-icons/md";

export const WhyEntranceExamTrexa = () => {
  const WHY_TREXA = [
    {
      icon: FaShieldAlt,
      text: "Cutting-Edge Security",
    },
    {
      icon: BiCustomize,
      text: "Customizable Exam Formats",
    },
    {
      icon: FaUserAlt,
      text: "User-Friendly Interface",
    },
    {
      icon: FaChalkboardTeacher,
      text: "Real-Time Monitoring and Analytics",
    },
    {
      icon: FaStackExchange,
      text: "Instant Grading and Feedback",
    },
    {
      icon: TbWorldLongitude,
      text: "Scalable and Reliable",
    },
    {
      icon: FaFileSignature,
      text: "Eco-Friendly Solution",
    },
    {
      icon: MdOutlinePriceCheck,
      text: "Affordable Pricing",
    },
  ];

  return (
    <Card className="px-4 py-6 my-8 shadow-lg">
      <CardHeader>
        <CardTitle className="font-bold tracking-tight">
          Why Man2Web | TrExa Is The Best Partner For Your Virtual Entrance
          Examination Needs
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {WHY_TREXA.map((reason: { icon: IconType; text: string }, index) => {
            return (
              <div key={index} className="p-4">
                <div className="flex flex-col items-center">
                  <div className="p-2 text-4xl">
                    <reason.icon />
                  </div>
                  <p className="text-sm font-semibold tracking-tight">
                    {reason.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <CardFooter className="flex justify-center gap-2 pt-4">
          <Button size="sm" variant="outline">
            Schedule Demo
          </Button>
          <Button size="sm">Start Free Trail</Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
};
