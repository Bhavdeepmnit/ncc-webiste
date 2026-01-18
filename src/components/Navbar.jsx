import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import nccLogo from '../assets/ncc_logo.png';
import mnitLogo from '../assets/Mnit_logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Events', path: '/events' },
  { name: 'FAQs', path: '/faqs' },
  { name: 'Team', path: '/team' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass = ({ isActive }) =>
    twMerge(
      "relative px-6 py-2.5 rounded-full text-lg font-medium transition-all duration-300 ease-out",
      "hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:bg-white/10 hover:text-white hover:-translate-y-0.5",
      isActive
        ? "bg-gradient-to-r from-mnit-red to-red-700 text-white shadow-lg shadow-red-900/30 ring-1 ring-white/20"
        : "text-gray-200"
    );

  const mobileLinkClass = ({ isActive }) =>
    twMerge(
      "block px-3 py-2 rounded-md text-base font-medium",
      isActive
        ? "bg-mnit-red text-white"
        : "text-gray-200 hover:bg-white/10 hover:text-white"
    );

  return (
    <nav className="bg-mnit-blue/95 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="relative flex justify-between h-24 items-center">
          {/* Left: NCC Logo -> Home */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <img src={nccLogo} alt="NCC Logo" className="h-16 w-16 rounded-full object-cover border-2 border-white/20" />
              <div className="hidden sm:block">
                <span className="block font-bold text-xl text-white leading-none">NCC</span>
                <span className="block text-xs text-gray-300 font-medium tracking-wider">MNIT JAIPUR</span>
              </div>
            </Link>
          </div>
          
          {/* Center: Desktop Nav Links (Absolutely Centered) */}
          <div className="hidden md:flex items-center space-x-4 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} className={linkClass}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right: MNIT Logo -> External Site */}
          <div className="hidden md:flex items-center">
            <a href="https://mnit.ac.in" target="_blank" rel="noopener noreferrer" className="flex items-center transition-opacity hover:opacity-90">
               <img src={mnitLogo} alt="MNIT Logo" className="h-16 w-auto" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-mnit-blue border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={mobileLinkClass}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
