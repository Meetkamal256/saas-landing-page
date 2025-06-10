"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <section className="py-8 md:py-12 bg-white overflow-hidden">
      <div className="container">
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,black,transparent)]">
          <motion.div
            className="flex gap-14 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="flex gap-14">
              {/* First set */}
              <Image
                src="/assets/logo-acme.png"
                alt="Acme"
                width={120}
                height={40}
                className="object-contain"
              />
              <Image
                src="/assets/logo-apex.png"
                alt="Apex"
                width={120}
                height={40}
                className="object-contain"
              />
              <Image
                src="/assets/logo-celestial.png"
                alt="Celestial"
                width={120}
                height={40}
                className="object-contain"
              />
              <Image
                src="/assets/logo-echo.png"
                alt="Echo"
                width={120}
                height={40}
                className="object-contain"
              />
              <Image
                src="/assets/logo-acme.png"
                alt="Acme Repeat"
                width={120}
                height={40}
                className="object-contain"
              />
              <Image
                src="/assets/logo-pulse.png"
                alt="Pulse"
                width={120}
                height={40}
                className="object-contain"
              />
              <Image
                src="/assets/logo-acme.png"
                alt="Acme Again"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>

            <div className="flex gap-14">
              {/* Second set */}
              <Image
                src="/assets/logo-acme.png"
                alt="Acme"
                width={120}
                height={40}
                className="object-contain"
              />
              <Image
                src="/assets/logo-apex.png"
                alt="Apex"
                width={120}
                height={40}
                className="object-contain"
              />
              <Image
                src="/assets/logo-celestial.png"
                alt="Celestial"
                width={120}
                height={40}
                className="object-contain"
              />
              <Image
                src="/assets/logo-echo.png"
                alt="Echo"
                width={120}
                height={40}
                className="object-contain"
              />
              <Image
                src="/assets/logo-acme.png"
                alt="Acme Repeat"
                width={120}
                height={40}
                className="object-contain"
              />
              <Image
                src="/assets/logo-pulse.png"
                alt="Pulse"
                width={120}
                height={40}
                className="object-contain"
              />
              <Image
                src="/assets/logo-acme.png"
                alt="Acme Again"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
