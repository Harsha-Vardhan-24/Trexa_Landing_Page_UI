import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import OFFLINE_EXAM_SVG from "../../assets/illustrations/OFFLINE_EXAM_SVG.svg";
import ONLINE_TEST_SVG from "../../assets/illustrations/ONLINE_TEST_SVG.svg";

export const FeedbackToolFeatures = () => {
  const ONLINE_EXAM_BENEFITS = [
    {
      title: "Why Move Exams Online?",
      image: OFFLINE_EXAM_SVG,
      keyPoints: [
        "Increased Accessibility: Students can take exams from anywhere, eliminating the need for physical presence and reducing logistical challenges.",
        "Enhanced Security: Advanced proctoring tools ensure a cheat-free environment, maintaining the integrity of the examination process.",
        "Cost Efficiency: Reduces the costs associated with physical exam centers, paper, and administration, making the process more economical for institutions.",
      ],
    },
    {
      title: "Why Choose Our Product?",
      image: ONLINE_TEST_SVG,
      keyPoints: [
        "Comprehensive Solution: Our platform offers a seamless, end-to-end solution for managing online exams, from scheduling to grading and feedback.",
        "User-Friendly Interface: Designed with both students and administrators in mind, our intuitive interface makes the transition to online exams smooth and hassle-free.",
        "Scalable and Reliable: Whether you’re handling a small class or a large university, our system is built to scale effortlessly, providing consistent performance.",
      ],
    },
  ];

  return (
    <Card className="px-4 py-6 my-8 shadow-lg">
      <CardHeader>
        <CardTitle className="font-bold tracking-tighter">
          We Offer an Integrated System for Universities and Educational
          Institutions to Move Their Exams Online
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {ONLINE_EXAM_BENEFITS.map((_, index) => {
            return (
              <Card key={index} className="shadow-sm text-left pb-4">
                <div className="flex flex-col">
                  <img
                    src={ONLINE_EXAM_BENEFITS[index].image}
                    className="max-h-[300px] rounded-t-lg"
                  />
                  <div className="pl-6 pr-1">
                    <h1 className="text-mdh1py-2 py-2 font-semibold tracking-tight">
                      {ONLINE_EXAM_BENEFITS[index].title}
                    </h1>
                    <ul className="flex flex-col list-disc mx-2 gap-2">
                      {ONLINE_EXAM_BENEFITS[index].keyPoints.map(
                        (point: string, index) => (
                          <li key={index} className="text-sm text-slate-500">
                            {point}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        <CardFooter className="flex justify-center gap-2 pt-4">
          <Button size="sm" variant="outline">
            Schedule Demo
          </Button>
          <Button size="sm">Start Free Trail</Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
};
