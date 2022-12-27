import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from './HomePage';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<HomePage/>} />

    </Routes>

  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
