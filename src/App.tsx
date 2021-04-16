import React from 'react';
import Product from './pages/product';

/* Redux */
import { Provider } from 'react-redux';
import store from './store';

import './styles/index.css';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Product></Product>
      </div>
    </Provider>
  );
};

export default App;
