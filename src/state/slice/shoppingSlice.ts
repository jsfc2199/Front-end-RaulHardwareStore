import { createSlice } from "@reduxjs/toolkit";
import { productType } from "./productSlice";
import { shopCartType } from '../slice/productSlice'

interface shoppingStateType {
    productsCart: shopCartType[]
}

const initialState: shoppingStateType = {
    productsCart: []
}

const shoppingSlice = createSlice({
    name: 'shopping',
    initialState,
    reducers: {
        addToCart(state, action){
            const existingProduct = state.productsCart.find(actualProduct => actualProduct.product.id === action.payload.id)

            if (existingProduct){
                const updatedProduct = { amount: (existingProduct.amount + 1), product: existingProduct.product } 
                state.productsCart = state.productsCart.filter(p => p.product.id !== existingProduct.product.id)   
                state.productsCart.push(updatedProduct)
            }else{
                const newProduct = {
                    amount: 1,
                    product: action.payload
                }    
                state.productsCart.push(newProduct)
            }
        },
        clearShoppingCart(state){
            state.productsCart = []
        }
    }
})

export default shoppingSlice.reducer
export const {addToCart, clearShoppingCart} = shoppingSlice.actions