import React, { useContext, useEffect, useState } from 'react';
import ChartComponent from '../pages/charcomponent';
import useFetchData from '../hooks/useFetchData';
import { backend_server } from '../import';
import moment from 'moment';
import { salesData } from '../pages/initialValues';
import { Context } from '../index';

function Dashboard2() {
  const [collectionName, setCollectionName] = useState('shopifyOrders');
  const [interval, setInterval] = useState('monthly');
  const [data, setData] = useState(salesData);
  const { salesMode } = useContext(Context);
  const datas = useFetchData(`${backend_server}`, collectionName);

  useEffect(() => {
    setData(datas);
  }, [datas]);
  function calculateSalesGrowthRate(data, interval) {
    let growthData = [];
  
    // Sort the data based on the interval (daily, monthly, quarterly, yearly)
    switch (interval) {
      case 'daily':
        data.sort((a, b) => moment(a.created_at).diff(moment(b.created_at)));
        break;
      case 'monthly':
        data.sort((a, b) => moment(a.month, 'YYYY-MM').diff(moment(b.month, 'YYYY-MM')));
        break;
      case 'quarterly':
        data.sort((a, b) => moment(a.yearQuarter, 'YYYY-[Q]Q').diff(moment(b.yearQuarter, 'YYYY-[Q]Q')));
        break;
      case 'yearly':
        data.sort((a, b) => moment(a.year, 'YYYY').diff(moment(b.year, 'YYYY')));
        break;
      default:
        break;
    }
  
    // Calculate the growth rate
    for (let i = 1; i < data.length; i++) {
      const previous = data[i - 1];
      const current = data[i];
  
      const growthRate = ((current.total_price - previous.total_price) / previous.total_price) * 100;
  
      growthData.push({
        ...current,
        growthRate: growthRate.toFixed(2) // Keep two decimal places
      });
    }
  
    return growthData;
  }
  
  const filteredData = data ? filterDataByInterval(data, interval) : [];

  const growthData = salesMode === 'salesGrowth' ? calculateSalesGrowthRate(filteredData, interval) : null;

  return (
    <div className="dashboard w-4/5 p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className='text-center mb-6'>
        <button className='m-1 mx-4 p-2 bg-gray-300 rounded-lg hover:bg-gray-400' onClick={() => setInterval('daily')}>Daily</button>
        <button className='m-1 mx-4 p-2 bg-gray-300 rounded-lg hover:bg-gray-400' onClick={() => setInterval('monthly')}>Monthly</button>
        <button className='m-1 mx-4 p-2 bg-gray-300 rounded-lg hover:bg-gray-400' onClick={() => setInterval('quarterly')}>Quarterly</button>
        <button className='m-1 mx-4 p-2 bg-gray-300 rounded-lg hover:bg-gray-400' onClick={() => setInterval('yearly')}>Yearly</button>
      </div>

      {salesMode === 'salesOverTime' ? (
        <div className='flex flex-row justify-between mb-6'>
          <div>
            <ChartComponent type="Revenue Data" data={filteredData} chartType="line" />
          </div>
          <div>
            <ChartComponent type="Sales Data" data={filteredData} chartType="bar" />
          </div>
        </div>
      ) : (
        <div className='flex flex-col mb-6'>
          <ChartComponent type="Sales Growth Rate" data={growthData} chartType="line" />
        </div>
      )}

      <div className='flex flex-col mb-6'>
        <ChartComponent type="Category Distribution" data={filteredData} chartType="pie" />
        <ChartComponent type="Performance Comparison" data={filteredData} chartType="radar" />
      </div>
    </div>
  );
}

export default Dashboard2;

