import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export const OnlineEvalFeatures = () => {
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
          {Array.from({ length: 3 }).map((_, index) => {
            return (
              <Card key={index} className="shadow-sm text-left pb-4">
                <div className="flex flex-col">
                  <div className="min-h-[200px] bg-slate-500/30 backdrop-blur-sm rounded-t-lg"></div>
                  <div className="pl-6 pr-1">
                    <h1 className="text-mdh1py-2 py-2 font-semibold tracking-tight">
                      Lorem ipsum dolor sit amet
                    </h1>
                    <ul className="flex flex-col list-disc mx-2 gap-2">
                      {Array.from({ length: 4 }).map((_, index) => (
                        <li key={index} className="text-sm text-slate-500">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </li>
                      ))}
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
