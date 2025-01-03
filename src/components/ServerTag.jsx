import React, { useState } from "react";
import { IoIosRefresh } from "react-icons/io";
const ServerTag = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* Tab Bar */}
      <div className="lg:w-[60%] md:w-[60%] w-full border-b border-lineColor text-xs text-white flex pt-4 z-10 flex justify-between items-center">
        <div>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${
              activeTab === index
                ? "font-semibold"
                : "hover:text-gray"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
        </div>
        <div className="font-semibold flex items-center gap-4">FILTER: SLOT TYPE <IoIosRefresh size={20}/> </div>

      </div>

      {/* Content */}
      <div className="">{tabs[activeTab].content}</div>
    </div>
  );
};

export default ServerTag;
