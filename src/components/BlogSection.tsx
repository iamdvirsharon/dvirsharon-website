
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BlogSection = () => {
  const articles = [
    {
      title: "What Is Growth Marketing (CRO) And How Will It Increase Your Income?",
      excerpt: "CRO is a continuous loop of testing, analysis, and optimization. Making data-driven changes over time can improve conversion rates.",
      readTime: "3 min read",
      link: "#"
    },
    {
      title: "How to Choose the Best CRO/Experimentation consultant?",
      excerpt: "Here are some tips to help you choose the best CRO/experimentation consultant for your business.",
      readTime: "2 min read",
      link: "#"
    },
    {
      title: "The Psychology Behind High-Converting Landing Pages",
      excerpt: "Conversion rate optimization (CRO) is key to success in digital marketing. CRO is rooted in understanding human psychology.",
      readTime: "3 min read",
      link: "#"
    }
  ];

  return (
    <section id="blog" className="py-20">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-gloock text-3xl md:text-4xl mb-4">Our Academy</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Latest insights and strategies to help you grow your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Card key={index} className="bg-secondary/50 border-white/5 flex flex-col animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="text-xs text-gray-400 mb-2">{article.readTime}</div>
                <CardTitle className="font-gloock">{article.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-gray-300 text-base">
                  {article.excerpt}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <a href={article.link} className="text-amber-500 hover:text-amber-400 flex items-center text-sm">
                  Read full article <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Button variant="outline" className="border-white/20 hover:bg-white/5">
            Discover more in our blog
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
