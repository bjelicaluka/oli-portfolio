import type { FC } from "react";

const sections = [
  {
    title: "Experience",
    items: [
      {
        title: "Building Swell - Product Designer",
        date: "2022 - Present  |  United States (remote)",
        description:
          "Sole designer of a fast and user-driven team of X members. Established the design system, drove the creation of zero to one products, learning and iterating fast. The goal: make prefab shops life easier.",
      },
      {
        title: "Scotiabank Peru — Product Designer",
        date: "2019 - 2022  |  Peru",
        description:
          "Part of a great team of designers, researchers and service designers. Worked on the first web experience for the bank, digitizing different only-branch capabilities, information architecture redesign, and investments.",
      },
      {
        title: "Glass Design — Product Designer",
        date: "2018 - 2019  |  Peru",
        description:
          "Sole designer of a fast and user-driven team of X members. Established the design system, drove the creation of zero to one products, learning and iterating fast. The goal: make prefab shops life easier.",
      },
      {
        title: "Urbaner — UX Designer",
        date: "2018  |  Peru",
        description:
          "Sole designer. Focused on constant improvements for web and app.",
      },
    ],
  },
  {
    title: "Education",
    items: [
      {
        title: "San Martin de Porres University",
        date: "2018  |  Peru",
        description: "Bachelor’s Degree in Communication Science",
      },
    ],
  },
];

export const Experience: FC = () => {
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
