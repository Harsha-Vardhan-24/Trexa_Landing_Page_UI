import { TitleCard } from "@/components/common/TitleCard";
import { ExamFeatues } from "@/components/onlineExaminationPlatform/examFeatures/ExamFeatues";
import { SemAndEntranceCard } from "@/components/onlineExaminationPlatform/semAndEntranceCard/SemAndEntranceCard";
import { ShowDifferenceCard } from "@/components/onlineExaminationPlatform/showDifferenceCard/ShowDifferenceCard";

export const Examinationplatform = () => {
  const TITLE_TEXT = [
    {
      title:
        "Experience Virtual Exams With Our Secure And Robust Online Exam Software",
      description:
        "Experience seamless virtual exams with our secure and robust online exam software, designed for flexibility and ease. Trexa ensures a reliable, user-friendly testing environment that adapts to your needs.",
    },
  ];
  return (
    <section>
      <TitleCard
        title={TITLE_TEXT[0].title}
        description={TITLE_TEXT[0].description}
      />
      <ShowDifferenceCard />
      <SemAndEntranceCard />
      <ExamFeatues />
    </section>
  );
};
