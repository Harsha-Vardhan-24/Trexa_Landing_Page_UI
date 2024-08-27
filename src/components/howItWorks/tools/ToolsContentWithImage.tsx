import TOOLS_SVG from "../../../assets/illustrations/TOOLS_SVG.svg";

export const ToolsContentWithImage = () => {
  return (
    <section className="grid grid-cols-5 gap-4 items-center px-4 py-6 my-8">
      <img src={TOOLS_SVG} className="col-span-5 lg:col-span-3" />
      <div className="col-span-5 lg:col-span-2 py-8 text-left px-8">
        <h1 className="text-xl font-semibold">
          Explore Our Advanced Exam Tools
        </h1>
        <p className="text-sm font-normal tracking-light">
          Our platform provides a comprehensive suite of tools for secure and
          efficient digital assessments, featuring AI-driven proctoring,
          real-time monitoring, and customizable exam settings. Easily create
          and administer exams with our user-friendly interface, and experience
          seamless integration of advanced technologies designed to enhance the
          entire examination process.
        </p>
      </div>
    </section>
  );
};
