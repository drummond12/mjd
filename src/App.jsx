import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import Tools from "./components/Tools/Tools";
import JsonFormatter from "./components/Tools/JsonFormatter";
import HomeContent from "./components/HomeContent";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/page1" element={<Content1 />} />
        <Route path="/page2" element={<Content2 />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/json-formatter" element={<JsonFormatter/>} />
      </Routes>
    </Router>
  );
}

export default App;
