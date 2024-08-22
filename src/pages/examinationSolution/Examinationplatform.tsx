import { ExamFeatues } from "@/components/onlineExaminationPlatform/examFeatures/ExamFeatues";
import { SemAndEntranceCard } from "@/components/onlineExaminationPlatform/semAndEntranceCard/SemAndEntranceCard";
import { ShowDifferenceCard } from "@/components/onlineExaminationPlatform/showDifferenceCard/ShowDifferenceCard";

export const Examinationplatform = () => {
  return (
    <section>
      <h1 className="my-20 font-bold text-2xl md:text-4xl tracking-tight">
        Experience Virtual Exams With Our Secure And Robust Online Exam Software
      </h1>

      <ShowDifferenceCard />
      <SemAndEntranceCard />
      <ExamFeatues />
    </section>
  );
};
