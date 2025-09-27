"use client";
import { ReactLenis } from "lenis/react";

const LenisProvider = () => (
  <ReactLenis
    root
    options={{
      duration: 1.3,
      smoothWheel: true,
    }}
  />
);

export default LenisProvider;
