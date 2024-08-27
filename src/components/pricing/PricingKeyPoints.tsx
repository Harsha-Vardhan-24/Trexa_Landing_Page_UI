import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import PRICING_SVG from "../../assets/illustrations/PRICING_SVG.svg";

export const PricingKeyPoints = () => {
  const LICENSE_BENEFITS = [
    "Unlimited Exam Creation: Easily create and manage as many exams as your institution needs, without any restrictions.",

    "Flexible User Management: Add or remove students, teachers, and administrators with ease, ensuring seamless access control.",

    "Comprehensive Support: Access dedicated customer support to assist with any technical or administrative issues.",

    "Detailed Reporting: Gain insights into exam performance with comprehensive analytics and reporting features.",
  ];

  return (
    <Card className="px-4 py-6 my-8 shadow-lg">
      <CardTitle className="py-6 text-2xl font-semibold px-16">
        Pricing details
      </CardTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 text-left p-4">
        <img src={PRICING_SVG} className="" />
        <div>
          <div className="pt-4">
            <div className="flex flex-col gap-4">
              <h1 className="font-semibold text-xl">
                A license for your school or university
              </h1>
              <ul className="flex flex-col list-disc mx-2 gap-2">
                {LICENSE_BENEFITS.map((benifit: string, index) => (
                  <li key={index} className="text-sm text-slate-500">
                    {benifit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Button>Schedule Demo</Button>
    </Card>
  );
};
