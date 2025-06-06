import { LuArrowRight } from "react-icons/lu";

export const Hero = () => {
  return (
    <section>
      <div className="container">
        <div>
          <div className="text-sm inline-flex border border-[#222]/10 py-1 px-3 rounded-lg tracking-tight">
            Version 2.0 is here
          </div>
          <h1 className="font-bold text-5xl bg-gradient-to-b from-black to-[#001E7F] text-transparent bg-clip-text mt-6">
            Pathway to productivity
          </h1>
          <p className="text-xl text-[#010D3E] tracking-tight mt-6">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
          <div className="flex gap-1 items-center mt-[30px]">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn btn-text">
              <span>Learn more</span>
              <LuArrowRight className="h-5 w-5 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
