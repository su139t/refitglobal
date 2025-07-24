import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import IphoneModel from "./IphoneModel";

gsap.registerPlugin(ScrollTrigger);

const panelsData = [
  {
    icon: "/assets/warranty.webp",
    title: "6 Month Warranty",
    text: "Every phone is backed by a 6-month warranty to ensure peace of mind and quality assurance.",
    position: "top-[7%] left-[5%] md:top-[7%] md:left-[10%]",
  },
  {
    icon: "/assets/freeshiping.webp",
    title: "Free Shipping All Over India",
    text: "Enjoy fast and free delivery across India — no extra charges, no hidden fees.",
    position: "top-[7%] right-[5%] md:top-[7%] md:right-[10%]",
  },
  {
    icon: "/assets/47check.webp",
    title: "47 Quality Checkpoints",
    text: "Each phone passes through 47 rigorous quality tests for optimal performance and appearance.",
    position: "bottom-[7%] left-[5%] md:bottom-[7%] md:left-[10%]",
  },
  {
    icon: "/assets/7dayreplace.webp",
    title: "7-Day Easy Replacement",
    text: "Not satisfied? Replace your phone within 7 days — no questions asked.",
    position: "bottom-[7%] right-[5%] md:bottom-[7%] md:right-[10%]",
  },
];

export default function Scroll3DSection() {
  const modelRef = useRef();
  const panelRefs = useRef([]);
  let currentVisiblePanel = null;

  useEffect(() => {
    const waitForModel = () => {
      if (!modelRef.current) {
        requestAnimationFrame(waitForModel);
        return;
      }

      const ctx = gsap.context(() => {
        panelRefs.current.forEach((ref) => gsap.set(ref, { opacity: 0 }));

        gsap
          .timeline({
            scrollTrigger: {
              trigger: "#scroll-container",
              start: "top top",
              end: "bottom bottom",
              scrub: 0.5,
              pin: "#canvas-wrapper",
              fastScrollEnd: true,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                const index = Math.floor(self.progress * panelsData.length);
                if (index !== currentVisiblePanel) showOnlyPanel(index);
              },
            },
          })
          .to(modelRef.current.rotation, {
            y: Math.PI / 4,
            x: 0.1,
            duration: 0.9,
          })
          .to(modelRef.current.rotation, {
            y: Math.PI / 2,
            x: 0.2,
            duration: 0.9,
          })
          .to(modelRef.current.rotation, { y: Math.PI, x: 0, duration: 0.9 })
          .to(modelRef.current.rotation, {
            y: Math.PI * 1.5,
            x: -0.2,
            duration: 0.9,
          })
          .to(modelRef.current.rotation, {
            y: Math.PI * 2,
            x: 0,
            duration: 0.8,
            ease: "power2.inOut",
          });
      });

      return () => ctx.revert();
    };

    waitForModel();

    function showOnlyPanel(index) {
      currentVisiblePanel = index;
      panelRefs.current.forEach((ref, i) => {
        gsap.to(ref, {
          opacity: i === index ? 1 : 0,
          scale: i === index ? 1 : 0.9,
          y: i === index ? 0 : 40,
          duration: 0.6,
          ease: "power2.out",
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      id="scroll-container"
      className="h-[320vh] bg-gradient-to-b from-black via-slate-600 to-black relative overflow-hidden"
    >
      <div
        id="canvas-wrapper"
        className="h-screen w-full relative flex items-center justify-center"
      >
        {/* Info Panels */}
        {panelsData.map((panel, i) => (
          <div
            key={i}
            ref={(el) => (panelRefs.current[i] = el)}
            className={`info-panel absolute z-20 max-w-[90vw] md:max-w-xs p-4 sm:p-5 md:p-6 rounded-2xl 
              backdrop-blur-lg bg-white/5 shadow-xl 
              text-white opacity-0 transition-all duration-500 transform
              ${panel.position}`}
          >
            <img
              className="mb-3 h-14 w-14 md:h-[90px] md:w-[90px] drop-shadow-md"
              src={panel.icon}
              alt=""
            />
            <div className="text-lg sm:text-xl md:text-[22px] font-bold font-serif bg-gradient-to-r from-white via-sky-300 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
              {panel.title}
            </div>
            <p className="text-xs sm:text-sm md:text-base mt-2 text-slate-200 leading-relaxed tracking-wide">
              {panel.text}
            </p>
          </div>
        ))}

        {/* 3D Canvas */}
        <Canvas
          gl={{ preserveDrawingBuffer: true }}
          dpr={[1, 2]}
          className="!w-full !h-full absolute z-10"
          camera={{ position: [0, 0, 4.5], fov: 35 }}
        >
          {/* Ambient light – brightens the entire scene uniformly */}
          <ambientLight intensity={9} color={"#ffffff"} />

          {/* Directional light – like sunlight, useful for sharp shadows */}
          <directionalLight
            position={[5, 5, 5]}
            intensity={3}
            color={"#ffffff"}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />

          {/* Spot light – focused brightness on the model */}
          <spotLight
            position={[0, 5, 5]}
            angle={0.4}
            penumbra={0.5}
            intensity={9}
            color={"#ffffff"}
            castShadow
          />

          <Suspense fallback={null}>
            <IphoneModel ref={modelRef} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
