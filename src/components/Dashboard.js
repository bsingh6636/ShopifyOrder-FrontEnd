import React, { useContext, useEffect, useState } from 'react';
import ChartComponent from '../pages/charcomponent';
import useFetchData from '../hooks/useFetchData';
import { backend_server } from '../import';
import moment from 'moment';
import { salesData } from '../pages/initialValues';
import { Context } from '../index';

function Dashboard() {
  const [collectionName, setCollectionName] = useState('shopifyOrders')
  const [interval, setInterval] = useState('monthly');
  const [data, setData] = useState(salesData)
  const { salesMode } = useContext(Context)
  console.log(salesMode)
  const datas = useFetchData(`${backend_server}`, collectionName);
  useEffect(() => {
    setData(datas);
  }, [datas]);

  const filterDataByInterval = (data, interval) => {
    let filteredData;

    switch (interval) {
      case 'daily':
        filteredData = data; // Implement daily filtering logic, if needed
        break;
      case 'monthly':
        filteredData = data.reduce((acc, item) => {
          const month = moment(item.created_at).format('YYYY-MM');
          const totalPrice = parseFloat(item.total_price) || 0;

          const existing = acc.find(i => i.month === month);
          if (existing) {
            existing.total_price += totalPrice;
          } else {
            acc.push({ month, total_price: totalPrice });
          }

          return acc;
        }, []);
        break;
      case 'quarterly':
        filteredData = data.reduce((acc, item) => {
          const yearQuarter = moment(item.created_at).format('YYYY-[Q]Q');
          const totalPrice = parseFloat(item.total_price) || 0;

          const existing = acc.find(i => i.yearQuarter === yearQuarter);
          if (existing) {
            existing.total_price += totalPrice;
          } else {
            acc.push({ yearQuarter, total_price: totalPrice });
          }

          return acc;
        }, []);
        break;
      case 'yearly':
        filteredData = data.reduce((acc, item) => {
          const year = moment(item.created_at).format('YYYY');
          const totalPrice = parseFloat(item.total_price) || 0;

          const existing = acc.find(i => i.year === year);
          if (existing) {
            existing.total_price += totalPrice;
          } else {
            acc.push({ year, total_price: totalPrice });
          }

          return acc;
        }, []);
        break;
      default:
        filteredData = data;
    }

    switch (interval) {
      case 'daily':
        filteredData.sort((a, b) => moment(a.created_at).diff(moment(b.created_at)));
        break;
      case 'monthly':
        filteredData.sort((a, b) => moment(a.month, 'YYYY-MM').diff(moment(b.month, 'YYYY-MM')));
        break;
      case 'quarterly':
        filteredData.sort((a, b) => moment(a.yearQuarter, 'YYYY-[Q]Q').diff(moment(b.yearQuarter, 'YYYY-[Q]Q')));
        break;
      case 'yearly':
        filteredData.sort((a, b) => moment(a.year, 'YYYY').diff(moment(b.year, 'YYYY')));
        break;
      default:
      // No sorting needed for 'daily' if it's not filtered or already sorted
    }

    return filteredData;
  };

  const filteredData = data ? filterDataByInterval(data, interval) : [];


  return (
    <div className="dashboard w-4/5 p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className='text-center mb-6'>
        <button className='m-1 mx-4 p-2 bg-gray-300 rounded-lg hover:bg-gray-400' onClick={() => setInterval('daily')}>Daily</button>
        <button className='m-1 mx-4 p-2 bg-gray-300 rounded-lg hover:bg-gray-400' onClick={() => setInterval('monthly')}>Monthly</button>
        <button className='m-1 mx-4 p-2 bg-gray-300 rounded-lg hover:bg-gray-400' onClick={() => setInterval('quarterly')}>Quarterly</button>
        <button className='m-1 mx-4 p-2 bg-gray-300 rounded-lg hover:bg-gray-400' onClick={() => setInterval('yearly')}>Yearly</button>
      </div>

      <div className='flex flex-row justify-between mb-6'>

        <div className=''>
          <ChartComponent className='' type="Revenue Data" data={filteredData} chartType="line" />
        </div>
        <div className=''>
          <ChartComponent className='' type="Sales Data" data={filteredData} chartType="bar" />
        </div>
      </div>

      <div className='flex flex-col mb-6'>
        <ChartComponent className='w-full mb-6' type="Category Distribution" data={filteredData} chartType="pie" />
        <ChartComponent className='w-full' type="Performance Comparison" data={filteredData} chartType="radar" />
      </div>
    </div>

  );
}

export default Dashboard;
