import React, { useContext, useEffect, useState } from 'react';
import { Line, Bar, Pie, Radar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, RadialLinearScale, ArcElement } from 'chart.js';
import moment from 'moment';



// Register the components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, RadialLinearScale, ArcElement);

function ChartComponent({ type, data, chartType }) {
  const [chartData, setChartData] = useState({});

  
  useEffect(() => {
    if (data) {
      const labels = data.map(item => moment(item.created_at || item.month || item.year).format('YYYY-MM-DD'));
      const values = data.map(item => parseFloat(item.growthRate || item.total_price || item.count));
     

      setChartData({
        labels: labels,
        datasets: [
          {
            label: 'Total Price',
            data: values,
            backgroundColor: chartType === 'bar' ? 'rgba(75,192,192,0.4)' 
                         : chartType === 'pie' ? ['rgba(255,99,132,0.2)', 'rgba(54,162,235,0.2)', 'rgba(255,206,86,0.2)'] 
                         : chartType === 'radar' ? 'rgba(153,102,255,0.2)' 
                         : 'rgba(153,102,255,0.2)',
            borderColor: chartType === 'bar' ? 'rgba(75,192,192,1)' 
                        : chartType === 'radar' ? 'rgba(153,102,255,1)' 
                        : 'rgba(255,99,132,1)',
            borderWidth: 2,
          },
        ],
      });
    }
  }, [data, chartType]);

  const ChartToRender = chartType === 'bar' ? Bar 
                     : chartType === 'line' ? Line 
                     : chartType === 'pie' ? Pie 
                     : Radar;

  return chartData.labels && chartData.labels.length > 0 ? (
    <div className="chart-container mb-8  w-96">
      <h2 className="text-xl font-bold mb-4">{type.replace('-', ' ')}</h2>
      <ChartToRender data={chartData} />
    </div>
  ) : null;
}

export default ChartComponent;
