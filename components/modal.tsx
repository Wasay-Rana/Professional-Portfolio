import { motion } from "framer-motion";
import { useEffect } from "react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string; // Add imageUrl property
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectProps | null;
}

export default function Modal({ isOpen, onClose, project }: ModalProps) {
  // Close modal on 'Esc' key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!isOpen || !project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-2xl shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <img src={project.imageUrl} alt={project.title} className="mb-4" /> {/* Render the image */}
        <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
        <ul className="flex flex-wrap mt-4 gap-2">
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
          className="mt-6 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}