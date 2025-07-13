import en from "./en";
import es from "./es";

export type AboutContent = {
  hero: {
    title: string;
  };
  atWork: {
    title: string;
    sections: string[];
  };
  quotes: {
    quote: string;
    person: string;
  };
  inLife: {
    title: string;
    sections: string[];
  };
  experience: {
    sections: {
      title: string;
      items: {
        title: string;
        date: string;
        description: string;
      }[];
    }[];
  };
};

export { en, es };
