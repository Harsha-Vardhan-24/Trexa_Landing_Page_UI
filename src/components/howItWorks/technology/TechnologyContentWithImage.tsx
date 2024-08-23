export const TechnologyContentWithImage = () => {
  return (
    <section className="grid grid-cols-5 gap-4 items-center px-4 py-6 my-8">
      <div className="min-h-[350px]  bg-slate-500/30 backdrop-blur-sm rounded-lg col-span-5 md:col-span-3"></div>
      <div className="col-span-5 md:col-span-2 py-8 text-left px-8">
        <h1 className="text-xl font-semibold">
          Served millions of students, worldwide since 2016
        </h1>
        <p className="text-sm font-nowmal tracking-light">
          Exam.net is a highly reliable cloud-based exam platform. Since 2016,
          we have served millions of student exams across thousands of schools,
          universities and organizations world-wide. Exam.net replaces or
          complements the use of pen and paper in classroom exams, and also
          allows for remote examination. The platform puts the focus on teachers
          and students.
        </p>
      </div>
    </section>
  );
};
