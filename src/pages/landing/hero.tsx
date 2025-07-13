import type { FC } from "react";
import { MapPinIcon } from "@heroicons/react/16/solid";
import { useContent } from "../../content-provider";

export const Hero: FC = () => {
  const {
    landing: {
      hero: { title, location },
    },
  } = useContent();

  return (
    <section className="w-full py-20 md:py-40 flex items-center justify-center">
      <div className="flex flex-col gap-y-6 w-full px-10 md:px-20 lg:px-32 max-w-[896px]">
        <div className="text-5xl md:text-7xl font-eyes">{title}</div>
        <div className="flex items-center justify-start font-mansfield">
          <div className="flex items-center min-w-[100px]">
            <MapPinIcon className="w-5" />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
