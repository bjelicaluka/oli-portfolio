import type { FC } from "react";
import backgroundImage from "/images/in-life.png";
import { useThemePreference } from "../../util/theme-preference";
import { useContent } from "../../content-provider";

export const InLife: FC = () => {
  const { isDarkMode } = useThemePreference();

  const {
    about: {
      inLife: { title, sections },
    },
  } = useContent();

  return (
    <section
      className="w-full flex items-center justify-center lg:justify-end min-h-[400px]"
      style={{
        backgroundImage: isDarkMode
          ? `linear-gradient(90deg,rgba(73, 116, 159, 0.1) 0%, rgba(34, 56, 78, 0.5) 60%, rgba(26, 26, 26, 0.7) 100%), url(${backgroundImage})`
          : `linear-gradient(90deg,rgba(26, 26, 26, 0.5) 0%, rgba(34, 56, 78, 0.2) 30%, rgba(255, 255, 255, 0.65) 100%), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full mx-20 lg:mx-0 lg:w-1/2 flex items-center justify-center">
        <div className="text-left flex flex-col items-start gap-y-4 max-w-[500px]">
          <div className="text-4xl lg:text-5xl font-eyes">{title}</div>

          {sections.map((section, i) => (
            <div key={i}>{section}</div>
          ))}
        </div>
      </div>
    </section>
  );
};
