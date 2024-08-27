import { TitleCard } from "@/components/common/TitleCard";
import { ToolsContent } from "@/components/howItWorks/tools/ToolsContent";
import { ToolsContentWithImage } from "@/components/howItWorks/tools/ToolsContentWithImage";
import { ToolsSectionWithImage } from "@/components/howItWorks/tools/ToolsSectionWithImage";

export const Tools = () => {
  const TITLE_DETAILS = {
    title: "Elevate Your Exam Experience with Advanced and Flexible Tools",
    description:
      "Our platform leverages cutting-edge AI and Machine Learning technologies for seamless and secure proctoring, ensuring the highest standards of exam integrity. With intuitive in-browser functionalities, institutions can conduct cost-effective and efficient examinations without the need for additional software. The clean and user-friendly interface provides a stress-free experience for students, allowing them to focus entirely on demonstrating their knowledge.",
  };
  return (
    <section>
      <TitleCard
        title={TITLE_DETAILS.title}
        description={TITLE_DETAILS.description}
      />
      <ToolsContentWithImage />
      <ToolsContent />
      <ToolsSectionWithImage />
    </section>
  );
};
