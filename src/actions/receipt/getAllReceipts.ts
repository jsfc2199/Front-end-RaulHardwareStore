import { createAsyncThunk } from "@reduxjs/toolkit";
import { receiptType } from "../../state/slice/receiptSlice";


const getReceiptrUrl = 'http://localhost:8080/v1/api/all-receipts'

export const getAllReceipts = createAsyncThunk('getAllReceipts', async () => {
    const response = await fetch(getReceiptrUrl)
    return (await response.json() as receiptType[])
})