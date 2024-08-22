import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const WhatAreBehavioralTests = () => {
  return (
    <Card className="px-4 py-6 my-8 shadow-lg">
      <div className="grid grid-cols-2 items-center gap-4 text-left p-4">
        <div>
          <h1 className="text-xl font-semibold">
            What Are Behavioral Assessments?
          </h1>
          <div className="pt-4">
            <div className="flex flex-col gap-4">
              <p className="font-sm text-slate-500">
                Behavioral Assessments Are New-Age Digital Tools to Measure
                Behavioral Competencies in a Simulated Work Environment. These
                assessments require candidates to demonstrate their Behavioral
                skills in an activity that resembles an actual organizational
                situation.
              </p>
            </div>
          </div>
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
