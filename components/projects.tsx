"use client";

import { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import Modal from "./modal";
import { useSectionInView } from "@/lib/hooks";
import { StaticImageData } from "next/image";

interface ProjectData {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: StaticImageData;
}

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (project: (typeof projectsData)[number]) => {
    setSelectedProject({
      title: project.title,
      description: project.description,
      tags: project.tags,
      imageUrl: project.imageUrl,
    });
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
          <div key={index} onClick={() => handleCardClick(project)} className="cursor-pointer">
            <Project {...project} />
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
    </section>
  );
}
