
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Search, Database, Zap, Code, Beaker } from "lucide-react";
import { useWebsiteContent } from "@/hooks/useWebsiteContent";

const ServicesSection = () => {
  const { content, isLoaded } = useWebsiteContent();
  
  if (!isLoaded) return null;
  
  // Icon mapping
  const iconMap: Record<string, JSX.Element> = {
    'trending-up': <TrendingUp className="h-10 w-10 text-blue-500" />,
    'search': <Search className="h-10 w-10 text-blue-500" />,
    'database': <Database className="h-10 w-10 text-blue-500" />,
    'zap': <Zap className="h-10 w-10 text-blue-500" />,
    'code': <Code className="h-10 w-10 text-blue-500" />,
    'beaker': <Beaker className="h-10 w-10 text-blue-500" />
  };
  
  return (
    <>
      <section id="services" className="py-20 bg-black/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="font-gloock text-5xl md:text-6xl mb-4">My Services</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive growth marketing solutions designed to optimize your conversion funnel and drive sustainable business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-secondary/50 border-white/5 overflow-hidden animate-fade-up" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mb-4">{iconMap[service.icon] || <TrendingUp className="h-10 w-10 text-blue-500" />}</div>
                  <CardTitle className="font-light">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="framework" className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="font-gloock text-5xl md:text-6xl mb-4">Our Growth Framework</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Structured approach to boosting your conversions and revenue
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.frameworkSteps.map((step, index) => (
              <Card 
                key={index} 
                className="bg-secondary/50 border-white/5 overflow-hidden animate-fade-up" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="font-light">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-base">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
