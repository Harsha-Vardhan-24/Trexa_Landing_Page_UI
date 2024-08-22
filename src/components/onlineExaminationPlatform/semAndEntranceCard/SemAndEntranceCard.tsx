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
      <h1 className="py-8 text-2xl font-semibold px-16">
        We Conduct Virtual Semester and Entrance Exams Worldwide, Using Our
        Robust Online Exam Platform
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <Card className="text-left p-2 shadow-lg">
          <CardHeader>
            <CardTitle>Semester Exam Solution</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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
            <CardTitle>Semester Exam Solution</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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
