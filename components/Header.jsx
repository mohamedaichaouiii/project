"use client";
import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full py-4 md:py-6 xl:py-8 text-white bg-primary z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1
            className="text-2xl md:text-3xl xl:text-4xl font-semibold px-3 py-1 md:px-4 md:py-2 bg-cyan-900/80 text-white rounded-lg shadow-md hover:bg-cyan-800 transition-colors"
          >
            AICHAOUI<span className="text-cyan-400">.</span>
          </h1>
        </Link>

        {/* Desktop Nav and Button */}
        <div className="hidden md:flex items-center gap-6 xl:gap-8">
          <Nav />
          <Link href="/contact">
            <Button
              variant="default"
              className="text-sm md:text-base px-4 py-2 md:px-6 md:py-3 bg-cyan-400 text-primary hover:bg-cyan-500 transition-colors"
            >
              Let's collaborate
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
