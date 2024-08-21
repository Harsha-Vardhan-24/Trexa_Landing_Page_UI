import { Header } from "../../components/homepage/header/Header";
import { Footer } from "@/components/homepage/footer/Footer";
import { Title } from "@/components/homepage/title/Title";
import { TrustedBy } from "@/components/homepage/title/TrustedBy";
import { FeaturesWithImages } from "@/components/homepage/features/FeaturesWithImages";
import { NumbersSection } from "@/components/homepage/features/NumbersSection";
import { Content } from "@/components/homepage/content/Content";
import { ExamFeatures } from "@/components/homepage/features/ExamFeatures";
import { PriceCalculator } from "@/components/homepage/priceCalculator/PriceCalculator";
import { ProfileForm } from "@/components/homepage/form/ProfileForm";
import { useState } from "react";

export const HomePage = () => {
  const [toggleForm, setToggleForm] = useState<boolean>(false);

  return (
    <main>
      {toggleForm && <ProfileForm setToggleForm={setToggleForm} />}

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
