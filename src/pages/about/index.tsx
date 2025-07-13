import type { FC } from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Hero } from "./hero";
import { AtWork } from "./at-work";
import { Quotes } from "./quotes";
import { InLife } from "./in-life";
import { Experience } from "./experience";

const SHOW_QUOTES = false;

export const AboutPage: FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <AtWork />
      {SHOW_QUOTES && <Quotes />}
      <InLife />
      <Experience />
      <Footer />
    </>
  );
};
