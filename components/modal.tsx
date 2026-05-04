"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Image, { StaticImageData } from "next/image";

interface ProjectData {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: StaticImageData;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectData | null;
}

export default function Modal({ isOpen, onClose, project }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen || !project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-48 mb-5 rounded-xl overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            quality={90}
          />
        </div>

        <h2 className="text-xl font-bold mb-3 dark:text-white">{project.title}</h2>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag, index) => (
            <li
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>

        <button
          onClick={onClose}
          className="mt-2 bg-gray-900 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition text-sm dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}
