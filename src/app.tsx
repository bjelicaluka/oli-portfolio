import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/landing";
import { AboutPage } from "./pages/about";
import { ContentProvider } from "./content-provider";

function App() {
  return (
    <ContentProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </ContentProvider>
  );
}

export default App;
