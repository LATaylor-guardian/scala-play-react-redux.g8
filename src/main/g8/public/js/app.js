import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './util/configureStore';
import { setStore } from './util/storeAccessor';
import { routes } from './routes';

const store = configureStore();
setStore(store);

render(
    <Provider store={store}>
      {routes}
    </Provider>
    , document.getElementById('react-mount'));