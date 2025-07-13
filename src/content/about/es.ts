import type { AboutContent } from ".";

const content: AboutContent = {
  hero: {
    title: "Who I am",
  },
  atWork: {
    title: "At TEST",
    sections: [
      "Over the years the 7 years in my career, I've designed products in all kinds of setups — from being the only designer in the room to working in structured teams.",
      "I've shipped in environments with rigorous approval processes with quarterly releases, and others where things went live weekly.",
      "These contrasts taught me how to adapt quickly, ask the right questions, and stay focused on what really matters: designing things that help people.",
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
      "I love making silly jokes just to see people laugh. A good weekend means video games with my girlfriend while my dog chews on a bone.",
      "I'm also into football, love a good trip with friends, and recently started Muay Thai — so far, it's feeling pretty good.",
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
            description: "Bachelor's Degree in Communication Science",
          },
        ],
      },
    ],
  },
};

export default content;
