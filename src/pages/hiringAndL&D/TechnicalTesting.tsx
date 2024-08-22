import { TechnicalTestingContentWithImage } from "@/components/technicalTesting/TechnicalTestingContentWithImage";
import { TechnicalTestingFAQ } from "@/components/technicalTesting/TechnicalTestingFAQ";
import { TechnicalTestingMultiFeature } from "@/components/technicalTesting/TechnicalTestingMultiFeature";
import { TechnicalTestingTitle } from "@/components/technicalTesting/TechnicalTestingTitle";

export const TechnicalTesting = () => {
  return (
    <section>
      <TechnicalTestingTitle />
      <TechnicalTestingContentWithImage />
      <TechnicalTestingMultiFeature />
      <TechnicalTestingFAQ />
    </section>
  );
};
