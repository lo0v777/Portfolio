import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './app/providers/ThemeProvider/ThemeProvider';
import { Preloader } from './widgets/Preloader';

import App from './app/App';
import './shared/assets/styles/global.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Preloader />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
