import React from "react";
import Image from "next/image";

const experiences = [
  {
    title: "Engineering Manager",
    company_name: "ScoreMe Solutions Pvt. Ltd.",
    icon: "/sm-icon.png",
    type: "Full Time",
    date: "Jan 2025 - Present",
    description:
      "Spearheading AI integration in client-facing products and internal processes.",
    points: [
      "Recently moved into an Engineering Manager role, where I’m responsible for guiding & leading backend, 1QA, and DevOps teams on key projects. I work closely with senior engineers and 2cross-functional 2teams to keep 2delivery on track and aligned with 2business goals.",
      "Designed and built a scalable 2Enterprise Integration Platform (EIP) powering customer journeys like onboarding, KYC, payments, and disbursements2 across multiple 2banking clients.",
      "Designed secure, 2%automated deployment for IBM/UBI using 2encrypted packaging, TLS, Vault, and role-based access (RBAC), enabling 2air-gapped infrastructure integration with 2single-script rollout.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "ScoreMe Solutions Pvt. Ltd.",
    icon: "/sm-icon.png",
    type: "Full Time",
    date: "Sep 2023 - Jan 2025",
    description:
      "Spearheading AI integration in client-facing products and internal processes.",
    points: [
      "Led development and delivery 2 loan journeys for PNB Bank involving end-to-end integrations, strategy, and production deployment, completed within a 6 month delivery window.",
      "Developed an automated platform for intelligent bank statement processing, targeting 200 thousand plus PDF documents with efficient and scalable backend flow.",
      "Built a flexible billing engine for 50 plus service categories across 260 plus clients, automating invoicing and generating financial reports to save significant time for management.",
      "Developed and led an Excel automation tool that improved reporting productivity by over 150 times, reducing manual effort and increasing operational accuracy.",
    ],
  },
  {
    title: "Software Development Engineer 2",
    company_name: "OfBusiness",
    icon: "/ofBusiness-icon.png",
    type: "Full Time",
    date: "Jan 2022 - Sep 2024",
    description:
      "Led the development of an AI-powered chatbot for cybercrime awareness.",
    points: [
      "Developed a high-performance Event-based architecture, which successfully handled the workload of 10 Mn+ daily requests and improved the system efficiency.",
      "Enhanced market insights and strategic decision-making by providing critical data on over 400,000 businesses, leading to 5 times improvement in business planning and performance.",
      "Created a tool using Elasticsearch to effectively filter and export tenders from a 50 Mn+ data having 4 Mn+ bidders, resulting in time, resource, and cost savings, and improved efficiency.",
      "Initiated international market expansion targeting 80 Plus countries to boost revenue potential and ensure smooth localization for global presence.",
      "For overall better user experience, scalability, reliability refactored code, which lead to better response time.",

    ],
  },
  {
    title: "Software Developer ",
    company_name: "Vyng",
    icon: "/vyng-icon.png",
    type: "Full Time",
    date: "Mar 2021 - Jan 2022",
    description:
      "Engineered a comprehensive flow management system to enhance internal operations.",
    points: [
      "65 % increased user engagement and satisfaction through managing and integrating new features into a React powered CMS.",
      "Integrated BigQuery into backend systems to power real-time product features and enable instant access to 7 Bn+ rows of data, supporting both live functionality and internal decision work-flows.",
      "Optimizing API endpoints for enhanced performance with backend microservices development using Vertex and Express frameworks, resulting in 10 times faster response times and improved system reliability.",

    ],
  },
  {
    title: "Software Developer",
    company_name: "Make My Trip",
    icon: "/mmt.png",
    // type: "Project-based",
    date: "Jan 2020 - Aug 2020",
    description:
      "Pioneered the development of ethical AI deepfake generation technology.",
    points: [
      "Enhancing system responsiveness by reducing API response time from over 750 ms to below 150 ms, resulting in improved user experiences and increased customer satisfaction.",
      "Delivering efficient and scalable solutions with MVP-based backend microservices using Spring framework, improving system performance and scalability.",
      "Improving workflow efficiency for support agents and developers with enhancements to the in-house CMS dashboard powered by python and Django framework, streamlining operations and reducing overhead.",

    ],
  }
];

const ExperienceCard = ({ experience, isEven, isMobile }) => {
    if (isMobile) {
    return (
      <div className="flex flex-col items-start mb-12 relative bg-[#181818] rounded-lg p-6">
        <div className="flex items-center mb-4">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            width={40}
            height={40}
            className="rounded-full mr-3"
          />
          <div>
            <h3 className="text-xl font-bold text-white">{experience.title}</h3>
            <p className="text-base text-white font-medium">{experience.company_name}</p>
            <p className="text-sm text-primary-500">{experience.date}</p>
            <p className="text-sm text-gray-400">{experience.type}</p>
          </div>
        </div>
        <p className="text-base text-gray-300 mb-3">{experience.description}</p>
        <ul className="list-disc ml-5 text-sm text-gray-400 space-y-1">
          {experience.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  return (
    <div className="flex items-center mb-12 relative">
      <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-700 transform -translate-x-1/2 z-0"></div>
      {isEven ? (
        <>
          <div className="w-5/12 pr-8 text-right">
            <p className="text-lg font-semibold text-primary-500">
              {experience.date}
            </p>
            <p className="text-base text-gray-400">{experience.type}</p>
            <p className="text-base text-white font-medium">
              {experience.company_name}
            </p>
          </div>
          <div className="w-2/12 flex justify-center z-10">
            <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center shadow-lg">
              <Image
                src={experience.icon}
                alt={experience.company_name}
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
          </div>
          <div className="w-5/12 pl-8">
            <h3 className="text-xl font-bold text-white mb-2">
              {experience.title}
            </h3>
            <p className="text-base text-gray-300 mb-3">
              {experience.description}
            </p>
            <ul className="list-disc ml-5 text-sm text-gray-400 space-y-1">
              {experience.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className="w-5/12 pr-8">
            <h3 className="text-xl font-bold text-white mb-2">
              {experience.title}
            </h3>
            <p className="text-base text-gray-300 mb-3">
              {experience.description}
            </p>
            <ul className="list-disc ml-5 text-sm text-gray-400 space-y-1">
              {experience.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="w-2/12 flex justify-center z-10">
            <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center shadow-lg">
              <Image
                src={experience.icon}
                alt={experience.company_name}
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
          </div>
          <div className="w-5/12 pl-8">
            <p className="text-lg font-semibold text-primary-500">
              {experience.date}
            </p>
            <p className="text-base text-gray-400">{experience.type}</p>
            <p className="text-base text-white font-medium">
              {experience.company_name}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

const ExperienceSection = ( {isMobile}) => {
  return (
    <section className="text-white" id="experience">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          Professional Journey
        </h2>
        <div className="max-w-5xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              isEven={index % 2 === 0}
              isMobile={ isMobile }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
