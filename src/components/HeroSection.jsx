import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  const heroImageMobileRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".headline", { y: 80, opacity: 0 });
      gsap.set(".hero-btn", { y: 20, opacity: 0, scale: 0.95 });
      gsap.set(".hero-image img", { scale: 1.08, y: 50, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top center",
          end: "bottom top",
          scrub: false,
          toggleActions: "play none none reverse",
        },
      });

      tl.to(".headline", {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      })
        .to(
          ".hero-btn",
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.8"
        )
        .to(
          ".hero-image img",
          {
            scale: 1,
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          },
          "-=1.2"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section h-screen flex flex-col md:flex-row items-center justify-between px-6 sm:px-[8vw] bg-black overflow-hidden">
      {/* Text Content */}
      <div className="hero-text pt-22 sm:pt-[40px] flex flex-col items-center md:items-start flex-1 min-w-[30%] z-10 text-center md:text-left">
        <h1 className="headline text-[42px] sm:text-[64px] md:text-[80px] leading-[48px] sm:leading-[56px] font-sans font-normal text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-900">
          Premium
        </h1>
        <h1 className="headline text-[42px] sm:text-[64px] md:text-[80px] leading-[48px] sm:leading-[56px] font-sans font-normal text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-900">
          Renewed
        </h1>
        <button className="hero-btn mt-8 sm:mt-12 px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-white text-black rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
          Find Your Next Phone
        </button>
      </div>

      {/* Hero Image */}
      <div
        className="hero-image mt-10 md:mt-0 flex-1 min-w-[70%] text-center z-50"
        ref={heroImageMobileRef}
      >
        <img
          src="/assets/bannerDesk.png"
          alt="Mobile Banner"
          className="w-full max-h-[400px] sm:max-h-[500px] object-contain animate-[floatUpDown_2s_ease-in-out_infinite_alternate]"
        />
      </div>
    </section>
  );
}

export default HeroSection;
