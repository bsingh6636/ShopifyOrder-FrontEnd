import React, { useEffect, useState } from 'react';
import ChartMaker from '../pages/ChartMaker';
import { shopifyCustomers as data } from '../pages/initialValues';
import Buttons from '../pages/Buttons';

const NewCustomersChart = () => {
    const shopifyCustomers = data;
    const [growthData, setGrowthData] = useState([]);
    const [interval, setInterval] = useState('daily');

    useEffect(() => {
        const customerCounts = {};

        // Function to format the date based on the selected interval
        const formatDate = (date) => {
            const d = new Date(date);
            switch (interval) {
                case 'monthly':
                    return `${d.getMonth() + 1}/${d.getFullYear()}`;
                case 'quarterly':
                    return `Q${Math.floor(d.getMonth() / 3) + 1}/${d.getFullYear()}`;
                case 'yearly':
                    return `${d.getFullYear()}`;
                default:
                    return d.toLocaleDateString('en-US');
            }
        };

        // Group customers by formatted date
        shopifyCustomers.forEach(customer => {
            const date = formatDate(customer.created_at);
            if (customerCounts[date]) {
                customerCounts[date] += 1;
            } else {
                customerCounts[date] = 1;
            }
        });

        // Convert the grouped data into a format suitable for the chart
        const data = Object.keys(customerCounts).map(date => ({
            date,
            count: customerCounts[date]
        }));

        setGrowthData(data);
    }, [shopifyCustomers, interval]);

    return (
        <div>
     <Buttons interval={interval} setInterval={setInterval} />
      <ChartMaker data={growthData} type="Sales Growth Rate" />
    </div>
    );
};

export default NewCustomersChart;
