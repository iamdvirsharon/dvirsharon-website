import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '@/components/AdminLayout';
import Login from './Login';
import { toast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useWebsiteContent } from '@/hooks/useWebsiteContent';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import ImageUploader from '@/components/admin/ImageUploader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Search, Database, Zap, Code, Beaker, PlusCircle, X, Trash2 } from 'lucide-react';
import { ServiceItem, IntegrationItem, TestimonialItem, CompanyItem, FAQItem, FrameworkStep, WebsiteContent } from '@/lib/contentTypes';

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('hero');
  const navigate = useNavigate();
  const { content, isLoaded, updateSection, resetContent } = useWebsiteContent();
  const [pageTitle, setPageTitle] = useState('');
  const [pageDescription, setPageDescription] = useState('');
  
  useEffect(() => {
    const loginStatus = localStorage.getItem('isAdminLoggedIn');
    if (loginStatus === 'true') {
      setIsLoggedIn(true);
    }
    
    // Load current page title and description
    setPageTitle(document.title);
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      setPageDescription(metaDescription.getAttribute('content') || '');
    }
  }, []);
  
  // Function to update page title and meta description
  const updatePageMeta = () => {
    document.title = pageTitle;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', pageDescription);
    }
    
    // Save to localStorage for persistence
    localStorage.setItem('pageTitle', pageTitle);
    localStorage.setItem('pageDescription', pageDescription);
    
    toast({
      title: "Meta data updated",
      description: "Page title and description have been updated",
    });
  };

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

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all content to default? This cannot be undone.')) {
      resetContent();
      toast({
        title: "Content reset",
        description: "All content has been reset to default values",
      });
    }
  };

  const handleSave = () => {
    toast({
      title: "Changes saved",
      description: "Your content has been updated successfully",
    });
  };

  // Icon mapping for services
  const iconMap: Record<string, JSX.Element> = {
    'trending-up': <TrendingUp className="h-10 w-10 text-blue-500" />,
    'search': <Search className="h-10 w-10 text-blue-500" />,
    'database': <Database className="h-10 w-10 text-blue-500" />,
    'zap': <Zap className="h-10 w-10 text-blue-500" />,
    'code': <Code className="h-10 w-10 text-blue-500" />,
    'beaker': <Beaker className="h-10 w-10 text-blue-500" />
  };

  // Helper function to update array items with proper type safety
  const updateArrayItem = <T extends ServiceItem | FrameworkStep | IntegrationItem | TestimonialItem | CompanyItem | FAQItem>(
    section: keyof WebsiteContent,
    index: number,
    field: keyof T,
    value: any
  ) => {
    const items = [...(content[section] as T[])];
    items[index] = { ...items[index], [field]: value };
    updateSection(section, items as WebsiteContent[typeof section]);
    
    // Auto-save on change
    toast({
      title: "Change saved",
      description: `Updated ${field.toString()} in ${section}`,
    });
  };

  // Helper function to add array items with proper type safety
  const addArrayItem = <T extends ServiceItem | FrameworkStep | IntegrationItem | TestimonialItem | CompanyItem | FAQItem>(
    section: keyof WebsiteContent,
    newItem: T
  ) => {
    const items = [...(content[section] as T[])];
    items.push(newItem);
    updateSection(section, items as WebsiteContent[typeof section]);
    
    // Auto-save on change
    toast({
      title: "Item added",
      description: `Added new item to ${section}`,
    });
  };

  // Helper function to remove array items with proper type safety
  const removeArrayItem = <T extends ServiceItem | FrameworkStep | IntegrationItem | TestimonialItem | CompanyItem | FAQItem>(
    section: keyof WebsiteContent,
    index: number
  ) => {
    const items = [...(content[section] as T[])];
    items.splice(index, 1);
    updateSection(section, items as WebsiteContent[typeof section]);
    
    // Auto-save on change
    toast({
      title: "Item removed",
      description: `Removed item from ${section}`,
    });
  };

  // Helper function to update section visibility
  const updateSectionVisibility = (section: keyof WebsiteContent['sectionsVisibility'], isVisible: boolean) => {
    const updatedVisibility = {
      ...content.sectionsVisibility,
      [section]: isVisible
    };
    
    updateSection('sectionsVisibility', updatedVisibility);
    
    toast({
      title: isVisible ? "Section enabled" : "Section disabled",
      description: `${section.charAt(0).toUpperCase() + section.slice(1)} section is now ${isVisible ? 'visible' : 'hidden'}`,
    });
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  if (!isLoaded) {
    return (
      <AdminLayout onLogout={handleLogout}>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout onLogout={handleLogout}>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Content Management</h2>
          <div className="flex gap-3">
            <Button
              onClick={handleReset}
              variant="outline"
              className="text-red-500 border-red-500 hover:bg-red-500/10"
            >
              Reset Content
            </Button>
            <Button
              onClick={handleSave}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Save All Changes
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 md:grid-cols-10 mb-6">
            <TabsTrigger value="meta">Meta</TabsTrigger>
            <TabsTrigger value="visibility">Visibility</TabsTrigger>
            <TabsTrigger value="hero">Hero</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="framework">Framework</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            <TabsTrigger value="companies">Companies</TabsTrigger>
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          {/* Meta Information Tab */}
          <TabsContent value="meta" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Page Meta Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Page Title</label>
                  <Input
                    value={pageTitle}
                    onChange={(e) => setPageTitle(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Meta Description</label>
                  <Textarea
                    value={pageDescription}
                    onChange={(e) => setPageDescription(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>
                <Button onClick={updatePageMeta}>Update Meta Information</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Section Visibility Tab */}
          <TabsContent value="visibility" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Section Visibility</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(content.sectionsVisibility || {}).map(([section, isVisible]) => (
                  <div key={section} className="flex items-center justify-between border-b pb-4 last:border-0">
                    <div>
                      <h3 className="text-lg font-medium capitalize">{section} Section</h3>
                      <p className="text-sm text-gray-500">
                        {isVisible ? 'Currently visible' : 'Currently hidden'}
                      </p>
                    </div>
                    <Switch 
                      checked={isVisible} 
                      onCheckedChange={(checked) => updateSectionVisibility(section as keyof WebsiteContent['sectionsVisibility'], checked)}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Hero Section Tab */}
          <TabsContent value="hero" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Hero Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b">
                  <div>
                    <h3 className="font-medium">Section Visibility</h3>
                    <p className="text-sm text-gray-500">
                      {content.sectionsVisibility?.hero ? 'Currently visible' : 'Currently hidden'}
                    </p>
                  </div>
                  <Switch 
                    checked={content.sectionsVisibility?.hero || false} 
                    onCheckedChange={(checked) => updateSectionVisibility('hero', checked)}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Hero Title</label>
                  <Textarea
                    className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background"
                    value={content.hero.title}
                    onChange={(e) => {
                      updateSection('hero', { ...content.hero, title: e.target.value });
                      // Auto-save feedback
                      toast({
                        title: "Change saved",
                        description: "Updated hero title",
                      });
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Hero Subtitle</label>
                  <Textarea
                    className="w-full min-h-[100px] p-3 rounded-md border border-input bg-background"
                    value={content.hero.subtitle}
                    onChange={(e) => {
                      updateSection('hero', { ...content.hero, subtitle: e.target.value });
                      // Auto-save feedback
                      toast({
                        title: "Change saved",
                        description: "Updated hero subtitle",
                      });
                    }}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Button Text</label>
                    <Input
                      value={content.hero.buttonText}
                      onChange={(e) => {
                        updateSection('hero', { ...content.hero, buttonText: e.target.value });
                        // Auto-save feedback
                        toast({
                          title: "Change saved",
                          description: "Updated button text",
                        });
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Button Link</label>
                    <Input
                      value={content.hero.buttonLink}
                      onChange={(e) => {
                        updateSection('hero', { ...content.hero, buttonLink: e.target.value });
                        // Auto-save feedback
                        toast({
                          title: "Change saved",
                          description: "Updated button link",
                        });
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services Section Tab */}
          <TabsContent value="services" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Services Section</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between pb-4 mb-4 border-b">
                  <div>
                    <h3 className="font-medium">Section Visibility</h3>
                    <p className="text-sm text-gray-500">
                      {content.sectionsVisibility?.services ? 'Currently visible' : 'Currently hidden'}
                    </p>
                  </div>
                  <Switch 
                    checked={content.sectionsVisibility?.services || false} 
                    onCheckedChange={(checked) => updateSectionVisibility('services', checked)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Services items */}
            <div className="space-y-4">
              {content.services.map((service, index) => (
                <Card key={index} className="relative">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-2 right-2 text-red-500 hover:bg-red-500/10 hover:text-red-600"
                    onClick={() => removeArrayItem<ServiceItem>('services', index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  
                  <CardHeader>
                    <CardTitle>Service #{index + 1}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Title</label>
                      <Input
                        value={service.title}
                        onChange={(e) => updateArrayItem<ServiceItem>('services', index, 'title', e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Description</label>
                      <Textarea
                        value={service.description}
                        onChange={(e) => updateArrayItem<ServiceItem>('services', index, 'description', e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Icon</label>
                      <select
                        className="w-full p-2 border border-input bg-background rounded-md"
                        value={service.icon}
                        onChange={(e) => updateArrayItem<ServiceItem>('services', index, 'icon', e.target.value)}
                      >
                        <option value="trending-up">Trending Up</option>
                        <option value="search">Search</option>
                        <option value="zap">Zap</option>
                        <option value="database">Database</option>
                        <option value="beaker">Beaker</option>
                        <option value="code">Code</option>
                      </select>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Button
                className="w-full flex items-center justify-center gap-2"
                variant="outline"
                onClick={() => addArrayItem<ServiceItem>('services', {
                  title: 'New Service',
                  description: 'Description of the new service.',
                  icon: 'trending-up'
                })}
              >
                <PlusCircle className="h-4 w-4" /> Add Service
              </Button>
            </div>
          </TabsContent>

          {/* Framework Steps Tab */}
          <TabsContent value="framework" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Framework Section</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between pb-4 mb-4 border-b">
                  <div>
                    <h3 className="font-medium">Section Visibility</h3>
                    <p className="text-sm text-gray-500">
                      {content.sectionsVisibility?.framework ? 'Currently visible' : 'Currently hidden'}
                    </p>
                  </div>
                  <Switch 
                    checked={content.sectionsVisibility?.framework || false} 
                    onCheckedChange={(checked) => updateSectionVisibility('framework', checked)}
                  />
                </div>
              </CardContent>
            </Card>
            
            {/* Framework steps items */}
            <div className="space-y-4">
              {content.frameworkSteps.map((step, index) => (
                <Card key={index} className="relative">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-2 right-2 text-red-500 hover:bg-red-500/10 hover:text-red-600"
                    onClick={() => removeArrayItem<FrameworkStep>('frameworkSteps', index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  
                  <CardHeader>
                    <CardTitle>Step #{index + 1}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Number</label>
                      <Input
                        value={step.number}
                        onChange={(e) => updateArrayItem<FrameworkStep>('frameworkSteps', index, 'number', e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Title</label>
                      <Input
                        value={step.title}
                        onChange={(e) => updateArrayItem<FrameworkStep>('frameworkSteps', index, 'title', e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Description</label>
                      <Textarea
                        value={step.description}
                        onChange={(e) => updateArrayItem<FrameworkStep>('frameworkSteps', index, 'description', e.target.value)}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Button
                className="w-full flex items-center justify-center gap-2"
                variant="outline"
                onClick={() => addArrayItem<FrameworkStep>('frameworkSteps', {
                  number: "0" + (content.frameworkSteps.length + 1),
                  title: 'New Step',
                  description: 'Description of the new step.'
                })}
              >
                <PlusCircle className="h-4 w-4" /> Add Step
              </Button>
            </div>
          </TabsContent>

          {/* Integrations Tab */}
          <TabsContent value="integrations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Integrations Section</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between pb-4 mb-4 border-b">
                  <div>
                    <h3 className="font-medium">Section Visibility</h3>
                    <p className="text-sm text-gray-500">
                      {content.sectionsVisibility?.integrations ? 'Currently visible' : 'Currently hidden'}
                    </p>
                  </div>
                  <Switch 
                    checked={content.sectionsVisibility?.integrations || false} 
                    onCheckedChange={(checked) => updateSectionVisibility('integrations', checked)}
                  />
                </div>
              </CardContent>
            </Card>
            
            {/* Integrations items */}
            <div className="space-y-4">
              {content.integrations.map((integration, index) => (
                <Card key={index} className="relative">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-2 right-2 text-red-500 hover:bg-red-500/10 hover:text-red-600"
                    onClick={() => removeArrayItem<IntegrationItem>('integrations', index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  
                  <CardHeader>
                    <CardTitle>Integration #{index + 1}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name</label>
                      <Input
                        value={integration.name}
                        onChange={(e) => updateArrayItem<IntegrationItem>('integrations', index, 'name', e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Alt Text</label>
                      <Input
                        value={integration.altText}
                        onChange={(e) => updateArrayItem<IntegrationItem>('integrations', index, 'altText', e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Image</label>
                      <ImageUploader
                        currentImage={integration.imagePath}
                        onImageSelected={(url) => updateArrayItem<IntegrationItem>('integrations', index, 'imagePath', url)}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Button
                className="w-full flex items-center justify-center gap-2"
                variant="outline"
                onClick={() => addArrayItem<IntegrationItem>('integrations', {
                  name: 'New Integration',
                  imagePath: '/placeholder.svg',
                  altText: 'Integration logo'
                })}
              >
                <PlusCircle className="h-4 w-4" /> Add Integration
              </Button>
            </div>
          </TabsContent>

          {/* Testimonials Tab */}
          <TabsContent value="testimonials" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Testimonials Section</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between pb-4 mb-4 border-b">
                  <div>
                    <h3 className="font-medium">Section Visibility</h3>
                    <p className="text-sm text-gray-500">
                      {content.sectionsVisibility?.testimonials ? 'Currently visible' : 'Currently hidden'}
                    </p>
                  </div>
                  <Switch 
                    checked={content.sectionsVisibility?.testimonials || false} 
                    onCheckedChange={(checked) => updateSectionVisibility('testimonials', checked)}
                  />
                </div>
              </CardContent>
            </Card>
            
            {/* Testimonials items */}
            <div className="space-y-4">
              {content.testimonials.map((testimonial, index) => (
                <Card key={index} className="relative">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-2 right-2 text-red-500 hover:bg-red-500/10 hover:text-red-600"
                    onClick={() => removeArrayItem<TestimonialItem>('testimonials', index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  
                  <CardHeader>
                    <CardTitle>Testimonial #{index + 1}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name</label>
                      <Input
                        value={testimonial.name}
                        onChange={(e) => updateArrayItem<TestimonialItem>('testimonials', index, 'name', e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Position</label>
                      <Input
                        value={testimonial.position}
                        onChange={(e) => updateArrayItem<TestimonialItem>('testimonials', index, 'position', e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Testimonial</label>
                      <Textarea
                        value={testimonial.text}
                        onChange={(e) => updateArrayItem<TestimonialItem>('testimonials', index, 'text', e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Initials</label>
                      <Input
                        value={testimonial.initials}
                        onChange={(e) => updateArrayItem<TestimonialItem>('testimonials', index, 'initials', e.target.value)}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Button
                className="w-full flex items-center justify-center gap-2"
                variant="outline"
                onClick={() => addArrayItem<TestimonialItem>('testimonials', {
                  name: 'New Testimonial',
                  position: 'Position, Company',
                  text: 'Your testimonial text here.',
                  initials: 'NT'
                })}
              >
                <PlusCircle className="h-4 w-4" /> Add Testimonial
              </Button>
            </div>
          </TabsContent>

          {/* Companies Tab */}
          <TabsContent value="companies" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Companies Section</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between pb-4 mb-4 border-b">
                  <div>
                    <h3 className="font-medium">Section Visibility</h3>
                    <p className="text-sm text-gray-500">
                      {content.sectionsVisibility?.companies ? 'Currently visible' : 'Currently hidden'}
                    </p>
                  </div>
                  <Switch 
                    checked={content.sectionsVisibility?.companies || false} 
                    onCheckedChange={(checked) => updateSectionVisibility('companies', checked)}
                  />
                </div>
              </CardContent>
            </Card>
            
            {/* Companies items */}
            <div className="space-y-4">
              {content.companies.map((company, index) => (
                <Card key={index} className="relative">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-2 right-2 text-red-500 hover:bg-red-500/10 hover:text-red-600"
                    onClick={() => removeArrayItem<CompanyItem>('companies', index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  
                  <CardHeader>
                    <CardTitle>Company #{index + 1}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name</label>
                      <Input
                        value={company.name}
                        onChange={(e) => updateArrayItem<CompanyItem>('companies', index, 'name', e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Class</label>
                      <Input
                        value={company.class}
                        onChange={(e) => updateArrayItem<CompanyItem>('companies', index, 'class', e.target.value)}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Button
                className="w-full flex items-center justify-center gap-2"
                variant="outline"
                onClick={() => addArrayItem<CompanyItem>('companies', {
                  name: 'New Company',
                  class: 'text-xl md:text-2xl'
                })}
              >
                <PlusCircle className="h-4 w-4" /> Add Company
              </Button>
            </div>
          </TabsContent>

          {/* FAQs Tab */}
          <TabsContent value="faqs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>FAQs Section</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between pb-4 mb-4 border-b">
                  <div>
                    <h3 className="font-medium">Section Visibility</h3>
                    <p className="text-sm text-gray-500">
                      {content.sectionsVisibility?.faqs ? 'Currently visible' : 'Currently hidden'}
                    </p>
                  </div>
                  <Switch 
                    checked={content.sectionsVisibility?.faqs || false} 
                    onCheckedChange={(checked) => updateSectionVisibility('faqs', checked)}
                  />
                </div>
              </CardContent>
            </Card>
            
            {/* FAQs items */}
            <div className="space-y-4">
              {content.faqs.map((faq, index) => (
                <Card key={index} className="relative">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-2 right-2 text-red-500 hover:bg-red-500/10 hover:text-red-600"
                    onClick={() => removeArrayItem<FAQItem>('faqs', index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  
                  <CardHeader>
                    <CardTitle>FAQ #{index + 1}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Question</label>
                      <Input
                        value={faq.question}
                        onChange={(e) => updateArrayItem<FAQItem>('faqs', index, 'question', e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Answer</label>
                      <Textarea
                        value={faq.answer}
                        onChange={(e) => updateArrayItem<FAQItem>('faqs', index, 'answer', e.target.value)}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Button
                className="w-full flex items-center justify-center gap-2"
                variant="outline"
                onClick={() => addArrayItem<FAQItem>('faqs', {
                  question: 'New Question',
                  answer: 'Answer to the new question.'
                })}
              >
                <PlusCircle className="h-4 w-4" /> Add FAQ
              </Button>
            </div>
          </TabsContent>

          {/* Contact CTA Tab */}
          <TabsContent value="contact" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact CTA Section</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between pb-4 mb-4 border-b">
                  <div>
                    <h3 className="font-medium">Section Visibility</h3>
                    <p className="text-sm text-gray-500">
                      {content.sectionsVisibility?.contact ? 'Currently visible' : 'Currently hidden'}
                    </p>
                  </div>
                  <Switch 
                    checked={content.sectionsVisibility?.contact || false} 
                    onCheckedChange={(checked) => updateSectionVisibility('contact', checked)}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">CTA Title</label>
                  <Input
                    value={content.contactCTA.title}
                    onChange={(e) => {
                      updateSection('contactCTA', { ...content.contactCTA, title: e.target.value });
                      toast({
                        title: "Change saved",
                        description: "Updated CTA title",
                      });
                    }}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Button Text</label>
                    <Input
                      value={content.contactCTA.buttonText}
                      onChange={(e) => {
                        updateSection('contactCTA', { ...content.contactCTA, buttonText: e.target.value });
                        toast({
                          title: "Change saved",
                          description: "Updated button text",
                        });
                      }}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Button Link</label>
                    <Input
                      value={content.contactCTA.buttonLink}
                      onChange={(e) => {
                        updateSection('contactCTA', { ...content.contactCTA, buttonLink: e.target.value });
                        toast({
                          title: "Change saved",
                          description: "Updated button link",
                        });
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
}
