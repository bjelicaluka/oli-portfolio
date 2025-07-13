import type { FC } from "react";
import { useContent } from "../../content-provider";

export const Experience: FC = () => {
  const {
    about: {
      experience: { sections },
    },
  } = useContent();

  return (
    <section className="w-full py-10 lg:py-20 flex flex-col lg:flex-row gap-y-20 items-start justify-center">
      {sections.map((section, index) => (
        <SectionComponent
          key={index}
          title={section.title}
          items={section.items}
        />
      ))}
    </section>
  );
};

type Section = {
  title: string;
  items: Item[];
};

const SectionComponent: FC<Section> = ({ title, items }) => {
  return (
    <div className="max-w-[500px] lg:max-w-2xl mx-20 lg:mx-10">
      <h2 className="text-4xl lg:text-5xl font-eyes mb-10">{title}</h2>

      <div className="flex flex-col gap-y-10">
        {items.map((item, index) => (
          <ItemComponent
            key={index + item.title}
            title={item.title}
            date={item.date}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

type Item = {
  title: string;
  date: string;
  description: string;
};

const ItemComponent: FC<Item> = ({ title, date, description }) => {
  return (
    <div className="flex items-start flex-col gap-y-2">
      <h3 className="text-xl lg:text-2xl font-semibold">{title}</h3>
      <div className="text-sm lg:text-md">{date}</div>
      <div className="text-sm lg:text-md text-gray-600 dark:text-gray-300">
        {description}
      </div>
    </div>
  );
};
