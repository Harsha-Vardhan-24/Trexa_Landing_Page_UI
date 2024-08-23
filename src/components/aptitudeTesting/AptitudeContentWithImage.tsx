export const AptitudeContentWithImage = () => {
  return (
    <section className="grid grid-cols-3 gap-4 items-center">
      <div className="col-span-2 py-8 text-left px-8 col-span-3 md:col-span-2">
        <h1 className="text-xl font-semibold">What are Psychometric Tests?</h1>
        <p className="text-sm font-nowmal tracking-light">
          A psychometric test assesses a candidate's cognitive ability and
          personality. One of the most common uses of psychometric assessment is
          for recruitment. From a candidate's response, psychometric assessment
          tests can predict valuable insights such as job performance,
          competence, and motivations. There are two general types of
          psychometric testing: personality tests and aptitude tests.
        </p>
      </div>
      <div className="order-first md:order-last col-span-3 md:col-span-1 min-h-[250px] bg-slate-500/30 backdrop-blur-sm rounded-lg col-span-1"></div>
    </section>
  );
};
