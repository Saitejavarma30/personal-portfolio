import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Experience from "./Components/Experience";
import Home from "./Components/Home"; // Uncomment this line
import Navbar from "./Components/Navbar";
import Photography from "./Components/photography";
import Projects from "./Components/Projects";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/photos" element={<Photography />} />
      </Routes>
    </Router>
  );
}

export default App;
