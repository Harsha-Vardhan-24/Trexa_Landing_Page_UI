import { TitleCard } from "@/components/common/TitleCard";
import { TechnicalTestingContentWithImage } from "@/components/technicalTesting/TechnicalTestingContentWithImage";
import { TechnicalTestingFAQ } from "@/components/technicalTesting/TechnicalTestingFAQ";
import { TechnicalTestingMultiFeature } from "@/components/technicalTesting/TechnicalTestingMultiFeature";

export const TechnicalTesting = () => {
  const TITLE_DETAILS = {
    title: "Technical Testing for In-Depth Skill Assessment",
    description:
      "Efficiently Evaluate Technical Proficiency and Expertise with Our Advanced Technical Testing Tools.",
  };
  return (
    <section>
      <TitleCard
        title={TITLE_DETAILS.title}
        description={TITLE_DETAILS.description}
      />
      <TechnicalTestingContentWithImage />
      <TechnicalTestingMultiFeature />
      <TechnicalTestingFAQ />
    </section>
  );
};
