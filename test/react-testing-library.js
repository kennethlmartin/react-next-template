import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';

import { light as lightTheme } from 'src/themes';

const mockStore = configureMockStore();
const store = mockStore({});

// eslint-disable-next-line react/prop-types
const AllTheProviders = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
  </Provider>
);

const customRender = (ui, options) => {
  return render(ui, { wrapper: AllTheProviders, ...options });
};

// re-export everything
// eslint-disable-next-line import/export
export * from '@testing-library/react';

// override render method
// eslint-disable-next-line import/export
export { customRender as render };
