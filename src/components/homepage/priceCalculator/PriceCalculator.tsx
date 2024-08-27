import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Chart } from "../chart/chart";
import { Button } from "../../ui/button";

import { IconType } from "react-icons";
import { IoClose, IoPricetagOutline } from "react-icons/io5";
import { TbMoneybag } from "react-icons/tb";

export const PriceCalculator = () => {
  const [sliderValue, setSliderValue] = useState<number[]>([20]);
  const PRICING_DETAILS = [
    {
      icon: IoPricetagOutline,
      question: "Flexible and Transparent Pricing",
      content:
        "Choose a plan that fits your needs without hidden fees or surprises—pay only for what you use.",
    },
    {
      icon: IoClose,
      question: "No Automatic Charges",
      content:
        "Enjoy a 75-day free trial without worrying about automatic charges after the trial period ends.",
    },
    {
      icon: TbMoneybag,
      question: "Cost-Effective Solutions",
      content:
        "Benefit from a cost-effective pricing model that delivers premium features at an affordable price, with the option to calculate your estimated costs using Trexa's price calculator.",
    },
  ];
  return (
    <section className="my-16">
      <Card className="backdrop-blur-sm bg-white/30">
        <CardHeader>
          <div className="border boder-solid-slate-100 rounded-lg p-2 text-xl mx-auto">
            <TbMoneybag />
          </div>
          <CardTitle className="font-bold tracking-tighter">
            Compare the pricing with the traditional method
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 items-center">
          <div className="p-2 ">
            {PRICING_DETAILS.map(
              (
                feature: { icon: IconType; question: string; content: string },
                index
              ) => {
                return (
                  <div key={index} className="p-4">
                    <div className="flex items-center">
                      <div className="p-2 text-md">
                        <feature.icon />
                      </div>
                      <p className="text-sm font-semibold tracking-tight">
                        {feature.question}
                      </p>
                    </div>
                    <p className="text-sm font-normal text-left tracking-tight text-slate-400">
                      {feature.content}
                    </p>
                  </div>
                );
              }
            )}
            <div className="flex gap-2 justify-center">
              <Button size="sm" variant="outline">
                Start Free Trail
              </Button>
              <Button size="sm">Schedule Demo</Button>
            </div>
          </div>
          <div className="p-2 flex flex-col gap-4">
            <Chart sliderValue={sliderValue} />
            <Slider
              onValueChange={(e) => setSliderValue(e)}
              defaultValue={sliderValue}
              min={10}
              max={100}
              step={1}
            />
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </section>
  );
};
