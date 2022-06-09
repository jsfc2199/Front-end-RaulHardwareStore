import { createSlice } from "@reduxjs/toolkit";
import {providerType} from './providerSlice'
import {posibleStatus} from './providerSlice'

type productType = {
    id: string,
    minUnits: number,
    maxUnits: number,
    productName: string,
    description: string,
    unitsAvailable: number,
    price: number,
    provider:providerType[]
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

    }
})


export type {productType}
export type {initialStateProductType}
export default productSlice.reducer