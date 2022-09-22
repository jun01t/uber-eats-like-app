import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const DEFAULT_API_LOCALHOST = 'http://localhost:3000/api/v1'
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export const foodsIndex = (restaurantId) => 
`${DEFAULT_API_LOCALHOST}/restaurants/${restaurantId}/foods`

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
