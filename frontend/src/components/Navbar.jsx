import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 64; // height of navbar to offset scroll
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: sectionTop, behavior: 'smooth' });
      setIsOpen(false); // close mobile menu on click
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="text-[#ff00ff] text-2xl font-bold bg-transparent border-none cursor-pointer"
            >
              Patfolio
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-800 hover:text-[#ff00ff] px-3 py-2 rounded-md text-base font-medium bg-transparent border-none cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-800 hover:text-[#ff00ff] px-3 py-2 rounded-md text-base font-medium bg-transparent border-none cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-800 hover:text-[#ff00ff] px-3 py-2 rounded-md text-base font-medium bg-transparent border-none cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="text-gray-800 hover:text-[#ff00ff] px-3 py-2 rounded-md text-base font-medium bg-transparent border-none cursor-pointer"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-800 hover:text-[#ff00ff] px-3 py-2 rounded-md text-base font-medium bg-transparent border-none cursor-pointer"
            >
              Contact
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-[#ff00ff] p-2"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-800 hover:text-[#ff00ff] block px-3 py-2 rounded-md text-lg font-medium bg-transparent border-none cursor-pointer w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-800 hover:text-[#ff00ff] block px-3 py-2 rounded-md text-lg font-medium bg-transparent border-none cursor-pointer w-full text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-800 hover:text-[#ff00ff] block px-3 py-2 rounded-md text-lg font-medium bg-transparent border-none cursor-pointer w-full text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="text-gray-800 hover:text-[#ff00ff] block px-3 py-2 rounded-md text-lg font-medium bg-transparent border-none cursor-pointer w-full text-left"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-800 hover:text-[#ff00ff] block px-3 py-2 rounded-md text-lg font-medium bg-transparent border-none cursor-pointer w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
