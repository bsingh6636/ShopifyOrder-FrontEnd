import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar w-max h-auto bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-8">Shopify Dashboard</h2>
      <ul>
        <li className="mb-4">
          <Link to="/" className="text-white hover:text-gray-400">
            Total Sales Over Time
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/sales-growth-rate" className="text-white hover:text-gray-400">
            Sales Growth Rate
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/new-customers" className="text-white hover:text-gray-400">
            New Customers
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/repeat-customers" className="text-white hover:text-gray-400">
            Repeat Customers
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/geographical-distribution" className="text-white hover:text-gray-400">
            Geographical Distribution
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/customer-lifetime-value" className="text-white hover:text-gray-400">
            Customer Lifetime Value
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
