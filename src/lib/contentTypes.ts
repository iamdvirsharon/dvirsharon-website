
export interface HeroContent {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  isVisible: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string; // Name of the icon to use
}

export interface FrameworkStep {
  number: string;
  title: string;
  description: string;
}

export interface IntegrationItem {
  name: string;
  imagePath: string;
  altText: string;
}

export interface TestimonialItem {
  name: string;
  position: string;
  text: string;
  initials: string;
}

export interface CompanyItem {
  name: string;
  class: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SectionsVisibility {
  hero: boolean;
  services: boolean;
  framework: boolean;
  integrations: boolean;
  testimonials: boolean;
  companies: boolean;
  faqs: boolean;
  contact: boolean;
}

export interface WebsiteContent {
  hero: HeroContent;
  services: ServiceItem[];
  frameworkSteps: FrameworkStep[];
  integrations: IntegrationItem[];
  testimonials: TestimonialItem[];
  companies: CompanyItem[];
  faqs: FAQItem[];
  contactCTA: {
    title: string;
    buttonText: string;
    buttonLink: string;
    isVisible: boolean;
  };
  // Section visibility controls
  sectionsVisibility: SectionsVisibility;
}
