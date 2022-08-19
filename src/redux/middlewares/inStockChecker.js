import { INCREMENT_QUANTITY } from "../shoppingCart/actionTypes";

const inStockChecker = store => next => action => {

    const currentState = store.getState();

    if(action.type === INCREMENT_QUANTITY && currentState[action.payload.id-1].inStock < 1) {
        
    } else {
        next(action);
    }
    
}

export default inStockChecker;