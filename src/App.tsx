import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Experience from "./Components/Experience";
import Home from "./Components/Home"; // Uncomment this line
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default App;
