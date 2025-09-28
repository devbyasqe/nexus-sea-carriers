import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowUpRightIcon } from "../svg";
import { GrowingContainer } from "../motion/growing-container";

const Cta = () => {
  return (
    <section className="relative mx-auto w-[93%] max-w-5xl min-w-80 overflow-clip py-10 sm:max-md:max-w-[40rem]">
      <div className="py-14">
        <div className="relative h-72 lg:h-80">
          <GrowingContainer className="size-full">
          <Image
            src={"/cta/cta.webp"}
            alt="cta image"
            height={720}
            width={1080}
            className="pointer-events-none size-full rounded-xl object-cover object-center brightness-75"
          /></GrowingContainer>
          <div className="absolute top-6 left-4 flex flex-col items-start gap-4 text-white">
            <h2>
              Smart shipping solutions
              <br />
              built around your business
            </h2>
            <Button variant={"success"} svgIcon={<ArrowUpRightIcon />}>
              Ship Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
