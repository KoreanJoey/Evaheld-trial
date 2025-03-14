import React from "react";

const ProgressOverviewCard = ({ icon, title, progress, total, buttonText }) => {
  return (
    <div className=" max-w-[600px] p-4 bg-white rounded-lg shadow-md">
      {/* icon + title */}
      <div className="flex items-center gap-3">
        {/* icon */}
        <img src={icon} alt="icon" />

        {/* title + progress bar */}
        <div className="flex-1">
          {/* title */}
          <h2 className="text-m">{title}</h2>

          {/* progress bar */}
          <div className="w-full h-[4px] bg-gray-200 rounded-full mt-1">
            <div
              className="h-full bg-[#5F348C] rounded-full"
              style={{ width: `${(progress / total) * 100}%` }}
            />
          </div>

          {/* progress status + button */}
          <div className="flex justify-between items-center mt-2 gap-3">
            {/* progress status */}
            <p className="text-sm text-gray-600">
              {progress} out of {total} chapters completed
            </p>

            {/* button */}
            <button className="text-[#5F348C] text-sm font-semibold flex items-center gap-1 hover:text-purple-800 transition">
              {buttonText} <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressOverviewCard;
