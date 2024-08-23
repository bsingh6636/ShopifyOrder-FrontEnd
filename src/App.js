import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import SideBar from './components/SideBar';
import Header from './components/Header';
import LoadingShimmer from './pages/Shimmer';

// Lazy load components
const Dashboard = lazy(() => import('./components/Dashboard'));
const SalesGrowthRate = lazy(() => import('./components/SalesGrowthRate'));
const NewCustomersChart = lazy(() => import('./components/NewCustomer'));
const RepeatCustomersChart = lazy(() => import('./components/RepeatCustomer'));
const GeographicalDistribution = lazy(() => import('./components/GeographicalDistribution'));
const CustomerLifetimeValueByCohorts = lazy(() => import('./components/CustomerLifetimeValueByCohorts'));
const AboutUs = lazy(() => import('./components/AboutUs'));

const Layout = ({ children }) => {
  return (
    <div className="app-container flex flex-col min-h-screen bg-gray-100">
    <Header className="shadow-md z-10" />
    <div className="flex flex-row flex-1">
      <SideBar className="shadow-lg bg-white min-w-[240px] w-64 p-6" />
      <main className="flex-1 ml-0 lg:ml-10 xl:ml-10 p-6  bg-white shadow-md rounded-lg">
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
        <Suspense fallback={<LoadingShimmer/>}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sales-growth-rate" element={<SalesGrowthRate />} />
            <Route path="/new-customers" element={<NewCustomersChart />} />
            <Route path="/repeat-customers" element={<RepeatCustomersChart />} />
            <Route path="/geographical-distribution" element={<GeographicalDistribution />} />
            <Route path="/customer-lifetime-value" element={<CustomerLifetimeValueByCohorts />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
