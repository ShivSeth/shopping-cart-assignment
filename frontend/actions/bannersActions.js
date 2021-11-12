import axios from 'axios';

import {
  BANNERS_URL,
  BANNERS_LIST_FAIL,
  BANNERS_LIST_SUCCESS,
  BANNERS_LIST_REQUEST,
} from '../constants/bannersConstants';

export const fetchBanners = () => async (dispatch) => {
  try {
    dispatch({
      type: BANNERS_LIST_REQUEST,
    });

    const { data } = await axios.get(BANNERS_URL);

    dispatch({
      type: BANNERS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BANNERS_LIST_FAIL,
      payload: error.message,
    });
  }
};
