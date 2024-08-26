import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AI_SVG from "../../../assets/illustrations/AI_SVG.svg";
import ML_SVG from "../../../assets/illustrations/ML_SVG.svg";
import BROWSER_SVG from "../../../assets/illustrations/BROWSER_SVG.svg";

import { SiOpenai } from "react-icons/si";
import { GoCpu } from "react-icons/go";
import { FiChrome } from "react-icons/fi";

export const MultiFeatureWithAnimation = () => {
  const PROCTORING_DATA = [
    {
      type: "aiProctoring",
      icon: SiOpenai,
      image: AI_SVG,
      keyPoints: [
        {
          point:
            "Real-time monitoring with advanced AI algorithms to detect suspicious behavior instantly.",
        },
        {
          point:
            "Automated alerts for any anomalies, reducing the need for constant human supervision.",
        },
        {
          point:
            "Highly accurate, scalable solution that adapts to a variety of exam environments.",
        },
      ],
    },
    {
      type: "mlProctoring",
      icon: GoCpu,
      image: ML_SVG,
      keyPoints: [
        {
          point:
            "Machine learning models continuously improve accuracy by learning from past proctoring data.",
        },
        {
          point:
            "Customizable algorithms tailored to the specific needs of different institutions.",
        },
        {
          point:
            "Enhances the proctoring process by identifying patterns that human proctors might miss.",
        },
      ],
    },
    {
      type: "browserProctoring",
      icon: FiChrome,
      image: BROWSER_SVG,
      keyPoints: [
        {
          point:
            "Monitors browser activity to prevent access to unauthorized resources during exams.",
        },
        {
          point:
            "Detects and blocks attempts to open new tabs, switch windows, or use keyboard shortcuts.",
        },
        {
          point:
            "Provides a secure online exam environment, ensuring that students remain focused on the test.",
        },
      ],
    },
  ];

  return (
    <Card className="md:px-4 py-6 my-8 shadow-lg">
      <CardHeader>
        <CardTitle>
          Our AI-Augmented Proctoring Achieves 95% Accuracy in Detecting
          Cheating
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="aiProctoring" className="w-full px-6">
          <TabsList className="grid w-full h-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="aiProctoring">AI Proctoring</TabsTrigger>
            <TabsTrigger value="mlProctoring">ML Proctoring</TabsTrigger>
            <TabsTrigger value="browserProctoring">
              In Browser Proctoring
            </TabsTrigger>
          </TabsList>

          {PROCTORING_DATA.map((_, index) => {
            const ICON = PROCTORING_DATA[index].icon;
            const IMG = PROCTORING_DATA[index].image;
            return (
              <TabsContent key={index} value={PROCTORING_DATA[index].type}>
                <Card className="grid grid-cols-1 md:grid-cols-2 items-center p-4">
                  <CardContent>
                    <img src={IMG} />
                  </CardContent>
                  <CardContent className="flex flex-col gap-4">
                    {PROCTORING_DATA[index].keyPoints.map(
                      (point: { point: string }, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div>
                            <ICON />
                          </div>
                          <CardDescription className="text-left">
                            {point.point}
                          </CardDescription>
                        </div>
                      )
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>
      </CardContent>
      <CardFooter className="flex gap-2 justify-center">
        <Button size="sm" variant="outline">
          Start Free Trail
        </Button>
        <Button size="sm">Schedule Demo</Button>
      </CardFooter>
    </Card>
  );
};
