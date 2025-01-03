import React, { useState } from "react";
const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* Tab Bar */}
      <div className="fixed top-0 left-24 max-w-[60%] overflow-x-scroll  border-b border-lineColor text-xl text-white flex gap-2 pt-4 z-10" style={{scrollbarWidth:'none'}}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${
              activeTab === index
                ? "border-b-2 border-white font-semibold"
                : "hover:text-gray"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="">{tabs[activeTab].content}</div> 
      <div>
        {/* Tab Bar */}
        {/* <motion.div className="fixed top-0 left-0 w-full border-b border-lineColor text-base sm:text-lg md:text-xl text-white flex overflow-x-auto gap-2 px-4 sm:px-6 md:px-8 pt-4 z-10 bg-black">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`whitespace-nowrap px-4 py-2 ${activeTab === index
                  ? "border-b-2 border-white font-semibold"
                  : "hover:text-gray"
                }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        {/* <div className="mt-16 px-4 sm:px-6 md:px-8">{tabs[activeTab].content}</div> */}
      </div>

    </div>
  );
};

export default Tabs;
