import projectTldrImg from "/project-tldr.png";
import projectTrustmileImg from "/project-trustmile.png";
import projectBoviImg from "/project-bovi.png";
import projectPortfolio from "/project-portfolio.png";
import React from "react";
import { FaReact } from "react-icons/fa6";
import { TbBriefcase2 } from "react-icons/tb";
import { SlGraduation } from "react-icons/sl";

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
    icon: React.createElement(SlGraduation),
    date: "2009-2013",
    description:
      "Graduated with a degree in Industrial Engineering, acquiring a strong foundation in problem-solving techniques.",
  },
  {
    title: "Brand Manager / SFE Management Trainee",
    location: "Istanbul, Turkey",
    company: "Pfizer",
    icon: React.createElement(TbBriefcase2),
    date: "2011 - 2016",
    description:
      "Began my career in Pfizer's marketing department as an intern. After graduation, I was selected for the Management Trainee program, successfully completed it, and was promoted to Brand Manager.",
  },
  {
    title: "Business Analytics and Insights Manager",
    location: "Istanbul, Turkey",
    company: "Interbank Card Centre",
    icon: React.createElement(TbBriefcase2),
    date: "2016 - 2019",
    description:
      "Transitioned to a strategic role as a business consultant, focusing on data-driven projects.",
  },
  {
    title: "Graphic Designer",
    location: "Sydney, Australia",
    company: "Mitsubishi Electric Australia",
    icon: React.createElement(TbBriefcase2),
    date: "2020 - 2023",
    description:
      "Upon migrating to Australia, I pursued a career change to explore my creative side, marking the beginning of my journey towards becoming a developer.",
  },
  {
    title: "Freelancer",
    location: "Melbourne, Australia",
    company: "Omni Agency",
    icon: React.createElement(TbBriefcase2),
    date: "2023 - present",
    description:
      "Committed to becoming a developer by quitting my designer job and starting my own freelance agency while studying software development.",
  },
  {
    title: "Frontend Developer",
    location: "Melbourne, Australia",
    company: "Bovi (Project: Bovi Web App)",
    icon: React.createElement(FaReact),
    date: "2024 - present",
    description:
      "Joined the Finnish startup Bovi to develop their web app, a platform for users to find deals at their favorite cafes and restaurants.",
  },
  {
    title: "Frontend Developer",
    location: "Melbourne, Australia",
    company: "CoreForm (Project: Trustmile)",
    icon: React.createElement(FaReact),
    date: "2024 - present",
    description:
      "Working with the Australian startup CoreForm as a frontend developer, collaborating with a team of backend and other frontend engineers to enhance my skills.",
  },
] as const;

export const projectsData = [
  {
    title: "TL;DR",
    description:
      "Comprehensive SaaS solution built from the ground up that incorporates chat function with PDF files by utilising the OpenAI's GPT-3.5 Turbo model. It's the perfect tool for people who thinks their PDF is too long; they can't read it!",
    tags: ["React", "TypeScript", "tRPC", "Zod", "Prisma", "Stripe", "Kinde"],
    imageUrl: projectTldrImg,
    imageAlt: "screenshot of TL;DR web app home page",
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
    imageAlt: "screenshot of Trustmile web app admin dashboard",
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
    imageAlt: "screenshot of Bovi web app deals page",
    projectColor: "green",
    gitHubRepo: "#",
    liveDemo: "#",
    website: "https://bovi.fi/en/",
  },
  {
    title: "Portfolio",
    description:
      "Created a responsive portfolio website to display my projects and expertise. Implemented using React and TypeScript for the frontend, styled with TailwindCSS, and enhanced with FramerMotion animations. Integrated FormSubmit for form handling. The site features an automatic light/dark mode based on the user's system settings, along with a manual toggle for personal preference.",
    tags: ["React", "TypeScript", "TailwindCSS", "FramerMotion", "FormSubmit"],
    imageUrl: projectPortfolio,
    imageAlt: "screenshot of my portfolio website",
    projectColor: "purple",
    gitHubRepo: "https://github.com/ensarokumus/ensarokumus-portfolio",
    liveDemo: "https://ensarokumus-portfolio.vercel.app/",
    website: "#",
  },
] as const;

export const groupedSkills = {
  "Frontend Technologies": [
    "React.js",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "SASS",
    "Tailwind CSS",
    "Material UI",
    "Framer Motion",
    "Next.js",
    "Vite",
    "Zustand",
  ],
  "Backend & Databases": [
    "Node.js",
    "Express.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "GraphQL",
    "Prisma",
    "Apollo",
  ],
  "Developer Tools & Practices": [
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "Jest",
    "Docker",
  ],
  "Design & UI/UX": ["Figma", "Adobe Creative Suite", "Canva"],
} as const;
