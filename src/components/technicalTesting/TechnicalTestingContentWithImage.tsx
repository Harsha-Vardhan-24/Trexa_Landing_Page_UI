import TECH_TEST_SVG from "../../assets/illustrations/TECH_TEST_SVG.svg";

export const TechnicalTestingContentWithImage = () => {
  return (
    <section className="grid grid-cols-3 gap-4 items-center">
      <div className="col-span-3 py-8 text-left px-8 col-span-3 lg:col-span-2">
        <h1 className="text-xl font-semibold">What Are Technical Tests?</h1>
        <p className="text-sm font-normal tracking-light">
          Technical tests are designed to evaluate a candidate's specific
          technical skills and knowledge relevant to the role they are applying
          for. Commonly used in recruitment, these assessments provide valuable
          insights into a candidate’s proficiency in areas such as coding,
          software development, system design, and other technical domains.
          Technical testing helps predict job performance, identify areas of
          expertise, and determine the best fit for technical roles within an
          organization.
        </p>
      </div>
      <img
        src={TECH_TEST_SVG}
        className="order-first md:order-last col-span-3 lg:col-span-1"
      />
    </section>
  );
};
