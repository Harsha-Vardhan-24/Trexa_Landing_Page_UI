import { DashBoardWithBenifits } from "@/components/onlineEvaulationSystem/DashBoardWithBenifits";
import { EvalAccodion } from "@/components/onlineEvaulationSystem/EvalAccodion";
import { OnlineEvalFeatures } from "@/components/onlineEvaulationSystem/OnlineEvalFeatures";
import { OnlineEvalTitleCard } from "@/components/onlineEvaulationSystem/OnlineEvalTitleCard";

export const OnlineEvaulationSystem = () => {
  return (
    <section>
      <OnlineEvalTitleCard />
      <DashBoardWithBenifits />
      <EvalAccodion />
      <OnlineEvalFeatures />
    </section>
  );
};
