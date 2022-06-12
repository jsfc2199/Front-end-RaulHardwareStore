import { createAsyncThunk } from "@reduxjs/toolkit";
import { providerType } from "../../state/slice/providerSlice";
import * as moment from 'moment'

const getProviderUrl = 'https://raul-hardware-store-jsfc.herokuapp.com/v1/api/all-providers'

export const getAllProviders = createAsyncThunk('getAllProviders', async () => {
    const response = await fetch(getProviderUrl)
    return (await response.json() as providerType[])
})