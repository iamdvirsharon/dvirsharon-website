
import React, { useRef, useState, useEffect } from 'react';
import { useWebsiteContent } from '@/hooks/useWebsiteContent';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQsSection = () => {
  const { content, isLoaded } = useWebsiteContent();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isContentReady, setIsContentReady] = useState(false);

  // Optimize intersection observer for better performance
  useEffect(() => {
    if (!isLoaded) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Add small delay to ensure smooth transition
          setTimeout(() => setIsVisible(true), 100);
          // Disconnect observer once visible to save resources
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
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
  }, [isLoaded]);

  // Prepare content after visibility is set
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsContentReady(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!isLoaded) return null;

  return (
    <section ref={sectionRef} id="faqs" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our services
          </p>
        </div>

        {isVisible ? (
          <div className={`max-w-3xl mx-auto transition-opacity duration-500 ${isContentReady ? 'opacity-100' : 'opacity-0'}`}>
            <Accordion type="single" collapsible className="w-full">
              {content.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto h-[200px]"></div> // Placeholder while loading
        )}
      </div>
    </section>
  );
};

export default FAQsSection;
