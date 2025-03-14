import React from "react";
import Topbar from "../components/Topbar";
import FeatureCard from "../components/FeatureCard";
import { assets } from "../assets/assets";
import SidebarItem from "../components/SidebarItem";

const HomePage = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <Topbar />
      <div className="mt-[150px] px-6 md:px-16 lg:px-32 xl:px-[405px] space-y-6">
        <h1 className="text-4xl text-center">
          Welcome to your Evaheld Legacy Vault, Direk!
        </h1>
        <p className="text-[#666666]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <div className="flex justify-between">
          <FeatureCard
            icon={assets.document_ongoing_icon}
            title="Legacy Preservation"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          />
          <FeatureCard
            icon={assets.userdocument_ongoing_icon}
            title="Advance Care Planning"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          />
          <FeatureCard
            icon={assets.houselock_ongoing_icon}
            title="My Family Vault"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          />
        </div>
      </div>
      <div className="ml-[100px] mt-[100px]">
        <SidebarItem icon={assets.person_icon} label="My Account" />
      </div>
    </div>
  );
};

export default HomePage;
