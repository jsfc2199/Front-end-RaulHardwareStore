import { createAsyncThunk } from "@reduxjs/toolkit";
import { productType } from "../../state/slice/productSlice";

const saveProductUrl = 'http://localhost:8080/v1/api/save-product'

export const addProduct = createAsyncThunk('createPrpduct', async (product: productType) => {
    const response = await fetch(saveProductUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(product),
    })
    return (await response.json()) as productType;
})