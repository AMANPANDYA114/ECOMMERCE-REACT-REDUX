import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { RiMenu3Line } from 'react-icons/ri';

const Navbar = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sm:px-8 px-4 py-2 z-10 w-full bg-black text-white mb-10">
      <nav className="flex justify-between items-center max-w-screen-xl mx-auto">
        <a href="/" className="text-3xl font-bold f">
          Food Zone
        </a>

        {/* Nav Links for Medium and Larger Screens */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-lg text-slate-gray hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Toggler for Small Screens */}
        <div
          className={`md:hidden cursor-pointer ${
            isMenuOpen ? 'text-white' : 'text-white'
          }`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <AiOutlineClose className="text-4xl text-black" />
          ) : (
            <RiMenu3Line className="text-4xl" />
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
  <div className="md:hidden fixed top-0 right-0 left-0 bottom-0 bg-black text-white">
    <div
      className="fixed right-0 px-8 py-4 cursor-pointer"
      onClick={toggleMenu}
    >
      <AiOutlineClose className="text-4xl" />
    </div>
    <ul className="flex flex-col items-center justify-center h-full space-y-6">
      {navLinks.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            className="font-montserrat text-lg text-slate-gray hover:text-white"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
