import PropTypes from 'prop-types';
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import themes from '../src/themes';

const mockStore = configureMockStore();
const store = mockStore({});

const AllTheProviders = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider theme={themes.light}>{children}</ThemeProvider>
  </Provider>
);

AllTheProviders.propTypes = {
  children: PropTypes.node,
};

const customRender = (ui, options) => {
  return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from '@testing-library/react';
export { customRender as render };
