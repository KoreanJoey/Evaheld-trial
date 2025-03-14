import React from 'react'
import { assets } from '../assets/assets'

const Topbar = () => {
  return (
    <div className="bg-[#F9FAFB] h-[97px] flex items-center justify-between px-[136px] shadow-md">
      {/* 왼쪽: 로고 */}
      <div className="text-2xl font-bold">
        <img src={assets.logo_icon} alt="Home icon" />
      </div>

      {/* 오른쪽: 로그아웃 버튼 */}
      <button className="text-[#5F348C] text-lg flex items-center gap-2">
        <p>Logout</p> <img src={assets.logout_icon} alt="logout icon" />
      </button>
    </div>
  )
}

export default Topbar