import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistedStore, store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react'

import HomeView from './views/Home.view';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <HomeView />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

