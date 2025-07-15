import type { LandingContent } from ".";

import weldingImage from "/images/welding.png";
import deliveryImage from "/images/delivery.png";
import architectureImage from "/images/architecture.png";
import abstractImage from "/images/abstract.png";
import dogImage from "/images/dog.png";

const content: LandingContent = {
  hero: {
    title:
      "Hey there, I'm Oli — Product Designer who loves to experiment to make things better.",
    location: "Lima, Peru",
  },
  projects: {
    title: "What I do",
    projects: [
      {
        title: "From chaos to clarity on the shop floor",
        description:
          "Led the design of a flexible production tracking module that brought clarity to busy prefab shop floors. Designed for more than 30 shop leads and operators across shops, the solution became a daily habit, with over 80% of targeted customers using it consistently.",
        image: weldingImage,
        projectURL:
          "https://drive.google.com/file/d/1K62kwWHh7c51LO-bGBKAsM1SVaOJgzpO/view?usp=sharing",
        company: "Building Swell — US & Canada",
      },
      {
        title: "Rebuilding trust across the delivery chain",
        description:
          "Designed a delivery management system that replaced scattered calls and spreadsheets with a unified, trackable workflow. It helped shop and on-site teams stay aligned with clear statuses, shared visibility, and reliable proof at every handoff.",
        image: deliveryImage,
        projectURL:
          "https://drive.google.com/file/d/1OFwrufsqiYjFFpbMagAYGQY0aRUtsiZv/view?usp=sharing",
        company: "Building Swell — US & Canada",
      },
      {
        title: "Designing trust into digital investing",
        description:
          "Created the bank’s first digital experience for investing in mutual funds — a high-stakes product with low customer understanding. Mapped the end-to-end journey from first investment to withdrawal, simplified the concept of risk, and co-created the experience with customers, advisors, and stakeholders.",
        image: architectureImage,
        projectURL:
          "https://drive.google.com/drive/folders/185RSQ1cz1IRYSB6xWB_cHWU06drjf9dR?usp=sharing",
        company: "Scotiabank — Peru",
      },
      {
        title: "Helping customers find what was already there",
        description:
          "Redesigned the information architecture across the bank’s web and app platforms to surface key tools and organize account-related settings more intuitively. The work, grounded in customer interviews and card sorting, helped reduce confusion and contributed to a 10% increase in NPS.",
        image: abstractImage,
        projectURL:
          "https://drive.google.com/file/d/1DQqjytJinwtUHtn5g8hzNj2-TKDO0eBq/view?usp=sharing",
        company: "Scotiabank — Peru",
      },
      {
        title: "Dog Island",
        description:
          "⚠️ This project is still in progress. I’m working on the last details before sharing it!",
        image: dogImage,
        projectURL:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fchangelog.com%2Fnews%2Fmake-memes-anywhere-you-can-type-a-url-wgR&psig=AOvVaw0QKsVCrLKiTlsHX6CLiGY7&ust=1751890940508000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOi97rucqI4DFQAAAAAdAAAAABAE",
        company: "Personal Project",
      },
    ],
  },
};

export default content;
