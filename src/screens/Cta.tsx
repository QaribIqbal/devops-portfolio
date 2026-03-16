"use client";
import ScrollVelocity from "@/components/ScrollVelocity";

function Cta() {
  return (
    <div className="flex flex-col items-center justify-center align-center w-full min-h-[100vh] overflow-none pa-0 lg hide-scrollbar">
      <ScrollVelocity
        texts={[
            "Agency Owner or SaaS Founder?",
            "Dealing with manual operations?",
            "Stop firefighting deployments.",
            "Let's fix your broken workflows.",
        ]}
        velocity={100}
        className="custom-scroll-text"
      />
    </div>
  );
}

export default Cta;
