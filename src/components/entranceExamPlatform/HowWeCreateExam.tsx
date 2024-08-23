import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MdArrowRightAlt } from "react-icons/md";

export const HowWeCreateExam = () => {
  return (
    <Card className="px-4 py-6 my-8 shadow-lg">
      <CardTitle className="py-6 text-2xl font-semibold px-16">
        How We Create Successful Online Entrance Exams For You
      </CardTitle>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index} className="text-left p-2 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Semester Exam Solution</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </CardDescription>
              <CardFooter className="p-0">
                <Button variant="outline" className="flex items-center gap-2">
                  <p className="text-left text-sm font-semibold">Explore</p>
                  <div>
                    <MdArrowRightAlt />
                  </div>
                </Button>
              </CardFooter>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Card>
  );
};
