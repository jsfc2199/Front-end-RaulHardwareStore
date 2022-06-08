import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from '../../store'


const mainUrl = 'http://localhost:8080/v1/api/all-providers'

export const getAllProviders = createAsyncThunk('getAllProviders',async () => {
    const response = await fetch(mainUrl)
    console.log(response);    
    return (await response.json() as providerType[])
})

type providerType = {
    id: string,
    name: string,
    number: string,
    passport: string,
}

export enum posibleStatus {
    IDLE = 'idle',
    COMPLETED = 'completed',
    FAILED = 'failed',
    PENDING = 'pending',
}

interface initialStateType {
    providers: providerType[],
    status: posibleStatus,
    error: string | null,
}


const initialState: initialStateType = {
    providers: [],
    status: posibleStatus.IDLE,
    error: null,
}

const providerSlice = createSlice({
    name: 'provider',
    initialState,
    reducers: {

    },
    extraReducers:(builder)=>{
        builder.addCase(getAllProviders.pending, (state, action)=>{
            state.status = posibleStatus.PENDING
        })
        builder.addCase(getAllProviders.fulfilled, (state, action)=>{
            state.status = posibleStatus.COMPLETED
            state.providers = action.payload
        })
        builder.addCase(getAllProviders.rejected, (state, action)=>{
            state.status = posibleStatus.FAILED
            state.error = "Something went wrong while fetching"
            state.providers =[]
        })
    }
})

export type { providerType }
export type { initialStateType }
export default providerSlice.reducer

//extra reducers
export const selectProvidersState = () => (state: RootState) => state.providers.providers
export const selectProvidersStatus = () => (state: RootState) => state.providers.status
export const selectProvidersFetchError = () => (state: RootState) => state.providers.error