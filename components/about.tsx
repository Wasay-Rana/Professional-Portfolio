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
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Ever since I can remember, I've been hooked on two things: Predictive Modeling and Ethical Hacking. So, while I was busy securing my degree in{" "}
        <span className="font-medium">Computer Science</span>, I thought, why not dive into the world of Machine Learning? It's like the Swiss Army knife of tech - super versatile. My journey kicked off with Andrew Ng's Specialization, where I got cozy with{" "}
        <span className="font-medium">all the import stuff related to Pre-Processing, ML and DL modeling</span>.
        You know what I love most about coding? Solving problems. There's this rush you get when you finally crack the code, and it's addicting! I mean, who doesn't dig that feeling?
        As for my go-to tools, you'll usually find me hanging out with{" "}
        <span className="font-medium">
          Python, Scikit-Learn, OpenCV, and Tensorflow
        </span>
        , like a tech-savvy (Which I really am). And let's not forget about my pytorch skills and GAN adventures - they're like the secret sauce in my tech recipe.
        But apart from this, I'm not one to sit still. Nope, I'm always up for learning something new (hence my ever-growing list of interests). Right now, I'm on the lookout for a{" "}
        <span className="font-medium">remote ML Engineer gig</span>.
      </p>

      <p>
        <span className="italic">When I'm not in code mode,</span> you'll find me kicking back with a game of chess, wandering in the Open-World video games, or maybe even messing with my home network. Because who needs downtime when you can have uptime, right?
      </p>
    </motion.section>
  );
}
