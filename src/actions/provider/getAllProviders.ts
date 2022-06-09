import { createAsyncThunk } from "@reduxjs/toolkit";
import { providerType } from "../../state/slice/providerSlice";

const getProviderUrl = 'http://localhost:8080/v1/api/all-providers'

export const getAllProviders = createAsyncThunk('getAllProviders',async () => {
    const response = await fetch(getProviderUrl)   
    return (await response.json() as providerType[])
})