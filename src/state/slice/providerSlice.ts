import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from '../../store'
import { getAllProviders } from '../../actions/provider/getAllProviders'
import { createProvider } from '../../actions/provider/addProvider'


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
        //-----------GET BUILDERS
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
        //-----------POST BUILDERS. Missing this to work in the frontend
        builder.addCase(createProvider.pending, (state, action)=>{
            state.status = posibleStatus.PENDING
        })
        builder.addCase(createProvider.fulfilled, (state, action)=>{
            state.status = posibleStatus.COMPLETED
            state.providers.push(action.payload)
        })
        builder.addCase(createProvider.rejected, (state, action)=>{
            state.status = posibleStatus.FAILED
            state.error = "Something went wrong while fetching"            
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