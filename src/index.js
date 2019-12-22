import React from 'react';
import ReactDOM from 'react-dom';
import { MediaQueryProvider } from 'react-media-query-hoc';

import App from './App';
import './index.css';

ReactDOM.render(
  <MediaQueryProvider>
    <App />
  </MediaQueryProvider>,
  document.getElementById('root')
);
