import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './CartScreen.scss';
import { decreaseQuantity, increaseQuantity } from '../actions/cartActions';

const CartScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector((state) => state.cart);
  return (
    <div
      className={
        cart.cartItems.length === 0
          ? 'cart-details'
          : 'cart-details gray-background'
      }
    >
      {cart.cartItems.length === 0 ? (
        <Fragment>
          <div className="cart-empty">
            <h2>No items in your Cart</h2>
            <p>Your favorite items are just a click away</p>
          </div>

          <button onClick={() => history.push('/')}>Start Shopping</button>
        </Fragment>
      ) : (
        <Fragment>
          <div className="cart-items">
            <h2>{`My Cart (${cart.cartItems.length} items) `}</h2>

            <Fragment>
              {cart.cartItems.map((item) => (
                <div tabIndex={0} key={item.id} className="cart-content">
                  <img src={item.imageURL} alt={item.name} />
                  <div className="item-content-details">
                    <h4>{item.name}</h4>
                    <div className="quantity-info">
                      <span className="quantity-details">
                        <button
                          className="decrement-button"
                          onClick={() => dispatch(decreaseQuantity(item))}
                        >
                          -
                        </button>
                        {item.quantity}
                        <button
                          className="increment-button"
                          onClick={() => dispatch(increaseQuantity(item))}
                        >
                          +
                        </button>
                        <span>{`X Rs. ${item.price}`}</span>
                      </span>
                      <span className="item-price">
                        Rs.{item.quantity * item.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="cart-items__footer">
                <img
                  src="../static/images/lowest-price.png"
                  alt="Lowest price guaranteed"
                />
                <p>You won't find it cheaper anywhere</p>
              </div>
            </Fragment>
          </div>

          <Link to="/signup">
            <button>{`Proceed to checkout - Rs.${cart.price}`} ✔</button>
          </Link>
        </Fragment>
      )}
    </div>
  );
};

export default CartScreen;
