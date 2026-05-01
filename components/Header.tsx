"use client";
import Link from "next/link";
import Image from "next/image";
import { eventLink, substackLink } from "@/utils/constants";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

const navLinks = [
  { name: "home", href: "/" },
  { name: "about us", href: "/about" },
  { name: "events", href: eventLink, target: "_blank" },
  { name: "blog", href: substackLink, target: "_blank" },
  { name: "join us", href: "/join" },
  { name: "contact us", href: "#footer" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="w-full mx-auto px-6 py-4 md:px-16 md:py-6 flex justify-between items-center">
        <Link href="/" className="relative w-28 md:w-44">
          <Image
            src="/images/logo-white.svg"
            alt="AI Lagos Logo"
            width={176}
            height={82}
            className="object-contain w-full"
          />
        </Link>
        <nav className="hidden md:flex space-x-8  ">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target={link.target}
              className="hover:text-primary transition-colors duration-700 text-white text-lg"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FiMenu className="w-6 h-6" color="white" />
        </button>
      </div>

      {/* Mobile Navigation - slide-out menu */}

      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute top-0 right-0 h-screen w-full bg-black/40 backdrop-blur-md shadow-lg 
      transform transition-transform duration-350 ease-out-in md:hidden!
      ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
    `}
        >
          <div
            className={`w-full bg-accent-200 ml-auto h-full  p-4 px-6 transition-opacity`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex justify-between items-center mb-8">
              <Image
                src="/images/logo-white.svg"
                alt="AI Lagos Logo"
                width={176}
                height={82}
                className="object-cover"
              />
              <button onClick={() => setIsMobileMenuOpen(false)}>
                {/* <IoMdClose className="w-6 h-6" /> */}
                <AiOutlineClose className="w-6 h-6" color="white" />
              </button>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
              target={link.target}

                  className="hover:text-primary transition-colors duration-700 text-white text-2xl"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
