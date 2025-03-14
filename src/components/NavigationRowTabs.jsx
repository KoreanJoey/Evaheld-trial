import React, { useState } from 'react'

const NavigationRowTabs = ({tabs}) => {

    const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="border-b border-gray-300">
      <div className="flex space-x-6 text-gray-500 text-sm font-medium">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`relative py-3 ${
              activeTab === index ? "text-black font-bold" : "hover:text-gray-700"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
            
            {activeTab === index && (
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#5F348C]"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default NavigationRowTabs