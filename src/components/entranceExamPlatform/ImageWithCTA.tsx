import { Button } from "../ui/button";
import RELAX_SVG from "../../assets/illustrations/RELAX_SVG.svg";

export const ImageWithCTA = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
      <img src={RELAX_SVG} className="col-span-1" />
      <div className="md:col-span-2 py-8 text-left px-8">
        <h1 className="text-xl font-semibold">
          Get Your Guide to Seamlessly Conduct Remote Online Entrance Exams
          Today!
        </h1>
        <div className="flex justify-center gap-2 pt-4">
          <Button size="sm" variant="outline">
            Schedule Demo
          </Button>
          <Button size="sm">Start Free Trail</Button>
        </div>
      </div>
    </section>
  );
};
