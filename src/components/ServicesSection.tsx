
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Search, Database, Zap, Code, Beaker } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Growth Marketing Consultation",
      description: "Strategic guidance to accelerate your business growth and maximize marketing ROI.",
      icon: <TrendingUp className="h-10 w-10 text-blue-500" />
    },
    {
      title: "CRO & Landing Page Audit",
      description: "In-depth analysis of your conversion funnels to identify and fix conversion bottlenecks.",
      icon: <Search className="h-10 w-10 text-blue-500" />
    },
    {
      title: "Marketing Automation",
      description: "Create and build powerful marketing and business automation systems that save time and increase efficiency.",
      icon: <Zap className="h-10 w-10 text-blue-500" />
    },
    {
      title: "Data Enrichment Services",
      description: "Enhance your customer data to improve targeting and personalization capabilities.",
      icon: <Database className="h-10 w-10 text-blue-500" />
    },
    {
      title: "Experimentation Methods",
      description: "Implement proven experimentation frameworks to continuously optimize your conversion rates.",
      icon: <Beaker className="h-10 w-10 text-blue-500" />
    },
    {
      title: "Tool Implementation",
      description: "Expert setup and integration of marketing and analytics tools to power your growth stack.",
      icon: <Code className="h-10 w-10 text-blue-500" />
    }
  ];

  const frameworkSteps = [
    {
      number: "01",
      title: "Research",
      description: "Identify growth opportunities and conversion optimization potential."
    },
    {
      number: "02",
      title: "Experimentation",
      description: "Implement UX research, psychology-based design, and A/B testing."
    },
    {
      number: "03",
      title: "Implementation",
      description: "Execute data-driven changes to increase conversions and revenue."
    },
    {
      number: "04",
      title: "Learning and Iteration",
      description: "Growth is an ongoing process. We continuously analyze and optimize for growth."
    }
  ];

  return (
    <>
      <section id="services" className="py-20 bg-black/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="font-normal text-3xl md:text-4xl mb-4">My Services</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive growth marketing solutions designed to optimize your conversion funnel and drive sustainable business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-secondary/50 border-white/5 overflow-hidden animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="font-normal">{service.title}</CardTitle>
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
            <h2 className="font-normal text-3xl md:text-4xl mb-4">Our Growth Framework</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Structured approach to boosting your conversions and revenue
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {frameworkSteps.map((step, index) => (
              <Card key={index} className="bg-secondary/50 border-white/5 overflow-hidden animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <span className="text-5xl font-bold text-blue-500/50">{step.number}</span>
                  <CardTitle className="font-normal mt-2">{step.title}</CardTitle>
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
