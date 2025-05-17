
import React, { Suspense, lazy, useState, useEffect } from "react";
import Header from "../components/Header";
import { useWebsiteContent } from "@/hooks/useWebsiteContent";

// Lazy load components for better performance
const HeroSection = lazy(() => import("../components/HeroSection"));
const ServicesSection = lazy(() => import("../components/ServicesSection"));
const TestimonialsSection = lazy(() => import("../components/TestimonialsSection"));
const CompaniesSection = lazy(() => import("../components/CompaniesSection"));
const IntegrationsSection = lazy(() => import("../components/IntegrationsSection"));
const FrameworkSection = lazy(() => import("../components/FrameworkSection"));
const FAQsSection = lazy(() => import("../components/FAQsSection"));
const ContactSection = lazy(() => import("../components/ContactSection"));
const Footer = lazy(() => import("../components/Footer"));

// Fallback loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center py-12">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const Index = () => {
  const { content, isLoaded } = useWebsiteContent();
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // Make sure page renders correctly after content is loaded
  useEffect(() => {
    if (isLoaded) {
      // Small delay to ensure smooth transition
      const timer = setTimeout(() => {
        setIsPageLoaded(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <p className="mt-4 text-muted-foreground">Loading content...</p>
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
    <div className={`min-h-screen flex flex-col bg-background text-foreground ${isPageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <Header />
      <Suspense fallback={<LoadingFallback />}>
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
      </Suspense>
    </div>
  );
};

export default Index;
