import { INCREMENT_QUANTITY, DECREMENT_QUANTITY } from "./actionTypes";

const initialState = [
    {
        id: 1,
        name: "Asus Vivobook X515MA",
        price: 35500,
        quantity: 0,
        inStock: 20
    },
    {
        id: 2,
        name: "Dell E1916HV 18.5 Inch",
        price: 9300,
        quantity: 0,
        inStock: 35
    },
    {
        id: 3,
        name: "Canon Eos 4000D 18MP",
        price: 36500,
        quantity: 0,
        inStock: 72
    }
]


const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_QUANTITY:
            return state.map(product => {
                if (product.id === action.payload.id) {
                    return {
                        ...product,
                        quantity: product.quantity + 1,
                        inStock: product.inStock - 1
                    }
                } else {
                    return product
                }
            }
            )
        case DECREMENT_QUANTITY:
            return state.map(product => {
                if (product.id === action.payload.id) {
                    return {
                        ...product,
                        quantity: product.quantity - 1,
                        inStock: product.inStock + 1
                    }
                } else {
                    return product
                }
            }
            )
        default:
            return state
    }
}

export default shoppingCartReducer;