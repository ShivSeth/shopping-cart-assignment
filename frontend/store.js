import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import { categoryReducer } from './reducers/categoryReducer';
import { productsReducer } from './reducers/productsReducer';
import { bannersReducer } from './reducers/bannersReducer';

const initialState = {};
const rootReducer = combineReducers({
  category: categoryReducer,
  products: productsReducer,
  cart: cartReducer,
  banners: bannersReducer,
});
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
