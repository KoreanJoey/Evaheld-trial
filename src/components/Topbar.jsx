import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';

const Topbar = () => {
    const navigate = useNavigate();

  return (
    <div className="bg-[#F9FAFB] h-[75px] flex items-center justify-between px-[100px] shadow-md">
      {/* 왼쪽: 로고 */}
      <div className="text-2xl font-bold cursor-pointer">
        <img src={assets.logo_icon} alt="Home icon" onClick={() => navigate("/")} />
      </div>

      {/* 오른쪽: 로그아웃 버튼 */}
      <button className="text-[#5F348C] text-lg flex items-center gap-2">
        <p>Logout</p> <img src={assets.logout_icon} alt="logout icon" />
      </button>
    </div>
  )
}

export default Topbar