import React from 'react'

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="w-[221px] h-[145px] bg-white rounded-lg shadow-md flex flex-col items-center justify-center text-center space-y-2 p-4">
      <img src={icon} alt="icon" className="w-12 h-12" />
      <h2 className="text-l font-bold">{title}</h2>
      <p className="text-[#666666] text-sm">{description}</p>
    </div>
  )
}

export default FeatureCard