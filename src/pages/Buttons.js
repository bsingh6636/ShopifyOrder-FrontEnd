import React from 'react';

const Buttons = ({ interval, setInterval }) => {
  // Define the button styles based on the interval
  const getButtonClass = (currentInterval) => {
    const baseClass = "px-4 py-2 rounded focus:outline-none transition-colors duration-300";
    const activeClass = "shadow-md text-white";

    switch (currentInterval) {
      case 'daily':
        return interval === 'daily'
          ? `${baseClass} bg-indigo-500 ${activeClass}`
          : `${baseClass} bg-indigo-300 text-gray-700 hover:bg-indigo-400`;
      case 'monthly':
        return interval === 'monthly'
          ? `${baseClass} bg-green-500 ${activeClass}`
          : `${baseClass} bg-green-300 text-gray-700 hover:bg-green-400`;
      case 'quarterly':
        return interval === 'quarterly'
          ? `${baseClass} bg-yellow-500 ${activeClass}`
          : `${baseClass} bg-yellow-300 text-gray-700 hover:bg-yellow-400`;
      case 'yearly':
        return interval === 'yearly'
          ? `${baseClass} bg-red-500 ${activeClass}`
          : `${baseClass} bg-red-300 text-gray-700 hover:bg-red-400`;
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
