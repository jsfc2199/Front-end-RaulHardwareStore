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
            const productToCart = state.productsCart.find(product => product.product.id===action.payload.id)

            if(productToCart){
                const productToUpdate = {amount: (productToCart.amount), product: productToCart.product}

                //allows to remove the existing product in order to push the update one
                state.productsCart = state.productsCart.filter(product => product.product.id!==productToCart.product.id)
                state.productsCart.push(productToUpdate)
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