import {
  CART_ITEM_QUANTITY_INCREASE,
  CART_ITEM_QUANTITY_DECREASE,
  CART_ITEM_ADD,
} from '../constants/cartConstants'

export const increaseQuantity = (item) => (dispatch) => {
  dispatch({
    type: CART_ITEM_QUANTITY_INCREASE,
    payload: item,
  })
}

export const decreaseQuantity = (item) => (dispatch) => {
  dispatch({
    type: CART_ITEM_QUANTITY_DECREASE,
    payload: item,
  })
}

export const removeItem = (item) => (dispatch) => {
  dispatch({
    type: CART_ITEM_ADD,
    payload: item.id,
  })
}
