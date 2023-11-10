import Button from "./Button";
import { AiOutlineCloudDownload } from "react-icons/ai";

function CVButton({text}) {
  return (
    <a
      href="files/CV-english.pdf"
      download
      className="flex justify-start md:justify-center"
    >
      <span className="font-general-medium  px-7 py-4 text-white text-center font-medium tracking-wider bg-primary-dark dark:bg-primary-light dark:text-primary-dark focus:ring-1 rounded-lg mt-6 duration-500 flex flex-row justify-between items-center hover:bg-primary-hover hover:text-primary-light dark:hover:bg-primary-hover dark:hover:text-primary-light">
        <button>{text}</button>
        <AiOutlineCloudDownload className="ml-5 w-7 h-7" />
      </span>
    </a>
  );
}

export default CVButton;
