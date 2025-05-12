
import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-24">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h1 className="font-gloock text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              Stop Wasting Traffic, <span className="accent-gradient">Start Generating Leads</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
              Leverage AI and growth marketing tactics to unlock your company's full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://zcal.co/dvirsharon/30min" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white w-full sm:w-auto flex items-center gap-1">
                  Schedule a Free Strategy Session <ExternalLink className="w-4 h-4 ml-1" />
                </Button>
              </a>
              <a href="#services">
                <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/5 w-full sm:w-auto">
                  Explore Services
                </Button>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -z-10 w-full h-full bg-amber-600/20 blur-3xl rounded-full"></div>
              <div className="glass-effect rounded-lg p-6 animate-fade-in">
                <p className="font-gloock text-xl mb-4 accent-gradient">30+ Qualified Leads Guarantee</p>
                <p className="text-gray-300 mb-6">
                  Book more calls with no extra hires. I'll deliver qualified leads in 60 days or refund your investment.
                </p>
                <a href="https://zcal.co/dvirsharon/30min" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-amber-400 flex items-center">
                  Schedule a strategy call <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
