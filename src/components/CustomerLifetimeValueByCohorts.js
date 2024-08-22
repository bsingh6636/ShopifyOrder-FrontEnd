import React, { useEffect, useState } from 'react';
import ChartMaker from '../pages/ChartMaker';
import { shopifyCustomers as customers, salesData as orders } from '../pages/initialValues';
import Buttons from '../pages/Buttons';

const CustomerLifetimeValueByCohorts = () => {
    const [cohortData, setCohortData] = useState([]);
    const [interval, setInterval] = useState('monthly');

    useEffect(() => {
        const cohorts = {};

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

        // Group customers by cohort (month of their first purchase)
        customers.forEach(customer => {
            const cohort = formatDate(customer.created_at);
            const customerOrders = orders.filter(order => order.customer.id.low === customer.id.low);

            const totalSpent = customerOrders.reduce((sum, order) => {
                return sum + parseFloat(order.total_price_set.shop_money.amount);
            }, 0);

            if (cohorts[cohort]) {
                cohorts[cohort].totalSpent += totalSpent;
                cohorts[cohort].customers += 1;
            } else {
                cohorts[cohort] = {
                    totalSpent,
                    customers: 1
                };
            }
        });

        // Convert the cohorts data into a format suitable for the chart
        const data = Object.keys(cohorts).map(cohort => ({
            date: cohort,
            count: cohorts[cohort].totalSpent / cohorts[cohort].customers // Average lifetime value
        }));

        setCohortData(data);
        // eslint-disable-next-line
    }, [customers, orders, interval]);

    return (
        <div>
            <Buttons interval={interval} setInterval={setInterval} />
            <ChartMaker data={cohortData} type="Customer Lifetime Value by Cohorts" />
        </div>
    );
};

export default CustomerLifetimeValueByCohorts;
