import FEEDBACK_SVG from "../../assets/illustrations/FEEDBACK_SVG.svg";

export const FeedbackToolContentWithImage = () => {
  return (
    <section className="grid grid-cols-5 gap-4 items-center px-4 py-6 my-8">
      <img src={FEEDBACK_SVG} className="col-span-5 md:col-span-2" />
      <div className="col-span-5 md:col-span-3 py-8 text-left px-8">
        <h1 className="text-xl font-semibold">What Is a Feedback Tool?</h1>
        <p className="text-sm font-normal tracking-light">
          A feedback tool is designed to facilitate the collection and delivery
          of constructive feedback within an organization. Commonly used for
          performance reviews, development initiatives, and ongoing coaching,
          this tool provides structured insights into an individual's strengths,
          areas for improvement, and overall performance. Feedback tools are
          essential for promoting growth, enhancing communication, and driving
          continuous improvement across teams and departments.
        </p>
      </div>
    </section>
  );
};
