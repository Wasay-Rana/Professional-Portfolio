import React from "react";
import { BsBoxes } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cnProject from "@/public/CN.png";
import aoaProject from "@/public/aoa.png";
import riscvProject from "@/public/riscv-final.png";
import golProject from "@/public/gameoflife.png";
import { FaLaptopCode } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Student",
    location: "Karachi, Pakistan",
    description:
    "After graduating from college, I enthusiastically joined several Model United Nations events. Intrigued by networking and coding, I dove into learning programming languages and actively participated in numerous hackathons.",
    icon: React.createElement(FaReact ),
    date: "2019-2021",
  },
  {
    title: "Research Assistant and ML Engineer",
    location: "Mianwali, Pakistan",
    description:
      "I took Andrew Ng's courses as a headstart and started participating on Kaggle competitions after a while. I also started working as a Research Assistant in Namal University, where I worked on several projects.",
    icon: React.createElement(BsBoxes),
    date: "2021 - 2023",
  },
  {
    title: "Graduated from Namal University",
    location: "Punjab, Pakistan",
    description:
    "I'm currently enrolled at Namal University, where I maintain a solid CGPA of in Computer Science. My current research focuses on embedded SuperComputing and the seamless integration of Machine Learning methodologies for elements finding and prediction in Natural Sciences.",
    icon: React.createElement(LuGraduationCap),
    date: "present-2025",
  },
  {
    title: "Intern in a Software Department",
    location: "DreamBig Semiconductor Inc. Karachi, Pakistan",
    description:
    "I am interning in Software Department of DreamBig, A multi-million dollar international startup, and it has given me a niche to work and follow on for future.",
    icon: React.createElement(FaLaptopCode),
    date: "July 2024 - September 2024",
  },
] as const;

export const projectsData = [
  {
    title: "BlueWhale - A Network Anomaly Detection System",
    shortDescription:
      "Multi-Modal ADS with 94% F1 score using UNSW-NB15 and CICIDS2018 datasets.",
    detailedDescription:
      "BlueWhale is a sophisticated Network Anomaly Detection System utilizing multi-modal machine learning models. Using the UNSW-NB15 and CICIDS2018 datasets, the system achieved an F1 score of 94%. The project employs Pandas for data manipulation, PyTorch for deep learning, and Scikit-Learn for model evaluation. Visualizations were crafted with Matplotlib and Seaborn for insights into data trends.",
    tags: ["Pandas", "Pytorch", "Scikit-Learn", "Colab", "Matplotlib", "Seaborn"],
    imageUrl: cnProject,
  },
  {
    title: "Heterogeneous Cluster with RISC-V for Federated Learning and SIEM",
    shortDescription:
      "Distributed learning on medical data and SIEM using Intel NUC and RISC-V based clusters.",
    detailedDescription:
      "This project sets up a heterogeneous computing cluster comprising Intel NUC and RISC-V based systems for federated learning on medical data and a Security Information and Event Management (SIEM) solution. The project utilizes MPI for efficient parallel computing across nodes and aims to enhance the scalability and security of medical data analytics. ",
    tags: ["MPI", "RISC-V", "SIEM"],
    imageUrl: riscvProject,
  },
  {
    title: "JPEG - A Lossy Image Compression Algorithm",
    shortDescription:
      "Custom JPEG compression algorithm with adjustable compression levels.",
    detailedDescription:
      "This project involves the implementation of a JPEG compression algorithm from scratch as a part of a semester project. The algorithm provides adjustable compression levels and ensures enhanced image sizing while minimizing data loss. OpenCV was used for image processing, and Python’s DSA structures aided in optimizing performance.",
    tags: ["OpenCV", "DSA", "Python"],
    imageUrl: aoaProject,
  },
  {
    title: "Conway's Game of Life Simulation with Custom Buttons",
    shortDescription:
      "Simulates Conway's Game of Life using raylib with OOP principles.",
    detailedDescription:
      "This project implements Conway's Game of Life using the raylib library. The system simulates cellular automata with custom button controls. Written in C++ with Object-Oriented Programming (OOP) principles, the simulation offers a real-time display of the evolution of cells, showcasing intricate designs and patterns that emerge over time.",
    tags: ["C++", "raylib", "OOP", "Simulation"],
    imageUrl: golProject,
  },
] as const;

export const skillsData = [
  "Python",
  "C++",
  "R Language",
  "TensorFlow",
  "PyTorch",
  "Scikit-learn",
  "Pandas",
  "Matplotlib",
  "Git",
  "Numpy",
  "MPI",
  "Cuda",
  "OpenCV",
  "Covolutional Neural Networks",
  "Linux",
  "Large Language Models",
  "Artifical Neural Networks",
  "MySQL",
] as const;
