import { LuBrain } from "react-icons/lu";
import ONLINE_TEST_SVG from "../../assets/illustrations/ONLINE_TEST_SVG.svg";

export const PsychometricContentWithImage = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
      <img src={ONLINE_TEST_SVG} className="col-span-1" />
      <div className="col-span-2 py-8 text-left px-8">
        <h1 className="text-xl font-semibold">What Are Psychometric Tests?</h1>
        <p className="text-sm font-normal tracking-light">
          Psychometric tests are designed to evaluate a candidate's cognitive
          abilities and personality traits. Commonly used in recruitment, these
          assessments provide valuable insights into a candidate’s potential job
          performance, competencies, and motivations. Psychometric tests
          typically fall into two categories: personality tests, which explore
          behavioral tendencies, and aptitude tests, which measure specific
          skills and cognitive abilities.
        </p>
        <div className="hidden md:flex justify-start gap-2 pt-4">
          <div className="flex gap-6">
            <div className="flex gap-2 items-center">
              <div>
                <LuBrain />
              </div>
              <p>Psychometric Tests</p>
            </div>
            <span className="font-bold">=</span>
            <div className="flex gap-2 items-center">
              <div>
                <LuBrain />
              </div>
              <p>Personality Tests</p>
            </div>
            <span className="font-bold">+</span>
            <div className="flex gap-2 items-center">
              <div>
                <LuBrain />
              </div>
              <p>Aptitude Tests</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
