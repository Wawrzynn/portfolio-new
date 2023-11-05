import MetaHeaders from "../components/global/MetaHeaders";
import Introduction from "../components/about/Introduction";
import Tools from "../components/about/Tools";

export default function About() {
  return (
    <>
      <MetaHeaders title="About" />
      <h1 className="w-full flex justify-center text-primary-dark dark:text-primary-light text-4xl font-medium">
        About me
      </h1>
      <Introduction />
      <Tools />
    </>
  );
}
