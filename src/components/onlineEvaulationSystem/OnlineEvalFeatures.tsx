import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import EVAL_STUDENT_SVG from "../../assets/illustrations/EVAL_STUDENT_SVG.svg";
import EVAL_ADMIN_SVG from "../../assets/illustrations/EVAL_ADMIN_SVG.svg";
import EVAL_ORG_SVG from "../../assets/illustrations/EVAL_ORG_SVG.svg";

export const OnlineEvalFeatures = () => {
  const FEAT_DATA = [
    {
      image: EVAL_ORG_SVG,
      title: "For Organizations",
      keypoints: [
        "Cost-Effective: Reduce expenses associated with physical exam centers, printing, and logistics.",
        "Scalable Solutions: Easily scale exams to accommodate thousands of candidates simultaneously.",
        "Enhanced Security: Leverage advanced proctoring and security features to ensure exam integrity.",
      ],
    },
    {
      image: EVAL_ADMIN_SVG,
      title: "For Administrators",
      keypoints: [
        "Streamlined Processes: Automate exam scheduling, grading, and result distribution to save time.",
        "Real-Time Monitoring: Keep track of exam progress and candidate behavior in real-time.",
        "Data-Driven Insights: Access detailed analytics and reports to improve exam management and outcomes.",
      ],
    },
    {
      image: EVAL_STUDENT_SVG,
      title: "For Students",
      keypoints: [
        "Convenience: Take exams from any location, eliminating the need for travel and accommodation.",
        "Immediate Results: Receive instant feedback and results, reducing anxiety and wait times.",
        "Flexible Scheduling: Choose exam times that fit their personal schedules, improving accessibility.",
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {FEAT_DATA.map(
            (
              data: { image: string; title: string; keypoints: string[] },
              index
            ) => {
              return (
                <Card key={index} className="shadow-sm text-left pb-4">
                  <div className="flex flex-col">
                    <img src={data.image} />
                    <div className="pl-6 pr-1">
                      <h1 className="text-mdh1py-2 py-2 font-semibold tracking-tight">
                        {data.title}
                      </h1>
                      <ul className="flex flex-col list-disc mx-2 gap-2">
                        {data.keypoints.map((point: string, index) => (
                          <li key={index} className="text-sm text-slate-500">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              );
            }
          )}
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
