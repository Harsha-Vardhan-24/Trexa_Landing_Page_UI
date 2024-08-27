import { IconType } from "react-icons";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { BsCodeSquare } from "react-icons/bs";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { PiChalkboardTeacher } from "react-icons/pi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { GrTools } from "react-icons/gr";
import { GoTools } from "react-icons/go";
import { FaRegBuilding } from "react-icons/fa";

export const OnlineCertFeaturesList = () => {
  const CERTIFICATION_TYPES = [
    {
      icon: HiOutlineAcademicCap,
      title: "Academic Certifications",
    },
    {
      icon: BsCodeSquare,
      title: "IT and Software Certifications",
    },
    {
      icon: PiChalkboardTeacher,
      title: "Professional Development Certifications",
    },
    {
      icon: FaRegBuilding,
      title: "Corporate Training Certifications",
    },
    {
      icon: MdOutlineHealthAndSafety,
      title: "Healthcare and Medical Certifications",
    },
    {
      icon: GrTools,
      title: "Legal and Compliance Certifications",
    },
    {
      icon: GoTools,
      title: "Technical and Vocational Certifications",
    },
    {
      icon: GoTools,
      title: "Environmental and Safety Certifications",
    },
  ];

  return (
    <Card className="px-4 py-6 my-8 shadow-lg">
      <CardHeader>
        <CardTitle className="font-bold tracking-tighter">
          The platform supports all types of certification programs
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {CERTIFICATION_TYPES.map(
            (type: { icon: IconType; title: string }, index) => {
              return (
                <div key={index} className="p-4">
                  <div className="flex flex-col items-center">
                    <div className="p-2 text-4xl">
                      <type.icon />
                    </div>
                    <p className="text-sm font-semibold tracking-tight">
                      {type.title}
                    </p>
                  </div>
                </div>
              );
            }
          )}
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
