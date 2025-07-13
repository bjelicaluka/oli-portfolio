import type { FC } from "react";
import { useContent } from "../../content-provider";

export const AtWork: FC = () => {
  const {
    about: {
      atWork: { title, sections },
    },
  } = useContent();

  return (
    <section className="w-full mb-20">
      <div className="w-full px-20 lg:px-0 lg:w-1/2 flex items-center justify-center lg:justify-end">
        <div className="text-right flex flex-col items-end gap-y-4 max-w-[500px]">
          <div className="text-4xl lg:text-5xl font-eyes">{title}</div>

          {sections.map((section, i) => (
            <div className="text-gray-600 dark:text-gray-300" key={i}>
              {section}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
