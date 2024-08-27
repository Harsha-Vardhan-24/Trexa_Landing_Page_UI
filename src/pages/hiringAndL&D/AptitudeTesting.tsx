import { AptitudeContentWithImage } from "@/components/aptitudeTesting/AptitudeContentWithImage";
import { AptitudeDifferentTypes } from "@/components/aptitudeTesting/AptitudeDifferentTypes";
import { AptitudeFAQ } from "@/components/aptitudeTesting/AptitudeFAQ";
import { TitleCard } from "@/components/common/TitleCard";

export const AptitudeTesting = () => {
  const TITLE_DATA = {
    title: "Aptitude Tests for Recruitment, Hiring, and Development",
    description:
      "Evaluate candidate suitability and potential with precise aptitude assessments to support your hiring and development goals.",
  };
  return (
    <section>
      <TitleCard
        title={TITLE_DATA.title}
        description={TITLE_DATA.description}
      />
      <AptitudeContentWithImage />
      <AptitudeDifferentTypes />
      <AptitudeFAQ />
    </section>
  );
};
