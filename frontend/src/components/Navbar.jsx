import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    window.location.reload(); // Reload the page on logout
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 64; 
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after click
  };

  const NavLink = ({ href, children }) => (
    <a 
      href={`#${href}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(href);
      }}
      className="text-gray-800 hover:text-[#ff00ff] px-3 py-2 rounded-md text-base font-medium"
    >
      {children}
    </a>
  );

  const MobileNavLink = ({ href, children }) => (
    <a 
      href={`#${href}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToSection(href);
      }}
      className="text-gray-800 hover:text-[#ff00ff] block px-3 py-2 rounded-md text-lg font-medium"
    >
      {children}
    </a>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
              className="text-[#ff00ff] text-2xl font-bold"
            >
              Patfolio
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="home">Home</NavLink>
            <NavLink href="about">About</NavLink>
            <NavLink href="projects">Projects</NavLink>
            <NavLink href="education">Education</NavLink>
            <NavLink href="contact">Contact</NavLink>
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
            <MobileNavLink href="home">Home</MobileNavLink>
            <MobileNavLink href="about">About</MobileNavLink>
            <MobileNavLink href="projects">Projects</MobileNavLink>
            <MobileNavLink href="education">Education</MobileNavLink>
            <MobileNavLink href="contact">Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;