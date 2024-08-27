import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { PiThumbsUpBold } from "react-icons/pi";
import SECURE_DATA_SVG from "../../../assets/illustrations/SECURE_DATA_SVG.svg";
import ADMIN_DASH_SVG from "../../../assets/illustrations/ADMIN_DASH_SVG.svg";

export const TechnologyKeyPoints = () => {
  const TECH_DETAILS_SECURITY = [
    "Advanced encryption ensures all data is securely transmitted and stored, protecting sensitive information from unauthorized access.",
    "AI-driven proctoring monitors exams in real-time, automatically detecting and preventing cheating.",
    "Our platform operates on a highly reliable cloud infrastructure, ensuring 99.9% uptime and uninterrupted exam sessions.",
    "Comprehensive audit logs track all activities during the exam, providing transparency and accountability.",
  ];
  const TECH_DETAILS_USER_EXPERIENCE = [
    "User-friendly interface designed for easy navigation, reducing the learning curve for both students and educators.",
    "The platform supports scalable exam delivery, capable of handling thousands of simultaneous users without performance degradation.",
    "Seamless integration with existing LMS systems allows for a smooth transition to online assessments.",
    "Responsive design ensures a consistent experience across all devices, from desktops to mobile phones.",
  ];

  return (
    <Card className="px-4 py-6 my-8 shadow-lg">
      <CardTitle className="py-6 text-2xl font-semibold px-16">
        Technical details
      </CardTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2  items-center gap-4 text-left p-4">
        <img src={SECURE_DATA_SVG} className="" />
        <div>
          <div className="pt-4">
            <div className="flex flex-col gap-4">
              {TECH_DETAILS_SECURITY.map((detail: string, index) => (
                <div className="flex gap-2 items-center">
                  <div className="text-md">
                    <PiThumbsUpBold />
                  </div>
                  <p key={index} className="text-sm text-slate-500">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  items-center gap-4 text-left p-4">
        <div>
          <div className="pt-4">
            <div className="flex flex-col gap-4">
              {TECH_DETAILS_USER_EXPERIENCE.map((detail: string, index) => (
                <div className="flex gap-2 items-center">
                  <div className="text-md">
                    <PiThumbsUpBold />
                  </div>
                  <p key={index} className="text-sm text-slate-500">
                    {detail},
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <img src={ADMIN_DASH_SVG} className="order-first md:order-last" />
      </div>
      <Button>Schedule Demo</Button>
    </Card>
  );
};
