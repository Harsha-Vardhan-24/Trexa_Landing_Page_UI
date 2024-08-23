import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { PiThumbsUpBold } from "react-icons/pi";

export const PricingKeyPoints = () => {
  return (
    <Card className="px-4 py-6 my-8 shadow-lg">
      <CardTitle className="py-6 text-2xl font-semibold px-16">
        Pricing details
      </CardTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 text-left p-4">
        <div className="min-h-[300px] bg-slate-500/30 backdrop-blur-sm rounded-lg"></div>
        <div>
          <div className="pt-4">
            <div className="flex flex-col gap-4">
              <h1 className="font-semibold text-xl">
                A license for your school or university
              </h1>
              {Array.from({ length: 4 }).map((_, index) => (
                <div className="flex gap-2 items-center">
                  <PiThumbsUpBold />
                  <p key={index} className="font-sm text-slate-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Button>Schedule Demo</Button>
    </Card>
  );
};
