import { aboutData } from "../../data/data";
import Image from "next/image";
import Button from "../reusable/Button";
import {AiOutlineCloudDownload} from "react-icons/ai";

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
            <a
              href="files/CV.pdf"
              download
              className="flex justify-start sm:justify-center"
            >
              <span className="font-general-medium  px-7 py-4 text-white text-center font-medium tracking-wider bg-primary-dark dark:bg-primary-light dark:text-primary-dark focus:ring-1 rounded-lg mt-6 duration-500 flex flex-row justify-between items-center">
                <Button title="Download CV" aria-label="Download CV" />
                <AiOutlineCloudDownload className="ml-5 w-7 h-7" />
              </span>
            </a>
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
