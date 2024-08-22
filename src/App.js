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
