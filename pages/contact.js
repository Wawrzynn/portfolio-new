import { motion } from "framer-motion";
import ContactDetails from "../components/contact/ContactDetails";
import ContactForm from "../components/contact/ContactForm";
import MetaHeaders from "../components/global/MetaHeaders";
import MyComponent from "@/components/contact/GoogleMap";

export default function contact() {
  return (
    <div>
      <MetaHeaders title="Contact" />

      <h1 className="w-full flex justify-center text-primary-dark dark:text-primary-light text-4xl font-medium">Contact</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          delay: 0.1,
        }}
        className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-center"
      >
        <ContactForm />
        <div className="flex flex-col my-10">
          <ContactDetails />
            <MyComponent/>
        </div>
      </motion.div>
    </div>
  );
}
