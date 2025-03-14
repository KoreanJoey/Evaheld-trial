import React from 'react'

const ProgressCard = ({ icon, title, progress, total, description, buttonText }) => {
  return (
    <div className="w-[300px] p-6 bg-white rounded-lg shadow-md">
      {/* title and icon */}
      <div className="flex items-center gap-2 mb-2">
        <img src={icon} alt="icon" />
        <h2 className="text-lg">{title}</h2>
      </div>

    {/* progress bar */}
    <div className="w-full h-[4px] bg-gray-200 rounded-full mt-1">
        <div
          className="h-full bg-[#5F348C] rounded-full"
          style={{ width: `${(progress / total) * 100}%` }}
        />
      </div>
    
      {/* status of the progress */}
      <p className="text-sm text-gray-600">{progress} out of {total} sections completed</p>

      

      {/* dsc */}
      <p className="text-sm text-gray-600 mt-3">{description}</p>

      {/* button */}
      <button className="mt-4 w-full bg-[#5F348C] text-white text-sm font-semibold py-2 rounded-lg flex items-center justify-center gap-1 hover:bg-purple-800 transition">
        {buttonText} <span>→</span>
      </button>
    </div>
  )
}

export default ProgressCard