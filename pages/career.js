import Experience from "../components/career/Career";
import MetaHeaders from "../components/global/MetaHeaders";

export default function career() {
  return (
    <div className="container mx-auto">
      <MetaHeaders title="Career" />
      <h1 className="w-full flex justify-center text-primary-dark dark:text-primary-light text-4xl font-medium">
        Career
      </h1>
      <Experience />
    </div>
  );
}
