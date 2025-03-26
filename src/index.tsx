import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <link
      rel='stylesheet'
      href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
    />
    <App />
  </React.StrictMode>
);
