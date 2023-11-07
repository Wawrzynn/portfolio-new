import ProjectItem from "../reusable/ProjectItem";
import { projectsData } from "../../data/data";
import Button from "../reusable/Button";
import Link from "next/link";

export default function Tools() {
  const someProjects = projectsData.slice(0, 3);

  return (
    <section>
      <h1 className="w-full flex justify-center text-primary-dark dark:text-primary-light text-4xl font-medium sm:mt-40 mt-10">
        Some of my projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-5">
        {someProjects.map((project, index) => {
          return <ProjectItem key={index} {...project} />;
        })}
      </div>
      <div className="flex justify-center mt-10">
        <Link href="/projects">
          <span className="font-general-medium  px-7 py-4 text-white text-center font-medium tracking-wider bg-primary-dark dark:bg-primary-light dark:text-primary-dark focus:ring-1 rounded-lg mt-6 duration-500 flex flex-row justify-between items-center hover:bg-primary-light hover:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-primary-light hover:border">
            <Button title="See more projects" aria-label="See more projects" />
          </span>
        </Link>
      </div>
    </section>
  );
}
