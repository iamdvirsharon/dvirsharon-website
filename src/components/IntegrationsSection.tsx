
import React, { useState, useEffect, useRef } from "react";
import { useWebsiteContent } from "@/hooks/useWebsiteContent";

const IntegrationsSection = () => {
  const { content, isLoaded, updateSection } = useWebsiteContent();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const hasInitialized = useRef(false);
  
  // Default logos with optimized loading
  const defaultLogos = [
    { 
      name: "Claude.ai",
      imagePath: "https://images.ctfassets.net/zlsyc9paq6sa/3uNo8q6kq1K4Gk8YukWGo4/c31cf45808b42e25867e96368eb12bda/anthropic-logo-black.svg",
      altText: "Claude.ai by Anthropic" 
    },
    { 
      name: "OpenAI",
      imagePath: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
      altText: "OpenAI Logo" 
    },
    { 
      name: "Make.com",
      imagePath: "https://images.ctfassets.net/un655fx9wln6/1k5wBPhbu5kXiaYlFWgEJE/b590772959bd510e64cf230ef37bba3e/Make-Logo-RGB.svg",
      altText: "Make.com Logo" 
    },
    { 
      name: "Zapier",
      imagePath: "https://cdn.zapier.com/zapier/images/logos/zapier-logo.svg",
      altText: "Zapier Logo" 
    },
    { 
      name: "n8n.io",
      imagePath: "https://n8n.io/favicon.ico",
      altText: "n8n.io Logo" 
    }
  ];

  // Check if section is visible in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Disconnect observer once visible to save resources
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }
    
    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  // Initialize default logos once when needed
  useEffect(() => {
    if (isLoaded && content.integrations.length === 0 && !hasInitialized.current) {
      updateSection('integrations', defaultLogos);
      hasInitialized.current = true;
    }
  }, [isLoaded, content.integrations.length, updateSection]);

  if (!isLoaded) return null;

  return (
    <section ref={sectionRef} className="py-16 bg-black/30 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-10 animate-fade-up">
          <h2 className="font-gloock text-5xl md:text-6xl mb-4">
            Integrate our AI system into your existing tech stack
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We work with you to integrate our systems into your existing tech-stack
          </p>
        </div>
        
        {isVisible && (
          <div className="flex items-center justify-center">
            <div className="overflow-hidden w-full">
              <div className="flex items-center justify-around gap-8 md:gap-16 px-8 flex-wrap">
                {content.integrations.map((logo, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center gap-4 w-24 md:w-32"
                  >
                    <img
                      src={logo.imagePath}
                      alt={logo.altText}
                      loading="lazy"
                      className="w-16 h-16 object-contain transition-opacity hover:opacity-100 opacity-80"
                      width="64"
                      height="64"
                    />
                    <p className="text-sm text-center text-gray-400">{logo.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default IntegrationsSection;
