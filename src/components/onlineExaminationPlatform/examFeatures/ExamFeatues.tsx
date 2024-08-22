import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CiChat2 } from "react-icons/ci";

export const ExamFeatues = () => {
  return (
    <Card className="my-16 shadow-xl">
      <CardHeader>
        <CardTitle className="py-4 text-xl font-semibold px-16">
          Conduct Online Exams On Our Platform With Ease At An Unmatched Scale
        </CardTitle>
        <CardDescription>
          Use Our Robust Exam Software With Integrated Tools And
          Industry-leading Features
        </CardDescription>
      </CardHeader>
      <div className="grid grid-cols-3 gap-4 p-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} className="text-left p-4 shadow-sm">
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
        <Button size="sm" variant="outline">
          Schedule Demo
        </Button>
        <Button size="sm">Start Free Trail</Button>
      </CardFooter>
    </Card>
  );
};
