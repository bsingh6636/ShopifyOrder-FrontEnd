import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import SideBar from './components/SideBar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import SalesGrowthRate from './components/SalesGrowthRate';
import NewCustomersChart from './components/NewCustomer';
import RepeatCustomersChart from './components/RepeatCustomer';
import GeographicalDistribution from './components/GeographicalDistribution';
import CustomerLifetimeValueByCohorts from './components/CustomerLifetimeValueByCohorts';
import AboutUs from './components/AboutUs';

const Layout = ({ children }) => {
  return (
    <div className="lg:px-12 app-container flex flex-col">
      <Header />
      <div className="flex flex-row">
        <SideBar />
        <main className="flex-1 ml-64 p-4"> {/* Adjust the margin-left based on your sidebar width */}
          {children}
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sales-growth-rate" element={<SalesGrowthRate />} />
          <Route path="/new-customers" element={<NewCustomersChart />} />
          <Route path="/repeat-customers" element={<RepeatCustomersChart />} />
          <Route path="/geographical-distribution" element={<GeographicalDistribution />} />
          <Route path="/customer-lifetime-value" element={<CustomerLifetimeValueByCohorts />} />
          <Route path="/aboutus" element={<AboutUs/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
