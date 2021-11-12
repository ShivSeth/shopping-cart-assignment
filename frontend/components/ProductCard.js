import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProductCard.scss';
import { increaseQuantity } from '../actions/cartActions';
const ProductCard = ({ product }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let item = cart.cartItems.filter((i) => i.id === product.id);
  return product ? (
    <div className="card-holder">
      <h4>{product.name}</h4>
      <div className="item-details">
        <div className="image-description">
          <img src={product.imageURL} alt={product.name} />
          <p>{product.description}</p>
        </div>
        <div className="price-options">
          <h5>{`MRP Rs ${product.price}`}</h5>
          <button onClick={() => dispatch(increaseQuantity(product))}>
            {item != false ? `${item[0].quantity} in cart` : 'Add to cart'}
          </button>
        </div>
        <div className="price-options-button">
          <button onClick={() => dispatch(increaseQuantity(product))}>
            {item != false ? `${item[0].quantity} in cart` : 'Add to cart'}
            {` @Rs ${product.price}`}
          </button>
        </div>
      </div>
    </div>
  ) : (
    <p>No Product available for the selected category</p>
  );
};

export default ProductCard;
