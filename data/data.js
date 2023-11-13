import { v4 as uuidv4 } from "uuid";

export const experienceData = [
  {
    title: "Master's Degree",
    company: "Poznan University of Technology",
    startYear: "mar. 2022",
    endYear: "Present",
    companyLink: "https://www.put.poznan.pl/en",
    desc: "I am currently studying at Poznan University of Technology with a specialization in Computer Science (Web technologies).",
  },
  {
    title: "Web developer",
    company: "Sense Monitoring",
    startYear: "jun. 2021",
    endYear: "feb. 2023",
    companyLink: "https://sense-monitoring.com/en/",
    desc: "I worked as a web developer at Sense Monitoring. I worked with Groovy, Grails, Hibernate and many other technologies.",
  },
  {
    title: "Bachelor's Degree",
    company: "Poznan University of Technology",
    startYear: "sep. 2018",
    endYear: "feb. 2022",
    companyLink: "https://www.put.poznan.pl/en",
    desc: "I graduated from Poznan University of Technology with a specialization in Automatics and Robotics.",
  },
  {
    title: "High School",
    company: "XVI LO im.Charlesa de Gaulle'a w Poznaniu",
    startYear: "nov. 2015",
    endYear: "jun. 2018",
    companyLink: "https://zso2.pl/",
    desc: "I graduated from high school with a specialization in mathematics and physics.",
  },
];

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

export const toolsDetails = {
  react: {
    name: "React",
    description:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
    icon: "/images/react.svg",
    link: "https://reactjs.org/",
  },
  tailwind: {
    name: "Tailwnd CSS",
    description:
      "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
    icon: "/images/tailwindcss.svg",
    link: "https://tailwindcss.com/",
  },
  express: {
    name: "ExpressJS",
    description:
      "Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License.",
    icon: "/images/express.png",
    link: "https://expressjs.com/",
  },
  mongodb: {
    name: "MongoDB",
    description:
      "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
    icon: "/images/mongodb.png",
    link: "https://www.mongodb.com/",
  },
  nodejs: {
    name: "Node.js",
    description:
      "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
    icon: "/images/node.png",
    link: "https://nodejs.org/",
  },
  javascript: {
    name: "JavaScript",
    description:
      "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.",
    icon: "/images/js.png",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
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
    siteLink: "https://todo-react-jk.vercel.app/",
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
    inProgress: false,
  },
  {
    id: uuidv4(),
    title: "Blog CMS",
    description:
      "Blog CMS is a project to maintain a blog site. The application was created in React and ExpressJS.",
    image: "/images/projects/school.png",
    githubLink: "https://github.com/Wawrzynn/cms-project",
    siteLink: "",
    inProgress: true,
  },
];
