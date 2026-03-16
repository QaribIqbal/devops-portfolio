"use client";

import GlassIcons from "@/components/GlassIcons";
import GradientText from "@/components/GradientText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import gsap from "gsap";
const items = [
  {
    icon: <img src="/icons/linkedin.png" alt="Linkedin" className="w-6 h-6" />,
    color: "blue",
    label: "Linkedin",
    href: "https://www.linkedin.com/in/qarib-iqbal92",
  },
  {
    icon: <span className="text-white font-bold text-lg">@</span>,
    color: "gray",
    label: "Email",
    href: "mailto:qaribiqbal92@gmail.com",
  },
];

function socials() {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);
  const glassicon = useRef(null);
  const textmain = useRef(null);

  useGSAP(() => {
    // left in from x (little overshoot)
    gsap.from(glassicon.current, {
      opacity: 0,
      scale: 0,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 30%",
        end: "top -5%",
        scrub: 1,
      },
    });
    gsap.from(textmain.current, {
      opacity: 0,
      scale: 0,
      duration: 1,
    //   ease: "elastic.out(1,2)",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 30%",
        end: "top -5%",
        scrub: 1,
      },
    });
  });
  return (
    <div id="connect"
      ref={sectionRef}
      className="flex flex-col items-center justify-center w-full min-h-screen py-20 overflow-x-hidden mt-0 lg"
    >
      <div ref={textmain} className="flex flex-col items-center justify-center max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-5xl lg:text-6xl font-black text-textMain tracking-tight mb-4">
          Stop firefighting deployments.
        </h2>
        <p className="text-xl text-teal font-medium mb-8">
          Tell me your stack and your ugliest ops problem. I’ll record a quick Loom with 1–2 concrete fixes.
        </p>

        <p className="text-textMuted text-lg leading-relaxed mb-10">
          If you’re an agency owner or SaaS founder dealing with <span className="text-amber font-semibold">manual operations</span> or <span className="text-amber font-semibold">fragile deployments</span>, send me a short note about your current setup and the one problem you’d love to fix. I can usually suggest a concrete fix in a quick message or Loom video.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mt-4 px-4 items-center">
          <a
            href="mailto:qaribiqbal92@gmail.com"
            className="bg-teal text-main px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center"
          >
            Email Qarib
          </a>
          <a
            href="https://www.linkedin.com/in/qarib-iqbal92"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-blue text-blue px-8 py-4 rounded-xl font-bold hover:bg-blue hover:text-white hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-center"
          >
            Message on LinkedIn
          </a>
        </div>
        
        <p className="text-textSubtle text-sm mt-8">
          Most replies within 24 hours. Short Loom, no hard sell.
        </p>
      </div>
    </div>
  );
}

export default socials;
