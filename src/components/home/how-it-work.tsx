import React from "react";
import { ShimmerText } from "../ui";
import Image from "next/image";
import { GrowingContainer } from "../motion/growing-container";
import { MotionContainer } from "../motion";

const howItWorks = [
  {
    title: "Book Your Shipment",
    description:
      "Kick things off with a fast, secure booking—designed for zero hassle and all the speed you need.",
    src: "/how-it-work/one.webp",
  },
  {
    title: "Pack, Label & Collect",
    description:
      "Pack your goods tight, slap on clear labels, and we'll pick them up ready for the road (or sea).",
    src: "/how-it-work/two.webp",
  },
  {
    title: "Export Clearance & Load",
    description:
      "We handle export customs, then load everything securely onto the vessel—no sweat on your end.",
    src: "/how-it-work/three.webp",
  },
  {
    title: "Sea Voyage & Docking",
    description:
      "Your cargo cruises safely across the ocean, docking right on time at the destination port.",
    src: "/how-it-work/four.webp",
  },
  {
    title: "Import Clearance & Deliver",
    description:
      "We clear import customs, unload, and drop it all off at your door—safe and sound.",
    src: "/how-it-work/five.webp",
  },
];

const HowItWork = () => {
  return (
    <section className="relative mx-auto w-[93%] max-w-5xl min-w-80 overflow-clip py-10 sm:max-md:max-w-[40rem]">
      <div className="bg-secondary text-foreground-secondary relative grid gap-x-6 gap-y-10 overflow-clip rounded-xl px-4 py-8 md:grid-cols-2 lg:grid-cols-3">
        <MotionContainer variant="blur" className="">
          <p className="bg-primary w-fit rounded-full px-2 py-1 font-medium">
            <ShimmerText> How it Work</ShimmerText>
          </p>
          <h2 className="mt-3">How We Move Your Goods Worldwide</h2>
        </MotionContainer>

        {howItWorks.map(({ description, src, title }, index) => (
          <MotionContainer variant="blur" key={title} className="">
            <div className="aspect-video overflow-clip rounded-xl">
              <GrowingContainer direction={index % 2 === 0 ? "left" : "right"} className="size-full">
                <Image
                  src={src}
                  alt={`${title} steps image`}
                  height={720}
                  width={1080}
                  className="size-full object-cover object-center"
                />
              </GrowingContainer>
            </div>
            <p className="bg-primary mt-3 w-fit rounded-full px-2.5 py-1 font-medium text-white">
              Step {index + 1}
            </p>
            <h4 className="mt-4 font-serif font-medium tracking-tighter">
              {title}
            </h4>
            <p className="text-foreground-muted mt-1 text-sm">{description} </p>
          </MotionContainer>
        ))}
      </div>
    </section>
  );
};

export default HowItWork;
