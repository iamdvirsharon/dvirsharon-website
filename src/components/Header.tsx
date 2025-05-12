
import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 py-4 glass-effect">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-gloock tracking-wider">Dvir Sharon</h1>
          </div>
          
          <div className="hidden md:flex items-center justify-center gap-8 mx-auto">
            <nav>
              <ul className="flex gap-8 font-medium">
                <li><a href="#services" className="hover:text-amber-500 transition-colors">Services</a></li>
                <li><a href="#framework" className="hover:text-amber-500 transition-colors">Framework</a></li>
                <li><a href="#tools" className="hover:text-amber-500 transition-colors">Tools</a></li>
                <li><a href="#blog" className="hover:text-amber-500 transition-colors">Blog</a></li>
                <li><a href="#testimonials" className="hover:text-amber-500 transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a></li>
              </ul>
            </nav>
          </div>
          
          <div>
            <a href="https://zcal.co/dvirsharon/30min" target="_blank" rel="noopener noreferrer" className="hidden md:block">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white flex items-center gap-1">
                Free Discovery Call <ExternalLink className="w-4 h-4 ml-1" />
              </Button>
            </a>
          </div>
          
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-background border-l border-white/10">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center py-4">
                  <h2 className="font-gloock text-lg">Dvir Sharon</h2>
                </div>
                
                <nav className="mt-8">
                  <ul className="flex flex-col gap-6 text-lg">
                    <li><a href="#services" className="hover:text-amber-500 transition-colors">Services</a></li>
                    <li><a href="#framework" className="hover:text-amber-500 transition-colors">Framework</a></li>
                    <li><a href="#tools" className="hover:text-amber-500 transition-colors">Tools</a></li>
                    <li><a href="#blog" className="hover:text-amber-500 transition-colors">Blog</a></li>
                    <li><a href="#testimonials" className="hover:text-amber-500 transition-colors">Testimonials</a></li>
                    <li><a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a></li>
                  </ul>
                </nav>
                
                <div className="mt-auto py-6">
                  <a href="https://zcal.co/dvirsharon/30min" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                      Free Discovery Call <ExternalLink className="w-4 h-4 ml-1" />
                    </Button>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
