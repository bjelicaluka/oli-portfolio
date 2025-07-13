import en from "./en";
import es from "./es";

export type LandingContent = {
  hero: {
    title: string;
    location: string;
  };
  projects: {
    title: string;
    projects: {
      title: string;
      description: string;
      image: string;
      projectURL: string;
      company: string;
    }[];
  };
};

export { en, es };
