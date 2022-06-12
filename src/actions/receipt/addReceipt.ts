import { createAsyncThunk } from "@reduxjs/toolkit";
import { receiptType } from '../../state/slice/receiptSlice'

const saveReceiptUrl = 'https://raul-hardware-store-jsfc.herokuapp.com/v1/api/save-receipt'

export const addReceipt = createAsyncThunk('addReceipt', async (receipt: receiptType) => {
    const response = await fetch(saveReceiptUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(receipt),
    })
    return (await response.json()) as receiptType;
})
