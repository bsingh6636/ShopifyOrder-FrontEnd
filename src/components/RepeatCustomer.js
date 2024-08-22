import React, { useEffect, useState } from 'react';
import ChartMaker from '../pages/ChartMaker';
import { shopifyCustomers as data } from '../pages/initialValues';

const RepeatCustomersChart = () => {
    const shopifyCustomers = data;
    const [repeatData, setRepeatData] = useState([]);
    const [interval, setInterval] = useState('daily');

    useEffect(() => {
        const purchaseCounts = {};

        // Function to format the date based on the selected interval
        const formatDate = (date) => {
            const d = new Date(date);
            switch (interval) {
                case 'monthly':
                    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
                case 'quarterly':
                    const quarter = Math.floor(d.getMonth() / 3) + 1;
                    return `${d.getFullYear()}-Q${quarter}`;
                case 'yearly':
                    return `${d.getFullYear()}`;
                default:
                    return d.toISOString().split('T')[0]; // YYYY-MM-DD
            }
        };

        // Initialize purchase counts per customer
        shopifyCustomers.forEach(customer => {
            const customerId = customer.id.low; // Assuming 'low' is the unique identifier
            const date = formatDate(customer.created_at);
            if (!purchaseCounts[customerId]) {
                purchaseCounts[customerId] = {};
            }
            if (purchaseCounts[customerId][date]) {
                purchaseCounts[customerId][date] += 1;
            } else {
                purchaseCounts[customerId][date] = 1;
            }
        });

        // Identify repeat customers per date
        const repeatCounts = {};
        Object.values(purchaseCounts).forEach(customerDates => {
            Object.keys(customerDates).forEach(date => {
                if (customerDates[date] > 1) {
                    if (repeatCounts[date]) {
                        repeatCounts[date] += 1;
                    } else {
                        repeatCounts[date] = 1;
                    }
                }
            });
        });

        // Convert the grouped data into a format suitable for the chart
        const formattedData = Object.keys(repeatCounts).map(date => ({
            date,
            count: repeatCounts[date]
        }));

        // Sort the data by date to ensure chronological order
        formattedData.sort((a, b) => new Date(a.date) - new Date(b.date));

        setRepeatData(formattedData);
    }, [shopifyCustomers, interval]);

    return (
        <div>
            <div className="flex space-x-4 mb-4">
                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700" onClick={() => setInterval('daily')}>Daily</button>
                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700" onClick={() => setInterval('monthly')}>Monthly</button>
                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700" onClick={() => setInterval('quarterly')}>Quarterly</button>
                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700" onClick={() => setInterval('yearly')}>Yearly</button>
            </div>
            <ChartMaker data={repeatData} type="Repeat Customers" />
        </div>
    );
};

export default RepeatCustomersChart;
