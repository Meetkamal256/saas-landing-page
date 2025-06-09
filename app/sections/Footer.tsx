import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black text-sm text-[#BCBCBC] py-10 text-center overflow-x-clip w-full">
      <div className="container">
        <div className="flex justify-center">
          <Image
            src="/assets/logosaas.png"
            alt="logo image"
            width={40}
            height={40}
          />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <FaXTwitter />
          <FaInstagram />
          <FaLinkedinIn />
          <FaPinterestP />
          <FaYoutube />
        </div>
        <div className="mt-6">
          © 2024 Your Company, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
