import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
//Renderização do Bootstrap .css e .js
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
