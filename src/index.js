import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './functions';
import { Provider } from 'react-redux';
import STORE from './redux/STORE';
import 'react-toastify/dist/ReactToastify.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={STORE}>
      <App />
    </Provider>
);

