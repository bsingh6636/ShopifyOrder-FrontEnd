import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation(); // Get the current route

  return (
    <div className="sidebar w-64 h-screen bg-gray-900 text-white p-6 flex flex-col shadow-xl">
      <h2 className="text-3xl font-bold mb-10 text-yellow-400">Shopify Dashboard</h2>
      <ul className="flex-1 space-y-4">
        <li className={`${location.pathname === '/' ? 'bg-gray-700 shadow-inner' : ''}`}>
          <Link
            to="/"
            className={`block px-6 py-3 rounded-lg transition-all duration-300 ${
              location.pathname === '/'
                ? 'text-yellow-400 shadow-lg border-l-4 border-yellow-400'
                : 'text-white hover:bg-gray-800 hover:shadow-inner hover:border-l-4 hover:border-yellow-300'
            }`}
            aria-current={location.pathname === '/' ? 'page' : undefined}
          >
            Total Sales Over Time
          </Link>
        </li>
        <li className={`${location.pathname === '/sales-growth-rate' ? 'bg-gray-700 shadow-inner' : ''}`}>
          <Link
            to="/sales-growth-rate"
            className={`block px-6 py-3 rounded-lg transition-all duration-300 ${
              location.pathname === '/sales-growth-rate'
                ? 'text-yellow-400 shadow-lg border-l-4 border-yellow-400'
                : 'text-white hover:bg-gray-800 hover:shadow-inner hover:border-l-4 hover:border-yellow-300'
            }`}
            aria-current={location.pathname === '/sales-growth-rate' ? 'page' : undefined}
          >
            Sales Growth Rate
          </Link>
        </li>
        <li className={`${location.pathname === '/new-customers' ? 'bg-gray-700 shadow-inner' : ''}`}>
          <Link
            to="/new-customers"
            className={`block px-6 py-3 rounded-lg transition-all duration-300 ${
              location.pathname === '/new-customers'
                ? 'text-yellow-400 shadow-lg border-l-4 border-yellow-400'
                : 'text-white hover:bg-gray-800 hover:shadow-inner hover:border-l-4 hover:border-yellow-300'
            }`}
            aria-current={location.pathname === '/new-customers' ? 'page' : undefined}
          >
            New Customers
          </Link>
        </li>
        <li className={`${location.pathname === '/repeat-customers' ? 'bg-gray-700 shadow-inner' : ''}`}>
          <Link
            to="/repeat-customers"
            className={`block px-6 py-3 rounded-lg transition-all duration-300 ${
              location.pathname === '/repeat-customers'
                ? 'text-yellow-400 shadow-lg border-l-4 border-yellow-400'
                : 'text-white hover:bg-gray-800 hover:shadow-inner hover:border-l-4 hover:border-yellow-300'
            }`}
            aria-current={location.pathname === '/repeat-customers' ? 'page' : undefined}
          >
            Repeat Customers
          </Link>
        </li>
        <li className={`${location.pathname === '/geographical-distribution' ? 'bg-gray-700 shadow-inner' : ''}`}>
          <Link
            to="/geographical-distribution"
            className={`block px-6 py-3 rounded-lg transition-all duration-300 ${
              location.pathname === '/geographical-distribution'
                ? 'text-yellow-400 shadow-lg border-l-4 border-yellow-400'
                : 'text-white hover:bg-gray-800 hover:shadow-inner hover:border-l-4 hover:border-yellow-300'
            }`}
            aria-current={location.pathname === '/geographical-distribution' ? 'page' : undefined}
          >
            Geographical Distribution
          </Link>
        </li>
        <li className={`${location.pathname === '/customer-lifetime-value' ? 'bg-gray-700 shadow-inner' : ''}`}>
          <Link
            to="/customer-lifetime-value"
            className={`block px-6 py-3 rounded-lg transition-all duration-300 ${
              location.pathname === '/customer-lifetime-value'
                ? 'text-yellow-400 shadow-lg border-l-4 border-yellow-400'
                : 'text-white hover:bg-gray-800 hover:shadow-inner hover:border-l-4 hover:border-yellow-300'
            }`}
            aria-current={location.pathname === '/customer-lifetime-value' ? 'page' : undefined}
          >
            Customer Lifetime Value
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
