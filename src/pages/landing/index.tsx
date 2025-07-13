import type { FC } from "react";
import { Header } from "../../components/header";
import { Projects } from "./projects";
import { Footer } from "../../components/footer";
import { Hero } from "./hero";

export const LandingPage: FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </>
  );
};
