import React, { useState, useEffect } from 'react';


const SplashModal = () => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(false);
    }, 5000); // Automatically close the modal after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      <div className="bg-white rounded-lg w-11/12 md:max-w-md mx-auto">
        <div className="flex justify-between items-center p-6">
          <h2 className="text-2xl font-bold"></h2>
          Hi There!
          <button
            className="text-gray-700 hover:text-gray-900"
            onClick={() => setShowModal(false)}
          >
            &times;
          </button>
        </div>
        <hr />
        <div className="p-6">
          <img className="absolute inset-0 object-cover w-full h-full" alt="Matthew Logo" ></img>
        </div>
        <div className="flex justify-end p-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setShowModal(false)}
          >
            Explore more
          </button>
        </div>
      </div>
    </div>
  );
};

export default SplashModal;
