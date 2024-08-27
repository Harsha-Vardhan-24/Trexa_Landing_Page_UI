import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EXAM_CREATE_SVG from "../../../assets/illustrations/EXAM_CREATE_SVG.svg";
import AI_SVG from "../../../assets/illustrations/AI_SVG.svg";
import ML_SVG from "../../../assets/illustrations/ML_SVG.svg";
import BROWSER_SVG from "../../../assets/illustrations/BROWSER_SVG.svg";
import USER_INTERFACE_SVG from "../../../assets/illustrations/USER_INTERFACE_SVG.svg";
import FEEDBACK_SVG from "../../../assets/illustrations/FEEDBACK_SVG.svg";

export const ToolsContent = () => {
  const EXAM_FEATURES = [
    {
      title: "Advanced Exam Creation Tools",
      image: EXAM_CREATE_SVG,
      points: [
        "Easily design and build exams with our intuitive tools, offering a wide range of question types and customizable templates.",
        "Integrate multimedia resources, such as images, audio, and video, to enhance the examination process and engage students.",
        "Real-time collaboration features allow multiple educators to contribute to the exam creation process seamlessly.",
      ],
    },
    {
      title: "AI-Driven Proctoring",
      image: AI_SVG,
      points: [
        "Our AI-powered proctoring monitors student behavior during exams, detecting suspicious activities and ensuring integrity.",
        "Automated alerts notify administrators of potential cheating, reducing the need for constant supervision.",
        "AI continuously learns and adapts to improve proctoring accuracy, providing a robust security layer for online exams.",
      ],
    },
    {
      title: "Machine Learning Enhancements",
      image: ML_SVG,
      points: [
        "Utilize ML models to analyze patterns in student responses, helping to identify potential learning gaps and areas for improvement.",
        "ML-powered insights provide detailed analytics on exam performance, enabling data-driven decisions for curriculum adjustments.",
        "Adaptive testing capabilities allow exams to adjust in real-time based on student performance, ensuring a personalized assessment experience.",
      ],
    },
    {
      title: "In-Browser Proctoring Functions",
      image: BROWSER_SVG,
      points: [
        "Our platform's in-browser proctoring prevents unauthorized access to external resources, maintaining exam security.",
        "Seamlessly integrates with existing systems, requiring no additional software installations or complicated setups.",
        "Real-time browser monitoring detects and blocks attempts to open new tabs or switch applications, ensuring focus during exams.",
      ],
    },
    {
      title: "User-Friendly Interface",
      image: USER_INTERFACE_SVG,
      points: [
        "Designed with simplicity in mind, our clean and intuitive interface makes it easy for both students and educators to navigate.",
        "Quickly set up and manage exams with minimal technical knowledge required, reducing the learning curve for new users.",
        "Responsive design ensures a smooth experience across all devices, from desktops to mobile phones.",
      ],
    },
    {
      title: "Comprehensive Reporting and Analytics",
      image: FEEDBACK_SVG,
      points: [
        "Generate detailed reports on student performance, proctoring results, and exam metrics with just a few clicks.",
        "Customizable dashboards provide insights at a glance, helping educators make informed decisions quickly.",
        "Export data in various formats for further analysis or integration with other educational tools.",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center gap-4">
          {EXAM_FEATURES.map(
            (
              feature: { title: string; image: string; points: string[] },
              index
            ) => {
              return (
                <Card key={index} className="shadow-sm text-left pb-4">
                  <div className="flex flex-col">
                    <img
                      src={feature.image}
                      className="max-h-[200px] rounded-t-lg p-2"
                    />
                    <div className="pl-6 pr-1">
                      <h1 className="text-mdh1py-2 py-2 font-semibold tracking-tight">
                        {feature.title}
                      </h1>
                      <ul className="flex flex-col list-disc mx-2 gap-2">
                        {feature.points.map((point: string, index) => (
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
