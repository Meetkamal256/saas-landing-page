import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#ffff] to-[#D2DCFF]">
      <div className="container">
        <div className="tag">Boost your productivity</div>
        <h2>A more effective way to track progress</h2>
        <p>
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <div className="relative w-full aspect-[16/9]">
          <Image
            src="/assets/product-image.png"
            alt="product Image"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};
