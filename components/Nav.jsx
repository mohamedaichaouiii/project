"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { name: "home", path: "/" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "Achievements", path: "/extra" },
  { name: "contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex items-center">
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        {links.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            className={`capitalize font-medium transition-all hover:text-cyan-400 ${
              link.path === pathname
                ? "text-cyan-400 border-b-2 border-cyan-400"
                : "text-white"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Hamburger Button for Mobile */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span
          className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-primary w-3/4 max-w-xs flex flex-col gap-6 p-6 transition-transform duration-300 ease-in-out md:hidden z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="self-end p-2"
          onClick={toggleMenu}
          aria-label="Close navigation menu"
        >
          <span className="w-6 h-0.5 bg-white rotate-45 absolute"></span>
          <span className="w-6 h-0.5 bg-white -rotate-45"></span>
        </button>
        {/* Mobile Links */}
        {links.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            className={`capitalize font-medium text-lg transition-all hover:text-cyan-400 ${
              link.path === pathname
                ? "text-cyan-400 border-b-2 border-cyan-400"
                : "text-white"
            }`}
            onClick={toggleMenu} // Close menu on link click
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Nav;
