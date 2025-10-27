"use client";
import ScrollVelocity from "@/components/ScrollVelocity";

function Cta() {
  return (
    <div className="flex flex-col items-center justify-center align-center w-full min-h-[100vh] overflow-none pa-0 lg hide-scrollbar">
      <ScrollVelocity
        texts={[
            "Let's Automate your Business",
            "Let's build Something Amazing Together",
            "Have something in mind? i am just 1 click away",
          // "This portfolio was just the front-end. Let’s connect on the back-end",
        ]}
        velocity={100}
        className="custom-scroll-text"
      />
    </div>
  );
}

export default Cta;
