import { createAsyncThunk } from "@reduxjs/toolkit";
import { productType } from '../../state/slice/productSlice'

const getProductUrl = 'https://raul-hardware-store-jsfc.herokuapp.com/v1/api/update-product'

export const updateProduct = createAsyncThunk('updateProduct', async (product: productType) => {
    const response = await fetch(getProductUrl, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(product),
    })
    return (await response.json()) as productType;
})