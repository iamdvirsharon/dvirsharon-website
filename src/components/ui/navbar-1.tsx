
"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const navItems = [{
    name: "Services",
    url: "#services"
  }, {
    name: "Framework",
    url: "#framework"
  }, {
    name: "Testimonials",
    url: "#testimonials"
  }, {
    name: "Contact",
    url: "#contact"
  }];
  return <div className="flex justify-center w-full py-6 px-4">
      <div className="flex items-center justify-between px-6 py-3 rounded-full shadow-lg w-full max-w-3xl relative z-10 bg-neutral-950 border border-white/20">
        <div className="flex items-center">
          <div className="w-8 h-8 mr-6">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="url(#paint0_linear)" />
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FF9966" />
                  <stop offset="1" stopColor="#FF5E62" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(item => <div key={item.name}>
              <a href={item.url} className="text-sm text-white hover:text-gray-300 transition-colors font-medium">
                {item.name}
              </a>
            </div>)}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a href="https://zcal.co/dvirsharon/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-2 text-sm text-white bg-black rounded-full hover:bg-gray-800 transition-colors">
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex items-center" onClick={toggleMenu}>
          <Menu className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && <motion.div className="fixed inset-0 bg-neutral-950 z-50 pt-24 px-6 md:hidden" initial={{
        opacity: 0,
        x: "100%"
      }} animate={{
        opacity: 1,
        x: 0
      }} exit={{
        opacity: 0,
        x: "100%"
      }} transition={{
        type: "spring",
        damping: 25,
        stiffness: 300
      }}>
            <motion.button className="absolute top-6 right-6 p-2" onClick={toggleMenu} initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.2
        }}>
              <X className="h-6 w-6 text-white" />
            </motion.button>
            <div className="flex flex-col space-y-6">
              {navItems.map((item, i) => <motion.div key={item.name} initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: i * 0.1 + 0.1
          }} exit={{
            opacity: 0,
            x: 20
          }}>
                  <a href={item.url} className="text-base text-white font-medium" onClick={toggleMenu}>
                    {item.name}
                  </a>
                </motion.div>)}

              <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.5
          }} exit={{
            opacity: 0,
            y: 20
          }} className="pt-6">
                <a href="https://zcal.co/dvirsharon/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-5 py-3 text-base text-white bg-black rounded-full hover:bg-gray-800 transition-colors" onClick={toggleMenu}>
                  Let's Talk
                </a>
              </motion.div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </div>;
};
export { Navbar1 };
