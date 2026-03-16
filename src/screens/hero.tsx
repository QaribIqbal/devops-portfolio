"use client";
// import LightRays from "../components/LightRays";
import CardNav from "../components/CardNav";
import TextType from "../components/TextType";
import React, { useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GooeyNav from "@/components/GooeyNav";


const hero = () => {

 const items = [
  { label: "About Me", href: "/#about" },     // absolute fragment -> always targets home
  { label: "Work", href: "/Portfolio" }, // use lowercase / correct route path
  { label: "Contact", href: "/#connect" } // absolute contact fragment
];


  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);
  const texthead = useRef(null);
  useGSAP(() => {
    // left in from x (little overshoot)
    gsap.from(texthead.current, {
      opacity: -1,
      scale: 0.5,
      duration: 5,
      ease: "power4.out", // subtle overshoot then settle
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 14%",
        end: "top -55%",
      },
    });
  });
  return (
    <div 
      ref={sectionRef}
      className="flex flex-col justify-center items-center w-full min-h-screen relative pt-24"
    >
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-8 mt-0 relative z-10 flex-grow pb-24">
    
        {/* <div
          className="absolute top-8 left-1/2 transform -translate-x-1/2 z-50 w-100 px-4 py-0 pointer-events-auto"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div> */}

        <div className="w-full md:w-[60%] lg:w-[50%] mx-auto md:mx-0 z-20 mt-10 md:mt-0 relative">
          <h1 className="text-5xl lg:text-7xl font-black text-textMain tracking-tight mb-6">
            Stop firefighting deployments. <br className="hidden md:block"/>Automate the boring ops. <br className="hidden md:block"/>Sleep again.
          </h1>
          <p className="text-xl text-textMuted mb-8 max-w-2xl">
            I’m Qarib, your Tech Ops & Deployment Partner for agencies and lean SaaS teams.
          </p>
          <ul className="space-y-3 mb-10 text-lg text-textMuted text-left">
            <li className="flex items-start">
              <span className="text-teal text-[10px] mt-2 mr-3 flex-shrink-0">●</span> 
              <span>No more surprise downtime.</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal text-[10px] mt-2 mr-3 flex-shrink-0">●</span> 
              <span>No more manual report madness.</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal text-[10px] mt-2 mr-3 flex-shrink-0">●</span> 
              <span>No more 'it works on my machine' deploys.</span>
            </li>
          </ul>
          
          <div className="flex flex-col sm:flex-row gap-6 items-center md:justify-start">
            <a href="/#connect" className="bg-teal text-main px-8 py-4 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all shadow-lg text-center w-full sm:w-auto">
              Fix My Deployments
            </a>
            <a href="https://www.linkedin.com/in/qarib-iqbal92" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-white font-medium hover:underline underline-offset-4 transition-colors text-center">
              Or message me on LinkedIn &rarr;
            </a>
          </div>
        </div>

        <div ref={texthead} className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-[60%] lg:w-[50%] flex justify-center items-center z-0 opacity-40 md:opacity-80 mix-blend-screen pointer-events-none h-[80vh] md:h-full">
          <DotLottieReact
            src="https://lottie.host/32bbce24-c07f-4e2d-9e65-49d9a5b4f5f0/pTWgQm2auo.lottie"
            loop
            autoplay
            style={{ width: "100%", height: "100%", transform: "scale(1.2)" }}
            layout={{ fit: "contain", align: [0.5, 0.5] }}
            renderConfig={{ autoResize: true, devicePixelRatio: 1.5 }}
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 py-4 md:py-5 w-full z-20 bg-main/80 backdrop-blur-md">
        <div className="flex gap-4 md:gap-8 justify-center items-center text-textSubtle text-xs md:text-sm px-4 flex-wrap">
          <span>Marketing Agency (US)</span>
          <span className="hidden md:block">•</span>
          <span>Early-Stage SaaS</span>
          <span className="hidden md:block">•</span>
          <span>Local Dev Shop</span>
        </div>
      </div>
    </div>
  );
};

export default hero;
