import { MultiProctorFeatures } from "@/components/secureProctor/MultiProctorFeatures";
import { SecureProctorFeatures } from "@/components/secureProctor/SecureProctorFeatures";
import { SecureProctorTitleCard } from "@/components/secureProctor/SecureProctorTitleCard";
import { WhyWeHaveBestProctor } from "@/components/secureProctor/WhyWeHaveBestProctor";

export const SecureProctor = () => {
  return (
    <section>
      <SecureProctorTitleCard />
      <SecureProctorFeatures />
      <MultiProctorFeatures />
      <WhyWeHaveBestProctor />
    </section>
  );
};
