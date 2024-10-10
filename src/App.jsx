import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import Content3 from "./components/Content3";
import HomeContent from "./components/HomeContent";

function App() {
  return (
    <Router>
      {/* The header remains constant across all pages */}
      <Header />

      {/* Define the routes */}
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/page1" element={<Content1 />} />
        <Route path="/page2" element={<Content2 />} />
        <Route path="/page3" element={<Content3 />} />
      </Routes>
    </Router>
  );
}

export default App;
