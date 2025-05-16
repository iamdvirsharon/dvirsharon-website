
import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CompaniesSection from "../components/CompaniesSection";
import IntegrationsSection from "../components/IntegrationsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { useWebsiteContent } from "@/hooks/useWebsiteContent";

const Index = () => {
  const { content, isLoaded } = useWebsiteContent();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const { sectionsVisibility = {} } = content;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main>
        {sectionsVisibility.hero !== false && <HeroSection />}
        {sectionsVisibility.companies !== false && <CompaniesSection />}
        {sectionsVisibility.services !== false && <ServicesSection />}
        {sectionsVisibility.integrations !== false && <IntegrationsSection />}
        {sectionsVisibility.testimonials !== false && <TestimonialsSection />}
        {sectionsVisibility.contact !== false && <ContactSection />}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
