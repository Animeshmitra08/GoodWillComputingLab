import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
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

  const isActive = (path : string) => location.pathname === path;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg shadow-gray-900/10' 
          : 'bg-transparent backdrop-blur-none border-b border-transparent shadow-none'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-700 ease-out ${
            isScrolled ? 'h-16' : 'h-20'
          }`}>
            {/* Logo */}
            <div className="flex-shrink-0 group">
              {/* <h1 className={`text-2xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-all duration-500 cursor-pointer ${
                isScrolled ? 'text-2xl' : 'text-3xl'
              } ${!isScrolled ? 'drop-shadow-lg' : ''}`}>
                KC RG
              </h1> */}
              <h1 className={`text-2xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-all duration-500 cursor-pointer ${
                isScrolled ? 'text-2xl' : 'text-3xl'
              } ${!isScrolled ? 'drop-shadow-lg' : ''}`}>
                KC RG
              </h1>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-1">
              <Link 
                to="/" 
                className={`px-4 py-2 font-medium rounded-full transition-all duration-500 ease-out ${
                isActive("/")
                  ? "text-indigo-600 bg-indigo-50 font-semibold"
                  : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
              }`}
              >
                Home
              </Link>
              
              <div className="relative group">
                <button className={`flex items-center px-4 py-2 font-medium rounded-full transition-all duration-500 ${
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
                  <div className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-200/50 w-48 p-2 shadow-gray-900/10">
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
                      to="#"
                      className="block px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-200 font-medium"
                    >
                      Collaborators
                    </Link>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/researches" 
                className={`px-4 py-2 font-medium rounded-full transition-all duration-500 ${
                isActive("/researches")
                  ? "text-indigo-600 bg-indigo-50 font-semibold"
                  : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
              }`}
              >
                Researches
              </Link>
              <Link 
                to="/publications" 
                className={`px-4 py-2 font-medium rounded-full transition-all duration-500 ${
                isActive("/publications")
                  ? "text-indigo-600 bg-indigo-50 font-semibold"
                  : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
              }`}
              >
                Publications
              </Link>
              <Link 
                to="#" 
                className={`px-4 py-2 font-medium rounded-full transition-all duration-500 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50`}
              >
                Achievements
              </Link>
              <Link 
                to="#" 
                className={`px-4 py-2 font-medium rounded-full transition-all duration-500 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50`}
              >
                Current Engagements
              </Link>

              {/* Outreach Dropdown
              <div className="relative group">
                <button className={`flex items-center px-4 py-2 font-medium rounded-full transition-all duration-500 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50`}>
                  Outreach 
                  <ChevronDown 
                    size={16} 
                    className="ml-1 transition-transform duration-300 group-hover:rotate-180" 
                  />
                </button>
                <div className="absolute left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform group-hover:translate-y-0 translate-y-2 transition-all duration-300 ease-out">
                  <div className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl border border-gray-200/50 w-48 p-2 shadow-gray-900/10">
                    <Link
                      to="#"
                      className="block px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-200 font-medium"
                    >
                      Events
                    </Link>
                    <Link
                      to="#"
                      className="block px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-200 font-medium"
                    >
                      Community Work
                    </Link>
                  </div>
                </div>
              </div> */}
            </nav>

            {/* Mobile button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className={`p-3 rounded-2xl transition-all duration-500 active:scale-95 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50`}
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
        <div className={`md:hidden overflow-hidden transition-all duration-100 ease-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className={`border-t px-6 py-4 space-y-1 transition-all duration-500 ${
            isScrolled 
              ? 'bg-white/95 backdrop-blur-xl border-gray-200/50' 
              : 'bg-white/10 backdrop-blur-xl border-white/20'
          }`}>
            <Link 
              to="#" 
              className={`block px-4 py-3 font-medium rounded-xl transition-all duration-200 ${
              isActive("/")
                ? "text-indigo-600 bg-indigo-50 font-semibold"
                : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
            }`}
            >
              Home
            </Link>
            
            {/* Mobile Group Dropdown */}
            <div className="space-y-1">
              <button
                onClick={() => toggleDropdown("group")}
                className={`flex items-center justify-between w-full px-4 py-3 font-medium rounded-xl transition-all duration-200 ${
                location.pathname.startsWith("/group")
                  ? "text-indigo-600 bg-indigo-50"
                  : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
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
                    className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive("/group/team-members")
                      ? "text-indigo-600 bg-indigo-50"
                      : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                  }`}
                  >
                    Team Members
                  </Link>
                  <Link 
                    to="#" 
                    className={`block px-4 py-2 rounded-lg transition-all duration-200 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50`}
                  >
                    Collaborators
                  </Link>
                </div>
              </div>
            </div>
            
            <Link 
              to="/researches" 
              className={`block px-4 py-3 font-medium rounded-xl transition-all duration-200 ${
              isActive("/researches")
                ? "text-indigo-600 bg-indigo-50 font-semibold"
                : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
            }`}
            >
              Research
            </Link>
            <Link 
              to="/publications" 
              className={`block px-4 py-3 font-medium rounded-xl transition-all duration-200 ${
              isActive("/publications")
                ? "text-indigo-600 bg-indigo-50 font-semibold"
                : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
            }`}
            >
              Publications
            </Link>
            <Link 
              to="#" 
              className={`block px-4 py-3 font-medium rounded-xl transition-all duration-200 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50`}
            >
              Achievements
            </Link>

            <Link 
              to="#" 
              className={`block px-4 py-3 font-medium rounded-xl transition-all duration-200 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50`}
            >
              Current Engagements
            </Link>
            
            {/* Mobile Outreach Dropdown */}
            {/* <div className="space-y-1">
              <button
                onClick={() => toggleDropdown("outreach")}
                className={`flex items-center justify-between w-full px-4 py-3 font-medium rounded-xl transition-all duration-200 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50`}
              >
                Outreach 
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${openDropdown === 'outreach' ? 'rotate-180' : ''}`} 
                />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openDropdown === 'outreach' ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="ml-4 space-y-1 pt-1">
                  <Link 
                    to="#" 
                    className={`block px-4 py-2 rounded-lg transition-all duration-200 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50`}
                  >
                    Events
                  </Link>
                  <Link 
                    to="#" 
                    className={`block px-4 py-2 rounded-lg transition-all duration-200 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50`}
                  >
                    Community Work
                  </Link>
                </div>
              </div>
            </div> */}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;