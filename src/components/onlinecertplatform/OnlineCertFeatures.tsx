import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { GrDatabase } from "react-icons/gr";
import { IoShieldOutline } from "react-icons/io5";
import { PiPathBold } from "react-icons/pi";
import { FaFingerprint } from "react-icons/fa";
import { TbCertificate, TbTruckDelivery } from "react-icons/tb";

export const OnlineCertFeatures = () => {
  const CERT_DATA = [
    {
      icon: TbCertificate,
      title: "Secure Online Certification",
      description:
        "Implement top-tier proctoring technology to maintain the integrity of your certification programs, ensuring that all assessments are conducted fairly and securely.",
    },
    {
      icon: GrDatabase,
      title: "Real-Time Performance Tracking",
      description:
        "Monitor candidate progress and performance in real-time, allowing for immediate insights and timely interventions during the certification process.",
    },
    {
      icon: IoShieldOutline,
      title: "Data Security and Compliance",
      description:
        "Ensure that all candidate data is securely encrypted and stored, adhering to industry standards for data protection and compliance.",
    },
    {
      icon: PiPathBold,
      title: "Customizable Certification Paths",
      description:
        "Design and deliver certification programs that are tailored to the specific needs of your organization, with customizable content and assessment methods.",
    },
    {
      icon: FaFingerprint,
      title: "Comprehensive Proctoring Options",
      description:
        "Choose from a range of proctoring options, including AI-driven automated proctoring and live human oversight, to best suit your certification requirements.",
    },
    {
      icon: TbTruckDelivery,
      title: "Flexible Delivery Formats",
      description:
        "Offer certifications through an online platform with options for both digital and paper-based assessments, providing flexibility to meet diverse needs.",
    },
  ];
  return (
    <Card className="my-16 shadow-xl">
      <CardHeader>
        <CardTitle className="py-4 px-4 lg:px-16 text-xl font-semibold">
          Comprehensive Certification Platform with Top-Tier Security &
          Proctoring
        </CardTitle>
        <CardDescription>
          Deliver Seamless, Secure, and Scalable Certification Programs with
          Confidence
        </CardDescription>
      </CardHeader>
      <div className="mb-8">
        <div className="grid grid-cols-2 lg:grid-cols-3 px-4 gap-4">
          {CERT_DATA.map((point, index) => (
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
      <CardFooter className="flex justify-center gap-2">
        <Button size="sm" variant="outline">
          Schedule Demo
        </Button>
        <Button size="sm">Start Free Trail</Button>
      </CardFooter>
    </Card>
  );
};
