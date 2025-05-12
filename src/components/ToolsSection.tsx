
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ToolsSection = () => {
  const tools = [
    {
      name: "Figma",
      description: "Anything for design.",
      id: "800"
    },
    {
      name: "Zapier",
      description: "Automate it all.",
      id: "547"
    },
    {
      name: "Todoist",
      description: "Organize your work and life, finally.",
      id: "550"
    },
    {
      name: "Make",
      description: "From tasks and workflows to apps and systems, build and automate anything in one powerful visual platform.",
      id: "553"
    },
    {
      name: "Snipd",
      description: "Best podcast app.",
      id: "556"
    }
  ];

  const templates = [
    {
      name: "Developers Marketing Ultimate Guide",
      description: "Best practice [Free Template]",
      id: "559"
    },
    {
      name: "Experiments B2B roadmap",
      description: "Get the roadmap now",
      id: "562"
    },
    {
      name: "Schedule a 45 strategy session",
      description: "Strategy Session",
      id: "565"
    }
  ];

  return (
    <section id="tools" className="py-20 bg-black/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-gloock text-3xl md:text-4xl mb-4">Tools and Templates</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Free resources to help you grow. Affiliate links are included. No additional cost to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-gloock text-2xl mb-6 text-center md:text-left">Recommended Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <Card key={index} className="bg-secondary/50 border-white/5 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="pb-2">
                    <CardTitle className="font-medium">{tool.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      {tool.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-gloock text-2xl mb-6 text-center md:text-left">Free Templates</h3>
            <div className="grid grid-cols-1 gap-4">
              {templates.map((template, index) => (
                <Card key={index} className="bg-secondary/50 border-white/5 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="pb-2">
                    <CardTitle className="font-medium">{template.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      {template.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
