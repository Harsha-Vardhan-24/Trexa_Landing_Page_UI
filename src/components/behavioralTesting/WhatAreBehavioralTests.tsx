import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const WhatAreBehavioralTests = () => {
  return (
    <Card className="px-4 py-6 my-8 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 text-left p-4">
        <div>
          <h1 className="text-xl font-semibold">
            What Are Behavioral Assessments?
          </h1>
          <p className="pt-4 text-sm text-slate-500">
            Behavioral assessments are modern digital tools designed to evaluate
            key behavioral competencies in a simulated work environment. These
            assessments require candidates to showcase their behavioral skills
            by engaging in activities that closely mirror real-life
            organizational scenarios.
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg text-center text-slate-500 font-semibold">
            Behavioral Competencies are a Combination of
          </h1>
          <div className="flex gap-4 justify-center py-4">
            <div>
              <Badge>Skills</Badge>
            </div>
            <span className="font-bold">+</span>
            <div>
              <Badge>Knowledge</Badge>
            </div>
            <span className="font-bold">+</span>
            <div>
              <Badge>Traits</Badge>
            </div>
          </div>
        </div>
      </div>
      <CardFooter className="flex justify-center gap-2 py-4">
        <Button size="sm" variant="outline">
          Schedule Demo
        </Button>
        <Button size="sm">Start Free Trail</Button>
      </CardFooter>
    </Card>
  );
};
