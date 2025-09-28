import React from "react";
import { ShimmerText } from "../ui";
import { ArrowUpRightIcon, DockerIcon } from "../svg";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { GrowingContainer } from "../motion/growing-container";
import { MotionContainer } from "../motion";

const oceanFreightSolutions = [
  {
    title: "Full Container Load (FCL)",
    features: [
      "Exclusive use of a container for your shipment.",
      "Faster, more secure transport than shared loads.",
      "Cost-effective for large or bulk cargo.",
    ],
    videoSrc: "/ocean-services/one.webm",
  },
  {
    title: "Less than Container Load (LCL)",
    features: [
      "Share a container with other shipments to reduce cost.",
      "Pay only for the space your cargo occupies.",
      "Requires proper packaging and labeling for safety.",
    ],
    videoSrc: "/ocean-services/two.webm",
  },
  {
    title: "Sustainable Deliveries & Collections",
    features: [
      "Eco-friendly vehicles for lower emissions.",
      "Minimal and recyclable packaging for greener shipping.",
      "Consolidated shipments to reduce trips and environmental impact.",
    ],
    videoSrc: "/ocean-services/three.webm",
  },
  {
    title: "Export Advice & Tailored Solutions",
    features: [
      "Expert guidance customized to your business needs.",
      "Tailored solutions that deliver measurable results.",
      "Innovative approaches to optimize logistics outcomes.",
    ],
    videoSrc: "/ocean-services/four.webm",
  },
];

const OceanServices = () => {
  return (
    <section className="relative mx-auto w-[93%] max-w-5xl min-w-80 overflow-clip sm:max-md:max-w-[40rem]">
      <div className="overflow-clip py-14">
        <p className="bg-success w-fit rounded-full px-2 py-1 font-medium">
          <ShimmerText>Ocean Services</ShimmerText>
        </p>
        <h2 className="mt-3"> Comprehensive Ocean Freight Solutions</h2>
        <div className="mt-14 space-y-10 text-pretty">
          {oceanFreightSolutions.map(({ features, title, videoSrc }, index) => (
            <MotionContainer
              key={title}
              variant={index % 2 === 0 ? "left" : "right"}
              className="bg-muted rounded-xl border border-dashed py-2"
            >
              <h3 className="px-4">{title} </h3>
              <div className="mt-3 grid items-center gap-4 overflow-clip md:grid-cols-2">
                <div
                  className={cn(
                    "aspect-video px-1",
                    index % 2 === 0 && "md:order-2",
                  )}
                >
                  <GrowingContainer
                    direction={index % 2 === 0 ? "left" : "right"}
                    className="size-full overflow-clip rounded-xl"
                  >
                    <video
                      src={videoSrc}
                      autoPlay
                      muted
                      loop
                      className="pointer-events-none size-full object-cover object-center"
                    />
                  </GrowingContainer>
                </div>

                <div className={cn("px-4", index % 2 === 0 && "md:order-1")}>
                  <div className="space-y-2">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <DockerIcon className="pointer-events-none size-4 shrink-0" />
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="mt-3"
                    variant={index % 2 === 0 ? "primary" : "success"}
                    svgIcon={<ArrowUpRightIcon />}
                  >
                    Know More
                  </Button>
                </div>
              </div>
            </MotionContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OceanServices;
