import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const history = useHistory();
  return (
    <nav className="navbar">
      <img
        onClick={() => {
          history.push('/');
        }}
        className="nav-logo"
        src="/static/images/logo.png"
        alt="Sabka Bazaar"
      />

      <ul className="nav-left">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>

      <div className="nav-right">
        <ul className="nav-right-top">
          <li>
            <Link to="/login">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Register</Link>
          </li>
        </ul>

        <Link to="/cart" role="button" className="nav-right-bottom">
          <img src="/static/images/cart.svg" alt="cart icon" />
          <p
            className={
              cart.cartItems.length > 0
                ? 'item-present cart-value'
                : 'cart-value'
            }
          >
            {(cart.cartItems.length ? cart.cartItems.length : 0) +
              (cart.cartItems.length > 1 ? ' Items' : ' Item')}
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
