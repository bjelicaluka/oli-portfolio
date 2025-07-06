import type { FC } from "react";
import availableIcon from "/icon/available.svg";
import { MapPinIcon } from "@heroicons/react/16/solid";

export const Hero: FC = () => {
  return (
    <section className="w-full py-40 flex items-center justify-center">
      <div className="flex flex-col gap-y-6 max-w-[640px]">
        <div className="text-7xl font-eyes">
          Hey there, I'm Oli — Product Designer who loves to experiment to make
          things better.
        </div>
        <div className="flex items-center justify-between font-mansfield">
          <div className="flex items-center">
            <img src={availableIcon} alt="Available icon" />
            <span>Currently looking for the next challenge</span>
          </div>
          <div className="flex items-center">
            <MapPinIcon className="w-5" />
            <span>Lima, Peru</span>
          </div>
        </div>
      </div>
    </section>
  );
};
