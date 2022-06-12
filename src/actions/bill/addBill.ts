import { createAsyncThunk } from "@reduxjs/toolkit";
import { billType } from "../../state/slice/billSlice";

const saveBillUrl = 'https://raul-hardware-store-jsfc.herokuapp.com/v1/api/save-bill'

export const addBill = createAsyncThunk('addBill', async (product: billType) => {
    const response = await fetch(saveBillUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(product),
    })
    return (await response.json()) as billType;
})