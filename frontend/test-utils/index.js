import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { AuthContextProvider } from '../context/AuthContext';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import store from '../store';
store;
const AllTheProviders = ({ children }) => {
  const history = createMemoryHistory();

  return (
    <Provider store={store}>
      <AuthContextProvider>
        <Router history={history}>{children}</Router>
      </AuthContextProvider>
    </Provider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
