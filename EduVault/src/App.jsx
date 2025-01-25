import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Institutions from "./pages/Institutions";
import Scholarships from "./pages/Scholarships";
import LandingPage from "./pages/Landing/Landing";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import "./App.css";

const hideHeaderFooterRoutes = ['/', '/signup', '/signin'];

function App() {
  const location = useLocation();
  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(location.pathname);
  return (
    <div className="EduVault">
      {!shouldHideHeaderFooter && <Header />}
      <main>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        <Route path="/institutions" element={<Institutions />} />
        <Route path="/scholarships" element={<Scholarships />} />
      </Routes>
      </main>
      {!shouldHideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;