import Experience from "../components/career/Career";
import MetaHeaders from "../components/global/MetaHeaders";
import { motion } from "framer-motion";

export default function career() {
  return (
    <div className="container mx-auto">
      <MetaHeaders title="Career" />
      <h1 className="w-full flex justify-center text-primary-dark dark:text-primary-light text-4xl font-medium">
        Career
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
        <Experience />
      </motion.div>
    </div>
  );
}
