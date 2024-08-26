import { Title } from "@/components/homepage/title/Title";
import { TrustedBy } from "@/components/homepage/title/TrustedBy";
import { FeaturesWithImages } from "@/components/homepage/features/FeaturesWithImages";
import { NumbersSection } from "@/components/homepage/features/NumbersSection";
import { Content } from "@/components/homepage/content/Content";
import { ExamFeatures } from "@/components/homepage/features/ExamFeatures";
import { PriceCalculator } from "@/components/homepage/priceCalculator/PriceCalculator";

export const HomePage = () => {
  return (
    <main>
      <Title />
      <TrustedBy />
      <NumbersSection />
      <FeaturesWithImages />
      <Content />
      <ExamFeatures />
      <PriceCalculator />
    </main>
  );
};
