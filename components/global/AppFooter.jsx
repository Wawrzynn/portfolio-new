import { useState } from "react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";

import githubImage from "../../public/images/github.svg";

function Footer() {
  const [activeTheme, setTheme] = useThemeSwitcher();

  return (
    <footer className="flex flex-col w-screen px-5 py-10 border-t border-fun-pink-darker z-5 bg-bg ">
      <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-fun-gray border-t border-fun-pink-dark">
        <p className="flex flex-col items-center justify-center  text-primary-dark dark:text-ternary-light">
          <div className="inline-flex items-center uppercase text-xs font-bold tracking-widest">
            Made with{" "}
            <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  width="26"
                  title="React"
                />
                <span className="sr-only">React</span>
              </span>
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                  width="40"
                  className="invert"
                  title="NextJS"
                />
                <span className="sr-only">NextJS</span>
              </span>
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  width="26"
                  title="TailwindCSS"
                />
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
        </p>
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
