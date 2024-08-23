import { TechnologyContentWithImage } from "@/components/howItWorks/technology/TechnologyContentWithImage";
import { TechnologyKeyPoints } from "@/components/howItWorks/technology/TechnologyKeyPoints";
import { TechnologyTitle } from "@/components/howItWorks/technology/TechnologyTitle";

export const Technology = () => {
  return (
    <section>
      <TechnologyTitle />
      <TechnologyContentWithImage />
      <TechnologyKeyPoints />
    </section>
  );
};
