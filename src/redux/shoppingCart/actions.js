import { INCREMENT_QUANTITY, DECREMENT_QUANTITY } from "./actionTypes";

export const incrementQuantity = (id) => {
    return {
        type: INCREMENT_QUANTITY,
        payload: {
            id
        }
    }
}

export const decrementQuantity = (id) => {
    return {
        type: DECREMENT_QUANTITY,
        payload: {
            id
        }
    }
}