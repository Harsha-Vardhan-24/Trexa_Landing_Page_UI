import ONLINE_TEST_SVG from "../../../assets/illustrations/ONLINE_TEST_SVG.svg";

export const ToolsSectionWithImage = () => {
  return (
    <section className="my-16 grid grid-cols-3 gap-4 items-center">
      <img
        src={ONLINE_TEST_SVG}
        className="min-h-[250px] col-span-3 lg:col-span-1"
      />
      <div className="col-span-3 lg:col-span-2 py-8 text-left px-8 flex flex-col gap-2">
        <h1 className="text-xl font-semibold">
          Discover How an Online Assessment Platform Can Transform Your School
        </h1>
        <ul className="flex flex-col pl-4 font-normal text-slate-500 text-sm list-disc gap-2">
          <li>
            Flexible Scheduling: Students can take exams at a time that suits
            them, eliminating the need for fixed dates.
          </li>
          <li>
            Paperless Exams: Conduct assessments online, reducing the need for
            physical resources and simplifying logistics.
          </li>
          <li>
            Instant Results: Receive detailed reports and results immediately
            after the exam, speeding up the evaluation process.
          </li>
          <li>
            Secure and Proctored: Ensure exam integrity with AI-driven
            proctoring and in-browser security features.
          </li>
          <li>
            Enhanced Accessibility: Students can take exams from anywhere,
            making it easier for those with diverse needs or locations.
          </li>
        </ul>
      </div>
    </section>
  );
};
