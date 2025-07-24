import React, { useEffect, useState } from "react";

const SplashScreen = ({ onComplete }) => {
  const [stage, setStage] = useState("start"); // stages: start → logo → showName → showTagline → fadeOut

  useEffect(() => {
    const timeline = async () => {
      setStage("logo");

      setTimeout(() => setStage("showName"), 1000); // Show name after logo
      setTimeout(() => setStage("showTagline"), 2000); // Show tagline
      setTimeout(() => setStage("fadeOut"), 4000); // Start fade out
      setTimeout(() => onComplete(), 4800); // Remove splash
    };

    timeline();
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-1000 ${
        stage === "fadeOut" ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white opacity-10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Logo + Brand Name */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo + Name container */}
        <div
          className={`flex items-center justify-center transition-all duration-1000 gap-3 md:gap-5 ${
            stage !== "start"
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {/* Logo image */}
          <img
            src="/assets/logo.png"
            alt="Refit Logo"
            className={`w-16 md:w-20 transition-all duration-1000 ${
              stage === "showName" ||
              stage === "showTagline" ||
              stage === "fadeOut"
                ? "translate-x-[-20px]"
                : "translate-x-0"
            }`}
          />

          {/* Logo Name image */}
          <img
            src="/assets/logoname.png"
            alt="Refit Name"
            className={`w-32 md:w-40 transition-all duration-1000 ${
              stage === "showName" ||
              stage === "showTagline" ||
              stage === "fadeOut"
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-4"
            }`}
          />
        </div>

        {/* Tagline & Loading */}
        <div
          className={`mt-8 text-center transition-all duration-800 ${
            stage === "showTagline" || stage === "fadeOut"
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            Premium Refurbished Mobiles
            <br />
            <span className="text-gray-400 text-base md:text-lg">
              Trusted by Millions Worldwide
            </span>
          </p>

          {/* Loading bar */}
          <div className="mt-6 w-48 h-1 bg-gray-800 rounded-full overflow-hidden mx-auto">
            <div className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-loading-bar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
