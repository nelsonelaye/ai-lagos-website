import { contactEmail, eventLink } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const companyLinks = [
  { name: "About us", href: "/about" },
  { name: "Join us", href: "/join" },
  { name: "Our Events", href: eventLink, target: "_blank" },
  { name: "Partner with us", href: "/partner" },
  // { name: "Blog", href: substackLink, target: "_blank" },
];

const socialLinks = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/company/ai-lagos/" },
  { icon: FaInstagram, href: "https://www.instagram.com/ailagos_" },
  { icon: FaXTwitter, href: "#" },
];

const Footer = () => {
  return (
    <footer id="footer" className="bg-white pb-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start">
        <div className="mb-10 md:mb-0">
          <Link href="/" className="relative w-28 md:w-32 h-10 sm:w-43 block">
            <Image
              src="/images/logo-black.svg"
              alt="AI Lagos Logo"
              width={172}
              height={80}
              // className="object-contain"
            />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-28 text-sm md:pr-11">
          <div>
            <h4 className="font-semibold md:text-[24px] leading-7.5 mb-2">
              Company
            </h4>
            <ul className="space-y-0 text-black leading-7.5 ">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} target={link.target}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold md:text-[24px] leading-7.5 mb-2">
              Contact us
            </h4>
            <p className="text-black mb-1.75 leading-7.5">
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </p>
            <div className="flex gap-1">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="text-black hover:text-black bg-accent rounded-full w-6.5 h-6.5 flex items-center justify-center"
                >
                  <social.icon size="12.86px" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
