import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GoPencil } from "react-icons/go";
import { IoIosLaptop } from "react-icons/io";
import { Button } from "@/components/ui/button";

export const ShowDifferenceCard = () => {
  return (
    <Card className="px-4 py-6 my-8 shadow-lg">
      <CardContent>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div>
            <div className="flex items-center justify-center gap-2 py-2">
              <div>
                <GoPencil />
              </div>
              <h1 className="font-semibold">Traditional Examination</h1>
            </div>
            <Card className="grid grid-cols-2 shadow-md px-2">
              <div className="py-4">
                <div className="py-2">
                  <Badge>Test Taker</Badge>
                </div>
                <CardContent className="flex flex-col gap-2 py-2 text-sm text-left">
                  <ul className="flex flex-col list-disc gap-2">
                    <li>Manually Create Question Paper</li>
                    <li>Physical Invigilation Required</li>
                    <li>Manual Grading Process</li>
                  </ul>
                </CardContent>
              </div>
              <div className="py-4">
                <div className="py-2">
                  <Badge>Test Taker</Badge>
                </div>
                <CardContent className="flex flex-col gap-2 py-2 text-sm text-left">
                  <ul className="flex flex-col list-disc gap-2">
                    <li>Travel to Exam Center</li>
                    <li>Fixed Exam Date/Time</li>
                    <li>Wait Months for Results</li>
                  </ul>
                </CardContent>
              </div>
            </Card>
          </div>
          <h1 className="font-bold">VS</h1>
          <div>
            <div className="flex items-center justify-center gap-2 py-2">
              <div>
                <IoIosLaptop />
              </div>
              <h1 className="font-semibold">Online Examination</h1>
            </div>
            <Card className="grid grid-cols-2 shadow-md px-2">
              <div className="py-4">
                <div className="py-2">
                  <Badge>Test Taker</Badge>
                </div>
                <CardContent className="flex flex-col gap-2 py-2 text-sm text-left">
                  <ul className="flex flex-col list-disc gap-2">
                    <li>Configure Exams Online</li>
                    <li>Automated Invigilation & Proctoring</li>
                    <li>Instant Grading & Feedback</li>
                  </ul>
                </CardContent>
              </div>
              <div className="py-4">
                <div className="py-2">
                  <Badge>Test Taker</Badge>
                </div>
                <CardContent className="flex flex-col gap-2 py-2 text-sm text-left">
                  <ul className="flex flex-col list-disc gap-2">
                    <li>Take Exams Anytime, Anywhere</li>
                    <li>No Need to Travel</li>
                    <li>Immediate Results</li>
                  </ul>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
        <Button className="mt-6">Schedule Demo</Button>
      </CardContent>
    </Card>
  );
};
