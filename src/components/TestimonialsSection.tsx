
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Alex Morgan",
      position: "CMO, TechStart",
      text: "Dvir helped us increase conversion rates by 43% in just two months. His strategic approach to CRO completely transformed our funnel.",
      initials: "AM"
    },
    {
      name: "Sarah Johnson",
      position: "Founder, GrowthLabs",
      text: "The marketing automation systems Dvir built saved us countless hours while increasing our lead quality. Highly recommended!",
      initials: "SJ"
    },
    {
      name: "Michael Chen",
      position: "CEO, DataDrive",
      text: "Dvir's data enrichment services gave us insights we never knew we needed. Our targeting precision improved dramatically.",
      initials: "MC"
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-gloock text-3xl md:text-4xl mb-4">Client Success Stories</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don't just take my word for it - here's what clients have to say about working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-secondary/50 border-white/5 flex flex-col animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="pt-6 flex-grow">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-500">★</span>
                  ))}
                </div>
                <p className="text-gray-300">{testimonial.text}</p>
              </CardContent>
              <CardFooter className="border-t border-white/5 pt-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-amber-600/20 text-amber-300">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
