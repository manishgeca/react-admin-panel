import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './store';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <Provider store={store}>
    <Router>
      <div className='container'>
      <App />
      </div>
    </Router>
  </Provider>
);