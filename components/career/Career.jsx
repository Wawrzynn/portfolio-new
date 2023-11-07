import { experienceData } from "../../data/data";

export default function Experience() {
  return (
    <section className="bg-white dark:bg-primary-dark">
      <div className="mt-4 mb-10">
        <div className="grid grid-cols-1 max-w-xl mx-auto pt-20">
          {experienceData.map((exp, idx) => (
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
              </div>
              {idx === experienceData.length - 1 ? null : (
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
