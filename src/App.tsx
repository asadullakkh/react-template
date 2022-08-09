import { Routes, Route } from "react-router-dom";
import { Home } from "../src/pages/index";
import { About } from "../src/pages/about";
import { Header } from "../src/components/Hader";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
