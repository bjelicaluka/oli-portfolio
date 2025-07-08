import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Hero as LandingHero } from "./components/landing/hero";
import { Projects } from "./components/landing/projects";
import { Hero as AboutHero } from "./components/about/hero";

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { AtWork } from "./components/about/at-work";
import { Quotes } from "./components/about/quotes";
import { InLife } from "./components/about/in-life";
import { Experience } from "./components/about/experience";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <LandingHero />
              <Projects />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <AboutHero />
              <AtWork />
              <Quotes />
              <InLife />
              <Experience />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
