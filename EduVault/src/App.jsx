import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Institutions from "./pages/Institutions";
import Scholarships from "./pages/Scholarships";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/institutions" element={<Institutions />} />
        <Route path="/scholarships" element={<Scholarships />} />
      </Routes>
    </Router>
  );
}

export default App;