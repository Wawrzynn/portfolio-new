import { v4 as uuidv4 } from "uuid";

export const aboutData = {
  name: "Jędrzej Kosakowski",
  title: "Web Developer",
  description1:
    "I am a passionate developer with +1.5 years of work experience in JavaScript and love learning new technologies since I discovered programming, I am currently learning the way to be a JS fullstack developer.",
  description2:
    "I am familiar with web, mobile and desktop development and technologies like: Next.js, React and Tailwind CSS, to add I also have experience working in Backend with Node (especially ExpressJS) and in the UX design part with Figma always implementing good practices in prototyping and coding, clean architecture, SOLID principles, pixel perfect, GitFlow practices and agile methodologies.",
  tools1:
    "Here you can have a look at all the programming languages, libraries, and tools I've worked with, I started programming about 2 years ago. I have tried a few programming languages and technology stack, both Backend and Frontend.",
  tools2:
    "I have tried both backend and frontend development. But primarily my focus was on frontend development, later however I also added to my skillset sever backend technologies. Currently my variety of tools is still expanding.",
  image: "/images/profile.png",
  cv: "/files/CV.pdf",
  cvEnglish: "/files/CV-English.pdf",
};

export const toolsData = {
  languages: ["JavaScript", "HTML", "CSS", "Groovy"],
  frameworks: ["React", "Next.js", "ExpressJS", "JQuery", "React Native"],
  libraries: ["Redux", "React Router", "React Forms", "Jest"],
  styles: [
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    "SASS",
    "PostCSS",
    "Styled Components",
    "Framer motion",
  ],
  backend: ["Node.js", "ExpressJS", "NoSQL", "Docker"],
  databases: ["MongoDB", "PostgreSQl", "Firebase"],
  tools: ["Git", "Postman", "VSCode", "Web Storm", "Github", "ESLint"],
};

export const projectsData = [
  {
    id: uuidv4(),
    title: "DrinkUp",
    description:
      "Mobile application for ordering drinks in a bar. The application was created in React Native and is connected to the Firebase database.",
    image: "/images/projects/drinkup.png",
    githubLink: "https://github.com/Wawrzynn/drinkup",
    siteLink: "",
    inProgress: false,
  },
  {
    id: uuidv4(),
    title: "Benchmark App",
    description:
      "Application for testing the performance of the computer. The application was created in React and is connected to the Firebase database.",
    image: "/images/projects/benchmark.png",
    githubLink: "https://github.com/Wawrzynn/benchmark",
    siteLink: "",
    inProgress: false,
  },
  {
    id: uuidv4(),
    title: "Todo App",
    description:
      "Application for managing tasks. There are 3 applications written in different technologies: React, Svelte and Angular. All are using MongoDB.",
    image: "/images/projects/todo.png",
    githubLink: "https://github.com/Wawrzynn/frontend-development",
    siteLink: "",
    inProgress: false,
  },
  {
    id: uuidv4(),
    title: "CRUD App",
    description:
      "Application for displaying data. It was created to learn the basics of Vagrant, Docker, Kubernetes and Ansible.",
    image: "/images/projects/crud.png",
    githubLink: "https://github.com/Wawrzynn/chmury-assignment",
    siteLink: "",
    inProgress: false,
  },
  {
    id: uuidv4(),
    title: "Portfolio",
    description:
      "My portfolio website. It was created in Next.js, React js and Tailwind CSS and is hosted on Vercel.",
    image: "/images/projects/portfolio.png",
    githubLink: "https://github.com/Wawrzynn/portfolio-new",
    siteLink: "https://jedrzejkosakowski.vercel.app/",
    inProgress: true,
  },
  {
    id: uuidv4(),
    title: "School CMS",
    description:
      "School CMS is a web application for managing school. The application was created in React and ExpressJS.",
    image: "/images/projects/school.png",
    githubLink: "",
    siteLink: "",
    inProgress: true,
  },
];
