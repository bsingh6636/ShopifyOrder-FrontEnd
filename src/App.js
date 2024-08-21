import React from 'react';

import './App.css';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import TotalSalesOverTime from './components/salesOverTIme';
import NewCustomers from './components/check';

function App() {
  return (
    <div className="lg:px-12 app-container flex flex-col">
      <div><Header/></div>
     <div className='flex flex-row'>
     <SideBar />
     <Dashboard />
     </div>
    </div>
  );
}

export default App;
