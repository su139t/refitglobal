import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import HomePage from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs"; // assuming this is your About component
import RefurfishedMobile from "./components/pages/RefurfishedMobile";
import WhyRefurbished from "./components/pages/WhyRefurbished";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/mobile" element={<RefurfishedMobile />} />
        <Route path="/whyrefurbished" element={<WhyRefurbished />} />
      </Routes>

      <ScrollReveal y={70} duration={0.3} delay={0.2}>
        <Footer className="z-[999]" />
      </ScrollReveal>
    </Router>
  );
}

export default App;
