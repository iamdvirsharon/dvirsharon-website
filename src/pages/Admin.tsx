
import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { useWebsiteContent } from '@/hooks/useWebsiteContent'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import { Separator } from '@/components/ui/separator'

export default function Admin() {
  const { content, isLoaded, updateContent } = useWebsiteContent();
  const [isSaving, setIsSaving] = useState(false);

  if (!isLoaded) {
    return (
      <div className="container mx-auto p-8 flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const handleVisibilityChange = (section: string, value: boolean) => {
    const updatedContent = { 
      ...content, 
      sectionsVisibility: { 
        ...content.sectionsVisibility, 
        [section]: value 
      } 
    };
    updateContent(updatedContent);
  };

  const handleSaveChanges = async () => {
    setIsSaving(true);
    try {
      await updateContent(content);
      toast({
        title: "Changes saved",
        description: "Your website content has been updated successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save changes. Please try again.",
        variant: "destructive",
      });
      console.error("Failed to save changes:", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
        <p className="text-gray-600 mb-6">
          Welcome to the admin dashboard. Here you can manage your website content and settings.
        </p>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Section Visibility</h2>
          <p className="text-sm text-gray-500 mb-4">
            Enable or disable sections of your website. Changes will be applied after saving.
          </p>

          <div className="space-y-4">
            {Object.entries(content.sectionsVisibility || {}).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <div>
                  <span className="font-medium capitalize">{key} Section</span>
                </div>
                <Switch 
                  checked={value} 
                  onCheckedChange={(checked) => handleVisibilityChange(key, checked)} 
                />
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-6" />
        
        <div className="flex justify-end">
          <Button 
            onClick={handleSaveChanges} 
            disabled={isSaving}
            className="px-8"
          >
            {isSaving ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </Card>
    </div>
  )
}
