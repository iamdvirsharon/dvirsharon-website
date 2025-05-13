
import { useState, useEffect } from 'react';
import { WebsiteContent } from '@/lib/contentTypes';
import { getWebsiteContent, saveWebsiteContent, resetWebsiteContent, saveContentSection } from '@/lib/contentService';

export function useWebsiteContent() {
  const [content, setContent] = useState<WebsiteContent>(getWebsiteContent());
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setContent(getWebsiteContent());
    setIsLoaded(true);
  }, []);

  const updateContent = (newContent: WebsiteContent) => {
    saveWebsiteContent(newContent);
    setContent(newContent);
  };

  const updateSection = <K extends keyof WebsiteContent>(
    section: K, 
    sectionData: WebsiteContent[K]
  ) => {
    saveContentSection(section, sectionData);
    setContent(prev => ({ ...prev, [section]: sectionData }));
  };

  const resetContent = () => {
    const defaultContent = resetWebsiteContent();
    setContent(defaultContent);
    return defaultContent;
  };

  return {
    content,
    isLoaded,
    updateContent,
    updateSection,
    resetContent
  };
}
