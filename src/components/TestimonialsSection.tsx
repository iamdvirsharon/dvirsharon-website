
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "David Taylor-Smith",
      position: "Senior Growth Manager, hipages",
      text: "Dvir was great to chat with. He was prepared, clearly a good marketer and provided clarity around challenges and outcomes. I hope to learn more of his next Growth wins!",
      initials: "DT"
    },
    {
      name: "Ben Rotenberg",
      position: "Head of Growth, Overwolf",
      text: "Dvir combines high-level creativity and exceptional technological capabilities. His self-learning abilities allow him to acquire any skill he needs and adapt to any challenge.",
      initials: "BR"
    },
    {
      name: "Francois Costa",
      position: "Head of Product, FairArt",
      text: "Within a few minutes, he was able to give several thoughtful suggestions as to how we could achieve our goals (strategy + tactics). Additionally, he encouraged me to reach out later on should any other questions come up.",
      initials: "FC"
    },
    {
      name: "Dilina Bandara",
      position: "Software Developer, Futura Tech Labs",
      text: "Dvir's ability to listen, provide valuable insights, and create a nurturing environment exceeded my expectations. I highly recommend him as a mentor for anyone seeking transformative guidance.",
      initials: "DB"
    },
    {
      name: "Erika Paola Vergara",
      position: "Senior Business Development Manager, Sundevs",
      text: "He is very practical and I think this is key to excecute and improve. Also, what he doesn't know he will tell you. He addresses the problem in parts and this is very useful to address everything.",
      initials: "EP"
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-gloock text-3xl md:text-4xl mb-4">Client Success Stories</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We're proud to work with these great companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
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

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.slice(3, 5).map((testimonial, index) => (
            <Card key={index} className="bg-secondary/50 border-white/5 flex flex-col animate-fade-up" style={{ animationDelay: `${(index + 3) * 0.1}s` }}>
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
