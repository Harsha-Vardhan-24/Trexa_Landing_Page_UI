import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MdArrowRightAlt } from "react-icons/md";

export const PsychometricAssessmentTools = () => {
  const ASSESSMENT_DETAILS = [
    {
      title: "Positive Personality Traits",
      description:
        "Identify candidates with personality traits that align with your company's values and culture, ensuring a harmonious workplace environment.",
    },
    {
      title: "Cognitive Abilities",
      description:
        "Assess cognitive skills such as problem-solving, logical reasoning, and critical thinking, helping you choose candidates who can excel in complex roles.",
    },
    {
      title: "Emotional Intelligence",
      description:
        "Evaluate candidates' emotional intelligence to determine their ability to manage interpersonal relationships and contribute positively to team dynamics.",
    },
    {
      title: "Predictive Job Performance",
      description:
        "Use psychometric assessments to predict a candidate’s potential job performance, ensuring you select individuals who are most likely to succeed in their roles.",
    },
  ];

  return (
    <Card className="px-4 py-6 my-8 shadow-lg">
      <CardHeader className="py-6 text-left">
        <CardTitle className="text-xl lg:text-2xl text-center font-semibold">
          Psychometric Tests at Trexa
        </CardTitle>
        <CardDescription className="text-left">
          Gain Deeper Insights with Trexa’s Psychometric Testing. At Trexa, we
          recognize that successful hiring goes beyond evaluating technical
          skills. Our comprehensive psychometric tests are crafted to assess key
          personality traits, cognitive abilities, and emotional intelligence.
          These assessments provide a well-rounded perspective on each
          candidate, helping you identify individuals who not only excel in
          their roles but also harmonize with your company’s culture and values.
        </CardDescription>
      </CardHeader>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {ASSESSMENT_DETAILS.map(
          (data: { title: string; description: string }, index) => (
            <Card key={index} className="text-left p-2 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">{data.title}</CardTitle>
                <CardDescription>{data.description}</CardDescription>
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
