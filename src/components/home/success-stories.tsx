import React from "react";
import { ShimmerText } from "../ui";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowUpRightIcon } from "../svg";
import { cn } from "@/lib/utils";
import { AnimatedNumber } from "../motion";

const growth = [
  {
    number: 16,
    letter: "K",
    description: "Successful shipments completed worldwide",
    className: "bg-primary text-white",
    duratoin: 1,
  },
  {
    number: 89,
    letter: "%",
    description: "Consistent on-time delivery rate",
    className: "bg-accent text-foreground",
    duratoin: 1,
  },
  {
    number: 250,
    letter: "+",
    description: "Global clients with repeat success stories",
    className: "bg-success text-black",
    duratoin: 0.75,
  },
];

const SuccessStories = () => {
  return (
    <section className="relative mx-auto w-[93%] max-w-5xl min-w-80 overflow-clip py-10 sm:max-md:max-w-[40rem]">
      <div className="bg-secondary text-foreground-secondary rounded-xl px-4 py-8">
        <div className="grid gap-6 text-pretty md:grid-cols-2 md:grid-rows-1 md:items-center">
          <div className="">
            <p className="bg-primary w-fit rounded-full px-2 py-1 font-medium">
              <ShimmerText>Success Stories</ShimmerText>
            </p>
            <h2 className="mt-3">Proven results in global ocean freight</h2>
          </div>
          <div className="md:row-span-2 md:flex md:justify-end">
            <div className="aspect-square max-h-96">
              <Image
                src={"/success-stories/cto.webp"}
                alt="cto image"
                height={720}
                width={1080}
                className="size-full rounded-xl object-cover object-top"
              />
            </div>
          </div>
          <div className="">
            <p className="">
              “Partnering with NSC has been transformative. Their deep knowledge
              of ocean freight gave us the reliability we needed, and the
              results far exceeded expectations.”
            </p>
            <p className="mt-3 font-medium">Alex Morgan</p>
            <p className="text-foreground-muted text-sm">
              CTO, Higher Logistics
            </p>
            <Button
              variant={"muted"}
              svgIcon={<ArrowUpRightIcon />}
              className="mt-6"
            >
              Read Case Study
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-2 md:grid-cols-3">
          {growth.map(
            ({ description, number, className, letter, duratoin }, index) => (
              <div
                key={description + index}
                className={cn("rounded-xl px-4 py-6 text-center", className)}
              >
                <h2>
                  <AnimatedNumber value={number} duration={duratoin} />
                  {letter}
                </h2>
                <p className="mt-3 leading-none">{description} </p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
