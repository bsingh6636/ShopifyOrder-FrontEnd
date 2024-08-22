import React, { useEffect, useState } from 'react';
import ChartComponent from '../pages/Charcomponent';
import moment from 'moment';
import { salesData as initialSalesData } from '../pages/initialValues';
import Buttons from '../pages/Buttons';
import ChartMaker from '../pages/ChartMaker';

function SalesGrowthRate({ data = initialSalesData }) {
  const [interval, setInterval] = useState('monthly');
  const [growthData, setGrowthData] = useState([]);

  useEffect(() => {
    if (data && data.length > 1) {
      const calculateGrowthRate = (data, interval) => {
        let growthData = [];
        const groupedData = {};

        // Group data by the selected interval
        data.forEach((item) => {
            let key;
            switch (interval) {
              case 'daily':
                key = moment(item.created_at).format('YYYY-MM-DD');
                break;
              case 'monthly':
                key = moment(item.created_at).format('YYYY-MM');
                break;
              case 'quarterly':
                key = moment(item.created_at).format('YYYY-[Q]Q');
                break;
              case 'yearly':
                key = moment(item.created_at).format('YYYY');
                break;
              default:
                key = moment(item.created_at).format('YYYY-MM');
            }
          
            // Ensure that groupedData[key] is a number before adding
            if (!groupedData[key]) {
              groupedData[key] = 0;
            }
            // Convert total_price to a number if it's not already
            groupedData[key] += parseFloat(item.total_price);
          });
          
        //   console.log("Grouped Data:", groupedData);
          

        const sortedKeys = Object.keys(groupedData).sort((a, b) => moment(a).diff(moment(b)));

        for (let i = 1; i < sortedKeys.length; i++) {
            const previousKey = sortedKeys[i - 1];
            const currentKey = sortedKeys[i];
        
            const previousValue = groupedData[previousKey];
            const currentValue = groupedData[currentKey];
            
        
            // console.log(`Previous (${previousKey}):`, previousValue);
            // console.log(`Current (${currentKey}):`, currentValue);
        
            // Check for valid values before calculating growth rate
            if (previousValue && currentValue) {
                const growthRate = ((currentValue - previousValue) / previousValue) * 100;
                // console.log('Growth Rate:', growthRate);
        
                growthData.push({
                    label: currentKey,
                    growthRate: parseFloat(growthRate.toFixed(2)),
                });
            } else {
                console.warn(`Skipping calculation for ${currentKey} due to invalid previous or current value.`);
            }
        }
        
        
        return growthData;
      };

      const growth = calculateGrowthRate(data, interval);
      setGrowthData(growth);
    } else {
      console.log("No data available or insufficient data points for the selected interval.");
    }
  }, [data, interval]);

  return (
    <div className='sales-growth-rate'>
      <h2 className="text-2xl font-bold mb-4">Sales Growth Rate Over Time</h2>

      <Buttons interval={interval} setInterval={setInterval} />

      {growthData.length > 0 ? (
       
        <>
        <ChartMaker data={growthData} type='sales grwoth data'/>
         
        </>
      ) : (
        <p>No data available for the selected interval.</p>
      )}
    </div>
  );
}

export default SalesGrowthRate;
