import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BsCardChecklist, BsShield } from "react-icons/bs";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoFingerPrintOutline } from "react-icons/io5";
import { SiOpenai } from "react-icons/si";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { IoMdPaper } from "react-icons/io";
import { BiCloudUpload } from "react-icons/bi";

export const ExamFeatures = () => {
  const FEAT_IMAGE = [
    MdOutlineSupportAgent,
    GiArtificialIntelligence,
    IoFingerPrintOutline,
    SiOpenai,
    BsCardChecklist,
    LiaLaptopCodeSolid,
    IoMdPaper,
    BiCloudUpload,
  ];
  const FEAT_CONTENT = [
    {
      title: "24/7 Tech Support",
      description: "Always-on assistance for smooth assessments.",
    },
    {
      title: "AI Question Generation",
      description: "Customized questions crafted by AI.",
    },
    {
      title: "AI Proctoring",
      description: "Real-time monitoring for test integrity.",
    },
    {
      title: "Cheating Prevention",
      description: "Robust security to ensure fair results.",
    },
    {
      title: "Detailed Reports",
      description: "Comprehensive insights on candidate performance.",
    },
    {
      title: "15+ Programming Languages",
      description: "Evaluate skills in multiple languages.",
    },
    {
      title: "Lifetime Free Question Generation",
      description: "Unlimited, tailored questions for life.",
    },
    {
      title: "Flexible File Management",
      description: "Easy file uploads and downloads.",
    },
  ];

  return (
    <section className="my-16">
      <Card className="backdrop-blur-sm bg-white/30">
        <CardHeader>
          <div className="border boder-solid-slate-100 rounded-lg p-2 text-xl mx-auto">
            <BsShield />
          </div>
          <CardTitle className="font-bold tracking-tighter">
            Why Companies choose HyreNet for their Assessment
          </CardTitle>
        </CardHeader>
        <CardContent className="flex">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {FEAT_CONTENT.map((item, index) => {
              const Icon = FEAT_IMAGE[index];
              return (
                <div key={index} className="p-4">
                  <div className="flex flex-col items-center">
                    <div className="p-2 text-4xl">
                      <Icon />
                    </div>
                    <h1 className="text-sm font-semibold tracking-tight">
                      {item.title}
                    </h1>
                    <p className="text-sm text-slate-400 font-semibold tracking-tight">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </section>
  );
};
