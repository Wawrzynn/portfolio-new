import { aboutData } from "../../data/data";
import Image from "next/image";

export default function Introduction() {
  return (
    <div className="w-full flex flex-col items-center mt-10 mx-auto container">
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex flex-row items-center justify-around">
          <div>
            <h1 className="w-full flex justify-start text-primary-dark dark:text-primary-light text-4xl font-medium">
              {aboutData.name}
            </h1>
            <h2 className="w-full flex justify-start sm:justify-center text-primary-dark dark:text-primary-light text-lg font-medium">
              {aboutData.title}
            </h2>
          </div>
          <Image
            src={aboutData.image}
            alt="Jedrzej Kosakowski"
            width={200}
            height={200}
            className="rounded-lg square"
          />
        </div>
        <div className="w-full flex flex-col items-center mt-10">
          <p className="w-full flex justify-center text-primary-dark dark:text-primary-light text-lg font-medium">
            {aboutData.description1}
          </p>
          <br />
          <p className="w-full flex justify-center text-primary-dark dark:text-primary-light text-lg font-medium">
            {aboutData.description2}
          </p>
        </div>
      
      </div>
    </div>
  );
}
