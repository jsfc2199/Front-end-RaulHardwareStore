import { createAsyncThunk } from "@reduxjs/toolkit";
import { receiptType } from "../../state/slice/receiptSlice";


const getReceiptrUrl = 'https://raul-hardware-store-jsfc.herokuapp.com/v1/api/all-receipts'

export const getAllReceipts = createAsyncThunk('getAllReceipts', async () => {
    const response = await fetch(getReceiptrUrl)
    return (await response.json() as receiptType[])
})