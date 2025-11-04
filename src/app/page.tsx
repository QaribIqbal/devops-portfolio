import LightRays from "@/components/LightRays";
import Hero from "@/screens/hero";
import Projects from "@/screens/projects";
import Services from "@/screens/services";
import Socials from "@/screens/socials";
import Tech from "@/screens/tech";
import Tools from "@/screens/tools";
import AboutMe from "@/screens/aboutme";
import Cta from "@/screens/Cta";
import GooeyNav from "@/components/GooeyNav";
export default function Home() {
  const items = [
    { label: "About Me", href: "/#about" }, // absolute fragment -> always targets home
    { label: "Work", href: "/Portfolio" }, // use lowercase / correct route path
    { label: "Contact", href: "/#connect" }, // absolute contact fragment
  ];
  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#0216c3"
          raysSpeed={0.5}
          lightSpread={0.5}
          rayLength={5}
          followMouse={true}
          mouseInfluence={0.3}
          noiseAmount={0}
          distortion={0}
          fadeDistance={50}
          saturation={0.01}
          pulsating={false}
          className="z-0"
        />
        <div
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
        </div>
        <div className="absolute top-30 md:top-10 left-0 w-full">
          <Hero />
        </div>
      </div>
      <AboutMe />
      <Services />
      <Tech />
      <Tools />
      <Projects />
      <Cta />
      <Socials />
    </div>
  );
}
