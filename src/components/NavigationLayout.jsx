import React from "react";
import Topbar from "./Topbar";
import SidebarItem from "./SidebarItem";
import { assets } from "../assets/assets";

const NavigationLayout = ({ children, title }) => {
  return (
    <div>
      <Topbar />
      <div className="flex">
        {/* Sidebar */}
        <div className="mt-[56px] ml-[138px]">
          <div className="flex gap-x-1 my-[15px]">
            <p className="text-[#5F348C] text-sm">Home</p>
            <p className="text-[#666666] text-sm">&gt;</p>
            <p className="text-[#666666] text-sm">Legacy Preservation</p>
          </div>
          <div className="flex flex-col h-[70vh] justify-between">
            <div className="flex flex-col gap-3">
              <SidebarItem icon={assets.dashboard_icon} label="Dashboard" />
              <SidebarItem
                icon={assets.document_icon}
                label="Legacy Preservation"
              />
              <SidebarItem
                icon={assets.userdocument_icon}
                label="Advance Care Planning"
              />
            </div>
            <div className="flex flex-col gap-3">
              <SidebarItem icon={assets.library_icon} label="My Library" />
              <SidebarItem icon={assets.person_icon} label="My account" />
            </div>
          </div>
        </div>
        <div className="mt-[56px] ml-[138px]">
          {/*Main content*/}
          <h1 className="text-3xl">{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default NavigationLayout;
