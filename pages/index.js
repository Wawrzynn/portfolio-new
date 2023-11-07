import MetaHeaders from "@/components/global/MetaHeaders";
import Header from "@/components/home/Header";
import Tools from "@/components/home/Tools";
import Projects from "@/components/home/Projects";
import Contact from "@/components/home/Contact";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="container mx-auto">
      <MetaHeaders title="Home" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          delay: 0.1,
        }}
      >
        <Header />
        <Projects />
        <Tools />
        <Contact />
      </motion.div>
    </div>
  );
}
