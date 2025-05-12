
import React from "react";
import { Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="font-gloock text-xl">Dvir Sharon</p>
            <p className="text-sm text-gray-400 mt-1">Growth Marketing & CRO Specialist</p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/dvirsharon/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">© {currentYear} Dvir Sharon. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="mailto:iamdvirsharon@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors">iamdvirsharon@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
