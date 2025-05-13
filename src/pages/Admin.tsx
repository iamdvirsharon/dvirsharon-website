import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '@/components/AdminLayout';
import Login from './Login';
import { toast } from '@/components/ui/use-toast';

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [content, setContent] = useState({
    heroTitle: 'Stop Wasting Traffic, Start Generating Leads',
    heroSubtitle: 'Leverage AI and growth marketing tactics to unlock your company\'s full potential. Expert in CRO, experimentation, automations, and product-led growth strategies.',
    aboutText: 'Here you can manage your website content and settings.'
  });

  const navigate = useNavigate();

  useEffect(() => {
    const loginStatus = localStorage.getItem('isAdminLoggedIn');
    if (loginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    setIsLoggedIn(false);
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
  };

  const handleContentChange = (key: keyof typeof content, value: string) => {
    setContent(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSave = () => {
    // In a real application, this would save to a database
    toast({
      title: "Changes saved",
      description: "Your content has been updated successfully",
    });
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <AdminLayout onLogout={handleLogout}>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Content Management</h2>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Save Changes
          </button>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Hero Title</label>
            <textarea
              className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background"
              value={content.heroTitle}
              onChange={(e) => handleContentChange('heroTitle', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Hero Subtitle</label>
            <textarea
              className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background"
              value={content.heroSubtitle}
              onChange={(e) => handleContentChange('heroSubtitle', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">About Text</label>
            <textarea
              className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background"
              value={content.aboutText}
              onChange={(e) => handleContentChange('aboutText', e.target.value)}
            />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}