import type { FC } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { useContent } from "../../content-provider";

export const Projects: FC = () => {
  const {
    landing: {
      projects: { title, projects },
    },
  } = useContent();

  return (
    <section className="w-full flex flex-col">
      <h2 className="w-full px-10 md:px-20 lg:px-32 text-5xl my-10 font-eyes">
        {title}
      </h2>

      <div className="flex flex-col gap-y-40">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            projectURL={project.projectURL}
            company={project.company}
          />
        ))}
      </div>
    </section>
  );
};

const Project: FC<{
  title: string;
  description: string;
  image: string;
  projectURL: string;
  company: string;
}> = ({ title, description, image, projectURL, company }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full h-full min-h-96 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full min-w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex items-start justify-center flex-col lg:flex-row gap-4 py-5 w-full px-10 md:px-20 lg:px-32">
        <div className="flex flex-col gap-y-2 w-full max-w-full md:max-w-[248px] lg:max-w-[388px]">
          <h3 className="text-2xl font-bold font-eyes">{title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{company}</p>
        </div>
        <div className="flex flex-col gap-y-5 w-full max-w-full md:max-w-[468px] lg:max-w-[658px]">
          <div className="text-gray-600 dark:text-gray-300">{description}</div>
          <a
            href={projectURL}
            className="font-bold pl-5 flex items-center gap-x-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Go to case study</span>
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};
