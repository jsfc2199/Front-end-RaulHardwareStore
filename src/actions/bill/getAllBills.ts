import { createAsyncThunk } from "@reduxjs/toolkit";
import { billType } from '../../state/slice/billSlice'

const getBillUrl = 'http://localhost:8080/v1/api/all-bills'


export const getAllBills = createAsyncThunk('getAllBills', async () => {
    const response = await fetch(getBillUrl)
    return (await response.json() as billType[])
})