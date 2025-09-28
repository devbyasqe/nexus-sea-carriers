"use client";
import React from "react";
import ThemeToggler from "../ui/theme-toggler";
import { Button } from "../ui/button";
import { LogoIcon } from "../svg";
import { useTextScramble } from "../hooks/text-scramble";

const footerNavLinks = [
  {
    title: "Company",
    Links: [
      { label: "About Us" },
      { label: "Our Team" },
      { label: "Careers" },
      { label: "Contact Us" },
    ],
  },
  {
    title: "Services",
    Links: [
      { label: "Ocean Freight" },
      { label: "Air Freight" },
      { label: "Road Transport" },
      { label: "Customs Clearance" },
    ],
  },
  {
    title: "Shipping Tools",
    Links: [
      { label: "Track Shipment" },
      { label: "Get a Quote" },
      { label: "Schedule Pickup" },
      { label: "Shipping Calculator" },
    ],
  },
  {
    title: "Support",
    Links: [
      { label: "Help Center" },
      { label: "FAQs" },
      { label: "Insurance & Claims" },
      { label: "24/7 Customer Support" },
    ],
  },
  {
    title: "Resources",
    Links: [
      { label: "Blog" },
      { label: "Press Releases" },
      { label: "Case Studies" },
      { label: "Guides & Tutorials" },
    ],
  },
  {
    title: "Legal",
    Links: [
      { label: "Terms & Conditions" },
      { label: "Privacy Policy" },
      { label: "Cookie Policy" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="mx-auto max-w-5xl min-w-80 overflow-clip sm:max-md:max-w-[40rem]">
      <div className="mx-auto w-[93%] px-4 pt-14 pb-10">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4">
          <div className="col-span-full py-8 lg:col-span-2">
            <h3>Ready to ship smarter?</h3>
            <Button className="mt-3" variant={"success"}>
              Contact Us
            </Button>
          </div>
          {footerNavLinks.map(({ Links, title }, index) => (
            <div key={title} className="">
              <p className="font-serif font-medium uppercase">{title}</p>
              <div className="mt-4 flex flex-col flex-wrap items-start gap-4 text-sm">
                {Links.map(({ label }) => (
                  <ScrambleButton key={label} label={label} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-10">
          <div className="h-12">
            <LogoIcon className="size-full" />
          </div>
          <p className="text-foreground-muted mt-2 text-sm tracking-tight whitespace-nowrap max-lg:order-3">
            Copyright
            <span className="text-foreground inline-flex px-1 font-medium">
              &copy;NEXUS SEA CARRIERS
            </span>
            {new Date().getFullYear()} | All Rights Reserved
          </p>
          <ThemeToggler className="max-lg:order-2" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const ScrambleButton = ({ label }: { label: string }) => {
  const { displayText, scramble } = useTextScramble(label);
  return (
    <button
      onMouseEnter={scramble}
      onFocus={scramble}
      onClick={scramble}
      className="text-foreground-muted hover:text-primary focus-visible:text-primary inline-flex cursor-pointer flex-wrap whitespace-nowrap uppercase transition-all duration-300 hover:font-medium focus-visible:font-medium"
    >
      {displayText}
    </button>
  );
};
