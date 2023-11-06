import Image from "next/image";

const ToolItem = ({ tool }) => {
  return (
    <div className="bg-white dark:bg-primary-dark rounded-lg shadow-xl">
      <div className="p-4">
        <div className="flex flex-row justify-between">
          <a href={tool.link} target="blank">
            <h3 className="text-primary-dark dark:text-primary-light text-2xl font-medium">
              {tool.name}
            </h3>
          </a>
          <Image src={tool.icon} width={50} height={50} alt="Tool icon" />
        </div>
        <p className="text-primary-dark dark:text-primary-light text-base font-normal mt-2">
          {tool.description}
        </p>
      </div>
    </div>
  );
};

export default ToolItem;
