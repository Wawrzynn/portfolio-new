import Image from "next/image";
import TailwindImage from "../../public/images/tailwindcss.svg";
import ReactImage from "../../public/images/react.svg";
import githubImage from "../../public/images/github.svg";
import NextImage from "../../public/images/next.png";
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
} from "react-icons/fi";

function Footer() {

  const socialLinks = [
    {
      id: 1,
      icon: <FiGithub />,
      url: "https://github.com/Wawrzynn",
    },
    {
      id: 2,
      icon: <FiTwitter />,
      url: "https://twitter.com/wawrzynnnn",
    },
    {
      id: 3,
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/in/jedrzej-kosakowski/",
    },
  ];

  return (
    <footer className="flex flex-col w-screen px-5 border-t border-fun-pink-darker z-5 bg-bg pb-10">
      <div className=" border-primary-light dark:border-secondary-dark my-10">
        <div className="font-general-regular flex flex-col justify-center items-center">
          <p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
            Find me on:
          </p>
          <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="text-gray-400 hover:text-primary-dark dark:hover:text-primary-light cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm duration-300 px-3 py-3"
              >
                <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
              </a>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-4xl w-full m-auto text-center text-fun-gray border-t border-fun-pink-dark">
        <div className="flex flex-col pt-5 items-center justify-center  text-primary-dark dark:text-ternary-light">
          <div className="inline-flex items-center uppercase text-xs font-bold tracking-widest">
            Made with{" "}
            <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
              <span>
                <Image src={ReactImage} width="26" title="React" alt="React icon"/>
                <span className="sr-only">React</span>
              </span>
              <span>
                <Image src={NextImage} width="26" title="Next" alt="Nextjs icon"/>
                <span className="sr-only">NextJS</span>
              </span>
              <span>
                <Image src={TailwindImage} width="26" title="TailwindCSS" alt="Tailwind icon"/>
                <span className="sr-only">TailwindCSS</span>
              </span>
            </div>
          </div>
          <div className="mt-2 text-xs ">
            Made by{" "}
            <a
              href="mailto:contact@braydentw.io"
              className="text-fun-gray-light font-medium"
            >
              Jędrzej Kosakowski
            </a>
            . All rights reserved.
          </div>
        </div>
      </div>

      <div className="mt-8 text-center sm:text-right sm:-mt-12 ">
        <a
          className="w-auto inline-flex items-center sm:w-auto font-bold flex-shrink text-xs border px-4 py-2 rounded-xl cursor-pointer opacity-50 hover:border-fun-pink-dark hover:opacity-100 transition-all duration-300 ease-in-out"
          href="https://github.com/Wawrzynn/portfolio-new"
          target="_blank"
          rel="nooreferrer"
        >
          <Image src={githubImage} width={16} height={16} alt="Github Icon" />
          <p className="text-primary-dark dark:text-ternary-light">
            <span className="ml-2 ">View Source Code </span>
          </p>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
