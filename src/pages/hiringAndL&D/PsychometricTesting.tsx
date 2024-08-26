import { TitleCard } from "@/components/common/TitleCard";
import { PsychometricAssessmentTools } from "@/components/psychometricTesting/PsychometricAssessmentTools";
import { PsychometricContentWithImage } from "@/components/psychometricTesting/PsychometricContentWithImage";

export const PsychometricTesting = () => {
  const TITLE_DATA = {
    title: "Psychometric Tests to Assess Key Cognitive and Personality Traits",
    description:
      "Gain deep insights into cognitive abilities and personality characteristics with our comprehensive psychometric evaluation tools.",
  };

  return (
    <section>
      <TitleCard
        title={TITLE_DATA.title}
        description={TITLE_DATA.description}
      />
      <PsychometricContentWithImage />
      <PsychometricAssessmentTools />
    </section>
  );
};
