import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='sticky top-0 z-50 w-full backdrop-blur-sm'>
      <div className='w-11/12 mx-auto'>
        <nav className='flex items-center justify-between py-6'>
          {/* Logo */}
          <div className='flex items-center'>
            <img src='/AcemyX.svg' alt='AcemyX logo' className='h-8' />
          </div>

          {/* Desktop Nav Links */}
          <div className='hidden md:flex items-center gap-12'>
            <a
              href='#'
              className='text-gray-700 px-3 py-2 rounded-lg transition-all duration-300'
            >
              Home
            </a>
            <a
              href='#'
              className='text-gray-700 px-3 py-2 rounded-lg transition-all duration-300'
            >
              Features
            </a>
            <a
              href='#'
              className='text-gray-700 px-3 py-2 rounded-lg transition-all duration-300'
            >
              Testimonial
            </a>
          </div>

          <div className='flex items-center gap-6'>
            {/* Sign In Button */}
            <button className='px-8 py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition-all duration-300 shadow-sm hover:shadow-md'>
              Sign In
            </button>

            {/* Hamburger Menu Button */}
            <button onClick={toggleMenu} className='md:hidden text-2xl z-50'>
              {isMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden fixed inset-0 w-full h-screen backdrop-blur-lg transform transition-transform duration-300 ease-in-out'>
            <div className='flex flex-col items-center justify-center h-full space-y-8 text-xl'>
              <a
                href='#'
                className='text-gray-700 px-3 py-2 rounded-lg transition-all duration-300'
              >
                Home
              </a>
              <a
                href='#'
                className='text-gray-700 px-3 py-2 rounded-lg transition-all duration-300'
              >
                Features
              </a>
              <a
                href='#'
                className='text-gray-700 px-3 py-2 rounded-lg transition-all duration-300'
              >
                Testimonial
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
