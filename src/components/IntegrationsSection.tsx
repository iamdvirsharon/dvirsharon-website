
import React, { useRef } from "react";
import { useWebsiteContent } from "@/hooks/useWebsiteContent";

const IntegrationsSection = () => {
  const { content, isLoaded } = useWebsiteContent();
  
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  if (!isLoaded) return null;

  // Custom logos similar to the ones in the image
  const logos = [
    { name: "AI", color: "#E8B89B" },
    { name: "ML Node", color: "#1EB489" },
    { name: "Connection", color: "#F25E84" },
    { name: "Cube", color: "#D9D9D9" },
    { name: "Network", color: "#FFFFFF" }
  ];

  return (
    <section className="py-16 bg-black/30 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-10 animate-fade-up">
          <h2 className="font-gloock text-5xl md:text-6xl mb-4">Integrate our AI system into your existing tech stack</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We work with you to integrate our systems into your existing tech-stack
          </p>
        </div>
        
        <div className="flex items-center justify-center">
          <div className="overflow-hidden w-full">
            <div className="flex items-center justify-around gap-8 md:gap-16 px-8 flex-wrap">
              {logos.map((logo, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center h-16 w-16 transition-opacity hover:opacity-100 opacity-80 mb-6"
                >
                  {logo.name === "AI" && (
                    <div className="rounded-full bg-[#E8B89B] h-full w-full flex items-center justify-center">
                      <span className="text-black font-bold text-xl">AI</span>
                    </div>
                  )}
                  
                  {logo.name === "ML Node" && (
                    <div className="rounded-full bg-[#1EB489] h-full w-full flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                  
                  {logo.name === "Connection" && (
                    <div className="rounded-full bg-[#F25E84] h-full w-full flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="8" cy="8" r="2" stroke="white" strokeWidth="2"/>
                        <circle cx="16" cy="16" r="2" stroke="white" strokeWidth="2"/>
                        <circle cx="16" cy="8" r="2" stroke="white" strokeWidth="2"/>
                        <path d="M10 8H14" stroke="white" strokeWidth="2"/>
                        <path d="M8 10L16 16" stroke="white" strokeWidth="2"/>
                      </svg>
                    </div>
                  )}
                  
                  {logo.name === "Cube" && (
                    <div className="h-full w-full flex items-center justify-center">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z" fill="#D9D9D9" stroke="#888888" strokeWidth="1"/>
                        <path d="M12 22V15.5" stroke="#888888" strokeWidth="1"/>
                        <path d="M22 8.5L12 15.5L2 8.5" stroke="#888888" strokeWidth="1"/>
                      </svg>
                    </div>
                  )}
                  
                  {logo.name === "Network" && (
                    <div className="h-full w-full flex items-center justify-center">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L16 6L12 10L8 6L12 2Z" stroke="white" strokeWidth="2"/>
                        <path d="M4 14L8 18L4 22L0 18L4 14Z" stroke="white" strokeWidth="2"/>
                        <path d="M20 14L24 18L20 22L16 18L20 14Z" stroke="white" strokeWidth="2"/>
                        <path d="M12 10V16" stroke="white" strokeWidth="2"/>
                        <path d="M8 18H16" stroke="white" strokeWidth="2"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
