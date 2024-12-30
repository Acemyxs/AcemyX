import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = ["home", "features", "pricing", "testimonial"];

  return (
    <nav className='flex items-center gap-4'>
      {/* Desktop Nav Links - Only visible on large screens */}
      <ul className='hidden lg:flex items-center gap-12 '>
        {navLinks.map((link) => (
          <li key={link}>
            <a href={`#${link}`} className='text-sm capitalize font-medium'>
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Sign Up Button - Always Visible */}
      <button className='inline-flex items-center gap-2 rounded-full py-2 px-3 md:py-3 md:px-5 border-2 text-orange-600 border-orange-600 hover:text-white font-medium hover:bg-orange-600 transition-all duration-300 shadow-sm hover:shadow-md'>
        <span>
          <a href='https://academy.acemyx.com/'>Sign up</a>
        </span>
        <img src='/Arrowup.svg' alt='arrow' className='w-4 h-4 md:w-6 md:h-6' />
      </button>

      {/* Hamburger Menu Button - Visible on mobile and tablet */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className='lg:hidden text-2xl z-[60]'
      >
        {isMenuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 w-full h-screen bg-white/90 backdrop-blur-sm z-50 transform transition-transform duration-300 ease-in-out lg:hidden text-center flex items-center justify-center ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className='flex flex-col items-center justify-center'>
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className='text-sm capitalize font-medium my-4'
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
