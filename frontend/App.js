import React, { lazy, Suspense } from 'react';
import 'babel-polyfill';
import './App.scss';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
// import RegisterScreen from './screens/RegisterScreen';
// import LoginScreen from './screens/LoginScreen';
// import CartScreen from './screens/CartScreen';
// import ProductsScreen from './screens/ProductsScreen'
import ErrorScreen from './screens/ErrorScreen';
import store from './store';
import { Provider } from 'react-redux';
import Footer from './components/Footer';
import { AuthContextProvider, useAuthContext } from './context/AuthContext';

const ProductsPage = lazy(() => import('./screens/ProductsScreen'));
const CartPage = lazy(() => import('./screens/CartScreen'));
const SignInPage = lazy(() => import('./screens/LoginScreen'));
const SignUpPage = lazy(() => import('./screens/RegisterScreen'));

const App = () => {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <Provider store={store}>
        <AuthContextProvider>
          <Router>
            <header>
              <Header />
            </header>
            <main>
              <Switch>
                <Route path="/login" component={SignInPage} />
                <Route path="/signup" component={SignUpPage} />
                <Route path="/products" component={ProductsPage} />
                <Route path="/cart" component={CartPage} />
                <Route path="/" component={HomeScreen} />
              </Switch>
            </main>
          </Router>
          <Footer />
        </AuthContextProvider>
      </Provider>
    </Suspense>
  );
};

export default App;
