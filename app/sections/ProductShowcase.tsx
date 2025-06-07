import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-gradient-to-b from-[#ffff] to-[#D2DCFF] overflow-x-clip">
      <div className="container">
        <div className="flex justify-center">
          <div className="tag">Boost your productivity</div>
        </div>
        <div className="max-w-[574px] mx-auto">
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
            A more effective way to track progress
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
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
          <Image
            src="/assets/pyramid.png"
            alt="pyramid image"
            width={200}
            height={200}
            className="hidden md:flex absolute -right-20 -top-32"
          />
          <Image
            src="/assets/tube.png"
            alt="tube image"
            width={200}
            height={200}
            className="hidden md:block absolute bottom-15 -left-28"
          />
        </div>
      </div>
    </section>
  );
};
