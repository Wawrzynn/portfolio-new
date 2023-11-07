import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import {
  AiOutlineLink,
  AiOutlineWarning,
  AiFillCheckCircle,
} from "react-icons/ai";

const ProjectItem = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark sm:h-full">
        <Image
          src={props.image}
          className="rounded-t-xl border-none w-full h-72 object-cover xl:h-48"
          alt="Single Project"
          width={200}
          height={200}
        />
        <div className="text-justify px-4 py-6">
          <p className="font-general-medium text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">
            {props.title}
          </p>
          <span className="text-lg text-ternary-dark dark:text-ternary-light">
            {props.description}
          </span>
        </div>
        <div className="flex justify-between items-center pb-6">
          {props.inProgress == true ? (
            <span className="flex justify-start flex-row text-red-600 items-center">
              <AiOutlineWarning className="w-5 h-5 mr-2 ml-2"></AiOutlineWarning>
              In progress
            </span>
          ) : (
            <span className="flex justify-start flex-row text-emerald-600 items-center">
              <AiFillCheckCircle className="w-5 h-5 mr-2 ml-2"></AiFillCheckCircle>
              Finished
            </span>
          )}
          <div className="flex justify-end">
            {props.githubLink == "" ? (
              ""
            ) : (
              <a href={props.githubLink} target="blank">
                <FaGithub className="text-ternary-dark dark:text-ternary-light w-7 h-7 mr-5" />
              </a>
            )}
            {props.siteLink == "" ? (
              ""
            ) : (
              <a href={props.siteLink} target="blank">
                <AiOutlineLink className="text-ternary-dark dark:text-ternary-light w-7 h-7 mr-5"></AiOutlineLink>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectItem;
