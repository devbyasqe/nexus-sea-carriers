import React from "react";
import { Button } from "../ui/button";
import { ArrowUpRightIcon } from "../svg";
import { ShimmerText } from "../ui";
import { HoverBorder } from "../motion/hover-border";
import { GrowingContainer } from "../motion/growing-container";
import { MotionContainer } from "../motion";

const ServiceOverview = () => {
  return (
    <section className="relative mx-auto w-[93%] max-w-5xl min-w-80 overflow-clip sm:max-md:max-w-[40rem]">
      <div className="grid gap-8 overflow-clip px-4 py-14 md:grid-cols-2">
        <MotionContainer className="text-pretty">
          <p className="bg-primary w-fit rounded-full px-2 py-1 font-medium text-white">
            <ShimmerText className="from-black via-white to-black">
              Service Overview
            </ShimmerText>
          </p>

          <h2 className="mt-3">
            Confidently move goods across the world&apos;s oceans
          </h2>
          <div className="mt-6 space-y-3">
            <p>
              Whether you&apos;re scaling production or moving time-sensitive
              cargo, Ocean Contract keeps your supply chain steady with flexible
              routes, transparent insights, and dependable worldwide delivery.
            </p>
            <p>
              Track every shipment in real time through our Allocation Portal
              and make smarter decisions with data at your fingertips.
            </p>
          </div>
          <Button svgIcon={<ArrowUpRightIcon />} className="mt-6">
            Start Shipping
          </Button>
        </MotionContainer>
        <div className="relative grid h-full max-h-96 grid-cols-2 grid-rows-2 gap-1 rounded-xl p-1">
          <HoverBorder />
          <GrowingContainer className="row-span-full size-full overflow-clip rounded-xl">
            <video
              className="pointer-events-none size-full object-cover object-center"
              autoPlay
              muted
              loop
              src="/services/one.webm"
            />
          </GrowingContainer>

          <GrowingContainer direction="left" className="rounded-xl">
            <video
              className="pointer-events-none size-full object-cover object-center"
              autoPlay
              muted
              loop
              src="/services/two.webm"
            />
          </GrowingContainer>

          <GrowingContainer direction="left" className="rounded-xl">
            <video
              className="pointer-events-none size-full object-cover object-center"
              autoPlay
              muted
              loop
              src="/services/three.webm"
            />
          </GrowingContainer>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
