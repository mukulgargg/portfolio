import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "100%" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b-2 border-primary-500"
    : "text-[#ADB7BE] hover:text-white";

  return (
    <button onClick={selectTab} className="relative">
      <p
        className={`mr-3 font-semibold transition-colors duration-300 ${buttonClasses}`}
      >
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="absolute bottom-0 left-0 h-1 bg-primary-500"
      ></motion.div>
    </button>
  );
};

export default TabButton;
