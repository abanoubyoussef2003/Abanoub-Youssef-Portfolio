import React, { useMemo } from "react";
import { GlitchText } from "../components/GlitchText";
import { cvData } from "../data/cvData";

interface ServiceDefinition {
  id: string;
  title: string;
  summary: string;
  detail: string;
  keywords: string[];
}

interface ServiceViewModel extends ServiceDefinition {
  relatedSkills: string[];
  relatedProjects: string[];
}

const serviceDefinitions: ServiceDefinition[] = [
  {
    id: "Data_Cleaning-Data_Wrangling",
    title: "Data Cleaning & Data Wrangling",
    summary: "Clean and Manipulate Data ",
    detail:
      "Turning messy, complex datasets into structured, reliable information. Every detail is checked, so your analysis starts on solid ground.",
    keywords: ["MySQL", "Python", "Excel", "R"],
  },
  {
    id: "Insights-Business_Analysis",
    title: "Insights & Business Analysis",
    summary: "Helping businesses make decisions with confidence",
    detail:
      "Digging into trends, patterns, and hidden opportunities to reveal what the data is really saying. Helping businesses make decisions with confidence, not guesswork.",
    keywords: ["Excel", "Power BI", "Google Looker Studio"],
  },
  {
    id: "Data-Modeling_Forecasting",
    title: "Data Modeling & Forecasting",
    summary:
      "The Process of Structuring,Organizing,and defining relationships between data elements",
    detail:
      "Building models that uncover relationships, predict outcomes, and support smarter strategies. Complexity excites me — it's where meaningful patterns emerge.",
    keywords: ["MySQL", "Power BI"],
  },
  {
    id: "Dashboards-Visualization",
    title: "Dashboards & Visualization",
    summary: "Creating interactive dashboards",
    detail:
      "Creating interactive dashboards in Power BI, Excel, and Cognos that tell the story behind the numbers. Designed for clarity, action, and impact.",
    keywords: ["Power BI", "Tableau", "Google Looker Studio"],
  },
];

export function ServicesPage() {
  const services: ServiceViewModel[] = useMemo(() => {
    const allSkills = cvData.skills.flatMap((category) => category.items);
    const allProjects = cvData.projects;
    return serviceDefinitions.map((service) => {
      const relatedSkills = allSkills
        .filter((skill) => service.keywords.includes(skill.name))
        .map((skill) => skill.name);
      const relatedProjects = allProjects
        .filter((project) =>
          project.tech.some((tech) => service.keywords.includes(tech))
        )
        .map((project) => project.name);
      return {
        ...service,
        relatedSkills: Array.from(new Set(relatedSkills)),
        relatedProjects: Array.from(new Set(relatedProjects)),
      };
    });
  }, []);

  return (
    <main className="min-h-screen w-full px-4 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-neon-green font-mono">$ </span>
            <GlitchText as="span" className="text-neon-cyan">
              ls -la services/
            </GlitchText>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-neon-cyan to-neon-magenta mb-4" />
          <p className="text-text-muted font-mono max-w-2xl">
            Services I provide as a Data Analyst, Cleaning Data,Analysis,Create
            interactive Dashboards and skills in Excel, SQL,Power BI or
            Tableau,and Python or R.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="border border-neon-cyan/30 bg-dark-secondary p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold text-neon-green font-mono mb-2">
                  <span className="text-neon-cyan">&gt;</span> {service.title}
                </h2>
                <p className="text-text-primary font-mono text-sm mb-2">
                  {service.summary}
                </p>
                <p className="text-text-muted text-sm mb-4 leading-relaxed">
                  {service.detail}
                </p>

                {service.relatedSkills.length > 0 && (
                  <div className="mb-4">
                    <h3 className="text-sm font-mono text-neon-green mb-2">
                      stack_used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.relatedSkills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-mono bg-dark-primary border border-neon-cyan/30 text-neon-cyan"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* {service.relatedProjects.length > 0 && (
                  <div>
                    <h3 className="text-sm font-mono text-neon-green mb-2">
                      related_projects
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.relatedProjects.map((project) => (
                        <span
                          key={project}
                          className="px-3 py-1 text-xs font-mono bg-dark-primary border border-neon-magenta/30 text-neon-magenta"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
