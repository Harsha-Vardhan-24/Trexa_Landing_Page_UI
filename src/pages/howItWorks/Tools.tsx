import { ToolsContent } from "@/components/howItWorks/tools/ToolsContent";
import { ToolsContentWithImage } from "@/components/howItWorks/tools/ToolsContentWithImage";
import { ToolsSectionWithImage } from "@/components/howItWorks/tools/ToolsSectionWithImage";
import { ToolsTitle } from "@/components/howItWorks/tools/ToolsTitle";

export const Tools = () => {
  return (
    <section>
      <ToolsTitle />
      <ToolsContentWithImage />
      <ToolsContent />
      <ToolsSectionWithImage />
    </section>
  );
};
