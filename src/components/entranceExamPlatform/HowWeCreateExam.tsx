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
  const HOW_WE_CREATE_DETAILS = [
    {
      title: "Online Examination Platform",
      description:
        "A comprehensive solution for conducting exams online, offering secure and scalable options for all your testing needs.",
    },
    {
      title: "Entrance Exam Platform",
      description:
        "Tailored specifically for entrance exams, our platform provides a smooth, stress-free experience for both institutions and candidates.",
    },
    {
      title: "Semester Exam Platform",
      description:
        "Streamline your semester exams with our platform, designed to handle large volumes of students while ensuring fairness and integrity.",
    },
    {
      title: "Online Evaluation System",
      description:
        "Automate grading and provide instant feedback with our advanced online evaluation system, making assessment quicker and more accurate.",
    },
  ];
  return (
    <Card className="px-4 py-6 my-8 shadow-lg">
      <CardTitle className="py-6 sm:px-8 lg:px-16 text-2xl font-semibold">
        How We Create Successful Online Entrance Exams For You
      </CardTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {HOW_WE_CREATE_DETAILS.map(
          (card: { title: string; description: string }, index) => (
            <Card key={index} className="text-left p-2 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
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
          )
        )}
      </div>
    </Card>
  );
};
