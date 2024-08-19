import Link from 'next/link'; // Import Link from next/link for Next.js
import Nav from './Nav';
import { Button } from './ui/button';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          
        <h1 className="text-4xl font-semibold px-4 py-2 bg-gray-500 text-white rounded-lg shadow-lg">
      AICHAOUI<span className="text-cyan-400">.</span>
    </h1>
          
        </Link>
        <div className="hidden xl:flex items-center gap-8 "></div>
        <Nav />
        <Link href="/contact">
        <Button >Let's collaborate</Button>
        </Link>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
