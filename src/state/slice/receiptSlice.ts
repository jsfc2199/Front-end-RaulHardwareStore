import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '../../store'
import {providerType} from '../../state/slice/providerSlice'
import { posibleStatus } from './providerSlice'
import {getAllReceipts} from '../../actions/receipt/getAllReceipts'

type receiptType = {
    id: string,
    description: string,
    units: number,
    productId: string,
    date: string,
    provider: providerType
}

interface initialStateReceiptType {
    receipts: receiptType[]
    status: posibleStatus,
    error: string | null
}

const initialState: initialStateReceiptType = {
    receipts: [],
    status: posibleStatus.IDLE,
    error: null
}


const receiptSlice = createSlice({
    name: 'receipt',
    initialState,
    reducers:{

    },
    extraReducers: (builder)=>{
        //GET BUILDS PRODUCT
        builder.addCase(getAllReceipts.pending, (state, action) => {
            state.status = posibleStatus.PENDING
        })
        builder.addCase(getAllReceipts.fulfilled, (state, action) => {
            state.status = posibleStatus.COMPLETED
            state.receipts = action.payload
        })
        builder.addCase(getAllReceipts.rejected, (state, action) => {
            state.status = posibleStatus.FAILED
            state.error = "Something went wrong while fetching"
            state.receipts = []
        })

    }
})

export type { receiptType }
export type { initialStateReceiptType }
export default receiptSlice.reducer

//builders
export const selectReceiptsState = () => (state: RootState) => state.receipts.receipts
export const selectReceiptsStatus = () => (state: RootState) => state.receipts.status
export const selectReceiptsFetchError = () => (state: RootState) => state.receipts.error