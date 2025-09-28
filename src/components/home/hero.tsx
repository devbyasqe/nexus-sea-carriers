"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { HeroForms } from ".";
import { useScroll, motion, useTransform, useSpring } from "motion/react";
import { verticalInVariant } from "../motion/variants";

const HomeHero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end center"],
  });

  const imageContainerBlur = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["grayscale(0) blur(0px)", "grayscale(1) blur(3px)"],
  );
  const imageContainerRadius = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["1.5rem", "0rem"],
  );

  const imageContainerScale = useSpring(
    useTransform(scrollYProgress, [0, 1], [0.92, 1.5]),
    { stiffness: 100, damping: 20 },
  );

  return (
    <section
      ref={ref}
      className="relative mx-auto max-w-5xl min-w-80 overflow-clip sm:max-md:max-w-[40rem]"
    >
      <motion.div
        style={{
          scale: imageContainerScale,
          filter: imageContainerBlur,
          borderRadius: imageContainerRadius,
        }}
        className="pointer-events-none absolute inset-0 overflow-clip"
      >
        <Image
          src="/hero/hero-banner_md.webp"
          alt="hero picture"
          height={720}
          width={1080}
          className="size-full object-cover object-center max-md:hidden"
        />
        <Image
          src="/hero/hero-banner_sm.webp"
          alt="hero picture"
          height={720}
          width={1080}
          className="size-full object-cover object-center md:hidden"
        />
      </motion.div>
      <div className="mx-auto grid w-[93%] max-md:min-h-svh md:aspect-video">
        <div className="relative grid gap-10 overflow-clip px-4 pt-32 pb-20 md:grid-cols-12 md:items-center">
          <motion.div
            custom={"right"}
            variants={verticalInVariant}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "linear" }}
            className="md:col-span-7"
          >
            <p className="bg-accent/75 w-fit rounded-full px-3 py-1.5 font-medium backdrop-blur">
              Trusted Worldwide Shipping
            </p>
            <h1 className="mt-3 text-balance text-white">
              Delivering Across Oceans. On Time. Every Time.
            </h1>
          </motion.div>
          <motion.div
            custom={"left"}
            variants={verticalInVariant}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "linear" }}
            className="md:col-span-5"
          >
            <HeroForms />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
