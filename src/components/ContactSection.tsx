
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
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
      answer: "We start with a discovery call to understand your needs, followed by a tailored proposal outlining objectives, strategies, timelines, and expected outcomes. Once approved, we implement, monitor, and refine based on data-driven insights."
    },
    {
      question: "Do you offer any guarantees?",
      answer: "While we can't guarantee specific results due to the many variables involved, we do guarantee our commitment to data-driven strategies, continuous optimization, and transparent communication throughout our engagement."
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-20 animate-fade-up">
          <h2 className="font-gloock text-5xl md:text-6xl mb-4">Book a call today.</h2>
          <div className="flex justify-center mt-8">
            <a href="https://zcal.co/dvirsharon/30min" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 rounded-full">
                Let's Chat
              </Button>
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-32">
          <h3 className="font-light text-2xl mb-6 text-center">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
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
