import { motion } from "framer-motion";
import ContactDetails from "../components/contact/ContactDetails";
import ContactForm from "../components/contact/ContactForm";
import MetaHeaders from "../components/global/MetaHeaders";
import Map from "@/components/contact/GoogleMap";

export default function contact() {
  return (
    <div className="container mx-auto">
      <MetaHeaders title="Contact" />

      <h1 className="w-full flex justify-center text-primary-dark dark:text-primary-light text-4xl font-medium">
        Contact
      </h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          delay: 0.1,
        }}
        className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 my-10"
      >
        <ContactForm />
        <div className="flex flex-col lg:items-start items-center">
          <ContactDetails />
          <Map />
        </div>
      </motion.div>
    </div>
  );
}
