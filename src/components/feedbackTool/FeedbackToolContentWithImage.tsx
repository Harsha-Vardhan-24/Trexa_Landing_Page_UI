export const FeedbackToolContentWithImage = () => {
  return (
    <section className="grid grid-cols-5 gap-4 items-center px-4 py-6 my-8">
      <div className="min-h-[350px]  bg-slate-500/30 backdrop-blur-sm rounded-lg col-span-5 md:col-span-3"></div>
      <div className="col-span-5 col-span-2 py-8 text-left px-8">
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
    </section>
  );
};
