"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Mukul Garg",
                1000,
                "Polyglot Developer",
                1000,
                "Programmer",
                1000,
                "Specialist",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-base lg:text-lg text-[#ADB7BE] mb-6">
            I'm a{" "}
            <span className="text-blue-600 font-semibold">
              Full stack developer
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
            . I'm passionate about creating
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
          <div>
            <button
                type="button"
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
                onClick={() => {
                  window.location.href =
                    "mailto:2mukul020299@gmail.com?subject=Hiring%20Inquiry&body=Hi%20Mukul,%0A%0AI%20would%20like%20to%20discuss%20a%20potential%20job%20opportunity.%0A%0AThank%20you!";
                }}
              >
                Hire Me
              </button>
            <Link
              href="/Mukul_Garg_Resume.pdf"
              download={true}
              target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/avatar.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
