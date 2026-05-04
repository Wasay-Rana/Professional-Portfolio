import React from "react";
import { BsBoxes } from "react-icons/bs";
import { LuGraduationCap } from "react-icons/lu";
import { FaServer, FaCode, FaMicrochip, FaBriefcase } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import statPhunMed from "@/public/stat_phunmed.png";
import cnProject from "@/public/CN.png";
import aoaProject from "@/public/aoa.png";
import riscvProject from "@/public/riscv-final.png";

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
    title: "Platform Architect",
    location: "Phunware (NASDAQ: PHUN) · Remote",
    description:
      "Migrating legacy systems into Java 25 and Spring AI, while building production-scale AI infrastructure. Implementing LLM evaluation and observability pipelines using DeepEval to monitor faithfulness, hallucinations, latency, and cost, with end-to-end tracing across prompts, tools, agents, and responses.",
    icon: React.createElement(MdEngineering),
    date: "Sep 2025 – Present",
  },
  {
    title: "AI Team Lead",
    location: "Phunware (NASDAQ: PHUN) · Remote",
    description:
      "Launched PhunMed, AI healthcare concierge for triage, reminders, and appointment scheduling. Integrated LiveKit for real-time patient-staff voice communication. Scaled the platform to 50,000+ active users.",
    icon: React.createElement(FaBriefcase),
    date: "May 2025 – Sep 2025",
  },
  {
    title: "Lead HPC & Cloud Engineer",
    location: "Pakistan Supercomputing · Islamabad",
    description:
      "Designed and built a 1.2 petaflop GPU-based HPC system for AI and big data research. Optimized inference for LLaMA-70B on-prem. Led two HPC research papers published in IEEE Xplore and ICEPECC.",
    icon: React.createElement(FaServer),
    date: "Oct 2022 – May 2025",
  },
  {
    title: "Associate Software Engineer",
    location: "EZ MD Medical · Remote",
    description:
      "Developed web and mobile portals for healthcare workflows. Built CI/CD pipelines and managed AWS deployments for a production medical platform.",
    icon: React.createElement(FaCode),
    date: "Jun 2024 – Jun 2025",
  },
  {
    title: "Software Engineering Trainee",
    location: "DreamBig Semiconductor Inc. · Karachi",
    description:
      "Worked on RDMA and Smart NIC optimization, including kernel and network driver development for high-performance data center hardware at a multi-million dollar international semiconductor startup.",
    icon: React.createElement(FaMicrochip),
    date: "Jul 2024 – Sep 2024",
  },
  {
    title: "Research Assistant & ML Engineer",
    location: "Namal University · Mianwali",
    description:
      "Competed in Kaggle competitions, led ML research projects, and co-published IEEE research on heterogeneous RISC-V cluster design. Won First Prize at National Tech Expo and Top HPC Cluster award at NamalTechExpo.",
    icon: React.createElement(BsBoxes),
    date: "2021 – 2025",
  },
  {
    title: "B.S. Computer Science",
    location: "Namal University · Punjab, Pakistan",
    description:
      "CGPA 3.51/4.00. Specialized in Data Structures, Algorithms, Parallel & Distributed Computing, Computer Vision, and Machine Learning. Awarded Best Final Year Project & Best Poster at Namal OpenHouse 2025.",
    icon: React.createElement(LuGraduationCap),
    date: "2025",
  },
] as const;

export const projectsData = [
  {
    title: "PhunMed / Lumi : AI Healthcare Voice Assistant",
    shortDescription:
      "Production AI concierge for triage, scheduling, and real-time voice communication — 50,000+ active users.",
    description:
      "PhunMed is a production AI healthcare assistant built for Phunware. It handles patient triage, medication reminders, and appointment scheduling via natural language. Integrated LiveKit for real-time voice communication between patients and staff. Built with LangChain orchestration, Claude as the AI backbone, and deployed on AWS EKS. Scaled to over 50,000 active users with high reliability SLAs.",
    tags: ["LiveKit", "LangChain", "Claude", "AWS EKS", "FastAPI", "React"],
    imageUrl: statPhunMed,
  },
  {
    title: "EdgeGuard : Real-Time Agentic Surveillance",
    shortDescription:
      "Plug-and-play AI surveillance on NVIDIA Orin edge devices — Best FYP at Namal OpenHouse 2025.",
    description:
      "EdgeGuard is an agentic surveillance framework designed for NVIDIA Jetson Orin edge hardware. It performs real-time event detection using quantized vision models and dispatches alerts through an autonomous decision layer. The system runs entirely on-device with no cloud dependency, achieving low-latency inference via CUDA and TensorRT optimizations. Won Best Final Year Project and Best Poster at Namal OpenHouse 2025.",
    tags: ["NVIDIA Orin", "CUDA", "C++", "Python", "TensorRT", "Agentic AI"],
    imageUrl: riscvProject,
  },
  {
    title: "RISC-V HPC Cluster : IEEE Published Research",
    shortDescription:
      "5-node heterogeneous cluster achieving 50% performance gain; First Prize at National Tech Expo.",
    description:
      "A low-cost heterogeneous HPC cluster combining Intel NUC and SiFive RISC-V SBCs, running OpenMPI for distributed workloads. Achieved 63% speedup in matrix operations and 5.6× faster convergence with distributed logistic regression. Deployed quantized LLMs (LLaMA variants) on resource-constrained nodes. Research published in IEEE Xplore (2024) and presented at ICEPECC (2025). Won First Prize at National Tech Expo.",
    tags: ["RISC-V", "OpenMPI", "C++", "Python", "QEMU", "IEEE"],
    imageUrl: cnProject,
  },
  {
    title: "Graph-RAG Agent : Production Knowledge Pipeline",
    shortDescription:
      "67-file RAG system with BM25 + vector + graph fusion, query rewriting, and streaming responses.",
    description:
      "A production-grade retrieval-augmented generation system using LightRAG for graph-aware knowledge traversal. Combines BM25 sparse retrieval, dense vector search via Pinecone, and graph-based entity linking for maximum retrieval accuracy. Features query rewriting, context fusion, and streaming responses via FastAPI. The system handles 67-file knowledge bases with sub-second query latency.",
    tags: ["LightRAG", "Pinecone", "FastAPI", "Claude", "BM25", "Python"],
    imageUrl: aoaProject,
  },
] as const;

export const skillsData = [
  "Python",
  "C++",
  "CUDA",
  "Java",
  "TypeScript",
  "LangChain",
  "PyTorch",
  "TensorFlow",
  "Scikit-learn",
  "Hugging Face",
  "Claude API",
  "RAG / Graph-RAG",
  "Multi-Agent Systems",
  "Docker",
  "Kubernetes",
  "AWS",
  "FastAPI",
  "Next.js",
  "LiveKit",
  "MPI / OpenMP",
  "Slurm",
  "Grafana",
  "Prometheus",
  "Pinecone",
  "Linux",
  "MySQL",
  "Git",
  "OpenCV",
] as const;
