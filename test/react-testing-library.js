import configureMockStore from 'redux-mock-store';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';

import { light as lightTheme } from '../src/themes';

const mockStore = configureMockStore();
const store = mockStore({});

const AllTheProviders = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
  </Provider>
);

AllTheProviders.propTypes = {
  children: PropTypes.node,
};

const customRender = (ui, options) => {
  return render(ui, { wrapper: AllTheProviders, ...options });
};

// re-export everything
// eslint-disable-next-line import/export
export * from '@testing-library/react';

// override render method
// eslint-disable-next-line import/export
export { customRender as render };
