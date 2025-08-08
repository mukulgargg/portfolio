"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Supabase with Apisix Support ",
    description: "This project adds support for Apisix gateway to supabase along with apisix dashboard.",
    image: "/images/supabase.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mukulgargg/supabase_with_apisix",
    previewUrl: "https://github.com/mukulgargg/supabase_with_apisix",
  },
  {
    id: 2,
    title: "Multi RDB",
    description: "A Spring boot application boilerplate to setup multiple RDBMS",
    image: "/images/multi_rdb.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mukulgargg/multi-rdb-setup",
    previewUrl: "https://github.com/mukulgargg/multi-rdb-setup",
  },
  {
    id: 3,
    title: "Git Logs Export",
    description: "A very simple tool to export git logs in a csv format.",
    image: "/images/github.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/mukulgargg/Git-Logs-export",
    previewUrl: "https://github.com/mukulgargg/Git-Logs-export",
  },
  // {
  //   id: 4,
  //   title: "Cyberdost",
  //   description:
  //     "AI Chatbot application for spreading awareness in cybersecurity",
  //   image: "/images/projects/cyberdost.png",
  //   tag: ["All", "Mobile"],
  //   gitUrl: "https://chat.cyberdost.in/",
  //   previewUrl: "https://chat.cyberdost.in/",
  // },
  // {
  //   id: 5,
  //   title: "Homeland Group FMS",
  //   description: "Flow Management System for Homeland Group",
  //   image: "/images/projects/homeland.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "https://asap.homelandgroup.org/",
  //   previewUrl: "https://asap.homelandgroup.org/",
  // },
  // {
  //   id: 6,
  //   title: "M68k Compiler",
  //   description: "Compiler made in C for M68 Compiler",
  //   image: "/images/projects/m68k.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "https://github.com/CodeGeek04/M68k-C-Compiler",
  //   previewUrl: "https://github.com/CodeGeek04/M68k-C-Compiler",
  // },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
