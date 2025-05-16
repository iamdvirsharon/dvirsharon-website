
import React from 'react';
import { useWebsiteContent } from '@/hooks/useWebsiteContent';

const FrameworkSection = () => {
  const { content } = useWebsiteContent();
  const { frameworkSteps } = content;

  return (
    <section id="framework" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Framework</h2>
          <p className="text-lg text-muted-foreground">
            Our proven step-by-step approach to deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {frameworkSteps.map((step, index) => (
            <div key={index} className="relative p-6 rounded-lg border border-border bg-card">
              <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mt-4 mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameworkSection;
