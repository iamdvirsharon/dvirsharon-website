
import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Phone, Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ContactSection = () => {
  const faqs = [
    {
      question: "What range of services do you offer?",
      answer: "We provide a comprehensive suite of growth-focused services, including Conversion Rate Optimization (CRO), AI implementation, product marketing, and growth marketing advisory services."
    },
    {
      question: "How can AI implementation benefit my business?",
      answer: "AI implementation can automate processes, enhance decision-making, personalize customer experiences, and uncover insights from data, leading to increased efficiency and revenue growth."
    },
    {
      question: "What does your product marketing service entail?",
      answer: "Our product marketing service covers market research, positioning, messaging, launch strategies, and ongoing optimization to ensure your product resonates with your target audience and achieves market success."
    },
    {
      question: "How do you approach growth marketing advisory?",
      answer: "We provide strategic guidance on channel selection, customer acquisition, retention strategies, and performance metrics. Our advice is tailored to your specific business goals and market conditions."
    },
    {
      question: "Can you handle projects that combine multiple services?",
      answer: "Absolutely. Many of our clients benefit from an integrated approach that leverages CRO, AI, product marketing, and growth strategies in tandem for maximum impact."
    },
    {
      question: "How do you measure the success of your services?",
      answer: "We establish clear KPIs at the outset of each project, which may include metrics like conversion rates, customer acquisition costs, lifetime value, and revenue growth. We provide regular reports and analytics to track progress."
    },
    {
      question: "What's your typical engagement process?",
      answer: "We provide a comprehensive suite of growth-focused services, including Conversion Rate Optimization (CRO), AI implementation, product marketing, and growth marketing advisory services."
    },
    {
      question: "Do you offer any guarantees?",
      answer: "While we can't guarantee specific results due to the many variables involved, we do guarantee our commitment to data-driven strategies, continuous optimization, and transparent communication throughout our engagement."
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-gloock text-3xl md:text-4xl mb-4">Ready to Transform Your Growth Strategy?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Book a free 30-minute consultation to discuss how I can help you optimize your conversion funnel and accelerate growth.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass-effect p-8 rounded-lg animate-fade-up">
              <div className="text-center space-y-6">
                <div className="inline-block p-4 rounded-full bg-amber-600/20 mb-2">
                  <ExternalLink className="h-8 w-8 text-amber-500" />
                </div>
                <h3 className="font-gloock text-2xl">Schedule a Call</h3>
                <p className="text-gray-300">
                  No pressure, just a conversation about your goals and how I might be able to help your business grow.
                </p>
                <a href="https://zcal.co/dvirsharon/30min" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    Book a 30-Minute Call <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 justify-center">
                <a href="mailto:contact@example.com" className="flex items-center gap-2 text-gray-300 hover:text-amber-500 transition-colors">
                  <Mail className="w-5 h-5" /> contact@example.com
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-2 text-gray-300 hover:text-amber-500 transition-colors">
                  <Phone className="w-5 h-5" /> +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="font-gloock text-2xl mb-6">Frequently Asked Questions</h3>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
                    <AccordionTrigger className="text-left font-medium py-4 hover:text-amber-500 transition-colors">
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
