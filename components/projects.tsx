"use client";
import { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import Modal from "./modal";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (project: ProjectProps) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <div key={index} onClick={() => handleCardClick(project)}>
            <Project {...project} />
          </div>
        ))}
      </div>

      {/* Modal for detailed project view */}
      <Modal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
    </section>
  );
}
