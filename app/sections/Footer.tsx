import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

import Image from "next/image";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div>
          <Image
            src="/assets/logosaas.png"
            alt="logo image"
            width={40}
            height={40}
          />
        </div>
        <nav>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
        </nav>
        <div>
          <FaXTwitter />
          <FaInstagram />
          <FaLinkedinIn />
          <FaPinterestP />
          <FaYoutube />
        </div>
        <div>© 2024 Your Company, Inc. All rights reserved.</div>
      </div>
    </footer>
  );
};
