import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { BiCustomize } from "react-icons/bi";
import { TbAutomaticGearbox, TbWorldLongitude } from "react-icons/tb";
import { MdOutlinePriceCheck } from "react-icons/md";
import { IconType } from "react-icons";
import {
  FaChalkboardTeacher,
  FaLaptop,
  FaRegUser,
  FaShieldAlt,
} from "react-icons/fa";

export const AptitudeDifferentTypes = () => {
  const WHY_TREXA = [
    {
      icon: FaShieldAlt,
      text: "Top-Tier Security",
    },
    {
      icon: BiCustomize,
      text: "Flexible Exam Structures",
    },
    {
      icon: FaRegUser,
      text: "Intuitive User Interface",
    },
    {
      icon: FaChalkboardTeacher,
      text: "Real-Time Proctoring",
    },
    {
      icon: TbAutomaticGearbox,
      text: "Automatic Grading",
    },
    {
      icon: TbWorldLongitude,
      text: "Scalable for Any Class Size",
    },
    {
      icon: FaLaptop,
      text: "Paperless Examination",
    },
    {
      icon: MdOutlinePriceCheck,
      text: "Cost-Effective Solution",
    },
  ];
  return (
    <Card className="px-4 py-6 my-8 shadow-lg">
      <CardHeader className="text-left lg:text-center">
        <CardTitle className="font-bold tracking-tighter">
          Comprehensive Online Aptitude Tests for Every Need
        </CardTitle>
        <CardDescription>
          Man2Web | TrExa offers a range of scientifically validated and
          ready-to-use online aptitude tests designed to accurately assess
          candidate suitability and potential for success. Our aptitude exams
          also play a crucial role in identifying and nurturing the leaders of
          tomorrow.
        </CardDescription>
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
