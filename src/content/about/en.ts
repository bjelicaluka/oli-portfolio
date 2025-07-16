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
              "Sole designer at an early-stage construction tech startup building software for prefab manufacturing teams.\n• Designed and shipped multiple zero-to-one tools that help prefab shops track production and manage tasks more efficiently.\n• Created the company’s design system from scratch, speeding up design–dev collaboration and scaling consistency.\n• Led the design of a production tracking module with 80%+ stickiness, becoming a core part of daily shop operations.\n• Joined early and helped shape the product during a phase that led to $3.03M in seed funding (March 2023).",
          },
          {
            title: "Scotiabank Peru — Product Designer",
            date: "2019 - 2022  |  Peru",
            description:
              "Part of a multidisciplinary team of 20+ designers and researchers at a bank serving over 1.3 million customers.\n• Contributed to the digitization of key financial services that were previously in-branch only — including international transfers, mutual funds, and stock investments.\n• Helped over 100,000 customers restructure their loans through digital channels during the pandemic.\n• Collaborated on a full redesign of the app and web platforms’ information architecture, contributing to a +10% increase in NPS.",
          },
          {
            title: "Glass Design — Product Designer",
            date: "2018 - 2019  |  Peru",
            description:
              "Worked as an outsourced Product Designer for Scotiabank Peru — the sole client I supported during my time at Glass Design. After six months of collaboration, I was hired directly by Scotiabank as a full-time employee.",
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
