import { TitleCard } from "@/components/common/TitleCard";
import { OnlineCertFeatures } from "@/components/onlinecertplatform/OnlineCertFeatures";
import { OnlineCertFeaturesList } from "@/components/onlinecertplatform/OnlineCertFeaturesList";
import { OnlineCertProcess } from "@/components/onlinecertplatform/OnlineCertProcess";

export const OnlineCertPlatform = () => {
  const TITLE_DETAILS = {
    title: "Effortlessly Manage Large-Scale Certification Programs Online",
    description:
      "Discover the power of Man2Web | TrExa's All-in-One Cloud-Based Certification Platform, designed to streamline and simplify your certification processes with robust tools and seamless integration.",
  };
  return (
    <section>
      <TitleCard
        title={TITLE_DETAILS.title}
        description={TITLE_DETAILS.description}
      />
      <OnlineCertFeatures />
      <OnlineCertProcess />
      <OnlineCertFeaturesList />
    </section>
  );
};
