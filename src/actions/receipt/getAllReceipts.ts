import { createAsyncThunk } from "@reduxjs/toolkit";
import { receiptType } from "../../state/slice/receiptSlice";
import * as moment from 'moment'

const getReceiptrUrl = 'http://localhost:8080/v1/api/all-receipts'

export const getAllReceipts = createAsyncThunk('getAllReceipts',async () => {
    const response = await fetch(getReceiptrUrl)   
    console.log(moment(new Date()).format("DD/MM/YYYY HH:mm:ss"))
    return (await response.json() as receiptType[])
})