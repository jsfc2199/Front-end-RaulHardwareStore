import { createSlice } from "@reduxjs/toolkit";

interface providerType {
    id: string,
    name: string,
    number: string,
    passport: string,
}

enum posibleStatus {
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
    providers: [{
        id: "1",
    name: "juAN",
    number: "1321684",
    passport: "165465",
    }],
    status: posibleStatus.IDLE,
    error: null,
}

const providerSlice = createSlice({
    name: 'provider',
    initialState,
    reducers: {

    }
})

export type {providerType}
export type {initialStateType} 
export default providerSlice.reducer