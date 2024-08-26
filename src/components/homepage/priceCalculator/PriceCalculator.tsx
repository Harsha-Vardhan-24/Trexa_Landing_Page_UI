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
import { MdNaturePeople } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { FaRegMoneyBillAlt } from "react-icons/fa";

export const PriceCalculator = () => {
  const [sliderValue, setSliderValue] = useState<number[]>([20]);
  const ICONS = [HiOutlineUsers, MdNaturePeople, FaRegMoneyBillAlt];
  const FEAT_DETAILS = [
    {
      question: "Flexibility for Users",
      content:
        "Take exams anywhere with Trexa—just an internet connection and laptop needed.",
    },
    {
      question: "Eco-Friendly Testing",
      content:
        "Conduct exams online with Trexa and reduce your environmental impact.",
    },
    {
      question: "Superior Experience at a Lower Cost",
      content:
        "Enjoy premium testing at half the cost, You can check approx pricing using the Trexa's price calculator.",
    },
  ];
  return (
    <section className="my-16">
      <Card className="backdrop-blur-sm bg-white/30">
        <CardHeader>
          <div className="border boder-solid-slate-100 rounded-lg p-2 text-xl mx-auto">
            <FaRegMoneyBillAlt />
          </div>
          <CardTitle className="font-bold tracking-tighter">
            Compare the pricing with the traditional method
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 items-center">
          <div className="p-2 ">
            {FEAT_DETAILS.map(
              (feature: { question: string; content: string }, index) => {
                const Icon = ICONS[index];
                return (
                  <div key={index} className="p-4">
                    <div className="flex items-center">
                      <div className="p-2 text-md">
                        <Icon />
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
