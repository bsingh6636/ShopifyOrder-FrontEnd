import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation(); // Get the current route

  return (
    <div className="sidebar w-64 h-screen bg-gray-800 text-white p-4 flex flex-col">
      <h2 className="text-2xl font-bold mb-8">Shopify Dashboard</h2>
      <ul className="flex-1">
        <li className={`mb-4 ${location.pathname === '/' ? 'bg-gray-700' : ''}`}>
          <Link
            to="/"
            className={`block px-4 py-2 rounded transition-colors duration-300 ${location.pathname === '/' ? 'text-yellow-400' : 'text-white hover:bg-gray-700 hover:text-yellow-300'}`}
            aria-current={location.pathname === '/' ? 'page' : undefined}
          >
            Total Sales Over Time
          </Link>
        </li>
        <li className={`mb-4 ${location.pathname === '/sales-growth-rate' ? 'bg-gray-700' : ''}`}>
          <Link
            to="/sales-growth-rate"
            className={`block px-4 py-2 rounded transition-colors duration-300 ${location.pathname === '/sales-growth-rate' ? 'text-yellow-400' : 'text-white hover:bg-gray-700 hover:text-yellow-300'}`}
            aria-current={location.pathname === '/sales-growth-rate' ? 'page' : undefined}
          >
            Sales Growth Rate
          </Link>
        </li>
        <li className={`mb-4 ${location.pathname === '/new-customers' ? 'bg-gray-700' : ''}`}>
          <Link
            to="/new-customers"
            className={`block px-4 py-2 rounded transition-colors duration-300 ${location.pathname === '/new-customers' ? 'text-yellow-400' : 'text-white hover:bg-gray-700 hover:text-yellow-300'}`}
            aria-current={location.pathname === '/new-customers' ? 'page' : undefined}
          >
            New Customers
          </Link>
        </li>
        <li className={`mb-4 ${location.pathname === '/repeat-customers' ? 'bg-gray-700' : ''}`}>
          <Link
            to="/repeat-customers"
            className={`block px-4 py-2 rounded transition-colors duration-300 ${location.pathname === '/repeat-customers' ? 'text-yellow-400' : 'text-white hover:bg-gray-700 hover:text-yellow-300'}`}
            aria-current={location.pathname === '/repeat-customers' ? 'page' : undefined}
          >
            Repeat Customers
          </Link>
        </li>
        <li className={`mb-4 ${location.pathname === '/geographical-distribution' ? 'bg-gray-700' : ''}`}>
          <Link
            to="/geographical-distribution"
            className={`block px-4 py-2 rounded transition-colors duration-300 ${location.pathname === '/geographical-distribution' ? 'text-yellow-400' : 'text-white hover:bg-gray-700 hover:text-yellow-300'}`}
            aria-current={location.pathname === '/geographical-distribution' ? 'page' : undefined}
          >
            Geographical Distribution
          </Link>
        </li>
        <li className={`mb-4 ${location.pathname === '/customer-lifetime-value' ? 'bg-gray-700' : ''}`}>
          <Link
            to="/customer-lifetime-value"
            className={`block px-4 py-2 rounded transition-colors duration-300 ${location.pathname === '/customer-lifetime-value' ? 'text-yellow-400' : 'text-white hover:bg-gray-700 hover:text-yellow-300'}`}
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
