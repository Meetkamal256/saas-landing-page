import Image from "next/image";
import { testimonials } from "../data";

export const Testimonials = () => {
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section className="bg-white">
      <div className="container">
        <div className="flex justify-center">
          <div className="tag">Testimonials</div>
        </div>
        <div className="section-heading">
          <h2 className="section-title mt-5">What our users say</h2>
          <p className="section-description mt-5">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </div>
        {/* testimonial card */}
        <div className="flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          {firstColumn.map((testimonial) => (
            <div
              key={testimonial.id}
              className="card shadow[0_7px_14px_#EAEAEA]"
            >
              <div className="">{testimonial.text}</div>
              <div className="flex items-center gap-2 mt-5">
                <div>
                  <Image src={testimonial.imageSrc} alt="testimonial image" height={40} width={40} className="full-rounded h-10 w-10"/>
                </div>
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-[20px]">{testimonial.name}</div>
                  <div className="leading-5 tracking-tight ">{testimonial.username}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
