"use client";
import ShinyText from "@/components/ShinyText";
import BlurText from "@/components/BlurText";
import GradientText from "@/components/GradientText";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import gsap from "gsap";
import router from "next/router";
import Link from "next/link";
import ScrollVelocity from "@/components/ScrollVelocity";
// NEED TO ADDD LENIS IN THE PROJECT SCROLL
function Projects() {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);
  const texthead = useRef(null);

  useGSAP(() => {
    // left in from x (little overshoot)
    gsap.to(texthead.current, {
      opacity: 0,
      scale: 0.5,
      duration: 2,
      ease: "power4.out", // subtle overshoot then settle
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 14%",
        end: "top -55%",
        scrub: 1.3,
      },
    });
  });
  // const projects = [
  //   {
  //     id: 1,
  //     name: "Schoolage",
  //     image: "/projects/project2.png",
  //     description:
  //       "A complete academic management system for colleges and universities, covering attendance, exams, results, and invoicing.",
  //   },
  //   {
  //     id: 2,
  //     name: "Study Buddy",
  //     image: "/projects/project1.png",
  //     description:
  //       "A complete LMS for students from students having advance features like meeting tracker, today schedule and CGPA calculator",
  //   },
  //   {
  //     id: 3,
  //     name: "My To Do's",
  //     image: "/projects/project4.png",
  //     description:
  //       "A To Do List having advanced features like user management and multi device support.",
  //   },
  //   {
  //     id: 4,
  //     name: "Student LMS",
  //     image: "/projects/project3.png",
  //     description:
  //       "A complete student LMS helping students keep track of their quizzes, assignments and schedules",
  //   },
  // ];
const projects = [
  {
    id: 1,
    name: "Marketing Agency Automation",
    image: "/projects/project2.png",
    video: "/demos/campusflow.mp4",
    description:
      "Problem: A marketing agency spent hours pulling manual campaign data. \nSolution: Built n8n workflows for automated pipelines, CRM syncs, and email summaries. \nOutcome: Reclaimed hours per week and stopped reporting errors.",
    tech: ["n8n", "CRMs", "APIs"],
    category: "Automation",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    name: "SaaS CI/CD Setup",
    image: "/projects/project1.png",
    video: "/demos/lms.mp4",
    description:
      "Problem: Early-stage SaaS team had fragile, manual deployment processes. \nSolution: Configured a CI/CD pipeline via GitHub Actions, VPS environment separation, and zero-downtime updates. \nOutcome: Predictable releases and no more surprise downtime.",
    tech: ["GitHub Actions", "Docker", "VPS", "Windows / IIS"],
    category: "DevOps",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    name: "SaaS Backend & Infrastructure",
    image: "/projects/project4.png",
    video: "/demos/taskify.mp4",
    description:
      "Problem: A project management tool needed robust backend glue and continuous deployment. \nSolution: Hardened backend setup with Node.js and Azure DevOps pipelines. \nOutcome: Scalable APIs and a secure, monitored deployment pipeline.",
    tech: ["Node.js", "Azure DevOps", "Docker", "PostgreSQL"],
    category: "Backend & Infra",
    liveUrl: "#",
    githubUrl: "#",
  }
];
  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center justify-center w-full min-h-screen overflow-hidden py-20 px-4"
    >
      <div ref={texthead} className="text-center w-full max-w-3xl mx-auto px-4 mt-8 md:mt-12 mb-8 md:mb-12">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-textMain">
          Case Studies
        </h2>
        <div className="w-20 h-[3px] bg-teal mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10 w-full max-w-7xl mx-auto">
        {projects.map((project) => {
          // Extract specific parts for safe rendering if possible
          const parts = project.description.split('\n');
          const problem = parts[0]?.replace('Problem: ', '') || 'See details';
          const solution = parts[1]?.replace('Solution: ', '') || 'See details';
          const outcome = parts[2]?.replace('Outcome: ', '') || 'See details';

          return (
          <div
            key={project.id}
            className="bg-elevated border-white/5 border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-teal/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] flex flex-col group min-h-[450px]"
          >
            {/* Image Section */}
            <div className="w-full h-48 sm:h-56 overflow-hidden relative">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-main to-transparent opacity-90" />
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10 -mt-16 sm:-mt-20">
              <h3 className="text-2xl font-bold text-textMain mb-6 drop-shadow-md">{project.name}</h3>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div>
                  <span className="text-amber text-sm font-bold block mb-1 drop-shadow-sm">Problem:</span>
                  <span className="text-textMuted text-sm leading-relaxed">{problem}</span>
                </div>
                <div>
                  <span className="text-blue text-sm font-bold block mb-1 drop-shadow-sm">Solution:</span>
                  <span className="text-textMuted text-sm leading-relaxed">{solution}</span>
                </div>
                <div>
                  <span className="text-teal text-sm font-bold block mb-1 drop-shadow-sm">Outcome:</span>
                  <span className="text-textMain font-semibold text-sm leading-relaxed">{outcome}</span>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-white/5">
                <Link href={`/Portfolio`} prefetch={true}>
                  <p className="text-blue font-medium text-sm flex items-center group-hover:text-teal transition-colors w-max cursor-pointer">
                    More Details <span className="ml-1 group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        )})}
      </div>

      <div className="flex justify-center items-center mt-12 mb-8 px-4 w-full">
        <button
          onClick={() => (window.location.href = "/Portfolio")}
          className="bg-teal text-main px-8 py-4 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:-translate-y-1 transition-all shadow-lg text-center w-full sm:w-auto cursor-pointer"
        >
          Explore My Work &rarr;
        </button>
      </div>
    </div>
  );
}

export default Projects;
