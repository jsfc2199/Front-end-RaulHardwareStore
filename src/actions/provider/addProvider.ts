import { createAsyncThunk } from "@reduxjs/toolkit";
import { providerType } from "../../state/slice/providerSlice";

const getProviderUrl = 'https://raul-hardware-store-jsfc.herokuapp.com/v1/api/saveProvider'

export const createProvider = createAsyncThunk('createProvider', async (provider: providerType) => {
    const response = await fetch(getProviderUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(provider),
    })
    return (await response.json()) as providerType;
})