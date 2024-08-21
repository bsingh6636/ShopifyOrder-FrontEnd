import React, { useState } from 'react';
import useFetchData from '../hooks/useFetchData';
import moment from 'moment';
import { backend_server } from '../import';
import ChartComponent from '../pages/charcomponent';


function TotalSalesOverTime() {
  const [interval, setInterval] = useState('monthly');
  const collectionName = 'shopifyOrders';
  const data = useFetchData(`${backend_server}`, collectionName);

  const filterDataByInterval = (data, interval) => {
    switch (interval) {
      case 'daily':
        return data.reduce((acc, item) => {
          const date = moment(item.created_at).format('YYYY-MM-DD');
          const existing = acc.find(i => i.date === date);
          if (existing) {
            existing.total_price += parseFloat(item.total_price_set.shop_money.amount);
          } else {
            acc.push({ date, total_price: parseFloat(item.total_price_set.shop_money.amount) });
          }
          return acc;
        }, []);
      case 'monthly':
        return data.reduce((acc, item) => {
          const month = moment(item.created_at).format('YYYY-MM');
          const existing = acc.find(i => i.month === month);
          if (existing) {
            existing.total_price += parseFloat(item.total_price_set.shop_money.amount);
          } else {
            acc.push({ month, total_price: parseFloat(item.total_price_set.shop_money.amount) });
          }
          return acc;
        }, []);
      case 'quarterly':
        return data.reduce((acc, item) => {
          const quarter = `${moment(item.created_at).year()}-Q${moment(item.created_at).quarter()}`;
          const existing = acc.find(i => i.quarter === quarter);
          if (existing) {
            existing.total_price += parseFloat(item.total_price_set.shop_money.amount);
          } else {
            acc.push({ quarter, total_price: parseFloat(item.total_price_set.shop_money.amount) });
          }
          return acc;
        }, []);
      case 'yearly':
        return data.reduce((acc, item) => {
          const year = moment(item.created_at).format('YYYY');
          const existing = acc.find(i => i.year === year);
          if (existing) {
            existing.total_price += parseFloat(item.total_price_set.shop_money.amount);
          } else {
            acc.push({ year, total_price: parseFloat(item.total_price_set.shop_money.amount) });
          }
          return acc;
        }, []);
      default:
        return data;
    }
  };

  const filteredData = data ? filterDataByInterval(data, interval) : [];

  return (
    <div>
      <div className="interval-buttons">
        <button onClick={() => setInterval('daily')}>Daily</button>
        <button onClick={() => setInterval('monthly')}>Monthly</button>
        <button onClick={() => setInterval('quarterly')}>Quarterly</button>
        <button onClick={() => setInterval('yearly')}>Yearly</button>
      </div>
      <ChartComponent
        type="Total Sales Over Time"
        data={filteredData}
        chartType="line"
      />
    </div>
  );
}

export default TotalSalesOverTime;
