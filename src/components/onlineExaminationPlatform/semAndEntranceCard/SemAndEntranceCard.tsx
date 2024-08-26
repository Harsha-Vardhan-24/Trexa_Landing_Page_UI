import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MdArrowRightAlt } from "react-icons/md";

export const SemAndEntranceCard = () => {
  return (
    <section className="my-16">
      <h1 className="py-8 sm:px-8 lg:px-16 lg:text-2xl font-semibold">
        Conduct Seamless Virtual Semester and Entrance Exams with Our Advanced
        Online Platform
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="text-left p-2 shadow-lg">
          <CardHeader>
            <CardTitle>Virtual Semester Exam Solution</CardTitle>
            <CardDescription>
              Streamline your semester exams with our secure, user-friendly
              online platform. Experience hassle-free exam management, real-time
              monitoring, and instant grading—all in one place.
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
        <Card className="text-left p-2 shadow-lg">
          <CardHeader>
            <CardTitle>Entrance Exam Solution</CardTitle>
            <CardDescription>
              Simplify your entrance exams with our robust online solution. From
              candidate registration to automated grading, manage everything
              efficiently and at a lower cost.
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
      </div>
    </section>
  );
};
