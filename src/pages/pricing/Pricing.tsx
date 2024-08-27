import { TitleCard } from "@/components/common/TitleCard";
import { PriceCalculator } from "@/components/homepage/priceCalculator/PriceCalculator";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";
import { PricingKeyPoints } from "@/components/pricing/PricingKeyPoints";

export const Pricing = () => {
  const TITLE_DETAILS = {
    title: "Flexible and Transparent Pricing",
    description:
      "Enjoy a 75-day free trial with no automatic charges. After the trial, you can choose a plan that best fits your school or organization's needs. Our pricing is designed to be straightforward and adaptable, ensuring you only pay for what you use.",
  };
  return (
    <section>
      <TitleCard
        title={TITLE_DETAILS.title}
        description={TITLE_DETAILS.description}
      />
      <PricingKeyPoints />
      <PriceCalculator />
      <PricingFAQ />
    </section>
  );
};
