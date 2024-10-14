import { motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image"; // Import Image from Next.js for optimization

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
        className="bg-white dark:bg-gray-800 rounded-lg p-6 md:p-8 max-w-full md:max-w-2xl w-full mx-4 md:mx-0 shadow-lg relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white transition"
        >
          &times;
        </button>
        {/* Project Title */}
        <h2 className="text-xl md:text-2xl font-bold mb-4">{project.title}</h2>
        
        {/* Project Detailed Description */}
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4">
          {project.detailedDescription}
        </p>

        {/* Technologies Used */}
        <div className="mb-4">
          <h3 className="font-semibold text-sm md:text-base">Technologies:</h3>
          <ul className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.6rem] md:text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Image of the Project */}
        <div className="flex justify-center mb-4">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={500}
            height={300}
            objectFit="contain"
            className="w-full h-auto md:w-[500px] md:h-[300px] rounded-lg shadow-md"
          />
        </div>

        {/* Section for PDF Overview */}
        <div className="mb-4">
          <h3 className="font-semibold text-sm md:text-base">Project Overview (PDF):</h3>
          <a
            href={`/pdfs/${project.title}.pdf`} // Assuming you store PDFs in /public/pdfs folder
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View Full PDF Overview
          </a>
        </div>

        {/* Download Button for PDF */}
        <div className="mb-6">
          <a
            href={`/projectPDF/${project.title}.pdf`} // Adjust path as needed
            download
            className="mt-2 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
          >
            Download PDF
          </a>
        </div>

        {/* Close Modal Button */}
        <button
          onClick={onClose}
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition w-full md:w-auto"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}
