import React from 'react';
import ReactDOM from 'react-dom';
import { BrowerRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowerRouter>
    <App />
  </BrowerRouter>,
  document.getElementById('root')
);

reportWebVitals();
