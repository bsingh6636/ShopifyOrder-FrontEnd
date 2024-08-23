import React from 'react';

const Buttons = ({ interval, setInterval }) => {
  // Define the button styles based on the interval
  const getButtonClass = (currentInterval) => {
    const baseClass = "px-4 py-2 rounded-md focus:outline-none transition-transform duration-300 ease-in-out";
    const activeClass = "shadow-lg text-white scale-105 border-2 border-opacity-90";
    const inactiveClass = "text-gray-700 hover:text-white hover:scale-105";

    switch (currentInterval) {
      case 'daily':
        return interval === 'daily'
          ? `${baseClass} bg-indigo-600 ${activeClass} border-indigo-700`
          : `${baseClass} bg-indigo-300 ${inactiveClass} hover:bg-indigo-500`;
      case 'monthly':
        return interval === 'monthly'
          ? `${baseClass} bg-green-600 ${activeClass} border-green-700`
          : `${baseClass} bg-green-300 ${inactiveClass} hover:bg-green-500`;
      case 'quarterly':
        return interval === 'quarterly'
          ? `${baseClass} bg-yellow-600 ${activeClass} border-yellow-700`
          : `${baseClass} bg-yellow-300 ${inactiveClass} hover:bg-yellow-500`;
      case 'yearly':
        return interval === 'yearly'
          ? `${baseClass} bg-red-600 ${activeClass} border-red-700`
          : `${baseClass} bg-red-300 ${inactiveClass} hover:bg-red-500`;
      default:
        return baseClass;
    }
  };

  // Define event handlers
  const handleButtonClick = (newInterval) => () => {
    setInterval(newInterval);
  };

  return (
    <div className="flex justify-center space-x-4 mb-4">
      <button
        className={getButtonClass('daily')}
        onClick={handleButtonClick('daily')}
      >
        Daily
      </button>
      <button
        className={getButtonClass('monthly')}
        onClick={handleButtonClick('monthly')}
      >
        Monthly
      </button>
      <button
        className={getButtonClass('quarterly')}
        onClick={handleButtonClick('quarterly')}
      >
        Quarterly
      </button>
      <button
        className={getButtonClass('yearly')}
        onClick={handleButtonClick('yearly')}
      >
        Yearly
      </button>
    </div>
  );
};

export default Buttons;
