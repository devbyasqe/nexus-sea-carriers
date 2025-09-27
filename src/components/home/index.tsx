"use client";

import React, { useRef, useState } from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import Input from "../ui/input";
import {
  ArrowUpDownIcon,
  CalendarIcon,
  LocationIcon,
  PortIcon,
  SearchIcon,
} from "../svg";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { verticalInVariant } from "../motion/variants";

export const HeroForms = () => {
  const [activeForm, setActiveForm] = useState<"tracking" | "schedules">(
    "schedules",
  );
  const handleFormSwitch = (form: "tracking" | "schedules") => {
    if (activeForm !== form) {
      setActiveForm(form);
    }
  };
  return (
    <motion.div className="bg-accent/75 overflow-clip rounded-xl border px-2.5 py-3 backdrop-blur">
      <div className="bg-muted grid grid-cols-2 gap-1.5 rounded-xl border p-1.5">
        <Button
          hoverScale={false}
          disabled={activeForm === "schedules"}
          variant={activeForm === "schedules" ? "primary" : "default"}
          onClick={() => handleFormSwitch("schedules")}
          textWrapperClassName="w-full rounded-xl"
        >
          Schedules
        </Button>
        <Button
          hoverScale={false}
          disabled={activeForm === "tracking"}
          variant={activeForm === "tracking" ? "primary" : "default"}
          onClick={() => handleFormSwitch("tracking")}
          textWrapperClassName="w-full rounded-xl"
        >
          Tracking
        </Button>
      </div>
      <AnimatePresence>
        {activeForm === "tracking" ? <TrackingForm /> : <ScheduleForm />}
      </AnimatePresence>
    </motion.div>
  );
};

const TrackingForm = () => {
  const [identifierType, setIdentifierType] = useState<"container" | "booking">(
    "container",
  );
  const [identifierValue, setIdentifierValue] = useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast("Tracking", {
      description: (
        <p className="space-x-2">
          <span className="text-foreground font-medium">
            {identifierType === "container"
              ? "Container / BL number"
              : "Booking number"}
          </span>
          <span>-</span>
          <span>{identifierValue || "You Cheeky \n Enter the Number"}</span>
        </p>
      ),
    });
  };
  return (
    <motion.form
      key={"tracking-form"}
      custom={"left"}
      variants={verticalInVariant}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.3, ease: "linear" }}
      className="bg-accent mt-4 rounded-xl border px-4 py-6"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center gap-2">
        <Input
          id="container"
          type="radio"
          name="trackingType"
          value="container"
          checked={identifierType === "container"}
          onChange={() => setIdentifierType("container")}
        />
        <label
          className={cn(
            "flex cursor-pointer font-medium transition-all",
            identifierType !== "container" && "text-foreground-muted",
          )}
          htmlFor="container"
        >
          Container / Bill of Lading Number
        </label>
      </div>

      <div className="mt-2 flex items-center gap-2">
        <Input
          id="booking"
          type="radio"
          name="trackingType"
          value="booking"
          checked={identifierType === "booking"}
          onChange={() => setIdentifierType("booking")}
        />
        <label
          className={cn(
            "flex cursor-pointer font-medium transition-all",
            identifierType !== "booking" && "text-foreground-muted",
          )}
          htmlFor="booking"
        >
          Booking Number
        </label>
      </div>
      <div className="mt-4 flex items-center gap-2.5">
        <Input
          type="number"
          className="w-full ps-4"
          placeholder={
            identifierType === "container"
              ? "Enter container / BL number"
              : "Enter booking number"
          }
          value={identifierValue}
          onChange={(e) => setIdentifierValue(e.target.value)}
        />
        <Button
          type="submit"
          variant={"success"}
          buttonSize={"icon"}
          padding={null}
          textWrapperClassName="rounded-xl"
        >
          <SearchIcon />
        </Button>
      </div>
    </motion.form>
  );
};

const ScheduleForm = () => {
  const today = new Date().toISOString().split("T")[0];

  const inputRef = useRef<HTMLInputElement>(null);
  const [schedule, setSchedule] = useState({
    originPort: "",
    destinationPort: "",
    departureDate: today,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast("Schedule", {
      description: (
        <div className="flex flex-col gap-1">
          <p className="space-x-2">
            <span className="text-foreground font-medium">From</span>
            <span>-</span>
            <span>{schedule.originPort || "(- -)"}</span>
          </p>

          <p className="space-x-2">
            <span className="text-foreground font-medium">To</span>
            <span>-</span>
            <span>{schedule.destinationPort || "(- -)"}</span>
          </p>

          <p className="space-x-2">
            <span className="text-foreground font-medium">Departure Date</span>
            <span>-</span>
            <span>{schedule.departureDate || "(- -)"}</span>
          </p>
        </div>
      ),
    });
  };

  const swapPorts = () => {
    setSchedule(({ originPort, destinationPort, departureDate }) => ({
      originPort: destinationPort,
      destinationPort: originPort,
      departureDate,
    }));
  };

  return (
    <motion.form
      key={"schedule-form"}
      custom={"right"}
      variants={verticalInVariant}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.3, ease: "linear" }}
      className="bg-accent mt-4 rounded-xl border px-4 py-6"
      onSubmit={handleSubmit}
    >
      <div className="relative">
        <div className="relative">
          <div className="pointer-events-none absolute left-0 inline-flex size-9 items-center justify-center rounded-md">
            <PortIcon />
          </div>
          <Input
            className="w-full"
            type="text"
            placeholder="From (Port)"
            value={schedule.originPort}
            onChange={(e) =>
              setSchedule({ ...schedule, originPort: e.target.value })
            }
          />
        </div>
        <Button
          variant={"success"}
          buttonSize={"icon"}
          padding={null}
          className="absolute top-1/2 right-4 z-10 -translate-y-1/2"
          onClick={swapPorts}
        >
          <ArrowUpDownIcon />
        </Button>
        <div className="relative mt-2">
          <div className="pointer-events-none absolute left-0 inline-flex size-9 items-center justify-center rounded-xl">
            <LocationIcon />
          </div>
          <Input
            className="w-full"
            type="text"
            placeholder="To (Port)"
            value={schedule.destinationPort}
            onChange={(e) =>
              setSchedule({ ...schedule, destinationPort: e.target.value })
            }
          />
        </div>
      </div>
      <div className="u mt-4 flex gap-2">
        <div className="relative w-full">
          <div className="pointer-events-none absolute left-0 inline-flex size-9 items-center justify-center rounded-xl">
            <CalendarIcon />
          </div>
          <Input
            ref={inputRef}
            min={today}
            type="date"
            value={schedule.departureDate}
            onClick={() => inputRef.current?.showPicker()}
            onChange={(e) =>
              setSchedule({ ...schedule, departureDate: e.target.value })
            }
            className="w-full"
          />
        </div>
        <Button
          type="submit"
          buttonSize={"icon"}
          padding={null}
          textWrapperClassName="rounded-xl"
        >
          <SearchIcon />
        </Button>
      </div>
    </motion.form>
  );
};
