import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import MainSection from "./components/HeroSection";
import Scroll3DSection from "./components/Scroll3DSection";
import CircularGallery from "./components/CircularGallery";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import FaqAccordion from "./components/FaqAccordion";
import PressReleaseSection from "./components/PressReleaseSection";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <>
      <Navbar />
      <MainSection />
      <Scroll3DSection />

      {/* Circular Gallery Section */}
      <section className="relative z-20 bg-black py-12 px-4 md:px-16">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h1 className="text-white text-center text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight mb-10">
              Explore Top Refurbished Mobile Brands Trusted by Millions
            </h1>
          </ScrollReveal>

          <ScrollReveal y={100} duration={1.2} delay={0.5}>
            <div className="overflow-hidden h-[400px] relative">
              <CircularGallery
                bend={-3}
                scrollSpeed={0.5}
                textColor="#ffffff"
                borderRadius={0.05}
                scrollEase={0.05}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
      <PressReleaseSection />
      <FaqAccordion y={100} duration={1.2} delay={0.5} />
      <ScrollReveal y={100} duration={0.5} delay={0.2}>
        <Footer className="z-[999]" />
      </ScrollReveal>
    </>
  );
}

export default App;
