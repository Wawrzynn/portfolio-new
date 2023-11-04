import Carrer from "../components/career/Career";
import MetaHeaders from "../components/global/MetaHeaders";

export default function career() {
  return (
    <>
      <MetaHeaders title="Career" />
      <h1 className="w-full flex justify-center text-primary-dark dark:text-primary-light text-4xl font-medium">
        Career
      </h1>
      <Carrer />
    </>
  );
}
