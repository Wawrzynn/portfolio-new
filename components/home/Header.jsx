import Image from "next/image";
import CVButton from "../reusable/CVButton";

export default function Header() {
  return (
    <section>
      <div className="flex sm:flex-row w-full justify-around items-center mt-14 flex-col">
        <div className="flex flex-col sm:items-start items-center">
          <h1 className="text-4xl font-medium text-primary-dark dark:text-primary-light">
            Hello, my name is <span className="text-secondary">Jędrzej</span>
          </h1>
          <br />
          <p className="text-lg text-primary-dark dark:text-primary-light">
           I am a web developer
          </p>
          <p className="text-lg text-stone-500 dark:text-primary-light">
            and a student of Computer Science
          </p>
          <CVButton text="Get my CV" aria-label="Get my CV"/>
        </div>

        <div>
          <Image
            src="/images/header.png"
            alt="Nathan"
            width={500}
            height={500}
            className="rounded-lg my-10"
          />
        </div>
      </div>
    </section>
  );
}
