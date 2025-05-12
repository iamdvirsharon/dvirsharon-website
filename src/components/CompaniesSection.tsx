
import React from "react";

const CompaniesSection = () => {
  const companies = [
    { name: "hipages", class: "text-xl md:text-2xl" },
    { name: "Overwolf", class: "text-xl md:text-2xl" },
    { name: "FairArt", class: "text-xl md:text-2xl" },
    { name: "Futura Tech Labs", class: "text-xl md:text-2xl" },
    { name: "Sundevs", class: "text-xl md:text-2xl" },
  ];

  return (
    <section className="py-16 bg-black/40">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {companies.map((company, index) => (
            <div 
              key={index} 
              className={`font-gloock text-white opacity-70 hover:opacity-100 transition-opacity ${company.class}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {company.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
