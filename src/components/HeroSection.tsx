
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-24">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="animate-fade-up">
            <h1 className="font-gloock text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              Stop Wasting Traffic, <span className="accent-gradient">Start Generating Leads</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Leverage AI and growth marketing tactics to unlock your company's full potential.
              Expert in CRO, experimentation, automations, and product-led growth strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://zcal.co/dvirsharon/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto rounded-full">
                  Book a Free Call
                </Button>
              </a>
              <a href="#services">
                <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/5 w-full sm:w-auto rounded-full">
                  Explore Services
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
