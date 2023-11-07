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
          <Button text="Contact Me" aria-label="Contact me" />
        </Link>
      </div>
    </section>
  );
}
