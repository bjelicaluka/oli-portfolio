import type { FC } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

import weldingImage from "/images/welding.png";
import deliveryImage from "/images/delivery.png";
import architectureImage from "/images/architecture.png";
import abstractImage from "/images/abstract.png";
import dogImage from "/images/dog.png";

type Project = {
  title: string;
  description: string;
  image: string;
  projectURL: string;
  company: string;
};

const projects: Project[] = [
  {
    title: "From chaos to clarity on the shop floor",
    description:
      "I led the design of a flexible production tracking module that brought clarity to busy prefab shop floors. Designed for more than 30 shop leads and operators across shops, the solution became a daily habit, with over 80% of targeted customers using it consistently.",
    image: weldingImage,
    projectURL:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fchangelog.com%2Fnews%2Fmake-memes-anywhere-you-can-type-a-url-wgR&psig=AOvVaw0QKsVCrLKiTlsHX6CLiGY7&ust=1751890940508000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOi97rucqI4DFQAAAAAdAAAAABAE",
    company: "Building Swell — US & Canada",
  },
  {
    title: "Delivery made simple and other title",
    description:
      "I led the design of a flexible production tracking module that brought clarity to busy prefab shop floors. Designed for more than 30 shop leads and operators across shops, the solution became a daily habit, with over 80% of targeted customers using it consistently.",
    image: deliveryImage,
    projectURL:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fchangelog.com%2Fnews%2Fmake-memes-anywhere-you-can-type-a-url-wgR&psig=AOvVaw0QKsVCrLKiTlsHX6CLiGY7&ust=1751890940508000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOi97rucqI4DFQAAAAAdAAAAABAE",
    company: "Building Swell — US & Canada",
  },
  {
    title: "Architecture Information redesign",
    description:
      "I led the design of a flexible production tracking module that brought clarity to busy prefab shop floors. Designed for more than 30 shop leads and operators across shops, the solution became a daily habit, with over 80% of targeted customers using it consistently.",
    image: architectureImage,
    projectURL:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fchangelog.com%2Fnews%2Fmake-memes-anywhere-you-can-type-a-url-wgR&psig=AOvVaw0QKsVCrLKiTlsHX6CLiGY7&ust=1751890940508000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOi97rucqI4DFQAAAAAdAAAAABAE",
    company: "Building Swell — US & Canada",
  },
  {
    title: "Tracking Phases and other stuff",
    description:
      "I led the design of a flexible production tracking module that brought clarity to busy prefab shop floors. Designed for more than 30 shop leads and operators across shops, the solution became a daily habit, with over 80% of targeted customers using it consistently.",
    image: abstractImage,
    projectURL:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fchangelog.com%2Fnews%2Fmake-memes-anywhere-you-can-type-a-url-wgR&psig=AOvVaw0QKsVCrLKiTlsHX6CLiGY7&ust=1751890940508000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOi97rucqI4DFQAAAAAdAAAAABAE",
    company: "Building Swell — US & Canada",
  },
  {
    title: "Dog Island",
    description:
      "I led the design of a flexible production tracking module that brought clarity to busy prefab shop floors. Designed for more than 30 shop leads and operators across shops, the solution became a daily habit, with over 80% of targeted customers using it consistently.",
    image: dogImage,
    projectURL:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fchangelog.com%2Fnews%2Fmake-memes-anywhere-you-can-type-a-url-wgR&psig=AOvVaw0QKsVCrLKiTlsHX6CLiGY7&ust=1751890940508000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOi97rucqI4DFQAAAAAdAAAAABAE",
    company: "Building Swell — US & Canada",
  },
];

export const Projects: FC = () => {
  return (
    <section className="w-full flex flex-col">
      <h2 className="w-full px-10 md:px-20 lg:px-32 text-5xl my-10 font-eyes">
        What I do
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
