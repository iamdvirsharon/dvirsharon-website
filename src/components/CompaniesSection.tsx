
import React, { useEffect, useRef, useState } from "react";
import { useWebsiteContent } from "@/hooks/useWebsiteContent";

const CompaniesSection = () => {
  const { content, isLoaded } = useWebsiteContent();
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef<number | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );
    
    const currentSection = containerRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }
    
    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  useEffect(() => {
    if (!isLoaded || !isVisible) {
      // Cancel any existing animation when component is not visible
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      return;
    }
    
    const container = containerRef.current;
    const content = contentRef.current;
    
    if (!container || !content) return;
    
    // Create a duplicate of the content for seamless scrolling if not already present
    if (container.children.length === 1) {
      const clone = content.cloneNode(true) as HTMLDivElement;
      container.appendChild(clone);
    }
    
    let scrollPosition = 0;
    const totalWidth = content.offsetWidth;
    
    const scroll = () => {
      scrollPosition += 0.5; // Adjust speed here
      
      // Reset position when first set of logos moves out of view completely
      if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
      }
      
      if (container) {
        container.style.transform = `translateX(-${scrollPosition}px)`;
      }
      
      animationRef.current = requestAnimationFrame(scroll);
    };
    
    animationRef.current = requestAnimationFrame(scroll);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [isLoaded, isVisible]);

  if (!isLoaded) return null;

  return (
    <section className="py-10 bg-black/40 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="overflow-hidden w-full">
            <div 
              ref={containerRef}
              className="inline-flex transition-transform will-change-transform"
            >
              <div ref={contentRef} className="flex items-center justify-around gap-16 px-8">
                {content.companies.map((company, index) => (
                  <div 
                    key={index} 
                    className={`font-gloock text-white opacity-70 hover:opacity-100 transition-opacity whitespace-nowrap ${company.class}`}
                  >
                    {company.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
