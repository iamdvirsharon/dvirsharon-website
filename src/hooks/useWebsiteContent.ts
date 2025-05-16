
import { useState, useEffect } from 'react';
import { WebsiteContent } from '@/lib/contentTypes';
import { 
  fetchWebsiteContent,
  getLocalWebsiteContent, 
  saveWebsiteContent, 
  resetWebsiteContent, 
  saveContentSection 
} from '@/lib/contentService';

export function useWebsiteContent() {
  // Start with localStorage content for immediate rendering
  const [content, setContent] = useState<WebsiteContent>(getLocalWebsiteContent());
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Then fetch from Supabase
    const loadContent = async () => {
      try {
        const serverContent = await fetchWebsiteContent();
        
        // Ensure sectionsVisibility exists
        if (!serverContent.sectionsVisibility) {
          serverContent.sectionsVisibility = {
            hero: true,
            services: true,
            framework: true,
            integrations: true,
            testimonials: true,
            companies: true,
            faqs: true,
            contact: true
          };
        }
        
        setContent(serverContent);
      } catch (error) {
        console.error("Error loading content:", error);
      } finally {
        setIsLoaded(true);
      }
    };
    
    loadContent();
  }, []);

  const updateContent = async (newContent: WebsiteContent) => {
    try {
      await saveWebsiteContent(newContent);
      setContent(newContent);
      return true;
    } catch (error) {
      console.error("Error updating content:", error);
      return false;
    }
  };

  const updateSection = async <K extends keyof WebsiteContent>(
    section: K, 
    sectionData: WebsiteContent[K]
  ) => {
    try {
      await saveContentSection(section, sectionData);
      setContent(prev => ({ ...prev, [section]: sectionData }));
      return true;
    } catch (error) {
      console.error(`Error updating section ${String(section)}:`, error);
      return false;
    }
  };

  const resetContentData = async () => {
    try {
      const defaultContent = await resetWebsiteContent();
      setContent(defaultContent);
      return defaultContent;
    } catch (error) {
      console.error("Error resetting content:", error);
      return content;
    }
  };

  return {
    content,
    isLoaded,
    updateContent,
    updateSection,
    resetContent: resetContentData
  };
}
