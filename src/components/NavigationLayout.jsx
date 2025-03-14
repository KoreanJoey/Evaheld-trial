import React from "react";
import Topbar from "./Topbar";
import SidebarItem from "./SidebarItem";
import { assets } from "../assets/assets";

const NavigationLayout = () => {
  return (
    <div>
      <Topbar />
      <div className="mt-[56px] ml-[138px]">
        <div className="">
          <div className="flex gap-x-1 my-[15px]">
            <p className="text-[#5F348C]">Home</p>
            <p className="text-[#666666]">&gt;</p>
            <p className="text-[#666666]">Legacy Preservation</p>
          </div>
          <div className="flex flex-col gap-3">
            <SidebarItem icon={assets.dashboard_icon} label="Dashboard" />
            <SidebarItem icon={assets.document_icon} label="Legacy Preservation" />
            <SidebarItem icon={assets.userdocument_icon} label="Advance Care Planning" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default NavigationLayout;
