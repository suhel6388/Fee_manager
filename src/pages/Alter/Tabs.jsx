import React from 'react';
import { useState } from 'react';

const Tabs = () => {
     const [activeTab, setActiveTab] = useState("Basic Info");
    const tabs = ["Basic Info", "Course Info", "Fee Info", "Other Info"];
    return (
        <div>
             <div className="flex border-b border-gray-200 mb-6 gap-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "text-violet-600 border-b-2 border-violet-600"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        </div>
    );
}

export default Tabs;
