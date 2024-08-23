import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CiChat2 } from "react-icons/ci";

export const BehavioralTestingExplanation = () => {
  return (
    <Card className="my-16 shadow-xl">
      <CardHeader>
        <CardTitle className="py-4 text-xl font-semibold px-16">
          Measure Critical Competencies With The Best Behavioral Assessment
          Tools
        </CardTitle>
      </CardHeader>
      <div className="grid grid-cols-3 gap-4 p-4">
        <h1 className="col-span-3 text-xl font-semibold">
          Online Behavioral Tools
        </h1>
        {Array.from({ length: 3 }).map((_, index) => (
          <Card
            key={index}
            className="text-left p-4 shadow-sm col-span-3 md:col-span-1"
          >
            <CardHeader>
              <div className="text-4xl">
                <CiChat2 />
              </div>
              <CardTitle className="font-xl">
                100% Cheating Free Exams
              </CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
        <h1 className="col-span-3 text-xl font-semibold">
          Offline Behavioral Tools
        </h1>
        {Array.from({ length: 3 }).map((_, index) => (
          <Card
            key={index}
            className="text-left p-4 shadow-sm col-span-3 md:col-span-1"
          >
            <CardHeader>
              <div className="text-4xl">
                <CiChat2 />
              </div>
              <CardTitle className="font-xl">
                100% Cheating Free Exams
              </CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
      <CardFooter className="flex justify-center gap-2">
        <Button size="sm">Schedule Demo</Button>
      </CardFooter>
    </Card>
  );
};
