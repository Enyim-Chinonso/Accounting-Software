"use client";
import Lenis from "@studio-freight/lenis";

export const initLenis = () => {
  const lenis = new Lenis({ smooth: true });
  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
};
