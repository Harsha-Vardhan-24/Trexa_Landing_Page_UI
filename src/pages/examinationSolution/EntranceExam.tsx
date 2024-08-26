import { TitleCard } from "@/components/common/TitleCard";
import { HowWeCreateExam } from "@/components/entranceExamPlatform/HowWeCreateExam";
import { ImageWithCTA } from "@/components/entranceExamPlatform/ImageWithCTA";
import { WhyEntranceExamTrexa } from "@/components/entranceExamPlatform/WhyEntranceExamTrexa";

export const EntranceExam = () => {
  const TITLE_TEXT = {
    title:
      "Take Your Admission Testing Online With Our Reliable Entrance Exam Software",
    description:
      "Trust in Our Commitment to Conducting Secure and Reliable Online Examinations",
  };

  return (
    <section>
      <TitleCard
        title={TITLE_TEXT.title}
        description={TITLE_TEXT.description}
      />
      <HowWeCreateExam />
      <ImageWithCTA />
      <WhyEntranceExamTrexa />
    </section>
  );
};
