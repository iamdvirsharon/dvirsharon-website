
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
    } catch (error) {
      console.error("Error updating content:", error);
    }
  };

  const updateSection = async <K extends keyof WebsiteContent>(
    section: K, 
    sectionData: WebsiteContent[K]
  ) => {
    try {
      await saveContentSection(section, sectionData);
      setContent(prev => ({ ...prev, [section]: sectionData }));
    } catch (error) {
      console.error(`Error updating section ${String(section)}:`, error);
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
