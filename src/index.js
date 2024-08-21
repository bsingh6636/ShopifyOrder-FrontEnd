import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export const Context= createContext({salesMode:'salesOverTime'})

const AppWrapper = () =>{
  const [shopifyOrder , setShopifyOrder] = useState()
const [shopifyProducts , setshopifyProducts] = useState()
const [shopifyCustomers , setshopifyCustomers] = useState()
const [salesMode , setSalesMode] = useState('salesOverTime')
const [object , setObject] = useState({})

return(
  <Context.Provider value={{shopifyOrder , setShopifyOrder , shopifyCustomers , setshopifyCustomers , shopifyProducts , setshopifyProducts , object , setObject , salesMode , setSalesMode}}>
       <App />
  </Context.Provider>
)
}



const root = ReactDOM.createRoot(document.getElementById('root'));

 root.render(
  <AppWrapper/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
