
import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-black/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-gloock text-3xl md:text-4xl mb-4">Ready to Transform Your Growth Strategy?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Book a free 30-minute consultation to discuss how I can help you optimize your conversion funnel and accelerate growth.
          </p>
        </div>

        <div className="max-w-md mx-auto glass-effect p-8 rounded-lg animate-fade-up">
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
      </div>
    </section>
  );
};

export default ContactSection;
