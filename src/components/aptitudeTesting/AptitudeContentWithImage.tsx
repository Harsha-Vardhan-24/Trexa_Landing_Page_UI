import APTITUDE_TEST_SVG from "../../assets/illustrations/APTITUDE_TEST_SVG.svg";

export const AptitudeContentWithImage = () => {
  return (
    <section className="grid grid-cols-3 gap-4 items-center">
      <div className="col-span-2 py-8 text-left px-8 col-span-3 md:col-span-2">
        <h1 className="text-xl font-semibold">What Are Aptitude Tests?</h1>
        <p className="text-sm font-normal tracking-light">
          Aptitude tests are designed to evaluate a candidate's cognitive
          abilities, such as logical reasoning, problem-solving, and numerical
          skills. These tests are commonly used in recruitment to predict a
          candidate's potential for success in specific roles. By analyzing how
          candidates approach various challenges, aptitude tests provide
          insights into their ability to learn, adapt, and perform under
          pressure. Aptitude testing is a key component of the hiring process,
          helping to identify individuals who possess the cognitive skills
          necessary for job performance.
        </p>
      </div>
      <img
        src={APTITUDE_TEST_SVG}
        className="order-first md:order-last col-span-3 md:col-span-1"
      />
    </section>
  );
};
