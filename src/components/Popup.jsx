import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Popup = ({title, message}) => {
  const navigate =useNavigate();
  const [isVisible, setIsVisible] = useState(true);

  const handleClosePopup = () => {
    setIsVisible(false);
    navigate('/')
  };

  const handleQuit = () => {
    console.log("User wants to quit!");
    setIsVisible(false);
    navigate('/')
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-200">
      {isVisible && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md text-center w-80">
            <h2 className="text-2xl font-semibold text-black">{title}</h2>
            <p className="text-black mt-2">{message}</p>
            <div className="flex justify-center gap-4 mt-4">
              <button
                className="px-8 py-2 text-xl font-semibold border border-black text-black hover:bg-black hover:text-white"
                onClick={handleQuit}
              >
                YES
              </button>
              <button
                className="px-8 py-2 text-xl font-semibold border border-black text-black hover:bg-black hover:text-white"
                onClick={handleClosePopup}
              >
                NO
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
