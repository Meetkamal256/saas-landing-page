import { twMerge } from "tailwind-merge";
import { pricingTiers } from "../data";
import { FaCheck } from "react-icons/fa6";

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text ">
            Pricing
          </h2>
          <p className="section-description mt-5">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>
      </div>
      {/* Card */}
      <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:justify-center lg:items-end">
        {pricingTiers.map(
          ({ id, title, monthlyPrice, buttonText, popular, inverse, features }) => (
            <div
              className={twMerge(
                "p-10 border border-[#f1f1f1] rounded-3xl shadow[0_7px_14px_#EAEAEA] max-w-sm w-full",
                inverse === true && "border-black bg-black text-white"
              )}
            >
              {popular === true && (
                <div className="flex justify-between">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black/50",
                      inverse === true && "text-white/60"
                    )}
                  >
                    {title}
                  </h3>
                  <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <span className="bg-gradient-to-r from-[#DD7DDF] via-[#E1CD86] via-[#BBCB92] via-[#71C2EF] to-[#3BFFFF] text-transparent bg-clip-text font-medium">
                      Popular
                    </span>
                  </div>
                </div>
              )}
              <div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl tracking-tighter leading-none">
                    ${monthlyPrice}
                  </span>
                  <span className="tracking-tight font-bold text-black/50">
                    /month
                  </span>
                </div>
                <button
                  className={twMerge(
                    "btn btn-primary w-full mt-[30px]",
                    inverse === true && "bg-white text-black"
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature) => (
                    <li className="flex items-center gap-4 text-sm">
                      <FaCheck />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};
