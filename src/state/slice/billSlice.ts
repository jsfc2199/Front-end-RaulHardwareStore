import { createSlice } from "@reduxjs/toolkit";
import { RootState } from '../../store'
import { posibleStatus } from './providerSlice'

import { getAllBills } from '../../actions/bill/getAllBills'
import { productType } from "./productSlice";
import { addBill } from "../../actions/bill/addBill";


type billType = {
    id: string,
    clientName: string,
    seller: string,
    date: string,
    productsBought: productType[],
    totalPaid: number,
}

interface initialStateBillType {
    bills: billType[]
    status: posibleStatus,
    error: string | null
}

const initialState: initialStateBillType = {
    bills: [],
    status: posibleStatus.IDLE,
    error: null
}

const billSlice = createSlice({
    name: 'bill',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        //GET BUILDS BILLS
        builder.addCase(getAllBills.pending, (state, action) => {
            state.status = posibleStatus.PENDING
        })
        builder.addCase(getAllBills.fulfilled, (state, action) => {
            state.status = posibleStatus.COMPLETED
            state.bills = action.payload
        })
        builder.addCase(getAllBills.rejected, (state, action) => {
            state.status = posibleStatus.FAILED
            state.error = "Something went wrong while fetching"
            state.bills = []
        })
        // POST BUILDS BILLS
        builder.addCase(addBill.pending, (state, action) => {
            state.status = posibleStatus.PENDING
        })
        builder.addCase(addBill.fulfilled, (state, action) => {
            state.status = posibleStatus.COMPLETED
            state.bills.push(action.payload)
        })
        builder.addCase(addBill.rejected, (state, action) => {
            state.status = posibleStatus.FAILED
            state.error = "Something went wrong while fetching"
        })
    }
})

export type { billType }
export type { initialStateBillType }
export default billSlice.reducer

//builders 
export const selectBillsState = () => (state: RootState) => state.bills.bills
export const selectBillsStatus = () => (state: RootState) => state.bills.status
export const selectBillsFetchError = () => (state: RootState) => state.bills.error
