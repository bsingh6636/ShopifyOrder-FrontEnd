import React from 'react'

const Buttons = ({interval,setInterval}) => {
  return (
    <div className="flex justify-center space-x-4 mb-4">
    <button
      className={`px-4 py-2 rounded focus:outline-none transition-colors duration-300 ${interval === 'daily' ? 'bg-indigo-500 text-white shadow-md' : 'bg-indigo-300 text-gray-700 hover:bg-indigo-400'} `}
      onClick={() => setInterval('daily')}
    >
      Daily
    </button>
    <button
      className={`px-4 py-2 rounded focus:outline-none transition-colors duration-300 ${interval === 'monthly' ? 'bg-green-500 text-white shadow-md' : 'bg-green-300 text-gray-700 hover:bg-green-400'} `}
      onClick={() => setInterval('monthly')}
    >
      Monthly
    </button>
    <button
      className={`px-4 py-2 rounded focus:outline-none transition-colors duration-300 ${interval === 'quarterly' ? 'bg-yellow-500 text-white shadow-md' : 'bg-yellow-300 text-gray-700 hover:bg-yellow-400'} `}
      onClick={() => setInterval('quarterly')}
    >
      Quarterly
    </button>
    <button
      className={`px-4 py-2 rounded focus:outline-none transition-colors duration-300 ${interval === 'yearly' ? 'bg-red-500 text-white shadow-md' : 'bg-red-300 text-gray-700 hover:bg-red-400'} `}
      onClick={() => setInterval('yearly')}
    >
      Yearly
    </button>
  </div>
  )
}

export default Buttons