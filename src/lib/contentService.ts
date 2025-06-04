import { WebsiteContent } from './contentTypes';
import { supabase } from '@/integrations/supabase/client';
import { Json } from '@/integrations/supabase/types';

// Default content structure
const defaultContent: WebsiteContent = {
  hero: {
    title: 'Stop Wasting Traffic, Start Generating Leads',
    subtitle: 'Leverage AI and growth marketing tactics to unlock your company\'s full potential. Expert in CRO, experimentation, automations, and product-led growth strategies.',
    buttonText: 'Book a Free Call',
    buttonLink: 'https://zcal.co/dvirsharon/30min',
    isVisible: true
  },
  services: [
    {
      title: "Growth Marketing Strategy",
      description: "Strategic guidance to accelerate your business growth through data-driven approaches and maximize marketing ROI.",
      icon: "trending-up"
    },
    {
      title: "Conversion Rate Optimization",
      description: "In-depth analysis of your conversion funnels to identify and fix bottlenecks, increasing revenue without increasing traffic.",
      icon: "search"
    },
    {
      title: "Marketing Automation",
      description: "Create and build powerful marketing and business automation systems that save time, increase efficiency, and improve customer engagement.",
      icon: "zap"
    },
    {
      title: "Data Enrichment Services",
      description: "Enhance your customer data to improve targeting, personalization capabilities, and drive informed business decisions.",
      icon: "database"
    },
    {
      title: "Experimentation Frameworks",
      description: "Implement proven A/B testing and experimentation methods to continuously optimize conversion rates and user experience.",
      icon: "beaker"
    },
    {
      title: "Product-Led Growth",
      description: "Develop strategies where your product itself drives user acquisition, engagement, and retention through exceptional user experiences.",
      icon: "code"
    }
  ],
  frameworkSteps: [
    {
      number: "01",
      title: "Research",
      description: "Identify growth opportunities and conversion optimization potential through data analysis and user research."
    },
    {
      number: "02",
      title: "Experimentation",
      description: "Implement UX research, psychology-based design, and A/B testing to validate assumptions and optimize conversions."
    },
    {
      number: "03",
      title: "Implementation",
      description: "Execute data-driven changes to increase conversions, revenue, and create sustainable growth frameworks."
    },
    {
      number: "04",
      title: "Learning and Iteration",
      description: "Growth is an ongoing process. We continuously analyze results, refine strategies, and optimize for long-term success."
    }
  ],
  integrations: [
    {
      name: "Gmail",
      imagePath: "/integrations/gmail-logo.png",
      altText: "Gmail logo"
    },
    {
      name: "Outlook",
      imagePath: "/integrations/outlook-logo.png",
      altText: "Outlook logo"
    },
    {
      name: "Slack",
      imagePath: "/integrations/slack-logo.png",
      altText: "Slack logo"
    },
    {
      name: "Make.com",
      imagePath: "https://images.ctfassets.net/un655fb9wln6/1k5wBPhbu5kXiaYlFWgEJE/b590772959bd510e64cf230ef37bba3e/Make-Logo-RGB.svg",
      altText: "Make.com logo"
    },
    {
      name: "HubSpot",
      imagePath: "/integrations/hubspot-logo.png",
      altText: "HubSpot logo"
    },
    {
      name: "Salesforce",
      imagePath: "/integrations/salesforce-logo.png",
      altText: "Salesforce logo"
    }
  ],
  testimonials: [
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
  ],
  companies: [
    { name: "hipages", class: "text-xl md:text-2xl" },
    { name: "Overwolf", class: "text-xl md:text-2xl" },
    { name: "FairArt", class: "text-xl md:text-2xl" },
    { name: "Futura Tech Labs", class: "text-xl md:text-2xl" },
    { name: "Sundevs", class: "text-xl md:text-2xl" }
  ],
  faqs: [
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
  ],
  contactCTA: {
    title: "Book a call today.",
    buttonText: "Let's Chat",
    buttonLink: "https://zcal.co/dvirsharon/30min",
    isVisible: true
  },
  // Default section visibility
  sectionsVisibility: {
    hero: true,
    services: true,
    framework: true,
    integrations: true,
    testimonials: true,
    companies: true, // Default section visibility
    faqs: false, // Default section visibility
    contact: true
  }
};

// LocalStorage key for website content
const CONTENT_STORAGE_KEY = 'website_content';
const SUPABASE_CONTENT_TABLE = 'website_content';

// Helper functions for type conversion
const isWebsiteContent = (content: unknown): content is WebsiteContent => {
  const c = content as Partial<WebsiteContent>;
  return (
    c !== null &&
    typeof c === 'object' &&
    'hero' in c &&
    'services' in c &&
    'frameworkSteps' in c &&
    'integrations' in c &&
    'testimonials' in c &&
    'companies' in c &&
    'faqs' in c &&
    'contactCTA' in c
  );
};

// Convert WebsiteContent to Json type for Supabase
const websiteContentToJson = (content: WebsiteContent): Json => {
  return content as unknown as Json;
};

// Get website content from Supabase or use localStorage as fallback
export async function fetchWebsiteContent(): Promise<WebsiteContent> {
  try {
    // Try to get content from Supabase
    const { data, error } = await supabase
      .from(SUPABASE_CONTENT_TABLE)
      .select('content')
      .limit(1);
    
    if (error) throw error;
    
    if (data && data.length > 0) {
      // Check and convert the content to WebsiteContent
      const contentData = data[0].content;
      if (isWebsiteContent(contentData)) {
        // Also update localStorage for offline access
        localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(contentData));
        return contentData;
      } else {
        console.error('Retrieved content does not match WebsiteContent structure', contentData);
      }
    } else {
      console.log('No data returned from Supabase, using default content and seeding Supabase.');
      // If no data, seed the database with default content
      await supabase
        .from(SUPABASE_CONTENT_TABLE)
        .insert({ content: websiteContentToJson(defaultContent) });

      return defaultContent;
    }
  } catch (e) {
    console.error('Failed to fetch content from Supabase:', e);
  }
  
  // Fallback to localStorage if Supabase fetch fails
  return getLocalWebsiteContent();
}

// Get website content from localStorage or use default
export function getLocalWebsiteContent(): WebsiteContent {
  const storedContent = localStorage.getItem(CONTENT_STORAGE_KEY);
  if (storedContent) {
    try {
      const parsedContent = JSON.parse(storedContent);
      if (isWebsiteContent(parsedContent)) {
        // Ensure all new fields are present by merging with default
        return {
          ...defaultContent,
          ...parsedContent,
          // Ensure sectionsVisibility exists
          sectionsVisibility: {
            ...defaultContent.sectionsVisibility,
            ...(parsedContent.sectionsVisibility || {})
          }
        };
      }
      console.error('Stored content does not match WebsiteContent structure', parsedContent);
      return defaultContent;
    } catch (e) {
      console.error('Failed to parse stored content', e);
      return defaultContent;
    }
  }
  return defaultContent;
}

// Save website content to both Supabase and localStorage
export async function saveWebsiteContent(content: WebsiteContent): Promise<void> {
  // Save to localStorage first (for offline access and as backup)
  localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(content));
  
  try {
    // Check if record exists
    const { data } = await supabase
      .from(SUPABASE_CONTENT_TABLE)
      .select('id')
      .limit(1);
    
    if (data && data.length > 0) {
      // Update existing record
      await supabase
        .from(SUPABASE_CONTENT_TABLE)
        .update({ content: websiteContentToJson(content) })
        .eq('id', data[0].id);
    } else {
      // Insert new record
      await supabase
        .from(SUPABASE_CONTENT_TABLE)
        .insert({ content: websiteContentToJson(content) });
    }
  } catch (e) {
    console.error('Failed to save content to Supabase:', e);
    // Continue even if Supabase save fails - data is still in localStorage
  }
}

// Reset website content to default
export async function resetWebsiteContent(): Promise<WebsiteContent> {
  localStorage.removeItem(CONTENT_STORAGE_KEY);
  
  try {
    // Delete content from Supabase
    await supabase
      .from(SUPABASE_CONTENT_TABLE)
      .delete()
      .neq('id', 0); // Delete all records
      
    // Insert default content
    await supabase
      .from(SUPABASE_CONTENT_TABLE)
      .insert({ content: websiteContentToJson(defaultContent) });
  } catch (e) {
    console.error('Failed to reset content in Supabase:', e);
  }
  
  return defaultContent;
}

// Helper function to save a specific section
export async function saveContentSection<K extends keyof WebsiteContent>(
  section: K, 
  data: WebsiteContent[K]
): Promise<void> {
  const currentContent = await fetchWebsiteContent();
  const updatedContent = { ...currentContent, [section]: data };
  await saveWebsiteContent(updatedContent);
}