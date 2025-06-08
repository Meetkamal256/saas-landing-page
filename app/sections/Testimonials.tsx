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
        <div>
          {firstColumn.map((testimonial) => (
            <div
              key={testimonial.id}
              className="card shadow[0_7px_14px_#EAEAEA]"
            >
              <div>{testimonial.text}</div>
              <div>
                <div>
                  <Image src={testimonial.imageSrc} alt="testimonial image" height={40} width={40}/>
                </div>
                <div>
                  <div>{testimonial.name}</div>
                  <div>{testimonial.username}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
