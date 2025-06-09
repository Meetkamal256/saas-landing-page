import { FaArrowRightLong } from "react-icons/fa6";

export const CallToAction = () => {
  return (
    <section className="bg-white py-24">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Sign up for today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-5">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text">
            <span>Learn more</span>
            <FaArrowRightLong className="ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
