import { createSlice } from "@reduxjs/toolkit";
import {providerType} from './providerSlice'
import {posibleStatus} from './providerSlice'
import { getAllProducts } from '../../actions/products/getAllProducts'
import {RootState} from '../../store'

type productType = {
    id: string,
    minUnits: number,
    maxUnits: number,
    productName: string,
    description: string,
    unitsAvailable: number,
    price: number,
    provider:providerType
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
    reducers:{

    },
    extraReducers: (builder)=>{
        //GET BUILDS PRODUCT
        builder.addCase(getAllProducts.pending, (state, action)=>{
            state.status = posibleStatus.PENDING
        })
        builder.addCase(getAllProducts.fulfilled, (state, action)=>{
            state.status = posibleStatus.COMPLETED
            state.products = action.payload
        })
        builder.addCase(getAllProducts.rejected, (state, action)=>{
            state.status = posibleStatus.FAILED
            state.error = "Something went wrong while fetching"
            state.products =[]
        })
    }
})


export type {productType}
export type {initialStateProductType}
export default productSlice.reducer

//extraReducers
export const selectProductsState = () => (state: RootState) => state.products.products
export const selectProductsStatus = () => (state: RootState) => state.products.status
export const selectProductsFetchError = () => (state: RootState) => state.products.error