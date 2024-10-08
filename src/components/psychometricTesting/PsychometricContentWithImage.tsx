import { LuBrain } from "react-icons/lu";

export const PsychometricContentWithImage = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
      <div className="min-h-[250px] bg-slate-500/30 backdrop-blur-sm rounded-lg col-span-1"></div>
      <div className="col-span-2 py-8 text-left px-8">
        <h1 className="text-xl font-semibold">What are Psychometric Tests?</h1>
        <p className="text-sm font-nowmal tracking-light">
          A psychometric test assesses a candidate's cognitive ability and
          personality. One of the most common uses of psychometric assessment is
          for recruitment. From a candidate's response, psychometric assessment
          tests can predict valuable insights such as job performance,
          competence, and motivations. There are two general types of
          psychometric testing: personality tests and aptitude tests.
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
