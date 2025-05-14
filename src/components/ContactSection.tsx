
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useWebsiteContent } from "@/hooks/useWebsiteContent";

const ContactSection = () => {
  const { content, isLoaded } = useWebsiteContent();
  
  if (!isLoaded) return null;
  
  return (
    <section id="contact" className="py-20 bg-black/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-20 animate-fade-up">
          <h2 className="font-gloock text-5xl md:text-6xl mb-4">{content.contactCTA.title}</h2>
          <div className="flex justify-center mt-8">
            <a href={content.contactCTA.buttonLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 rounded-full">
                Let's Talk
              </Button>
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-32">
          <h3 className="font-light text-2xl mb-6 text-center">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="w-full">
            {content.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
                <AccordionTrigger className="text-left font-medium py-4 hover:text-blue-500 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
