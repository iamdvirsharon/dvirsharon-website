
import React, { useEffect, useState, useRef } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWebsiteContent } from "@/hooks/useWebsiteContent";

const TestimonialsSection = () => {
  const { content, isLoaded } = useWebsiteContent();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isContentReady, setIsContentReady] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<number | null>(null);
  
  // Check if section is visible in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const isNowVisible = entries[0].isIntersecting;
        setIsVisible(isNowVisible);
        
        // Clear interval when not visible to save resources
        if (!isNowVisible && intervalRef.current) {
          window.clearInterval(intervalRef.current);
          intervalRef.current = null;
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
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  // Prepare content after visibility is set
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsContentReady(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);
  
  // Auto rotate testimonials only when visible
  useEffect(() => {
    if (!isLoaded || !content.testimonials?.length || !isVisible || !isContentReady) {
      return;
    }
    
    // Only set interval if not already set
    if (!intervalRef.current) {
      intervalRef.current = window.setInterval(() => {
        setActiveIndex(current => (current + 1) % content.testimonials.length);
      }, 5000); // Change every 5 seconds
    }

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isLoaded, content.testimonials?.length, isVisible, isContentReady]);
  
  const goToNext = () => {
    if (!isLoaded || content.testimonials.length === 0) return;
    setActiveIndex(current => (current + 1) % content.testimonials.length);
    // Reset timer when manually navigating
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = window.setInterval(() => {
        setActiveIndex(current => (current + 1) % content.testimonials.length);
      }, 5000);
    }
  };
  
  const goToPrev = () => {
    if (!isLoaded || content.testimonials.length === 0) return;
    setActiveIndex(current => (current - 1 + content.testimonials.length) % content.testimonials.length);
    // Reset timer when manually navigating
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = window.setInterval(() => {
        setActiveIndex(current => (current + 1) % content.testimonials.length);
      }, 5000);
    }
  };
  
  if (!isLoaded) return null;
  
  return (
    <section ref={sectionRef} id="testimonials" className="py-20">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-gloock text-5xl md:text-6xl mb-4">Client Success Stories</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We're proud to work with these great companies.
          </p>
        </div>

        {content.testimonials.length > 0 && isVisible && (
          <div className={`max-w-3xl mx-auto relative transition-opacity duration-500 ${isContentReady ? 'opacity-100' : 'opacity-0'}`}>
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out will-change-transform" 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {content.testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <Card className="bg-secondary/50 border-white/5 h-full flex flex-col">
                      <CardContent className="pt-6 flex-grow">
                        <div className="mb-4">
                          {[...Array(5)].map((_, i) => <span key={i} className="text-blue-500">★</span>)}
                        </div>
                        <p className="text-gray-300">{testimonial.text}</p>
                      </CardContent>
                      <CardFooter className="border-t border-white/5 pt-4">
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-gray-400">{testimonial.position}</p>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-6 gap-2">
              {content.testimonials.map((_, index) => (
                <button 
                  key={index} 
                  className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-blue-500' : 'bg-gray-600'}`} 
                  onClick={() => setActiveIndex(index)} 
                  aria-label={`Go to testimonial ${index + 1}`} 
                />
              ))}
            </div>
            
            <Button 
              onClick={goToPrev} 
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-background/70 hover:bg-background border border-white/10 p-1 rounded-full" 
              size="icon" 
              variant="ghost" 
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button 
              onClick={goToNext} 
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-background/70 hover:bg-background border border-white/10 p-1 rounded-full" 
              size="icon" 
              variant="ghost" 
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        )}
        
        {(!isVisible || !content.testimonials.length) && (
          <div className="h-[250px]"></div> // Placeholder while loading
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
