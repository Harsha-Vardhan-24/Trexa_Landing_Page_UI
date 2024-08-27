import { Card, CardHeader, CardTitle } from "../ui/card";
import { FaLongArrowAltRight } from "react-icons/fa";

import { IconType } from "react-icons";
import {
  MdOutlineDesignServices,
  MdOutlineDeveloperBoard,
} from "react-icons/md";
import { PiExamBold } from "react-icons/pi";
import { TbCertificate } from "react-icons/tb";

export const OnlineCertProcess = () => {
  const CERT_PROCESS = [
    {
      title: "Design Your Certification",
      icon: MdOutlineDesignServices,
    },
    {
      title: "Develop Certification-Aligned Exams",
      icon: MdOutlineDeveloperBoard,
    },
    {
      title: "Enable Students to Take Exams",
      icon: PiExamBold,
    },
    {
      title: "Issue Digital Certifications",
      icon: TbCertificate,
    },
  ];
  return (
    <section className="px-4 py-6 my-8">
      <div className="col-span-2 py-8 px-2 lg:px-8">
        <h1 className="text-xl lg:text-2xl text-center font-semibold">
          Manage End-to-End Certification Programs with Leading Certification
          Management Software
        </h1>
        <div className="flex flex-col lg:flex-row mt-10 justify-center items-center">
          {CERT_PROCESS.map(
            (process: { title: string; icon: IconType }, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-center justify-center"
              >
                <Card className="flex-shrink-0 w-72 h-36 shadow-lg m-2 flex flex-col items-center justify-center">
                  <CardHeader className="flex flex-col items-center">
                    <div className="text-2xl lg:text-4xl">
                      <process.icon />
                    </div>
                    <CardTitle className="text-sm lg:text-lg text-center mt-2">
                      {process.title}
                    </CardTitle>
                  </CardHeader>
                </Card>
                {index + 1 <= 3 && (
                  <div className="flex justify-center lg:mx-4 my-4 lg:my-0 transform lg:rotate-0 rotate-90 text-xl">
                    <FaLongArrowAltRight />
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
