import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/landing";
import { AboutPage } from "./pages/about";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
