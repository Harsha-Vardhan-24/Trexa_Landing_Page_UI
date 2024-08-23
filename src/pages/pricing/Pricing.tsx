import { TitleCard } from "@/components/common/TitleCard";
import { PriceCalculator } from "@/components/homepage/priceCalculator/PriceCalculator";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";
import { PricingKeyPoints } from "@/components/pricing/PricingKeyPoints";

export const Pricing = () => {
  const TITLE = "Simple and adjustable pricing";
  const DESC =
    "Exam.net has a 75-days free trial period per school. You will not automatically be moved into a paid plan after this period, instead you will be offered to buy a license for your school or organization.";
  return (
    <section>
      <TitleCard title={TITLE} description={DESC} />
      <PricingKeyPoints />
      <PriceCalculator />
      <PricingFAQ />
    </section>
  );
};
