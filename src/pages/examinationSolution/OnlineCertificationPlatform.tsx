import { OnlineCertFeatures } from "@/components/onlinecertplatform/OnlineCertFeatures";
import { OnlineCertFeaturesList } from "@/components/onlinecertplatform/OnlineCertFeaturesList";
import { OnlineCertProcess } from "@/components/onlinecertplatform/OnlineCertProcess";
import { OnlineCertTitleCard } from "@/components/onlinecertplatform/OnlineCertTitleCard";

export const OnlineCertPlatform = () => {
  return (
    <section>
      <OnlineCertTitleCard />
      <OnlineCertFeatures />
      <OnlineCertProcess />
      <OnlineCertFeaturesList />
    </section>
  );
};
