import {
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_FAIL,
} from '../constants/categoryConstants';

export const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return {
        loading: true,
        categoryList: [],
      };

    case CATEGORY_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CATEGORY_LIST_SUCCESS:
      return {
        loading: false,
        categoryList: action.payload,
      };
    default:
      return state;
  }
};
