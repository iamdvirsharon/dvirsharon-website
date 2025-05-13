import React, { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [{
    name: "David Taylor-Smith",
    position: "Senior Growth Manager, hipages",
    text: "Dvir was great to chat with. He was prepared, clearly a good marketer and provided clarity around challenges and outcomes. I hope to learn more of his next Growth wins!",
    initials: "DT"
  }, {
    name: "Ben Rotenberg",
    position: "Head of Growth, Overwolf",
    text: "Dvir combines high-level creativity and exceptional technological capabilities. His self-learning abilities allow him to acquire any skill he needs and adapt to any challenge.",
    initials: "BR"
  }, {
    name: "Francois Costa",
    position: "Head of Product, FairArt",
    text: "Within a few minutes, he was able to give several thoughtful suggestions as to how we could achieve our goals (strategy + tactics). Additionally, he encouraged me to reach out later on should any other questions come up.",
    initials: "FC"
  }, {
    name: "Dilina Bandara",
    position: "Software Developer, Futura Tech Labs",
    text: "Dvir's ability to listen, provide valuable insights, and create a nurturing environment exceeded my expectations. I highly recommend him as a mentor for anyone seeking transformative guidance.",
    initials: "DB"
  }, {
    name: "Erika Paola Vergara",
    position: "Senior Business Development Manager, Sundevs",
    text: "He is very practical and I think this is key to excecute and improve. Also, what he doesn't know he will tell you. He addresses the problem in parts and this is very useful to address everything.",
    initials: "EP"
  }];

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);
  const goToNext = () => {
    setActiveIndex(current => (current + 1) % testimonials.length);
  };
  const goToPrev = () => {
    setActiveIndex(current => (current - 1 + testimonials.length) % testimonials.length);
  };
  return <section id="testimonials" className="py-20">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-gloock text-5xl md:text-6xl mb-4">Client Success Stories</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We're proud to work with these great companies.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-700 ease-in-out" style={{
            transform: `translateX(-${activeIndex * 100}%)`
          }}>
              {testimonials.map((testimonial, index) => <div key={index} className="w-full flex-shrink-0 px-4">
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
                </div>)}
            </div>
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => <button key={index} className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-blue-500' : 'bg-gray-600'}`} onClick={() => setActiveIndex(index)} aria-label={`Go to testimonial ${index + 1}`} />)}
          </div>
          
          <Button onClick={goToPrev} className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-background/70 hover:bg-background border border-white/10 p-1 rounded-full" size="icon" variant="ghost" aria-label="Previous testimonial">
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button onClick={goToNext} className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-background/70 hover:bg-background border border-white/10 p-1 rounded-full" size="icon" variant="ghost" aria-label="Next testimonial">
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;