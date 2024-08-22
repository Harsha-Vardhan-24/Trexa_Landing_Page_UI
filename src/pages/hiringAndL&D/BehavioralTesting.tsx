import { BehavioralTestingExplanation } from "@/components/behavioralTesting/BehavioralTestingExplanation";
import { BehavioralTestingFAQ } from "@/components/behavioralTesting/BehavioralTestingFAQ";
import { BehavioralTestingTitle } from "@/components/behavioralTesting/BehavioralTestingTitle";
import { WhatAreBehavioralTests } from "@/components/behavioralTesting/WhatAreBehavioralTests";

export const BehavioralTesting = () => {
  return (
    <section>
      <BehavioralTestingTitle />
      <WhatAreBehavioralTests />
      <BehavioralTestingExplanation />
      <BehavioralTestingFAQ />
    </section>
  );
};
