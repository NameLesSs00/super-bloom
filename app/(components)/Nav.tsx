"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isWorldMapPage = pathname === "/world-map";

  const links = [
    { name: "Landing Page", href: "/" },
    { name: "World Map", href: "/world-map" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Title */}
          <Link 
            href="/" 
            className={`text-2xl font-bold ${isWorldMapPage ? "text-black" : "text-[#4CAF50]"}`}
          >
            Super Blooming
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors duration-300 font-medium ${
                  isWorldMapPage 
                    ? "text-black hover:text-gray-700" 
                    : "text-white hover:text-[#E7B875]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${isWorldMapPage ? "text-black" : "text-white"}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className={`md:hidden backdrop-blur-md ${
          isWorldMapPage ? "bg-white/90" : "bg-[#4CAF50]/90"
        }`}>
          <div className="px-4 py-3 space-y-2">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block transition-colors duration-300 ${
                  isWorldMapPage 
                    ? "text-black hover:text-gray-700" 
                    : "text-white hover:text-[#E7B875]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}