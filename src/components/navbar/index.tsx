"use client";

import React, { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  ArrowUpRightIcon,
  ChevronDownIcon,
  LogoIcon,
  MenuIcon,
  XIcon,
} from "../svg";
import { Button } from "../ui/button";
import { useClickOutSide } from "../hooks";

const headerNavLinks = [
  { label: "Resources" },
  { label: "About Us" },
  {
    label: "Services",
    dropdown: [
      { label: "Ocean Freight" },
      { label: "Air Freight" },
      { label: "Road Transport" },
      { label: "Customs Clearance" },
      { label: "Warehousing" },
    ],
  },
  {
    label: "Shipping Tools",
    dropdown: [
      { label: "Track Shipment" },
      { label: "Get a Quote" },
      { label: "Schedule Pickup" },
      { label: "Shipping Calculator" },
    ],
  },

  { label: "Contact" },
];

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const mobileNavClick = () => {
    setMobileNavOpen((prev) => {
      const newState = !prev;
      document.body.style.overflow = newState ? "hidden" : "auto";
      return newState;
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileNavOpen(false);
        document.body.style.overflow = "auto";
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > 50) {
      setScrolled(true);
      if (latest > 300 && latest > previous) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    } else {
      setScrolled(false);
    }
  });

  return (
    <>
      <motion.header
        variants={{ visible: { y: 0 }, hidden: { y: "-150%" } }}
        animate={hidden && !mobileNavOpen ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "linear" }}
        className={cn(
          "fixed inset-x-0 top-1 z-50 mx-auto max-w-5xl transition-all duration-300 sm:max-md:max-w-[40rem]",
          (mobileNavOpen || scrolled) && "top-3",
        )}
      >
        <div
          className={cn(
            "mx-auto flex h-14 w-[93%] items-center justify-between rounded-xl px-4 transition-all duration-300",
            (mobileNavOpen || scrolled) &&
              "bg-background/75 border-background border backdrop-blur",
          )}
        >
          <Link
            href={"/"}
            className="text-success inline-flex h-8 items-center justify-center text-3xl font-semibold tracking-tighter mix-blend-exclusion"
          >
            <LogoIcon className="size-full" />
          </Link>
          <DesktopNav />
          <div className="flex items-center gap-1">
            <Button variant={"primary"} svgIcon={<ArrowUpRightIcon />}>
              Get Started
            </Button>
            <Button
              variant={"muted"}
              className="lg:hidden"
              buttonSize={"icon"}
              padding={null}
              onClick={mobileNavClick}
            >
              {mobileNavOpen ? <XIcon /> : <MenuIcon />}
            </Button>
          </div>
        </div>
      </motion.header>
      <AnimatePresence>{mobileNavOpen && <MobileNav />}</AnimatePresence>
    </>
  );
};

export default Navbar;

const MobileNav = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -100,
        rotate: 5,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: 0,
      }}
      exit={{
        opacity: 0,
        y: 100,
        rotate: -5,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-0 top-17 z-40 mx-auto max-w-5xl py-1 sm:max-md:max-w-[40rem]"
    >
      <div className="mx-auto flex h-full w-[93%] flex-col gap-6 overflow-auto rounded-xl bg-black/75 px-6 py-10 text-white backdrop-blur">
        {headerNavLinks.map(({ label, dropdown }) =>
          !dropdown ? (
            <button
              key={label}
              className="hover:text-primary focus-visible:text-primary inline-flex text-3xl font-medium tracking-tight transition-colors"
            >
              {label}
            </button>
          ) : (
            <MobileNavDropDown key={label} label={label} dropdown={dropdown} />
          ),
        )}
      </div>
    </motion.div>
  );
};

const MobileNavDropDown = ({
  dropdown,
  label,
}: {
  label: string;
  dropdown: {
    label: string;
  }[];
}) => {
  const [openDopDown, setOpenDopDown] = useState(false);
  const dropDownClick = () => {
    setOpenDopDown(!openDopDown);
  };
  return (
    <div className="relative isolate z-50">
      <button
        key={label}
        className="hover:text-primary focus-visible:text-primary inline-flex cursor-pointer items-center gap-2 text-3xl font-medium tracking-tight whitespace-nowrap transition-colors"
        onClick={dropDownClick}
      >
        {label}
        <ChevronDownIcon
          className={cn(
            "size-5 stroke-2 transition-all duration-300",
            openDopDown && "rotate-180",
          )}
        />
      </button>
      <AnimatePresence>
        {openDopDown && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-clip"
          >
            <div className="flex flex-col items-start gap-3 ps-4 pt-4">
              {dropdown.map(({ label }) => (
                <button
                  key={label}
                  className="hover:text-primary focus-visible:text-primary text-xl font-medium whitespace-nowrap transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DesktopNav = () => {
  return (
    <div className="bg-secondary text-foreground-secondary hidden items-center gap-2 rounded-full px-4 lg:flex">
      {headerNavLinks.map(({ label, dropdown }) =>
        !dropdown ? (
          <button
            key={label}
            className="hover:text-primary focus-visible:text-primary inline-flex h-9 items-center justify-center px-2 text-sm font-medium transition-colors"
          >
            {label}
          </button>
        ) : (
          <DesktopNavDropdown key={label} label={label} dropdown={dropdown} />
        ),
      )}
    </div>
  );
};

const DesktopNavDropdown = ({
  dropdown,
  label,
}: {
  label: string;
  dropdown: {
    label: string;
  }[];
}) => {
  const [openDopDown, setOpenDopDown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setOpenDopDown(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const dropDownClick = () => {
    setOpenDopDown(!openDopDown);
  };
  const elRef = useClickOutSide(() => {
    if (openDopDown) {
      setOpenDopDown(false);
    }
  });
  return (
    <div ref={elRef} className="relative isolate z-50">
      <button
        className="hover:text-primary focus-visible:text-primary inline-flex h-9 cursor-pointer items-center justify-center gap-1 px-2 text-sm font-medium transition-colors"
        onClick={dropDownClick}
      >
        {label}
        <ChevronDownIcon
          className={cn(
            "size-3.5 transition-all duration-300",
            openDopDown && "rotate-180",
          )}
        />
      </button>
      <AnimatePresence mode="wait">
        {openDopDown && (
          <motion.div
            initial={{
              scale: 0.75,
              opacity: 0,
              filter: "blur(10px)",
              rotate: -5,
              y: -50,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              filter: "blur(0px)",
              rotate: 0,
              y: 0,
            }}
            exit={{
              scale: 0.75,
              opacity: 0,
              filter: "blur(10px)",
              rotate: 5,
              y: 50,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-secondary absolute top-10 left-1/2 flex -translate-x-1/2 flex-col items-start gap-2 overflow-clip rounded-xl p-4"
          >
            {dropdown.map(({ label }) => (
              <button
                key={label}
                className="hover:text-primary focus-visible:text-primary inline-flex h-9 items-center justify-center text-sm font-medium whitespace-nowrap transition-colors"
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
