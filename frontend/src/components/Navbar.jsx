import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check if we're on the landing page
  const isLandingPage = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-sm transition-colors duration-300 ${
      isDark ? 'bg-[#1a0f1a]/80' : 'bg-[#fefefe]/80'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <a 
            href="#"
            onClick={handleLogoClick}
            className="text-[#ff00ff] text-xl sm:text-2xl font-bold hover:text-[#ff40ff] transition-colors"
          >
            Patfolio.
          </a>

          {/* Only show navigation if not on landing page */}
          {!isLandingPage && (
            <>
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8 lg:gap-12">
                <Link 
                  to="/home" 
                  className={`text-base lg:text-lg ${
                    location.pathname === '/home' 
                      ? 'text-[#ff00ff]' 
                      : isDark 
                        ? 'text-white hover:text-[#ff00ff]' 
                        : 'text-gray-900 hover:text-[#ff00ff]'
                  } transition-colors`}
                >
                  Home
                </Link>
                <Link 
                  to="/services" 
                  className={`text-base lg:text-lg ${
                    location.pathname === '/services' 
                      ? 'text-[#ff00ff]' 
                      : isDark 
                        ? 'text-white hover:text-[#ff00ff]' 
                        : 'text-gray-900 hover:text-[#ff00ff]'
                  } transition-colors`}
                >
                  Services
                </Link>
                <Link 
                  to="/skills" 
                  className={`text-base lg:text-lg ${
                    location.pathname === '/skills' 
                      ? 'text-[#ff00ff]' 
                      : isDark 
                        ? 'text-white hover:text-[#ff00ff]' 
                        : 'text-gray-900 hover:text-[#ff00ff]'
                  } transition-colors`}
                >
                  Skills
                </Link>
                <Link 
                  to="/projects" 
                  className={`text-base lg:text-lg ${
                    location.pathname === '/projects' 
                      ? 'text-[#ff00ff]' 
                      : isDark 
                        ? 'text-white hover:text-[#ff00ff]' 
                        : 'text-gray-900 hover:text-[#ff00ff]'
                  } transition-colors`}
                >
                  Projects
                </Link>
                <Link 
                  to="/education" 
                  className={`text-base lg:text-lg ${
                    location.pathname === '/education' 
                      ? 'text-[#ff00ff]' 
                      : isDark 
                        ? 'text-white hover:text-[#ff00ff]' 
                        : 'text-gray-900 hover:text-[#ff00ff]'
                  } transition-colors`}
                >
                  Education
                </Link>
                <Link 
                  to="/contact" 
                  className={`text-base lg:text-lg ${
                    location.pathname === '/contact' 
                      ? 'text-[#ff00ff]' 
                      : isDark 
                        ? 'text-white hover:text-[#ff00ff]' 
                        : 'text-gray-900 hover:text-[#ff00ff]'
                  } transition-colors`}
                >
                  Contact
                </Link>
                <button 
                  onClick={handleLogout}
                  className={`text-base lg:text-lg text-[#ff00ff] hover:text-[#ff40ff] transition-colors`}
                >
                  Log Out
                </button>
                <button 
                  onClick={toggleTheme}
                  className="text-[#ff00ff] hover:text-[#ff40ff] transition-colors"
                >
                  {isDark ? (
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="w-6 h-6 lg:w-7 lg:h-7"
                    >
                      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                    </svg>
                  ) : (
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="w-6 h-6 lg:w-7 lg:h-7"
                    >
                      <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={toggleMenu}
                className={`md:hidden transition-colors ${
                  isDark ? 'text-white hover:text-[#ff00ff]' : 'text-gray-900 hover:text-[#ff00ff]'
                }`}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Mobile Navigation - Only show if not on landing page */}
        {!isLandingPage && (
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className={`px-2 pt-2 pb-3 space-y-1 backdrop-blur-sm rounded-lg mb-4 transition-colors duration-300 ${
              isDark ? 'bg-[#1a0f1a]/95' : 'bg-[#fefefe]/95'
            }`}>
              <Link 
                to="/home" 
                className={`block px-3 py-2 rounded-md text-base ${
                  location.pathname === '/home' 
                    ? 'text-[#ff00ff]' 
                    : isDark 
                      ? 'text-white hover:text-[#ff00ff]' 
                      : 'text-gray-900 hover:text-[#ff00ff]'
                } hover:bg-[#ff00ff]/10 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`block px-3 py-2 rounded-md text-base ${
                  location.pathname === '/services' 
                    ? 'text-[#ff00ff]' 
                    : isDark 
                      ? 'text-white hover:text-[#ff00ff]' 
                      : 'text-gray-900 hover:text-[#ff00ff]'
                } hover:bg-[#ff00ff]/10 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/skills" 
                className={`block px-3 py-2 rounded-md text-base ${
                  location.pathname === '/skills' 
                    ? 'text-[#ff00ff]' 
                    : isDark 
                      ? 'text-white hover:text-[#ff00ff]' 
                      : 'text-gray-900 hover:text-[#ff00ff]'
                } hover:bg-[#ff00ff]/10 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link 
                to="/projects" 
                className={`block px-3 py-2 rounded-md text-base ${
                  location.pathname === '/projects' 
                    ? 'text-[#ff00ff]' 
                    : isDark 
                      ? 'text-white hover:text-[#ff00ff]' 
                      : 'text-gray-900 hover:text-[#ff00ff]'
                } hover:bg-[#ff00ff]/10 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="/education" 
                className={`block px-3 py-2 rounded-md text-base ${
                  location.pathname === '/education' 
                    ? 'text-[#ff00ff]' 
                    : isDark 
                      ? 'text-white hover:text-[#ff00ff]' 
                      : 'text-gray-900 hover:text-[#ff00ff]'
                } hover:bg-[#ff00ff]/10 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Education
              </Link>
              <Link 
                to="/contact" 
                className={`block px-3 py-2 rounded-md text-base ${
                  location.pathname === '/contact' 
                    ? 'text-[#ff00ff]' 
                    : isDark 
                      ? 'text-white hover:text-[#ff00ff]' 
                      : 'text-gray-900 hover:text-[#ff00ff]'
                } hover:bg-[#ff00ff]/10 transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <button 
                onClick={(e) => {
                  handleLogout(e);
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-md text-base text-[#ff00ff] hover:text-[#ff40ff] hover:bg-[#ff00ff]/10 transition-colors`}
              >
                Log Out
              </button>
              <button 
                onClick={() => {
                  toggleTheme();
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-md text-base ${
                  isDark ? 'text-white hover:text-[#ff00ff]' : 'text-gray-900 hover:text-[#ff00ff]'
                } hover:bg-[#ff00ff]/10 transition-colors flex items-center gap-2`}
              >
                {isDark ? (
                  <>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="w-5 h-5"
                    >
                      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                    </svg>
                    Light Mode
                  </>
                ) : (
                  <>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="w-5 h-5"
                    >
                      <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
                    </svg>
                    Dark Mode
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;