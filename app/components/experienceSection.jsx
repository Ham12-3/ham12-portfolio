"use client";

import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";






const experiencesData = [
    {
      title: "Full Stack development Bootcamp, Udemy, London App Brewery",
      location: "Remote",
      description:
        "Built frontend web apps and REST APIs",
      icon: React.createElement(LuGraduationCap),
      date: "2020 - June 2022",
    },
    {
        title: "SEO Specialist",
        location: "Upwork",
        description:
          "Used SEO strategies to make quality decisions",
        icon: React.createElement(CgWorkAlt),
        date: "March,2023 - December, 2023",
      },
    {
      title: "Backend Developer",
      location: "Fiverr",
      description:
        "making use of Node.js and Django tobuild APIs",
      icon: React.createElement(CgWorkAlt),
      date: "Oct, 2022 - Present",
    },
    {
      title: "Full-Stack Developer",
      location: "Anglaar Digital Agency",
      description:
        "I'm now a Full-Stack Engineer. My skills includes React, Next.js, TypeScript, Tailwind, Django, React, AWS, Docker Prisma and MongoDB. ",
      icon: React.createElement(FaReact),
      date: "May, 2023 - present",
    },
  ]
export default function Experience() {
 




  return (
    <section id="Experience"  className="scroll-mt-28 mb-28 sm:mb-40">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Experience
      </h2>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                   "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:"0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                   "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}