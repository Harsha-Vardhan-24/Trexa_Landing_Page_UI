import { TitleCard } from "@/components/common/TitleCard";
import { TechnologyContentWithImage } from "@/components/howItWorks/technology/TechnologyContentWithImage";
import { TechnologyKeyPoints } from "@/components/howItWorks/technology/TechnologyKeyPoints";

export const Technology = () => {
  const TITLE_DETAILS = {
    title: "Innovative Technology You Can Rely On",
    description:
      "We deliver cutting-edge solutions that ensure secure and seamless online exams. Our technology is designed to meet the evolving needs of schools, universities, and organizations worldwide, providing a reliable and scalable platform for all your assessment needs.",
  };
  return (
    <section>
      <TitleCard
        title={TITLE_DETAILS.title}
        description={TITLE_DETAILS.description}
      />
      <TechnologyContentWithImage />
      <TechnologyKeyPoints />
    </section>
  );
};
