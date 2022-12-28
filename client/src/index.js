import React from "react";
import App from "./App.js";  

import { createRoot } from 'react-dom/client';
import 'font-awesome/css/font-awesome.min.css';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);