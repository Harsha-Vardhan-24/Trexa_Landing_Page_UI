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
  return (
    <Card className="px-4 py-6 my-8 shadow-lg">
      <CardHeader className="py-6 ">
        <CardTitle className="text-2xl font-semibold px-16">
          Psychometric Tests at Trexa
        </CardTitle>
        <CardDescription>
          Unlock Deeper Insights with Psychometric Testing At Trexa, we
          understand that hiring the right talent goes beyond technical skills.
          That’s why we offer comprehensive psychometric tests to assess
          candidates’ personality traits, cognitive abilities, and emotional
          intelligence. Our psychometric assessments are designed to provide you
          with a holistic view of your candidates, ensuring that you not only
          find someone who fits the role but also aligns with your company’s
          culture.
        </CardDescription>
      </CardHeader>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index} className="text-left p-2 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">
                Positive Personality Traits
              </CardTitle>
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
