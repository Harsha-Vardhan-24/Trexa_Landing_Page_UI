import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CiChat2 } from "react-icons/ci";
import { PiThumbsUpBold } from "react-icons/pi";

export const SecureProctorFeatures = () => {
  return (
    <Card className="my-16 shadow-xl">
      <CardHeader>
        <CardTitle className="py-4 text-xl font-semibold px-16">
          Proctoring Inside Your LMS Doesn’t Get Easier
        </CardTitle>
        <CardDescription>
          Introducing Our Chrome-Based Extension For Moodle, Canvas And Others
        </CardDescription>
      </CardHeader>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <Card key={index} className="text-left p-4 shadow-sm">
            <CardHeader>
              <div className="text-4xl">
                <CiChat2 />
              </div>
              <CardTitle className="font-xl">
                100% Cheating Free Exams
              </CardTitle>
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex gap-2">
                  <div className="font-md pt-2">
                    <PiThumbsUpBold />
                  </div>
                  <CardDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </CardDescription>
                </div>
              ))}
            </CardHeader>
          </Card>
        ))}
      </div>
      <CardFooter className="flex justify-center gap-2 py-4">
        <Button size="sm" variant="outline">
          Schedule Demo
        </Button>
        <Button size="sm">Start Free Trail</Button>
      </CardFooter>
    </Card>
  );
};
