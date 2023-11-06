import Button from "../reusable/Button";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="pb-20">
      <h1 className="w-full flex justify-center text-primary-dark dark:text-primary-light text-4xl font-medium sm:mt-40 mt-10">
        Interested in working with me?
      </h1>
      <div className="flex justify-center mt-10">
        <Link href="/contact">
          <span className="font-general-medium  px-7 py-4 text-white text-center font-medium tracking-wider bg-primary-dark dark:bg-primary-light dark:text-primary-dark focus:ring-1 rounded-lg mt-6 duration-500 flex flex-row justify-between items-center">
            <Button title="Contact me" aria-label="Contact me" />
          </span>
        </Link>
      </div>
    </section>
  );
}
