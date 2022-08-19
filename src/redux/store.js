import { applyMiddleware, createStore } from 'redux';
import shoppingCartReducer from './shoppingCart/shoppingCartReducer';
import inStockChecker from './middlewares/inStockChecker';

const store = createStore(shoppingCartReducer, applyMiddleware(inStockChecker));

export default store;