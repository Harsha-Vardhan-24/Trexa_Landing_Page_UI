import { TitleCard } from "@/components/common/TitleCard";
import { FeedbackNeeds } from "@/components/feedbackTool/FeedbackNeeds";
import { FeedbackToolContentWithImage } from "@/components/feedbackTool/FeedbackToolContentWithImage";
import { FeedbackToolDetails } from "@/components/feedbackTool/FeedbackToolDetails";
import { FeedbackToolFAQ } from "@/components/feedbackTool/FeedbackToolFAQ";
import { FeedbackToolFeatures } from "@/components/feedbackTool/FeedbackToolFeatures";

export const FeedbackTool = () => {
  const TITLE_DETAILS = {
    title:
      "Comprehensive Feedback Tool: Deliver Constructive and Actionable Feedback",
    description:
      "Empower Growth with Our Feedback Tool - Provide Insightful and Targeted Feedback to Foster Development and Performance Improvement.",
  };
  return (
    <section>
      <TitleCard
        title={TITLE_DETAILS.title}
        description={TITLE_DETAILS.description}
      />
      <FeedbackToolContentWithImage />
      <FeedbackNeeds />
      <FeedbackToolFeatures />
      <FeedbackToolDetails />
      <FeedbackToolFAQ />
    </section>
  );
};
