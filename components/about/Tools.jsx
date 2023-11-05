import { toolsData } from "../../data/data";
import { ToolElement } from "./ToolElement";
import { aboutData } from "../../data/data";

export default function Tools() {
  return (
    <div className="w-full flex flex-col items-center mt-10 mx-auto container">
      <div className="w-full flex flex-col items-center mt-10">
        <h1 className="w-full flex justify-center text-primary-dark dark:text-primary-light text-4xl font-medium">
          Skills & tools
        </h1>
        <div className="w-full flex flex-col items-center mt-10">
          <p className="w-full flex justify-center text-primary-dark dark:text-primary-light text-lg font-medium">
            {aboutData.tools1}
          </p>
          <br />
          <p className="w-full flex justify-center text-primary-dark dark:text-primary-light text-lg font-medium mb-10">
            {aboutData.tools2}
          </p>
        </div>

        <h2 className="w-full flex justify-start text-primary-dark dark:text-primary-light text-2xl font-medium">
          Languages
        </h2>
        <div className="w-full flex justify-start  flex-wrap mb-5">
          {toolsData.languages.map((item) => {
            return <ToolElement tool={item} key={item} />;
          })}
        </div>
        <h2 className="w-full flex justify-start text-primary-dark dark:text-primary-light text-2xl font-medium">
          Frameworks
        </h2>
        <div className="w-full flex justify-start  flex-wrap mb-5">
          {toolsData.frameworks.map((item) => {
            return <ToolElement tool={item} key={item} />;
          })}
        </div>
        <h2 className="w-full flex justify-start text-primary-dark dark:text-primary-light text-2xl font-medium">
          Libraries
        </h2>
        <div className="w-full flex justify-start  flex-wrap mb-5">
          {toolsData.libraries.map((item) => {
            return <ToolElement tool={item} key={item} />;
          })}
        </div>
        <h2 className="w-full flex justify-start text-primary-dark dark:text-primary-light text-2xl font-medium">
          Styles & UI
        </h2>
        <div className="w-full flex justify-start  flex-wrap mb-5">
          {toolsData.styles.map((item) => {
            return <ToolElement tool={item} key={item} />;
          })}
        </div>
        <h2 className="w-full flex justify-start text-primary-dark dark:text-primary-light text-2xl font-medium">
          Backend technologies
        </h2>
        <div className="w-full flex justify-start  flex-wrap mb-5">
          {toolsData.backend.map((item) => {
            return <ToolElement tool={item} key={item} />;
          })}
        </div>
        <h2 className="w-full flex justify-start text-primary-dark dark:text-primary-light text-2xl font-medium">
          Databases and tools
        </h2>
        <div className="w-full flex justify-start  flex-wrap mb-5">
          {toolsData.databases.map((item) => {
            return <ToolElement tool={item} key={item} />;
          })}
        </div>
        <h2 className="w-full flex justify-start text-primary-dark dark:text-primary-light text-2xl font-medium">
          Tools and softwares
        </h2>
        <div className="w-full flex justify-start  flex-wrap mb-5">
          {toolsData.tools.map((item) => {
            return <ToolElement tool={item} key={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
