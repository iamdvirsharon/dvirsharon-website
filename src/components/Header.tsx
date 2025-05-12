
import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 py-4 glass-effect">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="w-40">
            <h1 className="text-xl font-gloock tracking-wider">Dvir Sharon</h1>
          </div>
          
          <div className="hidden md:flex flex-1 justify-center">
            <nav>
              <ul className="flex gap-8 font-medium">
                <li><a href="#services" className="hover:text-blue-500 transition-colors">Services</a></li>
                <li><a href="#framework" className="hover:text-blue-500 transition-colors">Framework</a></li>
                <li><a href="#testimonials" className="hover:text-blue-500 transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
              </ul>
            </nav>
          </div>
          
          <div className="w-40 flex justify-end">
            <a href="https://zcal.co/dvirsharon/30min" target="_blank" rel="noopener noreferrer" className="hidden md:block">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                Book a Call
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
                    <li><a href="#services" className="hover:text-blue-500 transition-colors">Services</a></li>
                    <li><a href="#framework" className="hover:text-blue-500 transition-colors">Framework</a></li>
                    <li><a href="#testimonials" className="hover:text-blue-500 transition-colors">Testimonials</a></li>
                    <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
                  </ul>
                </nav>
                
                <div className="mt-auto py-6">
                  <a href="https://zcal.co/dvirsharon/30min" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                      Book a Call
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
