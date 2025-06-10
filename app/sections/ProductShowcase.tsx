"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MotionImage = motion.create(Image);
export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-gradient-to-b from-[#ffff] to-[#D2DCFF] overflow-x-clip"
    >
      <div className="container">
        <div className="flex justify-center">
          <div className="tag">Boost your productivity</div>
        </div>
        <div className="section-heading">
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>

        <div className="relative w-full aspect-[16/9] mt-5">
          <Image
            src="/assets/product-image.png"
            alt="product Image"
            fill
            className="object-cover"
            priority
          />
          <MotionImage
            src="/assets/pyramid.png"
            alt="pyramid image"
            width={200}
            height={200}
            className="hidden md:flex absolute -right-20 -top-32"
            style={{
              translateY: translateY,
            }}
          />
          <MotionImage
            src="/assets/tube.png"
            alt="tube image"
            width={200}
            height={200}
            className="hidden md:block absolute bottom-15 -left-28"
            style={{
              translateY: translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
