import type { FC } from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Hero } from "./hero";
import { AtWork } from "./at-work";
import { Quotes } from "./quotes";
import { InLife } from "./in-life";
import { Experience } from "./experience";

export const AboutPage: FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <AtWork />
      <Quotes />
      <InLife />
      <Experience />
      <Footer />
    </>
  );
};
