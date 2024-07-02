import projectTldrImg from "/project-tldr.png";
import projectTrustmileImg from "/project-trustmile.png";
import projectBoviImg from "/project-bovi.png";
import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { FaBriefcase } from "react-icons/fa6";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BSc Industrial Engineering",
    location: "Istanbul, Turkey",
    company: "Istanbul Technical University",
    icon: React.createElement(LuGraduationCap),
    date: "2009-2013",
  },
  {
    title: "Brand Manager / SFE Management Trainee / Internship",
    location: "Istanbul, Turkey",
    company: "Pfizer",
    icon: React.createElement(FaBriefcase),
    date: "2011 - 2016",
  },
  {
    title: "Business Analytics and Insights Manager",
    location: "Istanbul, Turkey",
    company: "Interbank Card Centre",
    icon: React.createElement(FaBriefcase),
    date: "2016 - 2019",
  },
  {
    title: "Graphic Designer & Marketing Coordinator",
    location: "Sydney, Australia",
    company: "Mitsubishi Electric Australia",
    icon: React.createElement(FaBriefcase),
    date: "2020 - 2023",
  },
  {
    title: "Freelancer",
    location: "Melbourne, Australia",
    company: "Omni Agency",
    icon: React.createElement(FaBriefcase),
    date: "2023 - present",
  },
  {
    title: "Frontend Developer",
    location: "Melbourne, Australia",
    company: "Bovi (Project: Bovi Web App)",
    icon: React.createElement(FaBriefcase),
    date: "2024 - present",
  },
  {
    title: "Frontend Developer",
    location: "Melbourne, Australia",
    company: "CoreForm (Project: Trustmile - SaaS App)",
    icon: React.createElement(FaBriefcase),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "TL;DR",
    description:
      "Comprehensive SaaS solution built from the ground up that incorporates chat function with PDF files by utilising the OpenAI's GPT-3.5 Turbo model. It's the perfect tool for people who thinks their PDF is too long; they can't read it!",
    tags: ["React", "TypeScript", "tRPC", "Zod", "Prisma", "Stripe", "Kinde"],
    imageUrl: projectTldrImg,
    projectColor: "orange",
    gitHubRepo: "https://github.com/ensarokumus/tldr-app",
    liveDemo: "https://tldr-neon.vercel.app/",
    website: "#",
  },
  {
    title: "Trustmile",
    description:
      "Trustmile is CoreForm's new web and native mobile app that aims to revolutionise Last-Mile Logistics with real-time delivery tracking and data-driven decision-making. I'm working on the admin web app as a frontend developer alongside the development team. Currently in beta stage with a select customer base and the full-release is scheduled for 2024 Q4.",
    tags: [
      "React",
      "TypeScript",
      "MUI",
      "Apollo",
      "GraphQL",
      "Zustand",
      "Docker",
    ],
    imageUrl: projectTrustmileImg,
    projectColor: "blue",
    gitHubRepo: "#",
    liveDemo: "#",
    website: "https://www.trustmile.co/",
  },
  {
    title: "Bovi",
    description:
      "Bovi is a Finnish startup that aims to build a public coupon management web app. I'm working as a frontend developer with the sole responsibility of the frontend alongside a backend developer. Currently working on the user and merchant dashboards with role-based access control for a seamless user experience. The app will be ready for public use in second half of 2024.",
    tags: ["React", "TypeScript", "MUI", ".NET", "Zod", "Docker"],
    imageUrl: projectBoviImg,
    projectColor: "green",
    gitHubRepo: "#",
    liveDemo: "#",
    website: "https://bovi.fi/en/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "Git",
  "React",
  "Next.js",
  "Vite",
  "Zustand",
  "Postman",
  "Jest",
  "Docker",
  "TailwindCSS",
  "MUI",
  "Node.js",
  "Express",
  "Tailwind",
  "Prisma",
  "GraphQL",
  "Apollo",
  "Framer Motion",
  "MongoDB",
  "PostgreSQL",
  "Figma",
  "Adobe Creative Suite",
  "Canva",
] as const;
