"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Specialities", href: "/specialities" },
    { name: "Videos", href: "/videos" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-harvard-parchment/80 backdrop-blur-md border-b border-harvard-silver/20">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link 
          href="/" 
          className="font-serif text-xl font-bold tracking-tight text-harvard-crimson"
          onClick={closeMenu}
        >
          Dr. Shelly Sharma
        </Link>
        
        {/* Desktop Menu (Hidden on Mobile) */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-harvard-black/80">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="hover:text-harvard-crimson transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button (Visible only on Mobile) */}
        <button 
          className="md:hidden text-harvard-black/80 hover:text-harvard-crimson transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-harvard-silver/20 shadow-lg py-4 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="text-harvard-black/80 font-medium hover:text-harvard-crimson transition-colors block py-2"
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}