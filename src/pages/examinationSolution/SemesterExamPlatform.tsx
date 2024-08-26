import { TitleCard } from "@/components/common/TitleCard";
import { ProctoringFeatues } from "@/components/onlineExaminationPlatform/ProctoringFeatues";
import { CandidateFlagged } from "@/components/semesterExamPlatform/candidateFlagged/CandidateFlagged";
import { FeaturesWithVideoCard } from "@/components/semesterExamPlatform/featuresWithVideoCard/FeaturesWithVideoCard";
import { MultiFeatureWithAnimation } from "@/components/semesterExamPlatform/multiFeatureWithAnimation/MultiFeatureWithAnimation";

export const SemesterExamPlatform = () => {
  const SEM_TITLE_DATA = {
    title:
      "Seamlessly Conduct Virtual Semester Exams with Our Advanced Proctoring Tools",
    description:
      "AI-Driven Proctoring | Streamlined Exam Management | Comprehensive Evaluations",
  };
  return (
    <section>
      <TitleCard
        title={SEM_TITLE_DATA.title}
        description={SEM_TITLE_DATA.description}
      />
      <FeaturesWithVideoCard />
      <MultiFeatureWithAnimation />
      <h1 className="py-12 font-semibold text-2xl md:text-2xl tracking-tight">
        Manage Complete Online Examination Drives Using Our All-in-one Platform
      </h1>
      <CandidateFlagged />
      <ProctoringFeatues />
    </section>
  );
};
