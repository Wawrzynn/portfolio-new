import Button from "./Button";
import { AiOutlineCloudDownload } from "react-icons/ai";

function CVButton(props) {
  return (
    <a
      href="files/CV.pdf"
      download
      className="flex justify-start md:justify-center"
    >
      <span className="font-general-medium  px-7 py-4 text-white text-center font-medium tracking-wider bg-primary-dark dark:bg-primary-light dark:text-primary-dark focus:ring-1 rounded-lg mt-6 duration-500 flex flex-row justify-between items-center">
        <Button title="Download CV" aria-label="Download CV" />
        <AiOutlineCloudDownload className="ml-5 w-7 h-7" />
      </span>
    </a>
  );
}

export default CVButton;