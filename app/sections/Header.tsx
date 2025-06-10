import Image from "next/image";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-4 bg-black text-white">
        <div className="flex gap-3 items-center justify-center">
          <p className="text-white/60 text-sm hidden md:flex">
            Streamline Your workflow and boost your productivity
          </p>
          <p>Get started for free</p>
        </div>
        <img
          src="/assets/arrow-right.svg"
          alt="Arrow"
          className="h-4 w-4 ml-2 inline-flex justify-center items-center"
        />
      </div>

      <div className="container py-5">
        <div className="flex justify-between items-center">
          <Image src="/assets/logosaas.png" alt="" height={40} width={40} />
          <Image
            src="/assets/menu.svg"
            alt="menuIcon"
            width={20}
            height={20}
            className="md:hidden"
          />
          <nav className="hidden md:flex gap-6 text-black/60 items-center">
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#customers">Customers</a>
            <a href="#updates">Updates</a>
            <a href="#help">Help</a>
            <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
