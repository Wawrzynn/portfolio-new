import ToolItem from "./ToolItem";
import { toolsDetails } from "../../data/data";

export default function Tools() {
  return (
    <section>
      <h1 className="w-full flex justify-center text-primary-dark dark:text-primary-light text-4xl font-medium sm:mt-40 mt-10">
        My favorite tools
      </h1>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          <ToolItem tool={toolsDetails.react} />
          <ToolItem tool={toolsDetails.tailwind} />
          <ToolItem tool={toolsDetails.mongodb} />
          <ToolItem tool={toolsDetails.express} />
          <ToolItem tool={toolsDetails.nodejs} />
          <ToolItem tool={toolsDetails.javascript} />
        </div>
      </div>
    </section>
  );
}
