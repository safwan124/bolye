import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './ScrollToTop.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={"/bolye/"}>
    <ScrollToTop/>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
