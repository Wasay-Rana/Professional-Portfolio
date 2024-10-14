"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

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
        Ever since I can remember, my passion has been split between Predictive Modeling and Ethical Hacking. With a degree in <span className="font-medium">Computer Science</span>, I've seamlessly integrated High-Performance Computing (HPC) and Machine Learning into my journey. From mastering essential techniques like <span className="font-medium">Pre-Processing and various ML algorithms</span> to exploring multi-modeling strategies, I thrive on solving intricate challenges with precision and creativity.

        My recent project revolves around pioneering HPC project boasting a theoretical performance of 1.5 petaflops. I have maped the whole HPC stack on edge too, culminated in notable achievements, including securing the First Prize for Best Final Year Project at Bahria University and claiming top honors at NamalTechExpo2024 for my work on a Heterogeneous Cluster leveraging RISC-V. This innovative setup integrates Federated Learning and SIEM solutions to simulate and combat cyber threats effectively.

        Currently seeking new opportunities in a <span className="font-medium">remote</span> capacity, I'm driven by a relentless pursuit of pushing technological boundaries and delivering impactful solutions.
      </p>

      <p>
         When I'm not immersed in technology, you'll find me strategizing over a chessboard, exploring immersive open-world video games (especially Genshin Impact), or fine-tuning my home network – because optimizing uptime is as crucial as solving the next big challenge.
      </p>
    </motion.section>
  );
}
