import React from "react";
import { ShimmerText } from "../ui";
import { EarPhoneIcon, MoneyIcon, SheildIcon, TruckIcon } from "../svg";
import { HoverBorder } from "../motion/hover-border";
const keyBenefits = [
  { icon: <SheildIcon />, title: "Secure & Reliable Handling" },
  { icon: <TruckIcon />, title: "Punctual Deliveries" },
  { icon: <MoneyIcon />, title: "Comprehensive Cargo Insurance" },
  { icon: <EarPhoneIcon />, title: "Round-the-Clock Support" },
];

const KeyBenefit = () => {
  return (
    <section className="relative mx-auto w-[93%] max-w-5xl min-w-80 overflow-clip sm:max-md:max-w-[40rem]">
      <div className="px-4 py-14">
        <div className="flex flex-col text-pretty md:items-center">
          <p className="bg-success w-fit rounded-full px-2 py-1 font-medium">
            <ShimmerText> Why Choose Us</ShimmerText>
          </p>
          <h2 className="mt-3">Benefits of Our Ocean Freight Services</h2>
          <p className="text-muted-foreground mt-2 max-w-xl md:text-center">
            From safety and insurance to reliable delivery and 24/7 support, we
            make sure your cargo is in trusted hands every step of the way.
          </p>
        </div>

        <div className="bg-accent relative mt-8 grid gap-1 rounded-xl border p-0.5 md:grid-cols-2 lg:grid-cols-4 cursor-none">
          <HoverBorder className="bg-conic-90 from-primary to-success z-0 " />
          {keyBenefits.map(({ icon, title }, index) => (
            <div
              key={title}
              className="relative bg-background/90 backdrop-blur-2xl  flex flex-col items-center gap-4 rounded-xl border px-4 pt-10 pb-6"
            >
              <div className="h-12">{icon}</div>
              <p className="text-center text-lg font-medium">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefit;
