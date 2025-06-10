"use client";

import { useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const MotionImage = motion.create(Image);

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  
  return (
    <section ref={sectionRef} className="bg-white py-24 overflow-x-clip mt-20" id="help">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <MotionImage
            src="/assets/star.png"
            alt="star image"
            width={360}
            height={360}
            className="hidden md:block absolute -left-[350px] -top-[137px]"
            style={{
              translateY,
            }}
          />
          <MotionImage
            src="/assets/spring.png"
            alt="spring image"
            width={360}
            height={360}
            className="hidden md:block absolute -right-[331px] -top-[19px]"
            style={{
              translateY,
            }}
          />
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
