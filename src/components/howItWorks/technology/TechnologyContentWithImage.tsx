import STUDENT_DASH_SVG from "../../../assets/illustrations/STUDENT_DASH_SVG.svg";

export const TechnologyContentWithImage = () => {
  return (
    <section className="grid grid-cols-5 gap-4 items-center px-4 py-6 my-8">
      <img
        src={STUDENT_DASH_SVG}
        className="max-h-[500px] col-span-5 md:col-span-3"
      />
      <div className="col-span-5 md:col-span-2 py-8 text-left px-8">
        <h1 className="text-xl font-semibold">
          Empowering Educational Excellence Across the Globe
        </h1>
        <p className="text-sm font-normal tracking-light">
          Our platform is a highly reliable cloud-based solution designed to
          streamline the examination process for schools, universities, and
          organizations worldwide. Whether for in-class or remote exams, our
          technology seamlessly replaces or complements traditional
          pen-and-paper methods, providing a modern, efficient, and secure way
          to conduct assessments. With a focus on enhancing the experience for
          both educators and students, our platform is built to support academic
          success at every level.
        </p>
      </div>
    </section>
  );
};
