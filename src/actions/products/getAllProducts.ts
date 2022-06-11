import { createAsyncThunk } from "@reduxjs/toolkit";
import { productType } from '../../state/slice/productSlice'

const getProductUrl = 'http://localhost:8080/v1/api/all-products'

export const getAllProducts = createAsyncThunk('getAllProducts', async () => {
    const response = await fetch(getProductUrl)
    return (await response.json() as productType[])
})