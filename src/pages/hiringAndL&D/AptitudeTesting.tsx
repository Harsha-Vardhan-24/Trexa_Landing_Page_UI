import { AptitudeContentWithImage } from "@/components/aptitudeTesting/AptitudeContentWithImage";
import { AptitudeDifferentTypes } from "@/components/aptitudeTesting/AptitudeDifferentTypes";
import { AptitudeFAQ } from "@/components/aptitudeTesting/AptitudeFAQ";
import { AptitudeTestingTitle } from "@/components/aptitudeTesting/AptitudeTestingTitle";

export const AptitudeTesting = () => {
  return (
    <section>
      <AptitudeTestingTitle />
      <AptitudeContentWithImage />
      <AptitudeDifferentTypes />
      <AptitudeFAQ />
    </section>
  );
};
