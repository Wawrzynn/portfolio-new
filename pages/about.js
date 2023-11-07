import MetaHeaders from "../components/global/MetaHeaders";
import Introduction from "../components/about/Introduction";
import Tools from "../components/about/Tools";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container mx-auto">
      <MetaHeaders title="About" />
      <h1 className="w-full flex justify-center text-primary-dark dark:text-primary-light text-4xl font-medium">
        About me
      </h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          delay: 0.1,
        }}
      >
        <Introduction />
        <Tools />
      </motion.div>
    </div>
  );
}
