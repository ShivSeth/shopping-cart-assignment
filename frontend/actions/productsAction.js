import axios from 'axios'
import {
  PRODUCTS_URL,
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_REQUEST,
  PRODUCTS_LIST_FAIL,
} from '../constants/productsConstants'

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCTS_LIST_REQUEST,
    })

    const { data } = await axios.get(PRODUCTS_URL)

    dispatch({
      type: PRODUCTS_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCTS_LIST_FAIL,
      error: error.message,
    })
  }
}
