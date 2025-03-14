import React from "react";

const SidebarItem = ({ icon, label, onClick }) => {
  return (
    <div
      className="flex items-center w-[253px] h-[41px] bg-[#F4F4F4] hover:bg-gray-200 cursor-pointer rounded-lg px-5 shadow-md"
      onClick={onClick}
    >
      {/* 아이콘 */}
      <img src={icon} alt="icon" />

      {/* 라벨 (메뉴명) */}
      <span className="text-sm font-normal text-[#666666] ml-[15px] ">
        {label}
      </span>
    </div>
  );
};

export default SidebarItem;
