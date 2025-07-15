import type { AboutContent } from ".";

const content: AboutContent = {
  hero: {
    title: "Who I am",
  },
  atWork: {
    title: "At work",
    sections: [
      "In the 7 years I’ve worked as a product designer, I’ve been part of very different setups — from being the only designer in the room to collaborating within a team of 20+ people.",
      "I've experienced structured approval processes with quarterly releases, and fast-paced environments where things shipped every week.",
      "These contrasts taught me how to adapt quickly, ask the right questions, and stay focused on what really matters: creating things that help people.",
    ],
  },
  quotes: {
    quote:
      "Working with him was like pairing with a Swiss Army knife — sharp, adaptable, and somehow always calm under pressure",
    person: "- Jordan Easterling, CEO at Building Swell",
  },
  inLife: {
    title: "In life",
    sections: [
      "I love making silly jokes to see people laugh. A good weekend means playing video games with my girlfriend while my dog chews on a bone.",
      "I’m also into football, love a good trip with friends, and recently started Muay Thai — so far, it’s feeling pretty good.",
    ],
  },
  experience: {
    sections: [
      {
        title: "Experience",
        items: [
          {
            title: "Building Swell - Product Designer",
            date: "2022 - Present  |  United States (remote)",
            description:
              "Sole designer in a fast-moving, user-driven team of 9. I built the design system from the ground up and led the creation of zero-to-one products — learning and iterating quickly along the way. The goal: to make life easier for prefab shop teams.",
          },
          {
            title: "Scotiabank Peru — Product Designer",
            date: "2019 - 2022  |  Peru",
            description:
              "I was part of a multidisciplinary team of over 20 designers, researchers, and service designers at a bank serving more than 1.3 million customers in Peru. My focus was on helping digitize services that had only been available in branches — including core areas like investments, international transfers, and loan rescheduling during the pandemic.",
          },
          {
            title: "Glass Design — Product Designer",
            date: "2018 - 2019  |  Peru",
            description:
              "Worked as an outsourced Product Designer for Scotiabank Peru — the sole client I supported during my time at Glass Design. After six months of collaboration, I was hired directly by Scotiabank as a full-time Product Designer.",
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
            date: "2016  |  Peru",
            description: "Bachelor's Degree in Communication Science",
          },
        ],
      },
    ],
  },
};

export default content;
