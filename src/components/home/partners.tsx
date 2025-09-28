import React from "react";
import {
  BarbourIcon,
  FerrariIcon,
  MarcopoloIcon,
  TeslaIcon,
  ToyotaIcon,
} from "../svg/brands";
import Marquee from "../ui/marquee";

const partnersList = [
  { icon: <FerrariIcon />, label: "Ferrari" },
  { icon: <BarbourIcon />, label: "Barbour" },
  { icon: <MarcopoloIcon />, label: "Marcopolo" },
  { icon: <TeslaIcon />, label: "Tesla" },
  { icon: <ToyotaIcon />, label: "Toyota" },
];

const Partners = () => {
  return (
    <section className="relative mx-auto w-[93%] max-w-5xl min-w-80 overflow-clip sm:max-md:max-w-[40rem]">
      <div className="px-4 py-14">
        <p className="text-center text-lg font-medium tracking-tight">
          Trusted by leading companies worldwide
        </p>
        <Marquee className="mt-6">
          {partnersList.map(({ icon, label }) => (
            <div key={label} className="h-10">
              {icon}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Partners;
