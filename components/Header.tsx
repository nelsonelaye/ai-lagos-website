import Link from 'next/link';
import Image from 'next/image';
import { eventLink, substackLink } from "@/utils/constants";

const navLinks = [
  { name: "home", href: "/" },
  { name: "about us", href: "/about" },
  { name: "events", href: eventLink, target: "_blank" },
  { name: "blog", href: substackLink, target: "_blank" },
  { name: "join us", href: "/join" },
  { name: "contact us", href: "#footer" },
];

const Header = () => {
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
              className="hover:text-primary transition-colors duration-700 text-white md:text-2xl"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
