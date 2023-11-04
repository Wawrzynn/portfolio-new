import React from "react";
import PutPhoto from "../../public/images/put.svg";
import Image from "next/image";
import SenseImage from "../../public/images/sense.svg";
import ZsoImage from "../../public/images/zso2.png";

const experience = [
  {
    title: "Master's Degree",
    company: "Poznan University of Technology",
    startYear: "mar. 2022",
    endYear: "Present",
    companyLink: "https://www.put.poznan.pl/en",
    desc: "I am currently studying at Poznan University of Technology with a specialization in Computer Science (Web technologies).",
    photo: PutPhoto,
  },
  {
    title: "Web developer",
    company: "Sense Monitoring",
    startYear: "jun. 2021",
    endYear: "feb. 2023",
    companyLink: "https://sense-monitoring.com/en/",
    desc: "I worked as a web developer at Sense Monitoring. I worked with Groovy, Grails, Hibernate and many other technologies.",
    photo: SenseImage,
  },
  {
    title: "Bachelor's Degree",
    company: "Poznan University of Technology",
    startYear: "sep. 2018",
    endYear: "feb. 2022",
    companyLink: "https://www.put.poznan.pl/en",
    desc: "I graduated from Poznan University of Technology with a specialization in Automatics and Robotics.",
    photo: PutPhoto,
  },
  {
    title: "High School",
    company: "XVI LO im.Charlesa de Gaulle'a w Poznaniu",
    startYear: "nov. 2015",
    endYear: "jun. 2018",
    companyLink: "https://zso2.pl/",
    desc: "I graduated from high school with a specialization in mathematics and physics.",
    photo: ZsoImage,
  },
];

export default function Experience() {
  return (
    <section className="bg-white dark:bg-primary-dark">
      <div className="mt-4 mb-10">
        <div className="grid grid-cols-1 max-w-xl mx-auto pt-20">
          {/* Experience card */}
          {experience.map((exp, idx) => (
            <div key={idx}>
              <div className="flex items-center">
                <ExperienceCard
                  key={idx}
                  title={exp.title}
                  desc={exp.desc}
                  startYear={exp.startYear}
                  endYear={exp.endYear}
                  company={exp.company}
                  companyLink={exp.companyLink}
                />
                {idx%2 === 0 ? <Image src={exp.photo} alt="PutPhoto" className="absolute right-64 w-28 hidden xl:block"/>: <Image src={exp.photo} alt="PutPhoto" className="absolute left-64 w-40 hidden xl:block"/>}
              </div>
              {idx === experience.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-primary-dark dark:bg-primary-light rounded-full relative z-10">
                    <div className="w-4 h-4 bg-primary-dark dark:bg-primary-light rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({
  title,
  desc,
  startYear,
  endYear,
  company,
  companyLink,
}) => {
  return (
    <div className="experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-secondary-dark z-10 mx-4">
      <h1 className="font-semibold text-xl text-primary-dark dark:text-primary-light">
        {title}
      </h1>
      <a
        href={companyLink}
        className="text-gray-500 hover:text-secondary-light"
        target="blank"
      >
        {company}
      </a>
      <h1 className="text-primary-dark dark:text-primary-light">
        {startYear} - {endYear}
      </h1>
      <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
    </div>
  );
};
