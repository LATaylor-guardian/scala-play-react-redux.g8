import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './stores/configureStore';
import { setStore } from './stores/storeAccessor';
import { routes } from './routes';

const store = configureStore();
setStore(store);

render(
    <Provider store={store}>
      {routes}
    </Provider>
    , document.getElementById('react-mount'));