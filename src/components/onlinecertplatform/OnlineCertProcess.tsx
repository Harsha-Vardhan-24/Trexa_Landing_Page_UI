import { BsShield } from "react-icons/bs";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { FaLongArrowAltRight } from "react-icons/fa";

export const OnlineCertProcess = () => {
  return (
    <section className="px-4 py-6 my-8">
      <div className="col-span-2 py-8 px-8">
        <h1 className="text-2xl text-center font-semibold">
          Manage End-to-End Certification Programs with the Top Certification
          Management Software
        </h1>
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex items-center gap-2">
              <Card className="shadow-lg my-16 flex flex-col gap-2 p-2">
                <CardHeader>
                  <div className="text-4xl mx-auto">
                    <BsShield />
                  </div>
                  <CardTitle className="text-lg">Lorem ipsum dolor</CardTitle>
                </CardHeader>
              </Card>
              <div className="text-xl py-2">
                {index + 1 <= 3 && <FaLongArrowAltRight />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
