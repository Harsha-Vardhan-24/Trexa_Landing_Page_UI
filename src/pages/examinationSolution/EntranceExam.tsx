import { HowWeCreateExam } from "@/components/entranceExamPlatform/HowWeCreateExam";
import { ImageWithCTA } from "@/components/entranceExamPlatform/ImageWithCTA";
import { TitleContent } from "@/components/entranceExamPlatform/TitleContent";
import { WhyEntranceExamTrexa } from "@/components/entranceExamPlatform/WhyEntranceExamTrexa";

export const EntranceExam = () => {
  return (
    <section>
      <TitleContent />
      <HowWeCreateExam />
      <ImageWithCTA />
      <WhyEntranceExamTrexa />
    </section>
  );
};
