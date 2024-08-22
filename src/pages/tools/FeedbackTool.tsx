import { FeedbackNeeds } from "@/components/feedbackTool/FeedbackNeeds";
import { FeedbackToolContentWithImage } from "@/components/feedbackTool/FeedbackToolContentWithImage";
import { FeedbackToolDetails } from "@/components/feedbackTool/FeedbackToolDetails";
import { FeedbackToolFAQ } from "@/components/feedbackTool/FeedbackToolFAQ";
import { FeedbackToolFeatures } from "@/components/feedbackTool/FeedbackToolFeatures";
import { FeedbackToolTitle } from "@/components/feedbackTool/FeedbackToolTitle";

export const FeedbackTool = () => {
  return (
    <section>
      <FeedbackToolTitle />
      <FeedbackToolContentWithImage />
      <FeedbackNeeds />
      <FeedbackToolFeatures />
      <FeedbackToolDetails />
      <FeedbackToolFAQ />
    </section>
  );
};
