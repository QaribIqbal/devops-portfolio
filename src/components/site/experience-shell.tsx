"use client";

import { useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";
import Lenis from "lenis";
import { animate } from "animejs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const THEME_KEY = "site-theme";

function getSystemTheme() {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export function ExperienceShell() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [showLoader, setShowLoader] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const nextTheme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : getSystemTheme();
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setShowLoader(false);
      return;
    }

    const bars = loaderRef.current?.querySelectorAll(".site-loader-bar");
    if (!bars || bars.length === 0) return;

    animate(bars, {
      scaleY: [0.4, 1],
      opacity: [0.3, 1],
      duration: 520,
      delay: (_, index) => index * 80,
      direction: "alternate",
      loop: true,
      ease: "inOutSine",
    });

    const timer = window.setTimeout(() => {
      if (!loaderRef.current) return;
      animate(loaderRef.current, {
        opacity: [1, 0],
        scale: [1, 1.02],
        duration: 640,
        ease: "inOutSine",
        complete: () => setShowLoader(false),
      });
    }, 1400);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      duration: 1.18,
      wheelMultiplier: 1.14,
    });
    lenis.on("scroll", ScrollTrigger.update);

    ScrollTrigger.defaults({
      markers: false,
    });

    const horizontalTracks = gsap.utils.toArray<HTMLElement>("[data-force-horizontal='true']");
    const animations: gsap.core.Tween[] = [];

    horizontalTracks.forEach((track) => {
      const section = track.closest("[data-horizontal-section='true']");
      if (!section) return;

      const resizeAndAnimate = () => {
        const totalShift = Math.max(0, track.scrollWidth - track.clientWidth);
        if (totalShift < 12 || window.innerWidth < 1024) return;

        const tween = gsap.to(track, {
          x: -totalShift,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${totalShift + 360}`,
            scrub: 1.15,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        animations.push(tween);
      };

      resizeAndAnimate();
    });

    const heroVisual = document.querySelector<HTMLElement>(".hero-visual-main");
    if (heroVisual) {
      const heroTween = gsap.to(heroVisual, {
        yPercent: 28,
        xPercent: -10,
        rotate: -14,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: ".section-slice-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.1,
        },
      });
      animations.push(heroTween);
    }

    const parallaxAssets = gsap.utils.toArray<HTMLElement>("[data-parallax='asset']");
    parallaxAssets.forEach((asset, index) => {
      const tween = gsap.fromTo(
        asset,
        {
          y: 22 + index * 4,
          opacity: 0.5,
          rotate: -2,
        },
        {
          y: -16 - index * 2,
          opacity: 1,
          rotate: 2,
          ease: "none",
          scrollTrigger: {
            trigger: asset.closest(".section-slice") ?? asset,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        },
      );
      animations.push(tween);
    });

    const sections = gsap.utils.toArray<HTMLElement>(".section-slice");
    sections.forEach((section) => {
      const tween = gsap.fromTo(
        section,
        { backgroundPositionY: "0%" },
        {
          backgroundPositionY: "16%",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        },
      );
      animations.push(tween);
    });

    const cinematicCards = gsap.utils.toArray<HTMLElement>(".kinetic-panel");
    cinematicCards.forEach((card) => {
      const tween = gsap.fromTo(
        card,
        { y: 34, rotateX: 7, opacity: 0.78, transformOrigin: "50% 100%" },
        {
          y: 0,
          rotateX: 0,
          opacity: 1,
          duration: 1.05,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 84%",
            toggleActions: "play none none reverse",
          },
        },
      );
      animations.push(tween);
    });

    ScrollTrigger.refresh();

    return () => {
      animations.forEach((tween) => tween.kill());
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <button
        type="button"
        className="theme-toggle"
        onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        {theme === "dark" ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
      </button>

      {showLoader ? (
        <div ref={loaderRef} className="site-loader" aria-hidden="true">
          <div className="site-loader-mark">
            <span className="site-loader-dot" />
            <span>Qarib Iqbal</span>
          </div>
          <div className="site-loader-bars">
            <span className="site-loader-bar" />
            <span className="site-loader-bar" />
            <span className="site-loader-bar" />
            <span className="site-loader-bar" />
            <span className="site-loader-bar" />
          </div>
        </div>
      ) : null}
    </>
  );
}
