import React, { useState } from "react";
import { GlitchText } from "../components/GlitchText";
import { TimelineItem } from "../components/TimelineItem";
import { CyberpunkModal } from "../components/CyberpunkModal";
import { cvData, Experience } from "../data/cvData";
export function ExperiencePage() {
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (experience: Experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedExperience(null), 300);
  };
  return (
    <main className="min-h-screen w-full px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-neon-green font-mono">$ </span>
            <GlitchText as="span" className="text-neon-cyan">
              git log --experience
            </GlitchText>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-neon-cyan to-neon-magenta" />
        </div>

        <div className="space-y-0">
          {cvData.experience.map((exp, index) => (
            <TimelineItem
              key={`${exp.company}-${exp.subcompany}-${exp.role}`}
              company={exp.company}
              subcompany={exp.subcompany}
              role={exp.role}
              period={exp.period}
              description={exp.description}
              tech={exp.tech}
              isLast={index === cvData.experience.length - 1}
              onClick={() => openModal(exp)}
            />
          ))}
        </div>

        <div className="mt-12 border border-neon-green/30 bg-dark-secondary p-6">
          <h2 className="text-2xl font-bold text-neon-green font-mono mb-4">
            <span className="text-neon-cyan">&gt;</span> Career Highlights
          </h2>
          <ul className="space-y-3" role="list">
            <li className="flex items-start text-text-muted">
              <span
                className="text-neon-green mr-3 flex-shrink-0"
                aria-hidden="true"
              >
                ✓
              </span>
              <span>
                Analyzed datasets with 100K+ records to extract insights and
                support business decisions
              </span>
            </li>
            <li className="flex items-start text-text-muted">
              <span
                className="text-neon-green mr-3 flex-shrink-0"
                aria-hidden="true"
              >
                ✓
              </span>
              <span>
                Created interactive dashboards and reports using Excel, SQL, and
                BI tools
              </span>
            </li>
            <li className="flex items-start text-text-muted">
              <span
                className="text-neon-green mr-3 flex-shrink-0"
                aria-hidden="true"
              >
                ✓
              </span>
              <span>
                Improved data accuracy and reduced reporting errors by
                automating basic data-cleaning processes
              </span>
            </li>
            <li className="flex items-start text-text-muted">
              <span
                className="text-neon-green mr-3 flex-shrink-0"
                aria-hidden="true"
              >
                ✓
              </span>
              <span>
                Collaborated with senior analysts and stakeholders to translate
                business questions into data analysis
              </span>
            </li>
            <li className="flex items-start text-text-muted">
              <span
                className="text-neon-green mr-3 flex-shrink-0"
                aria-hidden="true"
              >
                ✓
              </span>
              <span>
                Worked with structured data to track KPIs, trends, and
                performance metrics
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Experience Modal */}
      <CyberpunkModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={
          selectedExperience
            ? `${selectedExperience.role} @ ${selectedExperience.company} @ ${selectedExperience.subcompany} `
            : ""
        }
      >
        {selectedExperience && (
          <div className="space-y-6">
            {/* Period */}
            <div className="flex items-center gap-2 text-text-muted font-mono">
              <span className="text-neon-green">📅</span>
              <span>{selectedExperience.period}</span>
            </div>

            {/* Company & Role */}
            <div>
              <h3 className="text-2xl font-bold text-neon-cyan font-mono mb-2">
                {selectedExperience.role}
              </h3>
              <p className="text-xl text-neon-green font-mono">
                {selectedExperience.company}
              </p>
              <p className="text-0.5xl text-text-muted font-mono">
                {selectedExperience.subcompany}
              </p>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-bold text-neon-green font-mono mb-3 flex items-center gap-2">
                <span className="text-neon-cyan">&gt;</span> Responsibilities
              </h3>
              <ul className="space-y-3" role="list">
                {selectedExperience.description.map((item, index) => (
                  <li
                    key={index}
                    className="text-text-muted flex items-start leading-relaxed"
                  >
                    <span
                      className="text-neon-green mr-3 flex-shrink-0 mt-1"
                      aria-hidden="true"
                    >
                      ▹
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-lg font-bold text-neon-green font-mono mb-3 flex items-center gap-2">
                <span className="text-neon-cyan">&gt;</span> Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedExperience.tech.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-2 text-sm font-mono bg-dark-primary border border-neon-cyan/30 text-neon-cyan"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </CyberpunkModal>
    </main>
  );
}
