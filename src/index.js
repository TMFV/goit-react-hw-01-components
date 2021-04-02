import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ModernNormalize from 'react-modern-normalize';

ReactDOM.render(
  <React.StrictMode>
    <ModernNormalize>
      <App />
    </ModernNormalize>
  </React.StrictMode>,
  document.getElementById('root'),
);
