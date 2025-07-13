import type { FC } from "react";
import { useContent } from "../../content-provider";

export const Hero: FC = () => {
  const {
    about: {
      hero: { title },
    },
  } = useContent();

  return (
    <section className="w-full py-20 lg:py-40 flex items-center justify-center">
      <div className="text-5xl lg:text-7xl font-eyes">{title}</div>
    </section>
  );
};
