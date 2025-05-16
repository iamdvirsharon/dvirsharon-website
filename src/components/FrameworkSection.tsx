
import React, { useRef, useEffect, useState } from 'react';
import { useWebsiteContent } from '@/hooks/useWebsiteContent';
import { motion } from 'framer-motion';

const FrameworkSection = () => {
  const { content, isLoaded } = useWebsiteContent();
  const { frameworkSteps } = content;
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Check if section is visible in viewport for performance optimization
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
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
  }, []);

  if (!isLoaded) return null;

  return (
    <section ref={sectionRef} id="framework" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Framework</h2>
          <p className="text-lg text-muted-foreground">
            Our proven step-by-step approach to deliver exceptional results
          </p>
        </div>

        {isVisible && (
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {frameworkSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative p-6 rounded-lg border border-border bg-card"
              >
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mt-4 mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FrameworkSection;
