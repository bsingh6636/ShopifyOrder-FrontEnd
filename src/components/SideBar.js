import React, { useContext } from 'react';
import { Context } from '../index';

function Sidebar() {
  
  const { setSalesMode , salesMode } = useContext(Context)

  function setSalesMod(mode){
      setSalesMode(mode)
  }
console.log(salesMode)
  return (
    <div className="sidebar w-1/5 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-8">Shopify Dashboard</h2>
      <ul>
        <li className="mb-4 cursor-pointer" onClick={()=>setSalesMod('salesOverTime')}>Total Sales Over Time</li>
        <li className="mb-4 cursor-pointer" onClick={()=>setSalesMod('salesGrowth')}>Sales Growth Rate</li>
        <li className="mb-4 cursor-pointer">New Customers</li>
        <li className="mb-4 cursor-pointer">Repeat Customers</li>
        <li className="mb-4 cursor-pointer">Geographical Distribution</li>
        <li className="mb-4 cursor-pointer">Customer Lifetime Value</li>
      </ul>
    </div>
  );
}

export default Sidebar;
