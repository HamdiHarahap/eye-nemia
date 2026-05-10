import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './style/index.css';
import App from './App.jsx';

import { ScreeningProvider } from './context/ScreeningContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScreeningProvider>
        <App />
      </ScreeningProvider>
    </BrowserRouter>
  </StrictMode>,
);
