import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Institutions from "./pages/Institutions";
import Scholarships from "./pages/Scholarships";
import LandingPage from "./pages/Landing/Landing";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import Terms from "./pages/Terms/Terms";
import Privacy from "./pages/Privacy/Privacy";
import Profile from "./pages/Profile/Profile";
import Partner from "./pages/Partner/Partner";
import "./App.css";

const hideHeaderFooterRoutes = ['/', '/signup', '/signin'];
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/partner" element={<Partner />} />
      </Routes>
      </main>
      {!shouldHideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;