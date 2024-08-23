import { BsShield } from "react-icons/bs";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

export const MultiProctorFeatures = () => {
  return (
    <section className="px-4 py-6 my-8">
      <div className="col-span-2 py-8 px-8">
        <h1 className="text-2xl text-center font-semibold">
          We Provide Best-in-Class Proctoring Features To Ensure Secure Exams
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="shadow-lg my-16 flex flex-wrap items-center justify-center gap-4 col-span-1 md:col-span-3 p-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="text-4xl md:text-4xl">
                  <BsShield />
                </div>
                <h1 className="font-semibold text-md md:text-xl">
                  Robust Candidate Authentication
                </h1>
              </div>
            ))}
          </Card>
          {Array.from({ length: 3 }).map((_, index) => {
            return (
              <Card key={index} className="shadow-lg text-left p-4">
                <div className="flex flex-col">
                  <div className="text-4xl mx-auto py-4">
                    <BsShield />
                  </div>
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
        <div className="flex justify-center gap-2 mt-8">
          <Button size="sm" variant="outline">
            Schedule Demo
          </Button>
          <Button size="sm">Start Free Trail</Button>
        </div>
      </div>
    </section>
  );
};
