import { createSlice } from "@reduxjs/toolkit";
import { providerType } from './providerSlice'
import { posibleStatus } from './providerSlice'
import { getAllProducts } from '../../actions/products/getAllProducts'
import { deleteProduct } from '../../actions/products/deleteProduct'
import { addProduct } from '../../actions/products/addProduct'
import { RootState } from '../../store'
import { updateProduct } from '../../actions/products/updateProduct'

type productType = {
    id: string,
    minUnits: number,
    maxUnits: number,
    productName: string,
    description: string,
    unitsAvailable: number,
    price: number,
    provider: providerType
}

type shopCartType = {
    amount: number,
    product: productType
}

interface initialStateProductType {
    products: productType[],
    status: posibleStatus,
    error: string | null
}

const initialState: initialStateProductType = {
    products: [],
    status: posibleStatus.IDLE,
    error: null,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        //GET BUILDS PRODUCT
        builder.addCase(getAllProducts.pending, (state, action) => {
            state.status = posibleStatus.PENDING
        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.status = posibleStatus.COMPLETED
            state.products = action.payload
        })
        builder.addCase(getAllProducts.rejected, (state, action) => {
            state.status = posibleStatus.FAILED
            state.error = "Something went wrong while fetching"
            state.products = []
        })
        //DELETE BUILDS PRODUCT
        builder.addCase(deleteProduct.pending, (state) => {
            state.status = posibleStatus.PENDING
        })
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.status = posibleStatus.COMPLETED
            if (action.payload.deleted) {
                state.products = state.products.filter((product) => product.id !== action.payload.productId)
            }
        })
        builder.addCase(deleteProduct.rejected, (state) => {
            state.status = posibleStatus.FAILED
            state.error = "Something went wrong while deleting the product"
        })
        //POST BUILDS PRODUCT
        builder.addCase(addProduct.pending, (state, action) => {
            state.status = posibleStatus.PENDING
        })
        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.status = posibleStatus.COMPLETED
            state.products.push(action.payload)
        })
        builder.addCase(addProduct.rejected, (state, action) => {
            state.status = posibleStatus.FAILED
            state.error = "Something went wrong while creatin a product"
        })
        //PUT BUILDS PRODUCTS
        builder.addCase(updateProduct.pending, (state, action) => {
            state.status = posibleStatus.PENDING
        })
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            state.status = posibleStatus.COMPLETED
            let productUpdated = state.products.filter(product => product.id === action.payload.id)[0];
            let positionProductUpdated = state.products.indexOf(productUpdated)
            state.products[positionProductUpdated] = action.payload
        })
        builder.addCase(updateProduct.rejected, (state, action) => {
            state.status = posibleStatus.FAILED
            state.error = "Something went wrong while creatin a product"
        })
    }
})


export type { productType }
export type { initialStateProductType }
export type { shopCartType }
export default productSlice.reducer

//extraReducers
export const selectProductsState = () => (state: RootState) => state.products.products
export const selectProductsStatus = () => (state: RootState) => state.products.status
export const selectProductsFetchError = () => (state: RootState) => state.products.error