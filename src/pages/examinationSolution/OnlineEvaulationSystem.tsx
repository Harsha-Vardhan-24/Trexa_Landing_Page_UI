import { TitleCard } from "@/components/common/TitleCard";
import { DashBoardWithBenifits } from "@/components/onlineEvaulationSystem/DashBoardWithBenifits";
import { EvalAccodion } from "@/components/onlineEvaulationSystem/EvalAccodion";
import { OnlineEvalFeatures } from "@/components/onlineEvaulationSystem/OnlineEvalFeatures";

export const OnlineEvaulationSystem = () => {
  const TITLE_CONTENT = {
    title: "Best In Class Onscreen Evaluation System from Man2Web | TrExa",
    description: "A Future-Ready Onscreen Evaluation And Marking System"
  }
  return (
    <section>
      <TitleCard 
        title={TITLE_CONTENT.title}
        description={TITLE_CONTENT.description}
      />
      <DashBoardWithBenifits />
      <EvalAccodion />
      <OnlineEvalFeatures />
    </section>
  );
};
