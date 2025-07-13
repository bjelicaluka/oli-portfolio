import type { FC } from "react";

export const AtWork: FC = () => {
  return (
    <section className="w-full mb-20">
      <div className="w-full px-20 lg:px-0 lg:w-1/2 flex items-center justify-center lg:justify-end">
        <div className="text-right flex flex-col items-end gap-y-4 max-w-[500px]">
          <div className="text-4xl lg:text-5xl font-eyes">At work</div>

          <div className="text-gray-600 dark:text-gray-300">
            Over the years the 7 years in my career, I've designed products in
            all kinds of setups — from being the only designer in the room to
            working in structured teams.
          </div>

          <div className="text-gray-600 dark:text-gray-300">
            I've shipped in environments with rigorous approval processes with
            quarterly releases, and others where things went live weekly.
          </div>

          <div className="text-gray-600 dark:text-gray-300">
            These contrasts taught me how to adapt quickly, ask the right
            questions, and stay focused on what really matters: designing things
            that help people.
          </div>
        </div>
      </div>
    </section>
  );
};
