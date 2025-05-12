
import React, { useEffect, useRef } from "react";

const CompaniesSection = () => {
  const companies = [
    { name: "hipages", class: "text-xl md:text-2xl" },
    { name: "Overwolf", class: "text-xl md:text-2xl" },
    { name: "FairArt", class: "text-xl md:text-2xl" },
    { name: "Futura Tech Labs", class: "text-xl md:text-2xl" },
    { name: "Sundevs", class: "text-xl md:text-2xl" },
    { name: "Entail", class: "text-xl md:text-2xl", logo: "https://entail.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fentail_logo_large.ee71dec6.png&w=384&q=75" },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
      if (scrollPosition >= totalWidth) scrollPosition = 0;
      container.style.transform = `translateX(-${scrollPosition}px)`;
      requestAnimationFrame(scroll);
    };
    
    const animation = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animation);
    };
  }, []);

  return (
    <section className="py-10 bg-black/40 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="overflow-hidden w-full">
            <div ref={containerRef} className="inline-flex transition-transform">
              <div ref={contentRef} className="flex items-center justify-around gap-16 px-8">
                {companies.map((company, index) => (
                  company.logo ? (
                    <img 
                      key={index}
                      src={company.logo}
                      alt={company.name}
                      className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <div 
                      key={index} 
                      className={`font-gloock text-white opacity-70 hover:opacity-100 transition-opacity whitespace-nowrap ${company.class}`}
                    >
                      {company.name}
                    </div>
                  )
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
