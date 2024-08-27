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
import CODING_SVG from "../../assets/illustrations/CODING_SVG.svg";
import TECHNICAL_SVG from "../../assets/illustrations/TECHNICAL_SVG.svg";
import NETWORK_SVG from "../../assets/illustrations/NETWORK_SVG.svg";

import { RiCodeSSlashFill } from "react-icons/ri";
import { BsCpu } from "react-icons/bs";
import { IoIosGitNetwork } from "react-icons/io";

export const TechnicalTestingMultiFeature = () => {
  const TECH_DATA = [
    {
      type: "codingAssessment",
      icon: RiCodeSSlashFill,
      image: CODING_SVG,
      keyPoints: [
        {
          point:
            "Evaluate coding proficiency in real-time with challenges tailored to specific programming languages.",
        },
        {
          point:
            "Automated grading provides instant feedback on code quality, efficiency, and accuracy.",
        },
        {
          point:
            "Supports a wide range of languages and frameworks, adapting to your technical requirements.",
        },
      ],
    },
    {
      type: "technicalSkillTesting",
      icon: BsCpu,
      image: TECHNICAL_SVG,
      keyPoints: [
        {
          point:
            "Assess technical skills across various domains, including software development, IT, and engineering.",
        },
        {
          point:
            "Customizable tests aligned with the specific needs of the role and industry.",
        },
        {
          point:
            "Detailed analysis of strengths and areas for improvement, aiding in informed decision-making.",
        },
      ],
    },
    {
      type: "networkingAssessment",
      icon: IoIosGitNetwork,
      image: NETWORK_SVG,
      keyPoints: [
        {
          point:
            "Test candidates' knowledge and troubleshooting skills in networking, security, and infrastructure.",
        },
        {
          point:
            "Realistic simulations provide insights into practical problem-solving abilities.",
        },
        {
          point:
            "Benchmark performance against industry standards to identify top talent.",
        },
      ],
    },
  ];

  return (
    <Card className="md:px-4 py-6 my-8 shadow-lg">
      <CardHeader>
        <CardTitle>
          Comprehensive Technical Assessments for Evaluating All Corporate
          Functions, Industries, and Roles
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="codingAssessment" className="w-full px-6">
          <TabsList className="grid w-full h-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="codingAssessment">
              Coding Assessment
            </TabsTrigger>
            <TabsTrigger value="technicalSkillTesting">
              Technical Skill Testing
            </TabsTrigger>
            <TabsTrigger value="networkingAssessment">
              Networking Assessment
            </TabsTrigger>
          </TabsList>

          {TECH_DATA.map((_, index) => {
            const ICON = TECH_DATA[index].icon;
            const IMG = TECH_DATA[index].image;
            return (
              <TabsContent key={index} value={TECH_DATA[index].type}>
                <Card className="grid grid-cols-1 md:grid-cols-2 items-center p-4">
                  <CardContent>
                    <img src={IMG} />
                  </CardContent>
                  <CardContent className="flex flex-col gap-4">
                    {TECH_DATA[index].keyPoints.map(
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
