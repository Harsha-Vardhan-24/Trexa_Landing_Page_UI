import { PsychometricAssessmentTools } from "@/components/psychometricTesting/PsychometricAssessmentTools";
import { PsychometricContentWithImage } from "@/components/psychometricTesting/PsychometricContentWithImage";
import { PsychometricTestingTitle } from "@/components/psychometricTesting/PsychometricTestingTitle";

export const PsychometricTesting = () => {
  return (
    <section>
      <PsychometricTestingTitle />
      <PsychometricContentWithImage />
      <PsychometricAssessmentTools />
    </section>
  );
};
