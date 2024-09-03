import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Создайте корневой элемент
const root = ReactDOM.createRoot(document.getElementById('root'));

// Используйте метод render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
