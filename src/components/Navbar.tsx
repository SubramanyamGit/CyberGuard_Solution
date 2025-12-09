import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Mobile Hamburger */}
        <button
        style={{ backgroundColor: 'transparent' }}
          className="md:hidden focus:outline-none z-50 text-white bg-transparent"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>

        {/* Logo */}
        <div className="text-2xl font-bold flex-1">
          <Link to="/">CyberGuard Solutions</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li><Link to="/" className="hover:text-indigo-400 transition">Home</Link></li>
          <li><Link to="/services" className="hover:text-indigo-400 transition">Services</Link></li>
          <li><Link to="/about" className="hover:text-indigo-400 transition">About</Link></li>
          <li><Link to="/contact" className="hover:text-indigo-400 transition">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-1/2 bg-gray-800 shadow-lg transform z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex flex-col mt-20 space-y-6 px-6">
          <li>
            <Link
              to="/"
              className="text-white text-lg hover:text-indigo-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-white text-lg hover:text-indigo-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white text-lg hover:text-indigo-400 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white text-lg hover:text-indigo-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Partial overlay (transparent so background is visible) */}
      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-20 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
