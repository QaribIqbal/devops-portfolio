"use client";
import BlurText from "@/components/BlurText";
import DecryptedText from "@/components/DecryptedText";
import SplitText from "@/components/SplitText";
import ProfileCard from "@/components/ProfileCard";
import { useGSAP } from '@gsap/react';
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function AboutMe() {
    gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);
  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);

  useGSAP(() => {
    // Animate heading
    gsap.from(card1.current, {
      opacity: 0,
      y: 100,
      // scale:0.9,
      duration: 1.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 10%",
        end: "top -50%",
        scrub : 1.2,
        // markers: true,
      },
    });
   
  });
  return (
    <section id="about"  ref={sectionRef} className="flex flex-col items-center justify-center w-full min-h-screen min-w-full px-6 py-20 lg:px-20 lg text-white">
      {/* Heading */}
      <div className="text-center mb-26">
        <SplitText
          text="ABOUT ME"
          className="text-4xl md:text-5xl font-black tracking-tight text-textMain"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
        />
        <div className="w-20 h-[3px] bg-teal mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
      </div>

      {/* Content Layout */}
      <div  ref={card1} className="flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-12">
        {/* Text Section */}
        <div className="w-full lg:w-2/3 text-center lg:text-left space-y-6 leading-relaxed text-textMuted">
          <p className="text-xl font-medium text-textMain">
            Hi, I’m <span className="font-bold">Qarib Iqbal</span> — a Tech Ops & Deployment Partner.
          </p>

          <p className="text-lg">
            I help small agencies and lean SaaS teams stop losing time and sleep to fragile deployments, manual workflows, and disconnected tools.
          </p>

          <p className="text-lg">
            Instead of fighting servers and spreadsheets, your team gets reliable releases, cleaner data, and fewer production surprises. I build and maintain the infrastructure that keeps your operations running smoothly, specializing in 
            <span className="text-textMain font-medium"> VPS/IIS setups, CI/CD pipelines with GitHub Actions or Azure DevOps, Docker containerization,</span> and 
            <span className="text-textMain font-medium"> n8n workflows.</span>
          </p>

          <p className="text-lg">
            My work often acts as the backend glue between CRMs, project tools, email, and spreadsheets. Most of my solutions are delivered as focused short sprints or lightweight retainers.
          </p>

          <p className="text-lg">
            I also have foundational knowledge of cloud infrastructure, bolstered by a 20-hour <span className="text-textMain font-medium">AWS for Beginners</span> certification, giving me the tools to design resilient cloud architectures.
          </p>

          <div className="border-l-4 border-teal bg-elevated p-6 rounded-r-xl my-8 shadow-lg text-left">
            <p className="text-xl font-semibold text-textMain">
              "You stay focused on clients and product — I handle the tech ops glue."
            </p>
          </div>

          <div>
            <a
              href="/QaribIqbal_Resume.pdf"
              download="QaribIqbal_Resume.pdf"
              className="bg-elevated border border-white/10 text-textMain px-6 py-3 rounded-xl font-semibold hover:border-teal/50 hover:text-teal transition-all duration-300 inline-block mt-2 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            >
              Download CV
            </a>
          </div>
        </div>


        {/* Profile Card */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end mt-12 lg:mt-0">
          <ProfileCard
            name="Qarib Iqbal"
            title="Tech Ops & Deployment Partner"
            handle="qaribiqbal"
            status="Available for Work"
            contactText="Contact Me"
            avatarUrl="/me.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={true}
            onContactClick={() => { window.location.href = "/#connect"; }}
            className="w-full max-w-[340px]"
          />
        </div>
      </div>
    </section>
  );
}
