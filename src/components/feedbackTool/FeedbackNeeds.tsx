import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const FeedbackNeeds = () => {
  return (
    <Card className="px-4 py-6 my-8 shadow-lg">
      <CardHeader className="py-6 ">
        <CardTitle className="text-2xl font-semibold px-16">
          One Solution For All Your 360-Degree Feedback Needs
        </CardTitle>
      </CardHeader>
      <div className="grid grid-cols-4 gap-4">
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
            </CardHeader>
          </Card>
        ))}
      </div>
      <CardFooter className="flex justify-center gap-2 pt-4">
        <Button size="sm" variant="outline">
          Schedule Demo
        </Button>
        <Button size="sm">Start Free Trail</Button>
      </CardFooter>
    </Card>
  );
};
