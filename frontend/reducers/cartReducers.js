import {
  CART_ITEM_QUANTITY_INCREASE,
  CART_ITEM_QUANTITY_DECREASE,
  CART_ITEM_ADD,
} from '../constants/cartConstants';

export const cartReducer = (
  state = {
    cartItems: [],
    price: 0,
  },
  action
) => {
  let item, existingItem;
  if (action.payload) {
    item = action.payload;
    existingItem = state.cartItems.find((x) => x.id === item.id);
  }

  switch (action.type) {
    case CART_ITEM_QUANTITY_INCREASE:
    case CART_ITEM_ADD:
      if (existingItem) {
        const newPrice = state.price + item.price;
        existingItem.quantity = existingItem.quantity + 1;
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === existingItem.id ? existingItem : x
          ),
          price: newPrice,
        };
      } else {
        item.quantity = 1;
        return {
          ...state,
          cartItems: [...state.cartItems, item],
          price: state.price + item.price,
        };
      }

    case CART_ITEM_QUANTITY_DECREASE:
      const newPrice = state.price - item.price;
      existingItem.quantity = existingItem.quantity - 1;
      if (existingItem.quantity > 0) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === existingItem.id ? existingItem : x
          ),
          price: newPrice,
        };
      } else {
        return {
          ...state,
          cartItems: state.cartItems.filter((x) => x.id !== existingItem.id),
          price: newPrice,
        };
      }

    default:
      return state;
  }
};
