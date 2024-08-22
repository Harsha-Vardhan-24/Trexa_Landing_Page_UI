import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { BsShield } from "react-icons/bs";

export const ProctoringFeatues = () => {
  return (
    <Card className="px-4 py-6 my-8 shadow-lg">
      <CardHeader>
        <CardTitle className="font-bold tracking-tighter">
          Why Companies choose HyreNet for their Assessment
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => {
            return (
              <div key={index} className="p-4">
                <div className="flex flex-col items-center">
                  <div className="p-2 text-4xl">
                    <BsShield />
                  </div>
                  <p className="text-sm font-semibold tracking-tight">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </div>
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
