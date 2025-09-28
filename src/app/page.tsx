import HomeHero from "@/components/home/hero";
import OceanServices from "@/components/home/ocean-services";
import Partners from "@/components/home/partners";
import ServiceOverview from "@/components/home/service-overview";
import React from "react";

const HomePage = () => (
  <>
    <HomeHero />
    <Partners />
    <ServiceOverview />
    <OceanServices />
  </>
);

export default HomePage;
