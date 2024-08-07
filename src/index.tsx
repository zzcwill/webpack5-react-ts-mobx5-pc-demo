import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Routes from '@/routes';

import '@/styles/common.less';
import '@/index.less';

const initApp = async () => {
  const App = () => {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  };

  const root = document.getElementById('root');
  if (root) {
    createRoot(root).render(<App />);
  }
};

initApp();
