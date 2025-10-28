"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close mobile menu if open
    }
  };

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/images/logo5.jpeg"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <Link href="/" className="text-xl font-semibold text-gray-800">
            AgriHire
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-gray-700">
          <a
            href="#HowItWorks"
            onClick={(e) => handleSmoothScroll(e, "HowItWorks")}
            className="hover:text-green-600 cursor-pointer"
          >
            How It Works
          </a>

          <a
            href="#featured-equipment"
            onClick={(e) => handleSmoothScroll(e, "featured-equipment")}
            className="hover:text-green-600 cursor-pointer"
          >
            Browse Equipment
          </a>

          <a
            href="#list-your-tools"
            onClick={(e) => handleSmoothScroll(e, "list-your-tools")}
            className="hover:text-green-600 cursor-pointer"
          >
            List Your Tools
          </a>
        </div>

        {/* Right Section (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/signin" className="text-gray-800 font-medium hover:text-green-600">
            Sign In
          </Link>
          <Link
            href="/get-started"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col space-y-3 text-gray-700">
          <a
            href="#HowItWorks"
            onClick={(e) => handleSmoothScroll(e, "HowItWorks")}
            className="hover:text-green-600"
          >
            How It Works
          </a>

          <a
            href="#featured-equipment"
            onClick={(e) => handleSmoothScroll(e, "featured-equipment")}
            className="hover:text-green-600"
          >
            Browse Equipment
          </a>

          <a
            href="#list-your-tools"
            onClick={(e) => handleSmoothScroll(e, "list-your-tools")}
            className="hover:text-green-600"
          >
            List Your Tools
          </a>

          <Link href="/signin" className="hover:text-green-600">
            Sign In
          </Link>

          <Link
            href="/get-started"
            className="bg-green-600 text-white px-4 py-2 rounded-lg text-center hover:bg-green-700"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
