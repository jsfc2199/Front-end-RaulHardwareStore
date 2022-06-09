import { createAsyncThunk } from "@reduxjs/toolkit";
import { providerType } from "../../state/slice/providerSlice";
import * as moment from 'moment'

const getProviderUrl = 'http://localhost:8080/v1/api/all-providers'

export const getAllProviders = createAsyncThunk('getAllProviders',async () => {
    const response = await fetch(getProviderUrl)   
    console.log(moment(new Date()).format("DD/MM/YYYY HH:mm:ss"))
    return (await response.json() as providerType[])
})