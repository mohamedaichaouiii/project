"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const links = [
  {
    name: "home",
    path: "/"
  },
  {
    name: "resume",
    path: "/resume"
  },
  {
    name: "work",
    path: "/work"
  },
  {
    name: "Achievements",
    path: "/extra",
  },
  {
    name: "contact",
    path: "/contact"
  },
];

const Nav = () => {
  const pathname = usePathname(); // Get the current pathname
  console.log(pathname);

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link 
          href={link.path} 
          key={index}
          className={`capitalize font-medium transition-all hover:text-cyan-400 ${
            link.path === pathname ? "text-cyan-400 border-b-2 border-cyan-400" : "text-white"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
