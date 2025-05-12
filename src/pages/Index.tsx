
import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import ToolsSection from "../components/ToolsSection";
import BlogSection from "../components/BlogSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CompaniesSection from "../components/CompaniesSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ToolsSection />
        <BlogSection />
        <CompaniesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
