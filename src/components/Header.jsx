import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto w-[90%] flex items-center justify-between py-6">
        {/* Logo */}
        <div>
          <img
            src="./Acemyx-logo.svg"
            alt="AcemyX Logo"
            // className='h-8 w-auto'
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-[4.8rem]">
            <li>
              <a
                href="#"
                className="text-[2rem] font-medium transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[2rem] font-medium transition-all duration-300"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[2rem] font-medium transition-all duration-300"
              >
                Testimonial
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-[1.2rem] rounded-full border-[0.2rem] border-[#ff7340] px-6 py-3 text-[2rem] font-medium text-[#ff7340] transition-all duration-300 hover:bg-[#ff7340]/10"
              >
                <span>Sign up</span>
                <img
                  src="./Arrowup.svg"
                  alt="Sign up icon"
                  // className='h-10 w-10 '
                />
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-50"
        >
          {isMenuOpen ? <HiX size={32} /> : <HiMenu size={32} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-white/90 backdrop-blur-md transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } md:hidden`}
          style={{ zIndex: 40 }}
        >
          <div className="flex h-screen items-center justify-center">
            <ul className="flex flex-col items-center gap-8">
              <li>
                <a href="#" className="text-[2.4rem] font-medium">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-[2.4rem] font-medium">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-[2.4rem] font-medium">
                  Testimonial
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
