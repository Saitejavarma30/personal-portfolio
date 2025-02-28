import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Experience from "./Components/Experience";
import Home from "./Components/Home"; // Uncomment this line
import Navbar from "./Components/Navbar";
import Photography from "./Components/photography";
import ScrollToTop from "./scrollToTop.tsx";
import Contact from "./Components/Contact";
import "./App.css"

function App() {
  return (
    <Router>
        <ScrollToTop />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/photos" element={<Photography />} />
          <Route path={"/contact"} element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
