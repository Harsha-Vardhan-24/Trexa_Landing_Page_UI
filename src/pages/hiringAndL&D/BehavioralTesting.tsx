import { BehavioralTestingExplanation } from "@/components/behavioralTesting/BehavioralTestingExplanation";
import { BehavioralTestingFAQ } from "@/components/behavioralTesting/BehavioralTestingFAQ";
import { WhatAreBehavioralTests } from "@/components/behavioralTesting/WhatAreBehavioralTests";
import { TitleCard } from "@/components/common/TitleCard";

export const BehavioralTesting = () => {
  const TITLE_DETAILS = {
    title: "Behavioral Testing in Recruitment - Identify the Right Talent",
    description:
      "Effective Behavioral Assessments for Recruitment and Development - Discover Candidates Who Truly Fit Your Organization.",
  };
  return (
    <section>
      <TitleCard
        title={TITLE_DETAILS.title}
        description={TITLE_DETAILS.description}
      />
      <WhatAreBehavioralTests />
      <BehavioralTestingExplanation />
      <BehavioralTestingFAQ />
    </section>
  );
};
