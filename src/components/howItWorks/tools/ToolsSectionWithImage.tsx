export const ToolsSectionWithImage = () => {
  return (
    <section className="my-16 grid grid-cols-3 gap-4 items-center">
      <div className="min-h-[250px] bg-slate-500/30 backdrop-blur-sm rounded-lg col-span-3 md:col-span-1"></div>
      <div className="col-span-3 md:col-span-2 py-8 text-left px-8 flex flex-col gap-2">
        <h1 className="text-xl font-semibold">
          Discover how an online assessment platform can benefit your school
        </h1>
        <ul className="flex flex-col pl-4 font-normal text-slate-500 text-sm list-disc gap-2">
          <li>Reach Center @ Fixed Date/Time</li>
          <li>Take Pen & Paper Exam</li>
          <li>Results After Months</li>
          <li>Take Pen & Paper Exam</li>
          <li>Results After Months</li>
        </ul>
      </div>
    </section>
  );
};
