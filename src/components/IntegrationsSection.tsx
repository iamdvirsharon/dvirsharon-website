import React, { useEffect, useRef } from "react";
const IntegrationsSection = () => {
  const integrations = [{
    name: "Gmail",
    class: "text-xl md:text-2xl"
  }, {
    name: "Outlook",
    class: "text-xl md:text-2xl"
  }, {
    name: "Slack",
    class: "text-xl md:text-2xl"
  }, {
    name: "HubSpot",
    class: "text-xl md:text-2xl"
  }, {
    name: "Salesforce",
    class: "text-xl md:text-2xl"
  }, {
    name: "SmartLead",
    class: "text-xl md:text-2xl"
  }];
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
  }, []);
  return <section className="py-16 bg-black/30 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-10 animate-fade-up">
          <h2 className="font-gloock text-5xl md:text-6xl mb-4">Integrations</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We work with you to integrate our systems into your existing tech-stack
          </p>
        </div>
        
        <div className="flex items-center justify-center">
          <div className="overflow-hidden w-full">
            <div ref={containerRef} className="inline-flex transition-transform">
              <div ref={contentRef} className="flex items-center justify-around gap-16 px-8">
                {integrations.map((integration, index) => <div key={index} className={`text-white opacity-70 hover:opacity-100 transition-opacity whitespace-nowrap ${integration.class}`}>
                    {integration.name}
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default IntegrationsSection;