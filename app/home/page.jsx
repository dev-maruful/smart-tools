import Ad from "@/components/shared/ads/Ad";
import Banner from "@/components/shared/home/Banner";
import BestSellers from "@/components/shared/home/BestSellers";
import LuxuryCars from "@/components/shared/home/LuxuryCars";
import RealStates from "@/components/shared/home/RealStates";
import React from "react";

const Homepage = () => {
  return (
    <div className="space-y-8">
      <Banner />
      <BestSellers />
      <RealStates />
      <LuxuryCars />
      <Ad />
    </div>
  );
};

export default Homepage;
