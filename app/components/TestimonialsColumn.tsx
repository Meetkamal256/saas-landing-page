import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { testimonials } from "../data";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] cursor-pointer",
        props.className
      )}
    >
      {props.testimonials.map((testimonial) => (
        <div key={testimonial.id} className="card shadow[0_7px_14px_#EAEAEA]">
          <div>{testimonial.text}</div>
          <div className="flex items-center gap-2 mt-5">
            <div>
              <Image
                src={testimonial.imageSrc}
                alt="testimonial image"
                height={40}
                width={40}
                className="full-rounded h-10 w-10"
              />
            </div>
            <div className="flex flex-col">
              <div className="font-medium tracking-tight leading-[20px]">
                {testimonial.name}
              </div>
              <div className="leading-5 tracking-tight ">
                {testimonial.username}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
