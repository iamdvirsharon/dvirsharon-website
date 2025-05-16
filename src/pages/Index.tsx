
import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CompaniesSection from "../components/CompaniesSection";
import IntegrationsSection from "../components/IntegrationsSection";
import FrameworkSection from "../components/FrameworkSection";
import FAQsSection from "../components/FAQsSection";
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

  // Ensure sectionsVisibility exists with default values
  const sectionsVisibility = content.sectionsVisibility || {
    hero: true,
    services: true,
    framework: true,
    integrations: true,
    testimonials: true,
    companies: true,
    faqs: true,
    contact: true
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main>
        {sectionsVisibility.hero !== false && <HeroSection />}
        {sectionsVisibility.companies !== false && <CompaniesSection />}
        {sectionsVisibility.services !== false && <ServicesSection />}
        {sectionsVisibility.framework !== false && <FrameworkSection />}
        {sectionsVisibility.integrations !== false && <IntegrationsSection />}
        {sectionsVisibility.testimonials !== false && <TestimonialsSection />}
        {sectionsVisibility.faqs !== false && <FAQsSection />}
        {sectionsVisibility.contact !== false && <ContactSection />}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
