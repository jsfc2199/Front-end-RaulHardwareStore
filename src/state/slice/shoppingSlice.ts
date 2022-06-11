import { createSlice } from "@reduxjs/toolkit";
import { productType } from "./productSlice";

interface shoppingStateType {
    productsCart: productType[]
}

const initialState: shoppingStateType = {
    productsCart: []
}

const shoppingSlice = createSlice({
    name: 'shopping',
    initialState,
    reducers: {
        addToCart(state, action){
            state.productsCart.push(action.payload)
        },
        clearShoppingCart(state){
            state.productsCart = []
        }
    }
})

export default shoppingSlice.reducer
export const {addToCart, clearShoppingCart} = shoppingSlice.actions