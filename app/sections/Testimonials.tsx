"use client";

import Image from "next/image";
import { testimonials } from "../data";
import { TestimonialsColumn } from "../components/TestimonialsColumn";
import { motion } from "framer-motion";
import { useState } from "react";

export const Testimonials = () => {
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);
  
  const scrollAnimation = {
    animate: {
      y: ["0%", "-50%"],
    },
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
    },
  };
  
  // Hover states
  const [hoveredCol, setHoveredCol] = useState<null | number>(null);
  
  const getAnimationProps = (colIndex: number) =>
    hoveredCol === colIndex ? {} : scrollAnimation;
  
  return (
    <section className="bg-white flex justify-center">
      <div className="container overflow-hidden">
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
        
        {/* Testimonial Columns */}
        <div className="flex justify-center gap-6 mt-10">
          {/* First column */}
          <div
            className="h-[500px] overflow-hidden"
            onMouseEnter={() => setHoveredCol(1)}
            onMouseLeave={() => setHoveredCol(null)}
          >
            <motion.div {...getAnimationProps(1)}>
              <TestimonialsColumn testimonials={firstColumn} />
              <TestimonialsColumn testimonials={firstColumn} />
            </motion.div>
          </div>
          
          {/* Second column */}
          <div
            className="hidden md:block h-[500px] overflow-hidden"
            onMouseEnter={() => setHoveredCol(2)}
            onMouseLeave={() => setHoveredCol(null)}
          >
            <motion.div {...getAnimationProps(2)}>
              <TestimonialsColumn testimonials={secondColumn} />
              <TestimonialsColumn testimonials={secondColumn} />
            </motion.div>
          </div>
          
          {/* Third column */}
          <div
            className="hidden lg:block h-[500px] overflow-hidden"
            onMouseEnter={() => setHoveredCol(3)}
            onMouseLeave={() => setHoveredCol(null)}
          >
            <motion.div {...getAnimationProps(3)}>
              <TestimonialsColumn testimonials={thirdColumn} />
              <TestimonialsColumn testimonials={thirdColumn} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
