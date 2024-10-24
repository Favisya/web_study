import React from 'react';
import { configureStore } from '@reduxjs/toolkit'
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import router from './router';
import contactReducer from './reducers/contactReducer';
import { Provider } from 'react-redux';
import './style.css'

export const store = configureStore({
    reducer: contactReducer,
    devTools: true,
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);
