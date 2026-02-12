import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const LandingHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out bg-white/95 backdrop-blur-xl border-b border-gray-200/50 ${
          isScrolled ? 'shadow-lg shadow-gray-900/10' : 'shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-500 ease-out ${
            isScrolled ? 'h-16' : 'h-20'
          }`}>
            {/* Logo */}
            <Link
              to="/home"
              className="flex items-center gap-3 flex-shrink-0 group relative"
            >
              {/* Logo Image with subtle glow/shadow on hover */}
              <div className="relative -mr-2">
                <img
                  src="/assets/kcrg_logo.png"
                  alt="KCRG Logo"
                  className={`object-contain transition-all duration-500 ease-out group-hover:scale-105 ${
                    isScrolled ? "h-9" : "h-11"
                  }`}
                />
                {/* Decorative blur behind logo for depth */}
                <div className="absolute inset-0 bg-indigo-400/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Vertical Separator */}
              <div 
                className={`w-px bg-gray-200 transition-all duration-500 ${
                  isScrolled ? "h-6" : "h-8"
                }`} 
              />

              {/* Text Branding */}
              <div className="flex flex-col justify-center">
                <span
                  className={`font-extrabold tracking-tight leading-none transition-all duration-500 ${
                    isScrolled ? "text-xl" : "text-2xl"
                  } bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-indigo-600 group-hover:from-indigo-600 group-hover:to-blue-500`}
                >
                  KCRG
                </span>
                <span 
                  className={`font-medium tracking-[0.2em] text-[10px] uppercase transition-all duration-500 text-gray-400 group-hover:text-indigo-400 ${
                    isScrolled ? "opacity-0 h-0" : "opacity-100 mt-1"
                  }`}
                >
                  Research Group
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-1">
              <Link 
                to="/home" 
                className={`px-4 py-2 font-medium rounded-full transition-all duration-300 ${
                  isActive("/home")
                    ? "text-indigo-600 bg-indigo-50 font-semibold"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                }`}
              >
                Home
              </Link>

              {/* Group Dropdown */}
              <div className="relative group bg-transparent">
                <button className={`flex items-center px-4 py-2 font-medium rounded-full transition-all duration-300 ${
                  location.pathname.startsWith("/group")
                    ? "text-indigo-600 bg-indigo-50 font-semibold"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                }`}>
                  Group 
                  <ChevronDown 
                    size={16} 
                    className="ml-1 transition-transform duration-300 group-hover:rotate-180" 
                  />
                </button>
                <div className="absolute left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform group-hover:translate-y-0 translate-y-2 transition-all duration-300 ease-out">
                  <div className="bg-white shadow-2xl rounded-2xl border border-gray-200/50 w-48 p-2 shadow-gray-900/10">
                    <Link
                      to="/group/team-members"
                      className={`block px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                        isActive("/group/team-members")
                          ? "text-indigo-600 bg-indigo-50"
                          : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                      }`}
                    >
                      Team Members
                    </Link>
                    <Link
                      to="/group/collaborators"
                      className={`block px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                        isActive("/group/collaborators")
                          ? "text-indigo-600 bg-indigo-50"
                          : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                      }`}
                    >
                      Collaborators
                    </Link>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/researches" 
                className={`px-4 py-2 font-medium rounded-full transition-all duration-300 ${
                  isActive("/researches")
                    ? "text-indigo-600 bg-indigo-50 font-semibold"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                }`}
              >
                Researches
              </Link>
              <Link 
                to="/publications" 
                className={`px-4 py-2 font-medium rounded-full transition-all duration-300 ${
                  isActive("/publications")
                    ? "text-indigo-600 bg-indigo-50 font-semibold"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                }`}
              >
                Publications
              </Link>
              <Link 
                to="/achievements" 
                className={`px-4 py-2 font-medium rounded-full transition-all duration-300 ${
                  isActive("/achievements")
                    ? "text-indigo-600 bg-indigo-50 font-semibold"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                }`}
              >
                Achievements
              </Link>

              <Link 
                to="#" 
                className="px-4 py-2 font-medium rounded-full text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300"
              >
                Current Engagements
              </Link>

              <Link 
                to="/contact" 
                className={`px-4 py-2 font-medium rounded-full transition-all duration-300 ${
                  isActive("/contact")
                    ? "text-indigo-600 bg-indigo-50 font-semibold"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                }`}
              >
                Contact Us
              </Link>
            </nav>

            {/* Mobile button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-3 rounded-2xl text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300 active:scale-95"
              >
                <div className="relative w-6 h-6">
                  <Menu 
                    size={24} 
                    className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} 
                  />
                  <X 
                    size={24} 
                    className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} 
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="bg-white border-t border-gray-200/50 px-6 py-4 space-y-1">
            <Link 
              to="/home" 
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 font-medium rounded-xl transition-all duration-200 ${
                isActive("/home") ? "text-indigo-600 bg-indigo-50 font-semibold" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Home
            </Link>
            
            <button
              onClick={() => toggleDropdown("group")}
              className={`flex items-center justify-between w-full px-4 py-3 font-medium rounded-xl transition-all duration-200 ${
                location.pathname.startsWith("/group") ? "text-indigo-600 bg-indigo-50" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Group 
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-300 ${openDropdown === 'group' ? 'rotate-180' : ''}`} 
              />
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ${openDropdown === 'group' ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="ml-4 space-y-1 pt-1">
                <Link 
                  to="/group/team-members" 
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-sm ${isActive("/group/team-members") ? "text-indigo-600 bg-indigo-50" : "text-gray-600 hover:bg-gray-50"}`}
                >
                  Team Members
                </Link>
                <Link 
                  to="/group/collaborators" 
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-sm ${isActive("/group/collaborators") ? "text-indigo-600 bg-indigo-50" : "text-gray-600 hover:bg-gray-50"}`}
                >
                  Collaborators
                </Link>
              </div>
            </div>
            
            <Link 
              to="/researches" 
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 font-medium rounded-xl transition-all duration-200 ${
                isActive("/researches") ? "text-indigo-600 bg-indigo-50 font-semibold" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Researches
            </Link>
            <Link 
              to="/publications" 
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 font-medium rounded-xl transition-all duration-200 ${
                isActive("/publications") ? "text-indigo-600 bg-indigo-50 font-semibold" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Publications
            </Link>
            <Link 
              to="/achievements" 
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 font-medium rounded-xl transition-all duration-200 ${
                isActive("/achievements") ? "text-indigo-600 bg-indigo-50 font-semibold" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Achievements
            </Link>

            <Link 
              to="#" 
              // onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 font-medium rounded-xl transition-all duration-200 ${
                isActive("#") ? "text-indigo-600 bg-indigo-50 font-semibold" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Current Engagements
            </Link>

            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 font-medium rounded-xl transition-all duration-200 ${
                isActive("/contact") ? "text-indigo-600 bg-indigo-50 font-semibold" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default LandingHeader;