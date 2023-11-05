import MetaHeaders from "../components/global/MetaHeaders";
import ProjectsGrid from "../components/projects/ProjectsGrid";

export default function Projects() {
  return (
    <div className="container mx-auto">
      <MetaHeaders title="Projects" />
      <h1 className="w-full flex justify-center text-primary-dark dark:text-primary-light text-4xl font-medium">
        Projects
      </h1>
      <ProjectsGrid />
    </div>
  );
}
