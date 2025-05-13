
import React, { useEffect, useRef } from "react";
import { useWebsiteContent } from "@/hooks/useWebsiteContent";

const CompaniesSection = () => {
  const { content, isLoaded } = useWebsiteContent();
  
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isLoaded) return;
    
    const container = containerRef.current;
    const content = contentRef.current;
    
    if (!container || !content) return;
    
    // Create a duplicate of the content for seamless scrolling
    const clone = content.cloneNode(true) as HTMLDivElement;
    container.appendChild(clone);
    
    let scrollPosition = 0;
    const totalWidth = content.offsetWidth;
    
    const scroll = () => {
      scrollPosition += 0.5; // Adjust speed here
      
      // Reset position when first set of logos moves out of view completely
      if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
      }
      
      container.style.transform = `translateX(-${scrollPosition}px)`;
      requestAnimationFrame(scroll);
    };
    
    const animation = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animation);
    };
  }, [isLoaded]);

  if (!isLoaded) return null;

  return (
    <section className="py-10 bg-black/40 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="overflow-hidden w-full">
            <div ref={containerRef} className="inline-flex transition-transform">
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
