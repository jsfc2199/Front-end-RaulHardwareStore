import { createAsyncThunk } from "@reduxjs/toolkit";
import { productType } from '../../state/slice/productSlice'

const deleteProductUrl = 'https://raul-hardware-store-jsfc.herokuapp.com/api/v1/delete-product'

export const deleteProduct = createAsyncThunk('deleteProduct', async (product: productType) => {
    const response = await fetch(`${deleteProductUrl}/${product.id}`, {
        method: 'DELETE'
    })

    return { deleted: response.ok, productId: product.id }
})