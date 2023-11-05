import { v4 as uuidv4 } from "uuid";

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
