"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I'm a <span className="font-medium">Platform Architect and AI/ML Engineer</span> at{" "}
        <span className="font-medium">Phunware (NASDAQ: PHUN)</span>, where I design and ship
        production AI infrastructure from LLM evaluation pipelines and observability stacks
        to voice AI systems and multi-agent orchestration. I've scaled a healthcare AI product
        to over <span className="font-medium">50,000 active users</span> and built HPC systems
        with a theoretical throughput exceeding <span className="font-medium">1.2 petaflops</span>.
      </p>
      <p className="mb-3">
        My research on heterogeneous RISC-V cluster design was published in{" "}
        <span className="font-medium">IEEE Xplore</span>, and my work on distributed LLM
        inference earned <span className="font-medium">First Prize at the National Tech Expo</span>.
        I hold a B.S. in Computer Science from Namal University (CGPA 3.51) and multiple
        certifications including AWS Cloud Practitioner and Machine Learning Specialization
        from DeepLearning.AI.
      </p>
      <p>
        Outside of engineering, I stay sharp over a chessboard, explore open-world games,
        and tune home network infrastructure because optimizing uptime is a mindset, not just a job.
      </p>
    </motion.section>
  );
}
