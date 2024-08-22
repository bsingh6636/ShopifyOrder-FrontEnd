# E-Commerce Data Visualization Web Application

## Overview

This project is a data visualization web application designed to analyze e-commerce data from a Shopify store stored in MongoDB. The application includes a REST API built with Node.js and Express, which interacts with the MongoDB database to fetch and manipulate data. The frontend, developed using ReactJS and Chart.js, visualizes the data through various charts and maps.

## Features

- **Total Sales Over Time**: Visualization of total sales over different time intervals (daily, monthly, quarterly, and yearly).
- **Sales Growth Rate Over Time**: Analysis of the growth rate of sales.
- **New Customers Added Over Time**: Tracking and visualization of new customers based on their creation date.
- **Number of Repeat Customers**: Identification and visualization of customers with more than one purchase across different time frames.
- **Geographical Distribution of Customers**: Visualization of the geographical distribution of customers using their city data.
- **Customer Lifetime Value by Cohorts**: Grouping customers by the month of their first purchase and visualizing their lifetime value.

## Technologies Used

### Backend

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for Node.js used to build the RESTful API.
- **MongoDB**: NoSQL database used to store Shopify data.

### Frontend

- **ReactJS**: JavaScript library for building user interfaces.
- **Chart.js**: JavaScript charting library used for data visualization.
- **React-Chart.js**: React wrapper for Chart.js to easily integrate charts into the React application.

## API Endpoints

- **GET /api/sales-over-time**: Retrieves total sales over time, grouped by different intervals.
- **GET /api/sales-growth-rate**: Retrieves sales growth rate data over time.
- **GET /api/new-customers**: Retrieves the count of new customers added over time.
- **GET /api/repeat-customers**: Retrieves the number of repeat customers over various time frames.
- **GET /api/customer-geography**: Retrieves geographical distribution of customers by city.
- **GET /api/customer-lifetime-value**: Retrieves customer lifetime value data by cohorts.

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB instance with the sample data loaded (see connection details below).

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ecommerce-data-visualization.git
   cd ecommerce-data-visualization
2. INstall dependies
   ```bash
   npm install
3. Configure .env with MONGO URl
4. Start the Backend Server
   ```bash
   npm run server

Usage
Visit the deployed application through the provided URL. The application will display various data visualizations, such as sales over time, sales growth rate, new customers, repeat customers, geographical distribution, and customer lifetime value by cohorts.

Demo
Live App: [ Deployed URL](https://shopify-order-front-end.vercel.app/)
GitHub Repository: [Link to Repository](https://github.com/bsingh6636/ShopifyOrder-FrontEnd)
License
This project is licensed under the MIT License.

Contact
For any inquiries or feedback, please contact yourname@example.com.

Feel free to contribute to this project by forking the repository and submitting pull requests. Any contributions are welcome!
