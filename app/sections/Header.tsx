"use client";

import { useState } from "react";
import Image from "next/image";
import { IoMdClose, IoMdMenu } from "react-icons/io";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      
      <div className="container py-5 px-4 relative">
        <div className="flex justify-between items-center">
          <Image src="/assets/logosaas.png" alt="" height={40} width={40} />
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? (
              <IoMdClose className="text-2xl" />
            ) : (
              <IoMdMenu className="text-2xl" />
            )}
          </button>
          
          {/* Desktop navigation */}
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
          {/* Mobile navigation */}
          {isMenuOpen && (
            <nav className="absolute top-full left-0 w-full bg-white border-t border-gray-200 md:hidden z-10">
              <div className="flex flex-col px-6 py-5 gap-4 text-black/70 text-base font-medium">
                <a
                  href="#about"
                  className="hover:text-black transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#features"
                  className="hover:text-black transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#customers"
                  className="hover:text-black transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Customers
                </a>
                <a
                  href="#updates"
                  className="hover:text-black transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Updates
                </a>
                <a
                  href="#help"
                  className="hover:text-black transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Help
                </a>
                <button className="mt-2 bg-black text-white px-4 py-2 rounded-lg font-medium tracking-tight hover:bg-black/90 transition">
                  Get for free
                </button>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};
