"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "15",
    postfix: "+",
  },
  {
    metric: "Courses Completed",
    value: "8+",
    postfix: "+",
  },
  {
    metric: "Domains",
    value: "5",
    postfix: "+",
  },
  {
    metric: "Years",
    value: "5",
    postfix: "+",
  },
];

const AchievementsSection = ({ isMobile }) => {
  if (isMobile) {
    return (
      <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 flex justify-center">
        <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-4 flex flex-col gap-2 w-full max-w-xs mx-auto ml-10">
          {achievementsList.map((achievement, idx) => (
            <div
              key={idx}
              className="flex flex-row items-center justify-center my-2"
            >
              <span className="text-[#ADB7BE] text-base font-normal min-w-[120px] text-right mr-4">
                {achievement.metric === "Courses Completed" ? (
                  <>
                    Courses<br />Completed
                  </>
                ) : (
                  achievement.metric
                )}
              </span>
              <h2 className="text-white text-4xl font-bold flex flex-row items-center">
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => ({
                    mass: 1,
                    friction: 100,
                    tensions: 140 * (index + 1),
                  })}
                />
                <span className="text-white text-4xl font-bold ml-1">
                  {achievement.postfix}
                </span>
              </h2>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Desktop/tablet layout (unchanged)
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row items-center">
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value)}
                locale="en-US"
                className="text-white text-4xl font-bold"
                configs={(_, index) => ({
                  mass: 1,
                  friction: 100,
                  tensions: 140 * (index + 1),
                })}
              />
              <span className="text-white text-4xl font-bold ml-1">{achievement.postfix}</span>
            </h2>
            <span className="text-[#ADB7BE] text-base font-normal mt-2">
              {achievement.metric}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
