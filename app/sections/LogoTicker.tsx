import Image from "next/image";

export const LogoTicker = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 flex-none">
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
        </div>
      </div>
    </section>
  );
};
