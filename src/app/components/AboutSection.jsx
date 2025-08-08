"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-2 gap-2">
        <li className="text-base">Git</li>
        <li className="text-base">Java</li>
        <li className="text-base">Spring Framework</li>
        <li className="text-base">SQS</li>
        <li className="text-base">Redis</li>
        <li className="text-base">NodeJS</li>
        <li className="text-base">Python</li>
        <li className="text-base">Django</li>
        <li className="text-base">MVP</li>
        <li className="text-base">Express</li>
        <li className="text-base">Apisix</li>
        <li className="text-base">keycloak</li>
        <li className="text-base">K8s</li>
        <li className="text-base">docker</li>
        <li className="text-base">Kubernetes</li>
        <li className="text-base">Secret Vault</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li className="text-base mb-2">
          Bachelor of Technology Delhi Technological University <br />(formerly DCE) 2017 - 2021
        </li>
      </ul>
    ),
  },
  // {
  //   title: "Certifications",
  //   id: "certifications",
  //   content: (
  //     <ul className="list-disc pl-2">
  //       <li className="text-base mb-2">AWS Cloud Practitioner</li>
  //       <li className="text-base">Google Professional Cloud Developer</li>
  //     </ul>
  //   ),
  // },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="About me"
        />
        {/* <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-[#ADB7BE] mb-6">
            I'm a{" "}
            <span className="text-blue-600 font-semibold">
              backend developer
            </span>{" "}
            specializing in building robust{" "}
            <span className="text-green-600 font-semibold">
              server-side applications
            </span>{" "}
            and <span className="text-red-600 font-semibold">APIs</span>.
            Proficient in{" "}
            <span className="text-yellow-600 font-semibold">
              multiple programming languages
            </span>
            , I excel at{" "}
            <span className="text-cyan-600 font-semibold">
              containerization
            </span>
            ,{" "}
            <span className="text-purple-600 font-semibold">
              system integration
            </span>
            , and{" "}
            <span className="text-pink-600 font-semibold">
              cloud deployment
            </span>
            . While not focused on frontend, I'm passionate about creating
            efficient, scalable{" "}
            <span className="text-orange-600 font-semibold">
              backend solutions
            </span>{" "}
            that power modern applications, handling everything from{" "}
            <span className="text-teal-600 font-semibold">
              database management
            </span>{" "}
            to{" "}
            <span className="text-indigo-600 font-semibold">
              third-party service integration
            </span>
            .
          </p>

        </div> */}
        <div>
          {TAB_DATA.map((tabItem) => (
            <div key={tabItem.id} className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">{tabItem.title}</h3>
              {tabItem.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

