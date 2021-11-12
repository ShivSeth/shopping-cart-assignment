import {
  BANNERS_LIST_REQUEST,
  BANNERS_LIST_FAIL,
  BANNERS_LIST_SUCCESS,
} from '../constants/bannersConstants';

export const bannersReducer = (state = {}, action) => {
  switch (action.type) {
    case BANNERS_LIST_REQUEST:
      return {
        loading: true,
        bannersList: [],
      };
    case BANNERS_LIST_SUCCESS:
      return {
        loading: false,
        bannersList: action.payload,
      };
    case BANNERS_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
