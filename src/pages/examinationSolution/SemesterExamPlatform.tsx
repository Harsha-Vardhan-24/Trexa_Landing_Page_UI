import { ProctoringFeatues } from "@/components/onlineExaminationPlatform/ProctoringFeatues";
import { CandidateFlagged } from "@/components/semesterExamPlatform/candidateFlagged/CandidateFlagged";
import { FeaturesWithVideoCard } from "@/components/semesterExamPlatform/featuresWithVideoCard/FeaturesWithVideoCard";
import { MultiFeatureWithAnimation } from "@/components/semesterExamPlatform/multiFeatureWithAnimation/MultiFeatureWithAnimation";

export const SemesterExamPlatform = () => {
  return (
    <section>
      <div className="my-20">
        <h1 className="font-bold text-2xl md:text-4xl tracking-tight">
          Conduct Virtual Semester Examinations With Our Industry-Leading
          Proctoring Tools
        </h1>
        <p className="text-md pt-6 text-slate-500 font-semibold tracking-tight">
          AI-Based Proctoring | Easy Exam Management | Structured Exam
          Evaluations
        </p>
      </div>

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
