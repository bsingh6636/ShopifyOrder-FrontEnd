import React, { useEffect, useState } from 'react';
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

      const backgroundColors = chartType === 'pie' ? ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
                           : chartType === 'radar' ? 'rgba(153, 102, 255, 0.2)'
                           : 'rgba(75, 192, 192, 0.4)';
      
      const borderColors = chartType === 'pie' ? ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
                        : chartType === 'radar' ? 'rgba(153, 102, 255, 1)'
                        : 'rgba(75, 192, 192, 1)';

      setChartData({
        labels: labels,
        datasets: [
          {
            label: type.replace('-', ' '),
            data: values,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 2,
            hoverBackgroundColor: 'rgba(255, 159, 64, 0.2)',
            hoverBorderColor: 'rgba(255, 159, 64, 1)',
          },
        ],
      });
    }
  }, [data, chartType, type]);

  const ChartToRender = {
    bar: Bar,
    line: Line,
    pie: Pie,
    radar: Radar,
  }[chartType] || Line; // Default to Line if chartType is not recognized

  return chartData.labels && chartData.labels.length > 0 ? (
    <div className="chart-container mb-8 w-full max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-gray-200">{type.replace('-', ' ')}</h2>
      <div className="relative">
        <ChartToRender 
          data={chartData} 
          options={{
            maintainAspectRatio: true,
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: 'top',
                labels: {
                  color: '#333',
                  font: {
                    size: 14,
                    weight: 'bold',
                  },
                },
              },
              tooltip: {
                backgroundColor: 'rgba(0,0,0,0.7)',
                titleColor: '#fff',
                bodyColor: '#fff',
                cornerRadius: 4,
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                grid: {
                  color: 'rgba(200, 200, 200, 0.2)',
                },
                ticks: {
                  color: '#333',
                },
              },
              x: {
                grid: {
                  color: 'rgba(200, 200, 200, 0.2)',
                },
                ticks: {
                  color: '#333',
                },
              },
            },
          }} 
        />
      </div>
    </div>
  ) : null;
}

export default ChartComponent;
