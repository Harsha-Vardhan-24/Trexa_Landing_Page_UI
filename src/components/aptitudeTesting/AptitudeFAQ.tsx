import { BsShield } from "react-icons/bs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const AptitudeFAQ = () => {
  return (
    <section className="px-4 py-6 my-8">
      <div className="col-span-2 py-8 px-8">
        <h1 className="text-2xl text-center font-semibold">
          Frequently Asked Questions(FAQs)
        </h1>
        <div>
          <Accordion type="single" collapsible className="w-full px-16 py-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>Exam Controllers</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 md:grid-cols-4">
                  {Array.from({ length: 4 }).map((_, index) => {
                    return (
                      <div key={index} className="p-4">
                        <div className="flex flex-col items-center">
                          <div className="p-2 text-4xl">
                            <BsShield />
                          </div>
                          <p className="text-sm font-semibold tracking-tight">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Administrators</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 md:grid-cols-4">
                  {Array.from({ length: 3 }).map((_, index) => {
                    return (
                      <div key={index} className="p-4">
                        <div className="flex flex-col items-center">
                          <div className="p-2 text-4xl">
                            <BsShield />
                          </div>
                          <p className="text-sm font-semibold tracking-tight">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Professors/Faculty</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 md:grid-cols-4">
                  {Array.from({ length: 2 }).map((_, index) => {
                    return (
                      <div key={index} className="p-4">
                        <div className="flex flex-col items-center">
                          <div className="p-2 text-4xl">
                            <BsShield />
                          </div>
                          <p className="text-sm font-semibold tracking-tight">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
